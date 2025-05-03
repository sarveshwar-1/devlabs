"use client"

import { useState, useEffect, useCallback } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"
import type { Staff } from "@/types"
import { Search, X, UserPlus, Loader2, BookOpen, Users } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface AssignStaffModalProps {
  isOpen: boolean
  onClose: () => void
  classId: string
}

interface Subject {
  id: string
  name: string
}

interface TeachingAssignmentData {
  staffId: string
  subjectId: string
  classId: string
}

export function AssignStaffModal({ isOpen, onClose, classId }: AssignStaffModalProps) {
  const [departmentId, setDepartmentId] = useState<string | null>(null)
  const [totalSemesters, setTotalSemesters] = useState<number>(0)
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null)
  const [subjects, setSubjects] = useState<Subject[]>([])
  const [loadingSubjects, setLoadingSubjects] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<Staff[]>([])
  const [assignedStaff, setAssignedStaff] = useState<{ [subjectId: string]: Staff[] }>({})
  const [selectedStaff, setSelectedStaff] = useState<{ [subjectId: string]: Staff[] }>({})
  const [loadingAssignments, setLoadingAssignments] = useState<{ [subjectId: string]: boolean }>({})
  const [loadingSearch, setLoadingSearch] = useState(false)
  const [loadingDepartment, setLoadingDepartment] = useState(true)
  const [loadingSave, setLoadingSave] = useState<{ [subjectId: string]: boolean }>({})
  const [activeSubject, setActiveSubject] = useState<string | null>(null)

  const fetchDepartmentInfo = useCallback(async () => {
    setLoadingDepartment(true)
    try {
      const response = await fetch(`/api/admin/classes/${classId}/department`)
      if (!response.ok) throw new Error("Failed to fetch department info")
      const data = await response.json()
      setDepartmentId(data.departmentId)
      setTotalSemesters(data.totalSemesters)
    } catch (error) {
      console.error(error)
      toast("Failed to fetch department information", {
        description: error instanceof Error ? error.message : "An unknown error occurred",
      })
    } finally {
      setLoadingDepartment(false)
    }
  }, [classId])

  const fetchAssignedStaff = useCallback(
    async (subjectId: string) => {
      setLoadingAssignments((prev) => ({ ...prev, [subjectId]: true }))
      try {
        const response = await fetch(`/api/admin/teaching-assignments?classId=${classId}&subjectId=${subjectId}`)
        if (!response.ok) throw new Error("Failed to fetch assignments")
        const data = await response.json()
        setAssignedStaff((prev) => ({
          ...prev,
          [subjectId]: data.map((a: { staffId: string; staffName: string }) => ({
            id: a.staffId,
            name: a.staffName,
          })),
        }))
      } catch (error) {
        console.error(error)
        toast("Failed to fetch assigned staff", {
          description: error instanceof Error ? error.message : "An unknown error occurred",
        })
      } finally {
        setLoadingAssignments((prev) => ({ ...prev, [subjectId]: false }))
      }
    },
    [classId],
  )

  const fetchSubjects = useCallback(async () => {
    if (!selectedSemester || !departmentId) return

    setLoadingSubjects(true)
    try {
      const response = await fetch(`/api/admin/subjects?departmentId=${departmentId}&semester=${selectedSemester}`)
      if (!response.ok) throw new Error("Failed to fetch subjects")
      const data = await response.json()
      setSubjects(data)
      data.forEach((subject: Subject) => {
        fetchAssignedStaff(subject.id)
      })
    } catch (error) {
      console.error(error)
      toast("Failed to fetch subjects", {
        description: error instanceof Error ? error.message : "An unknown error occurred",
      })
    } finally {
      setLoadingSubjects(false)
    }
  }, [selectedSemester, departmentId, fetchAssignedStaff])

  useEffect(() => {
    if (isOpen) {
      fetchDepartmentInfo()
    }
  }, [isOpen, fetchDepartmentInfo])

  useEffect(() => {
    if (selectedSemester && departmentId) {
      fetchSubjects()
    }
  }, [selectedSemester, departmentId, fetchSubjects])

  const handleSearch = useCallback(
    async (subjectId: string) => {
      if (!searchQuery.trim()) {
        setSearchResults([])
        return
      }

      setLoadingSearch(true)
      try {
        const response = await fetch(`/api/admin/staff/search?query=${encodeURIComponent(searchQuery)}`)
        if (!response.ok) throw new Error("Failed to search staff")
        const data = await response.json()
        const assignedIds = assignedStaff[subjectId]?.map((s) => s.id) || []
        const selectedIds = selectedStaff[subjectId]?.map((s) => s.id) || []
        const filtered = data.filter(
          (staff: Staff) => !assignedIds.includes(staff.id) && !selectedIds.includes(staff.id),
        )
        setSearchResults(filtered)
      } catch (error) {
        console.error(error)
        toast("Failed to search staff", {
          description: error instanceof Error ? error.message : "An unknown error occurred",
        })
      } finally {
        setLoadingSearch(false)
      }
    },
    [searchQuery, assignedStaff, selectedStaff],
  )

  const handleSelectStaff = useCallback((subjectId: string, staff: Staff) => {
    setSelectedStaff((prev) => ({
      ...prev,
      [subjectId]: [...(prev[subjectId] || []), staff],
    }))
    setSearchQuery("")
    setSearchResults([])
  }, [])

  const handleRemoveSelectedStaff = useCallback((subjectId: string, staffId: string) => {
    setSelectedStaff((prev) => ({
      ...prev,
      [subjectId]: prev[subjectId].filter((s) => s.id !== staffId),
    }))
  }, [])

  const handleRemoveAssignedStaff = useCallback(
    async (subjectId: string, staffId: string) => {
      try {
        const response = await fetch(`/api/admin/teaching-assignments?classId=${classId}&subjectId=${subjectId}`)
        if (!response.ok) throw new Error("Failed to fetch teaching assignments")

        const assignments = await response.json()
        const assignment = assignments.find((a: { staffId: string }) => a.staffId === staffId) as
          | { id: string }
          | undefined

        if (!assignment) return

        const deleteResponse = await fetch(`/api/admin/teaching-assignments/${assignment.id}`, {
          method: "DELETE",
        })

        if (!deleteResponse.ok) throw new Error("Failed to remove assignment")

        setAssignedStaff((prev) => ({
          ...prev,
          [subjectId]: prev[subjectId].filter((s) => s.id !== staffId),
        }))

        toast("Staff removed successfully", {
          description: `Removed staff from subject`,
        })
      } catch (error) {
        console.error(error)
        toast("Failed to remove staff", {
          description: error instanceof Error ? error.message : "An unknown error occurred",
        })
      }
    },
    [classId],
  )

  const handleSaveAssignments = useCallback(
    async (subjectId: string) => {
      const staffToAssign = selectedStaff[subjectId] || []
      if (staffToAssign.length === 0) return

      setLoadingSave((prev) => ({ ...prev, [subjectId]: true }))
      try {
        for (const staff of staffToAssign) {
          const response = await fetch("/api/admin/teaching-assignments", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ staffId: staff.id, subjectId, classId } as TeachingAssignmentData),
          })
          if (!response.ok) throw new Error(`Failed to assign ${staff.name}`)
        }

        setAssignedStaff((prev) => ({
          ...prev,
          [subjectId]: [...(prev[subjectId] || []), ...staffToAssign],
        }))
        setSelectedStaff((prev) => ({
          ...prev,
          [subjectId]: [],
        }))

        toast("Staff assigned successfully", {
          description: `Assigned ${staffToAssign.length} staff to subject`,
        })
      } catch (error) {
        console.error(error)
        toast("Failed to assign staff", {
          description: error instanceof Error ? error.message : "An unknown error occurred",
        })
      } finally {
        setLoadingSave((prev) => ({ ...prev, [subjectId]: false }))
      }
    },
    [selectedStaff, classId],
  )

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-xl">Assign Staff to Class</DialogTitle>
          <DialogDescription>Select a semester and assign staff to subjects</DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-hidden flex flex-col">
          {loadingDepartment ? (
            <div className="space-y-4 p-4">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-32 w-full" />
            </div>
          ) : (
            <>
              <div className="mb-6">
                {totalSemesters > 0 ? (
                  <Select onValueChange={(value) => setSelectedSemester(Number(value))}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Semester" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: totalSemesters }, (_, i) => i + 1).map((sem) => (
                        <SelectItem key={sem} value={String(sem)}>
                          Semester {sem}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ) : (
                  <div className="bg-muted/50 rounded-md p-4 text-center">
                    <p className="text-muted-foreground">No semesters found for this department</p>
                  </div>
                )}
              </div>

              {selectedSemester && (
                <ScrollArea className="flex-1">
                  <div className="pr-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">Subjects in Semester {selectedSemester}</h3>
                      <Badge variant="outline" className="ml-2">
                        {subjects.length} subjects
                      </Badge>
                    </div>

                    {loadingSubjects ? (
                      <div className="space-y-4">
                        {[...Array(3)].map((_, i) => (
                          <Card key={i}>
                            <CardHeader className="pb-2">
                              <Skeleton className="h-5 w-3/4" />
                            </CardHeader>
                            <CardContent>
                              <Skeleton className="h-20 w-full" />
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    ) : subjects.length === 0 ? (
                      <div className="bg-muted/50 rounded-md p-8 text-center">
                        <BookOpen className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                        <p className="text-muted-foreground">No subjects found for this semester</p>
                      </div>
                    ) : (
                      <Accordion
                        type="single"
                        collapsible
                        value={activeSubject || undefined}
                        onValueChange={(value) => setActiveSubject(value)}
                      >
                        {subjects.map((subject) => (
                          <AccordionItem key={subject.id} value={subject.id} className="border rounded-md mb-4">
                            <AccordionTrigger className="px-4 py-3 hover:bg-muted/50 rounded-t-md">
                              <div className="flex items-center justify-between w-full">
                                <div className="flex items-center">
                                  <BookOpen className="h-4 w-4 mr-2 text-primary" />
                                  <span>{subject.name}</span>
                                </div>
                                <Badge variant="outline" className="ml-2">
                                  {(assignedStaff[subject.id]?.length || 0) + (selectedStaff[subject.id]?.length || 0)}{" "}
                                  staff
                                </Badge>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-4 pb-4 pt-2">
                              <Tabs defaultValue="assigned">
                                <TabsList className="mb-4">
                                  <TabsTrigger value="assigned">
                                    Assigned Staff{" "}
                                    <Badge variant="secondary" className="ml-2">
                                      {assignedStaff[subject.id]?.length || 0}
                                    </Badge>
                                  </TabsTrigger>
                                  <TabsTrigger value="add">
                                    Add Staff{" "}
                                    <Badge variant="secondary" className="ml-2">
                                      {selectedStaff[subject.id]?.length || 0}
                                    </Badge>
                                  </TabsTrigger>
                                </TabsList>

                                <TabsContent value="assigned">
                                  {loadingAssignments[subject.id] ? (
                                    <div className="space-y-2">
                                      <Skeleton className="h-8 w-full" />
                                      <Skeleton className="h-8 w-full" />
                                    </div>
                                  ) : assignedStaff[subject.id]?.length ? (
                                    <div className="space-y-2">
                                      {assignedStaff[subject.id].map((staff) => (
                                        <div
                                          key={staff.id}
                                          className="flex items-center justify-between bg-muted/50 p-2 rounded-md"
                                        >
                                          <div className="flex items-center">
                                            <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                                            <span>{staff.name}</span>
                                          </div>
                                          <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => handleRemoveAssignedStaff(subject.id, staff.id)}
                                            className="h-8 w-8 p-0 text-destructive hover:text-destructive hover:bg-destructive/10"
                                          >
                                            <X className="h-4 w-4" />
                                            <span className="sr-only">Remove</span>
                                          </Button>
                                        </div>
                                      ))}
                                    </div>
                                  ) : (
                                    <div className="bg-muted/50 rounded-md p-4 text-center">
                                      <p className="text-muted-foreground">No staff assigned to this subject</p>
                                    </div>
                                  )}
                                </TabsContent>

                                <TabsContent value="add">
                                  <div className="space-y-4">
                                    {selectedStaff[subject.id]?.length > 0 && (
                                      <div className="mb-4">
                                        <h5 className="text-sm font-medium mb-2">Selected Staff:</h5>
                                        <div className="flex flex-wrap gap-2">
                                          {selectedStaff[subject.id].map((staff) => (
                                            <Badge key={staff.id} variant="secondary" className="pl-2">
                                              {staff.name}
                                              <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => handleRemoveSelectedStaff(subject.id, staff.id)}
                                                className="h-5 w-5 p-0 ml-1 text-muted-foreground hover:text-destructive"
                                              >
                                                <X className="h-3 w-3" />
                                                <span className="sr-only">Remove</span>
                                              </Button>
                                            </Badge>
                                          ))}
                                        </div>
                                      </div>
                                    )}

                                    <div className="flex items-center gap-2">
                                      <div className="relative flex-1">
                                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                        <Input
                                          placeholder="Search staff by name"
                                          value={searchQuery}
                                          onChange={(e) => setSearchQuery(e.target.value)}
                                          onKeyDown={(e) => e.key === "Enter" && handleSearch(subject.id)}
                                          className="pl-8"
                                        />
                                      </div>
                                      <Button
                                        onClick={() => handleSearch(subject.id)}
                                        disabled={loadingSearch || !searchQuery.trim()}
                                      >
                                        {loadingSearch ? <Loader2 className="h-4 w-4 animate-spin" /> : "Search"}
                                      </Button>
                                    </div>

                                    {searchResults.length > 0 && (
                                      <Card>
                                        <CardHeader className="py-2">
                                          <CardTitle className="text-sm">Search Results</CardTitle>
                                        </CardHeader>
                                        <CardContent className="p-0">
                                          <ScrollArea className="h-40">
                                            {searchResults.map((staff) => (
                                              <div
                                                key={staff.id}
                                                className="p-2 hover:bg-muted cursor-pointer flex items-center justify-between"
                                                onClick={() => handleSelectStaff(subject.id, staff)}
                                              >
                                                <span>{staff.name}</span>
                                                <UserPlus className="h-4 w-4 text-muted-foreground" />
                                              </div>
                                            ))}
                                          </ScrollArea>
                                        </CardContent>
                                      </Card>
                                    )}

                                    <div className="flex justify-end">
                                      <Button
                                        onClick={() => handleSaveAssignments(subject.id)}
                                        disabled={!selectedStaff[subject.id]?.length || loadingSave[subject.id]}
                                      >
                                        {loadingSave[subject.id] ? (
                                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                        ) : (
                                          <UserPlus className="h-4 w-4 mr-2" />
                                        )}
                                        Assign Staff
                                      </Button>
                                    </div>
                                  </div>
                                </TabsContent>
                              </Tabs>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    )}
                  </div>
                </ScrollArea>
              )}
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
