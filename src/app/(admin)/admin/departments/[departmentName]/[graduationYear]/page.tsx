"use client"

import { useState, useEffect, useCallback } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ClassList } from "@/components/classes/ClassList"
import { ClassCreateModal } from "@/components/classes/ClassCreateModal"
import { ClassEditModal } from "@/components/classes/ClassEditModal"
import { AssignStaffModal } from "@/components/classes/AssignStaffModal"
import { toast } from "sonner"
import type { ClassWithStudents } from "@/types"
import { Skeleton } from "@/components/ui/skeleton"
import { PlusCircle } from "lucide-react"

export default function BatchClassesPage() {
  const params = useParams()
  const departmentName = decodeURIComponent(params.departmentName as string)
  const graduationYear = params.graduationYear as string
  const [classes, setClasses] = useState<ClassWithStudents[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isAssignStaffModalOpen, setIsAssignStaffModalOpen] = useState(false)
  const [selectedClass, setSelectedClass] = useState<ClassWithStudents | undefined>(undefined)
  const [selectedClassIdForAssign, setSelectedClassIdForAssign] = useState<string | null>(null)

  const fetchClasses = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await fetch(
        `/api/classes?departmentName=${encodeURIComponent(departmentName)}&graduationYear=${graduationYear}`,
      )
      if (!response.ok) {
        throw new Error("Failed to fetch classes")
      }
      const data = await response.json()
      setClasses(data)
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred"
      toast("Failed to fetch classes", {
        description: errorMessage,
      })
    } finally {
      setIsLoading(false)
    }
  }, [departmentName, graduationYear])

  useEffect(() => {
    fetchClasses()
  }, [fetchClasses])

  const handleEdit = (classItem: ClassWithStudents) => {
    setSelectedClass(classItem)
    setIsEditModalOpen(true)
  }

  const handleDelete = async (classId: string) => {
    try {
      const response = await fetch(`/api/admin/classes/${classId}`, {
        method: "DELETE",
      })
      if (!response.ok) {
        throw new Error("Failed to delete class")
      }
      setClasses(classes.filter((c) => c.id !== classId))
      toast("Class deleted successfully", {
        description: `Class ID: ${classId}`,
        action: {
          label: "Undo",
          onClick: () => console.log("Undo delete class"), // Implement undo if needed
        },
      })
    } catch (err: unknown) {
      console.error(err)
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred"
      toast("Error deleting class", {
        description: errorMessage,
      })
    }
  }

  const handleAssignStaff = (classItem: ClassWithStudents) => {
    setSelectedClassIdForAssign(classItem.id)
    setIsAssignStaffModalOpen(true)
  }

  return (
    <div className="container mx-auto py-6 px-4 md:px-6 lg:py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          {isLoading ? (
            <>
              <Skeleton className="h-8 w-64 mb-2" />
              <Skeleton className="h-4 w-48" />
            </>
          ) : (
            <>
              <h1 className="text-2xl font-bold tracking-tight">
                Classes for Batch {graduationYear} in {departmentName}
              </h1>
              <p className="text-muted-foreground mt-1">Manage classes and assign staff members</p>
            </>
          )}
        </div>
        <Button onClick={() => setIsCreateModalOpen(true)} className="shrink-0" disabled={isLoading}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Classes
        </Button>
      </div>

      <div className="bg-card rounded-lg border shadow-sm p-1">
        <ClassList
          classes={classes}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onAssignStaff={handleAssignStaff}
          isLoading={isLoading}
        />
      </div>

      <ClassCreateModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSave={fetchClasses}
        departmentName={departmentName}
        graduationYear={graduationYear}
      />

      {selectedClass && (
        <ClassEditModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onSave={fetchClasses}
          classItem={selectedClass}
        />
      )}

      {selectedClassIdForAssign && (
        <AssignStaffModal
          isOpen={isAssignStaffModalOpen}
          onClose={() => setIsAssignStaffModalOpen(false)}
          classId={selectedClassIdForAssign}
        />
      )}
    </div>
  )
}
