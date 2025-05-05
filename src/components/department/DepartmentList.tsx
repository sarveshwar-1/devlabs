"use client"
import { useState, useEffect } from "react"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card"
import { Pencil, Trash2, Building } from "lucide-react"
import Link from "next/link"
import type { Department } from "@/types"
import { DeleteConfirmationModal } from "@/components/DeleteConfirmationModal"
import { SkeletonCardGrid } from "@/components/ui/skeleton-card-grid"

interface DepartmentListProps {
  onEdit: (department: Department) => void
}

export function DepartmentList({ onEdit }: DepartmentListProps) {
  const [departments, setDepartments] = useState<Department[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [departmentToDelete, setDepartmentToDelete] = useState<Department | null>(null)

  const fetchDepartments = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/admin/departments")
      if (!response.ok) throw new Error("Failed to fetch departments")
      const data = await response.json()
      setDepartments(data)
    } catch (err) {
      console.error(err)
      setError("Error fetching departments")
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeleteClick = (department: Department, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDepartmentToDelete(department)
    setDeleteModalOpen(true)
  }

  const handleConfirmDelete = async () => {
    if (!departmentToDelete) return

    try {
      const response = await fetch(`/api/admin/departments/${departmentToDelete.id}`, { method: "DELETE" })
      if (!response.ok) throw new Error("Failed to delete department")
      fetchDepartments() // Refresh the list
      setDeleteModalOpen(false)
      setDepartmentToDelete(null)
    } catch (err) {
      console.error(err)
      setError("Error deleting department")
    }
  }

  useEffect(() => {
    fetchDepartments()
  }, [])

  if (isLoading) {
    return <SkeletonCardGrid cards={6} />
  }

  if (error) {
    return (
      <div className="rounded-md border p-8 text-center">
        <p className="text-destructive">{error}</p>
        <Button variant="outline" className="mt-4" onClick={fetchDepartments}>
          Retry
        </Button>
      </div>
    )
  }

  if (departments.length === 0) {
    return (
      <div className="rounded-md border p-8 text-center">
        <p className="text-muted-foreground">No departments found</p>
      </div>
    )
  }

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {departments.map((dept) => (
          <Card key={dept.id} className="overflow-hidden hover:shadow-lg transition-shadow border relative">
            <Link
              href={`/admin/departments/${dept.name}`}
              className="absolute inset-0 z-10"
              aria-label={`View ${dept.name} department`}
            >
              <span className="sr-only">View department details</span>
            </Link>
            <CardHeader className="pb-2 relative z-20">
              <CardTitle className="text-base font-medium flex items-center gap-2">
                <Building className="h-4 w-4 text-primary" />
                {dept.name}
              </CardTitle>
              <CardDescription className="flex items-center gap-1 text-xs">
                <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                  Total Semesters: {dept.totalSemesters}
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-2 relative z-20">
              <p className="text-sm text-muted-foreground line-clamp-3">Click to explore subjects in this department</p>
            </CardContent>
            <CardFooter className="flex justify-end items-center pt-0 pb-3 text-xs text-muted-foreground relative z-20">
              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 relative z-30"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    onEdit(dept)
                  }}
                >
                  <Pencil className="h-4 w-4 cursor-pointer" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 text-destructive hover:text-destructive hover:bg-destructive/10 relative z-30"
                  onClick={(e) => handleDeleteClick(dept, e)}
                >
                  <Trash2 className="h-4 w-4 cursor-pointer" />
                  <span className="sr-only">Delete</span>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {departmentToDelete && (
        <DeleteConfirmationModal
          isOpen={deleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          onConfirm={handleConfirmDelete}
          title="Delete Department"
          description={`Are you sure you want to delete ${departmentToDelete.name}? This action cannot be undone.`}
        />
      )}
    </>
  )
}
