"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { ClassWithStudents } from "@/types"
import { DeleteConfirmationModal } from "@/components/deleteConfirmationModal"
import { Edit, Trash2, UserPlus } from "lucide-react"
import { SkeletonTable } from "@/components/ui/skeleton-table"

interface ClassListProps {
  classes: ClassWithStudents[]
  onEdit: (classItem: ClassWithStudents) => void
  onDelete: (classId: string) => void
  onAssignStaff: (classItem: ClassWithStudents) => void
  isLoading?: boolean
}

export function ClassList({ classes, onEdit, onDelete, onAssignStaff, isLoading = false }: ClassListProps) {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [classToDelete, setClassToDelete] = useState<ClassWithStudents | null>(null)

  const handleDeleteClick = (classItem: ClassWithStudents) => {
    setClassToDelete(classItem)
    setDeleteModalOpen(true)
  }

  const handleConfirmDelete = () => {
    if (classToDelete) {
      onDelete(classToDelete.id)
      setDeleteModalOpen(false)
      setClassToDelete(null)
    }
  }

  if (isLoading) {
    return <SkeletonTable columns={3} rows={5} />
  }

  if (classes.length === 0) {
    return (
      <div className="rounded-md border p-8 text-center">
        <p className="text-muted-foreground">No classes found</p>
      </div>
    )
  }

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-medium">Name</TableHead>
              <TableHead className="font-medium">Total Students</TableHead>
              <TableHead className="text-right font-medium">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {classes.map((classItem) => (
              <TableRow key={classItem.id} className="hover:bg-muted/50 group">
                <TableCell className="p-0" colSpan={2}>
                  <Link href={`/admin/classes/${classItem.id}`} className="flex h-full w-full py-4">
                    <span className="px-4 font-medium text-primary">{classItem.section}</span>
                    <span className="px-4">{classItem.totalStudents}</span>
                  </Link>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm" onClick={() => onEdit(classItem)} className="h-8 w-8 p-0 mr-1">
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDeleteClick(classItem)}
                    className="h-8 w-8 p-0 mr-1 text-destructive hover:text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onAssignStaff(classItem)}
                    className="h-8 w-8 p-0 text-primary hover:text-primary hover:bg-primary/10"
                  >
                    <UserPlus className="h-4 w-4" />
                    <span className="sr-only">Assign Staff</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {classToDelete && (
        <DeleteConfirmationModal
          isOpen={deleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          onConfirm={handleConfirmDelete}
          title="Delete Class"
          description={`Are you sure you want to delete ${classToDelete.section}? This action cannot be undone.`}
        />
      )}
    </>
  )
}
