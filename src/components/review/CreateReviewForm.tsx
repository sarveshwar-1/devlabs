"use client"

import { Label } from "@/components/ui/label"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MultiSelect } from "@/components/ui/MultiSelect"
import { RubricTemplateModal } from "@/components/review/RubricTemplateModal"
import { RubricTable } from "@/components/review/RubricTable"
import { Skeleton } from "@/components/ui/skeleton"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, CheckCircle2, AlertTriangle, Sparkles, Plus, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"
import { toast } from "sonner"


interface Subject {
  id: string
  name: string
  departmentId: string
  semester: number
}

interface Rubric {
  criterion: string
  description: string
  maxScore: number
}

interface RubricTemplate {
  id: string
  name: string
  rubrics: Rubric[]
  createdBy: string
}

interface ReviewFormData {
  name: string
  startDate: string
  endDate: string
  batchId: string
  semester: number
  departmentId: string
  classIds: string[]
  subjectIds: string[]
  rubricTemplate: RubricTemplate
}

interface Department {
  id: string
  name: string
  totalSemesters: number
}
interface Batch {
  id: string
  graduationYear: number
}
interface Class {
  id: string
  section: string
}

interface CreateReviewFormProps {
  isOpen: boolean
  onClose: () => void
}

export default function CreateReviewForm({ isOpen, onClose }: CreateReviewFormProps) {
  const [currentTab, setCurrentTab] = useState<string>("details")
  const [departments, setDepartments] = useState<Department[]>([])
  const [batches, setBatches] = useState<Batch[]>([])
  const [classes, setClasses] = useState<Class[]>([])
  const [subjects, setSubjects] = useState<Subject[]>([])
  const [rubricTemplates, setRubricTemplates] = useState<RubricTemplate[]>([])

  const [selectedDepartment, setSelectedDepartment] = useState("")
  const [selectedBatch, setSelectedBatch] = useState("")
  const [selectedClasses, setSelectedClasses] = useState<string[]>([])
  const [selectedSemester, setSelectedSemester] = useState("")
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([])
  const [selectedRubricTemplate, setSelectedRubricTemplate] = useState<RubricTemplate | null>(null)
  const [customRubrics, setCustomRubrics] = useState<Rubric[]>([])
  const [reviewName, setReviewName] = useState("")
  const [startDate, setStartDate] = useState<Date | undefined>(undefined)
  const [endDate, setEndDate] = useState<Date | undefined>(undefined)
  const [isRubricTemplateModalOpen, setIsRubricTemplateModalOpen] = useState(false)

  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStep, setFormStep] = useState(0)

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true)
      Promise.all([
        fetch("/api/departments").then((res) => res.json()),
        fetch("/api/rubric-templates").then((res) => res.json()),
      ])
        .then(([deptData, templateData]) => {
          setDepartments(deptData)
          setRubricTemplates(templateData)
          setIsLoading(false)
        })
        .catch((error) => {
          console.error("Error loading data:", error)
          setIsLoading(false)
        })
    }
  }, [isOpen])

  useEffect(() => {
    if (selectedDepartment) {
      setIsLoading(true)
      const departmentName = departments.find((d) => d.id === selectedDepartment)?.name
      if (departmentName) {
        fetch(`/api/departments/batches?departmentName=${encodeURIComponent(departmentName)}`)
          .then((res) => res.json())
          .then((data) => {
            setBatches(data)
            setIsLoading(false)
          })
          .catch(() => setIsLoading(false))
      }
    }
  }, [selectedDepartment, departments])

  useEffect(() => {
    if (selectedBatch && selectedDepartment) {
      setIsLoading(true)
      const batch = batches.find((b) => b.id === selectedBatch)
      if (batch) {
        const departmentName = departments.find((d) => d.id === selectedDepartment)?.name
        if (departmentName) {
          fetch(
            `/api/classes?departmentName=${encodeURIComponent(departmentName)}&graduationYear=${batch.graduationYear}`,
          )
            .then((res) => res.json())
            .then((data) => {
              setClasses(data)
              setIsLoading(false)
            })
            .catch(() => setIsLoading(false))
        }
      }
    }
  }, [selectedBatch, selectedDepartment, batches, departments])

  useEffect(() => {
    if (selectedDepartment && selectedSemester) {
      setIsLoading(true)
      fetch(`/api/subjects?departmentId=${selectedDepartment}&semester=${selectedSemester}`)
        .then((res) => res.json())
        .then((data) => {
          setSubjects(data)
          setIsLoading(false)
        })
        .catch(() => setIsLoading(false))
    }
  }, [selectedDepartment, selectedSemester])

  useEffect(() => {
    if (selectedDepartment) {
      setSelectedBatch("")
      setSelectedClasses([])
      setSelectedSemester("")
      setSelectedSubjects([])
      setFormStep(1)
    } else {
      setFormStep(0)
    }
  }, [selectedDepartment])

  useEffect(() => {
    if (selectedBatch) {
      setSelectedClasses([])
      setFormStep(2)
    }
  }, [selectedBatch])

  useEffect(() => {
    if (selectedClasses.length > 0) {
      setFormStep(3)
    }
  }, [selectedClasses])

  useEffect(() => {
    if (selectedSemester) {
      setFormStep(4)
    }
  }, [selectedSemester])

  const selectedDept = departments.find((dept) => dept.id === selectedDepartment)
  const semesterOptions = selectedDept ? Array.from({ length: selectedDept.totalSemesters }, (_, i) => i + 1) : []

  const handleSelectTemplate = (templateId: string) => {
    const template = rubricTemplates.find((t) => t.id === templateId)
    if (template) {
      setSelectedRubricTemplate(template)
      setCustomRubrics([...template.rubrics])
    }
  }

  const handleEditRubrics = (updatedRubrics: Rubric[]) => {
    setCustomRubrics(updatedRubrics)
  }

  const handleCreateNewTemplate = () => {
    setSelectedRubricTemplate(null)
    setCustomRubrics([])
    setIsRubricTemplateModalOpen(true)
  }

  const handleEditExistingTemplate = () => {
    if (selectedRubricTemplate) {
      setIsRubricTemplateModalOpen(true)
    }
  }

  const handleSaveTemplate = async (template: { name: string; rubrics: Rubric[] }) => {
    try {
      const method = selectedRubricTemplate ? "PUT" : "POST"
      const url = selectedRubricTemplate
        ? `/api/rubric-templates/${selectedRubricTemplate.id}`
        : "/api/rubric-templates"
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(template),
      })

      if (response.ok) {
        const updatedTemplate = await response.json()
        setRubricTemplates(
          selectedRubricTemplate
            ? rubricTemplates.map((t) => (t.id === updatedTemplate.id ? updatedTemplate : t))
            : [...rubricTemplates, updatedTemplate],
        )
        setSelectedRubricTemplate(updatedTemplate)
        setCustomRubrics(updatedTemplate.rubrics)
        setIsRubricTemplateModalOpen(false)
      } else {
        toast("Failed to save template")
      }
    } catch (error) {
      toast("An error occured while saving the template", {
        description: error instanceof Error ? error.message : "An unknown error occurred",
      })
    }
  }

  const handleSubmit = async () => {
    if (!customRubrics.length) {
      toast("Please select or create a rubric template")

      return
    }

    if (!startDate || !endDate) {
      toast("Please select start and end dates")
      return
    }

    try {
      setIsSubmitting(true)

      const newTemplateResponse = await fetch("/api/rubric-templates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: `${reviewName} - Custom Template`, rubrics: customRubrics }),
      })

    
      if (!newTemplateResponse.ok) {
        toast("Failed to create custom rubric template")
        setIsLoading(false)
        return
      }

      const newTemplate = await newTemplateResponse.json()

      const reviewData: ReviewFormData = {
        name: reviewName,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        batchId: selectedBatch,
        semester: Number.parseInt(selectedSemester),
        departmentId: selectedDepartment,
        classIds: selectedClasses,
        subjectIds: selectedSubjects,
        rubricTemplate: newTemplate,
      }

      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...reviewData, rubricTemplateId: newTemplate.id }),
      })

      if (response.ok) {
        toast("Review created successfully")
        resetForm()
        onClose()
      } else {
        toast("Failed to create review")
      }
    } catch (error) {
      toast("An error occurred while creating the review", {
        description: error instanceof Error ? error.message : "An unknown error occurred",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setSelectedDepartment("")
    setSelectedBatch("")
    setSelectedClasses([])
    setSelectedSemester("")
    setSelectedSubjects([])
    setSelectedRubricTemplate(null)
    setCustomRubrics([])
    setReviewName("")
    setStartDate(undefined)
    setEndDate(undefined)
    setFormStep(0)
    setCurrentTab("details")
  }

  const handleDialogClose = () => {
    resetForm()
    onClose()
  }

  const isFormValid =
    customRubrics.length > 0 &&
    reviewName &&
    startDate &&
    endDate &&
    selectedDepartment &&
    selectedBatch &&
    selectedClasses.length > 0 &&
    selectedSemester &&
    selectedSubjects.length > 0

  return (
    <Dialog open={isOpen} onOpenChange={handleDialogClose}>
      <DialogContent className="sm:max-w-[900px] max-h-[100vh] p-0 gap-0 overflow-hidden">
        <DialogHeader className="px-6 py-4 border-b sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold">Create Review</DialogTitle>
            <Button variant="ghost" size="icon" onClick={handleDialogClose} className="h-8 w-8 rounded-full">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
          <div className="px-6 py-1">
            <TabsList className="grid w-full grid-cols-2 mb-1 ">
              <TabsTrigger value="details">Review Details</TabsTrigger>
              <TabsTrigger value="rubrics">Marking Scheme</TabsTrigger>
            </TabsList>
          </div>
          <ScrollArea className="max-h-[60vh]">
            <div className="px-6 pb-4">
              <TabsContent value="details" className="space-y-0 mt-0">
                <Card className="mb-4">
                  <CardHeader>
                    <CardTitle className="text-lg">Review Information</CardTitle>
                    <CardDescription>Fill in the details for your review in the sequence shown</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 mb-5">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        {formStep > 0 ? (
                          <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white">
                            <CheckCircle2 className="h-3.5 w-3.5 mr-1" />
                            Step 1
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="bg-background">
                            Step 1
                          </Badge>
                        )}
                        {isLoading && formStep === 0 ? (
                          <Skeleton className="h-10 w-full" />
                        ) : (
                          <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select Department" />
                            </SelectTrigger>
                            <SelectContent>
                              {departments.map((dept) => (
                                <SelectItem key={dept.id} value={dept.id} className="hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                                  {dept.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      </div>

                      {formStep >= 1 && (
                        <div className="flex items-center gap-2">
                          {formStep > 1 ? (
                            <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white">
                              <CheckCircle2 className="h-3.5 w-3.5 mr-1" />
                              Step 2
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="bg-background">
                            Step 2
                          </Badge>
                        )}
                        {isLoading && formStep === 1 ? (
                          <Skeleton className="h-10 w-full" />
                        ) : (
                          <Select value={selectedBatch} onValueChange={setSelectedBatch}>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select Batch" />
                            </SelectTrigger>
                            <SelectContent>
                              {batches.map((batch) => (
                                <SelectItem key={batch.id} value={batch.id} className="hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                                  {batch.graduationYear}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      </div>
                    )}

                    {formStep >= 2 && (
                      <div className="flex items-center gap-2 ">
                        {formStep > 2 ? (
                          <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white">
                            <CheckCircle2 className="h-3.5 w-3.5 mr-1" />
                            Step 3
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="bg-background">
                            Step 3
                          </Badge>
                        )}
                        {isLoading && formStep === 2 ? (
                          <Skeleton className="h-10 w-full" />
                        ) : (
                          <MultiSelect
                            options={classes.map((cls) => ({ value: cls.id, label: cls.section }))}
                            selected={selectedClasses}
                            onChange={setSelectedClasses}
                            placeholder="Select Classes"
                          />
                        )}
                      </div>
                    )}

                    {formStep >= 3 && (
                      <div className="flex items-center gap-2">
                        {formStep > 3 ? (
                          <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white">
                            <CheckCircle2 className="h-3.5 w-3.5 mr-1" />
                            Step 4
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="bg-background">
                            Step 4
                          </Badge>
                        )}
                        {isLoading && formStep === 3 ? (
                          <Skeleton className="h-10 w-full" />
                        ) : (
                          <Select value={selectedSemester} onValueChange={setSelectedSemester}>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Select Semester" />
                            </SelectTrigger>
                            <SelectContent>
                              {semesterOptions.map((sem) => (
                                <SelectItem key={sem} value={sem.toString()} className="hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                                  {sem}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      </div>
                    )}

                    {formStep >= 4 && (
                      <>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="bg-background">
                            Step 5
                          </Badge>
                          {isLoading && formStep === 4 ? (
                            <Skeleton className="h-10 w-full" />
                          ) : (
                            <MultiSelect
                              options={subjects.map((sub) => ({ value: sub.id, label: sub.name }))}
                              selected={selectedSubjects}
                              onChange={setSelectedSubjects}
                              placeholder="Select Subjects"
                            />
                          )}
                        </div>

                        <Separator className="my-4" />

                        <div className="space-y-2">
                          <Label className="text-base font-medium">Review Name</Label>
                          <Input
                            className="w-full"
                            placeholder="Enter a descriptive name for this review"
                            value={reviewName}
                            onChange={(e) => setReviewName(e.target.value)}
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label className="text-base font-medium">Start Date</Label>
                            <Popover modal={true}>
                              <PopoverTrigger asChild>
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "w-full justify-start text-left font-normal",
                                    !startDate && "text-muted-foreground",
                                  )}
                                >
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {startDate ? format(startDate, "PPP") : "Select date"}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0">
                                <Calendar
                                  mode="single"
                                  selected={startDate}
                                  onSelect={setStartDate}
                                  className="p-3 pointer-events-auto"
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                          </div>

                          <div className="space-y-2">
                            <Label className="text-base font-medium">End Date</Label>
                            <Popover modal={true}>
                              <PopoverTrigger asChild>
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "w-full justify-start text-left font-normal",
                                    !endDate && "text-muted-foreground",
                                  )}
                                >
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {endDate ? format(endDate, "PPP") : "Select date"}
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0">
                                <Calendar
                                  mode="single"
                                  selected={endDate}
                                  onSelect={setEndDate}
                                  initialFocus
                                  disabled={(date) => !startDate || date < startDate}
                                />
                              </PopoverContent>
                            </Popover>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="rubrics" className="space-y-6 mt-0">
              {isLoading ? (
                <div className="space-y-4">
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-40 w-full" />
                </div>
              ) : (
                <>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Marking Scheme Template</CardTitle>
                      <CardDescription>Select an existing template or create a new one</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Select value={selectedRubricTemplate?.id || ""} onValueChange={handleSelectTemplate} >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Schema Template" />
                        </SelectTrigger>
                        <SelectContent>
                          {rubricTemplates.map((template) => (
                            <SelectItem key={template.id} value={template.id} className="hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer">
                              {template.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <div className="flex flex-wrap gap-2">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                onClick={handleCreateNewTemplate}
                                className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white"
                              >
                                <Plus className="h-4 w-4 mr-2" />
                                Create New Template
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Create a new marking scheme template</p>
                            </TooltipContent>
                          </Tooltip>
                          </TooltipProvider>

                          {selectedRubricTemplate && (
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button onClick={handleEditExistingTemplate} variant="outline">
                                    <Sparkles className="h-4 w-4 mr-2" />
                                    Edit Selected Template
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Modify the currently selected template</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          )}
                        </div>
                      </CardContent>
                    </Card>

                    {customRubrics.length > 0 ? (
                      <Card key={selectedRubricTemplate?.id ?? "none"}>
                        <CardHeader>
                          <CardTitle className="text-lg">Marking Scheme for this Review</CardTitle>
                          <CardDescription>These criteria will be used to evaluate student performance</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="border rounded-lg overflow-hidden">
                            <RubricTable rubrics={customRubrics} onEdit={handleEditRubrics} />
                          </div>
                        </CardContent>
                      </Card>
                    ) : (
                      <Card>
                        <CardContent className="p-8">
                          <div className="flex flex-col items-center justify-center text-center">
                            <AlertTriangle className="h-12 w-12 text-muted-foreground mb-4" />
                            <h3 className="text-lg font-medium mb-2">No Marking Scheme Selected</h3>
                            <p className="text-muted-foreground mb-4">
                              Please select an existing template or create a new one to continue
                            </p>
                            <Button
                              onClick={handleCreateNewTemplate}
                              className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white"
                            >
                              <Plus className="h-4 w-4 mr-2" />
                              Create New Template
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </>
                )}
              </TabsContent>
            </div>
          </ScrollArea>
        </Tabs>

        <RubricTemplateModal
          isOpen={isRubricTemplateModalOpen}
          onClose={() => setIsRubricTemplateModalOpen(false)}
          onSave={handleSaveTemplate}
          initialData={selectedRubricTemplate || undefined}
        />

        <DialogFooter className="px-6 py-4 border-t">
          <Button variant="outline" onClick={handleDialogClose}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!isFormValid || isLoading}
            className={`text-white transition-colors ${
              isFormValid
                ? "bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700"
                : "bg-gray-400 text-white cursor-not-allowed dark:bg-muted dark:text-muted-foreground"
            }`}
          >
            {isSubmitting ? "Creating Review..." : "Create Review"}
          </Button>
        </DialogFooter>

      </DialogContent>
    </Dialog>
  )
}
