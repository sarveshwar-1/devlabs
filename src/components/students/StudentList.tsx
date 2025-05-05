"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import type { Student } from "@/types"
import { DeleteConfirmationModal } from "@/components/DeleteConfirmationModal"
import { Edit, Trash2, Key } from "lucide-react"
import { toast } from "sonner"
import { ResetConfirmationModal } from "../ResetConfirmationModal"


interface StudentListProps {
  students: Student[]
  onEdit: (student: Student) => void
  onDelete: (studentId: string) => void
}

export function StudentList({ students, onEdit, onDelete }: StudentListProps) {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [studentToDelete, setStudentToDelete] = useState<Student | null>(null)
  const [resetModalOpen, setResetModalOpen] = useState(false)
  const [studentToReset, setStudentToReset] = useState<Student | null>(null)
  const [error, setError] = useState<string | null>(null)


  const handleResetPasswordClick = (student : Student) => {
      setStudentToReset(student)
      setResetModalOpen(true)
  }

  const handleConfirmReset = async () => {
    if(studentToReset){
      setError(null)
      try{
        const response = await fetch(`/api/admin/students/${studentToReset.id}/reset`,{
          method: 'PATCH',
          headers: { 'Content-Type' : 'application/json'}
        })
        if(!response.ok){
          const errorData = await response.json()
          throw new Error(errorData.error || 'Failed to reset password')
        }
        toast("Password reset successfully", {
          description: `The password for ${studentToReset.name} has been reset.`,
        })
        setResetModalOpen(false)
        setStudentToReset(null)
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred')
        toast("Failed to reset password", {
          description: err instanceof Error ? err.message : 'An unknown error occurred',
        })
      }
    }
  }

  const handleDeleteClick = (student: Student) => {
    setStudentToDelete(student)
    setDeleteModalOpen(true)
  }

  const handleConfirmDelete = () => {
    if (studentToDelete) {
      onDelete(studentToDelete.id)
      setDeleteModalOpen(false)
      setStudentToDelete(null)
    }
  }

  if (students.length === 0) {
    return <p className="text-center py-6 text-muted-foreground">No students found in this class</p>
  }

  return (
    <>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-medium">Name</TableHead>
              <TableHead className="font-medium">Email</TableHead>
              <TableHead className="font-medium">Roll Number</TableHead>
              <TableHead className="text-right font-medium">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id} className="hover:bg-muted/50">
                <TableCell className="font-medium">{student.name}</TableCell>
                <TableCell>{student.email}</TableCell>
                <TableCell>{student.rollNumber}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm" onClick={() => onEdit(student)} className="h-8 w-8 p-0 mr-2">
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleResetPasswordClick(student)}
                    className="h-8 w-8 p-0 mr-2"
                  >
                    <Key className="h-4 w-4" />
                    <span className="sr-only">Reset Password</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDeleteClick(student)}
                    className="h-8 w-8 p-0"
                  >
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {studentToDelete && (
        <DeleteConfirmationModal
          isOpen={deleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          onConfirm={handleConfirmDelete}
          title="Delete Student"
          description={`Are you sure you want to delete ${studentToDelete.name}? This action cannot be undone.`}
        />
      )}

      {studentToReset && (
        <ResetConfirmationModal
          isOpen={resetModalOpen}
          onClose={() => setResetModalOpen(false)}
          onConfirm={handleConfirmReset}
          title="Reset Student Password"
          description={`Are you sure you want to reset the password for ${studentToReset.name}? Their password will be reset to the default password.`}
        />
      )}
    </>
  )
}
