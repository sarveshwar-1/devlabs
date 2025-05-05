"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import type { Staff } from "@/types"
import { DeleteConfirmationModal } from "@/components/DeleteConfirmationModal"
import { ResetConfirmationModal } from "@/components/ResetConfirmationModal"
import { Edit, Trash2, Key } from "lucide-react"
import { toast } from "sonner"

interface StaffListProps {
  staffMembers: Staff[]
  onEdit: (staff: Staff) => void
  onDelete: (staffId: string) => void
}

export function StaffList({ staffMembers, onEdit, onDelete }: StaffListProps) {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [staffToDelete, setStaffToDelete] = useState<Staff | null>(null)
  const [resetModalOpen, setResetModalOpen] = useState(false)
  const [staffToReset, setStaffToReset] = useState<Staff | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleDeleteClick = (staff: Staff) => {
    setStaffToDelete(staff)
    setDeleteModalOpen(true)
  }

  const handleConfirmDelete = () => {
    if (staffToDelete) {
      onDelete(staffToDelete.id)
      toast("Staff member deleted successfully", {
        description: `${staffToDelete.name} has been removed.`,
      })
      setDeleteModalOpen(false)
      setStaffToDelete(null)
    }
  }

  const handleResetPasswordClick = (staff: Staff) => {
    setStaffToReset(staff)
    setResetModalOpen(true)
  }

  const handleConfirmReset = async () => {
    if (staffToReset) {
      try {
        const response = await fetch(`/api/admin/staff/${staffToReset.id}/reset`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
        })
        if (!response.ok) {
          const errorData = await response.json()
          toast("Failed to reset password", {
            description: errorData.error || 'An unknown error occurred',
          })
          throw new Error(errorData.error || 'Failed to reset password')
        }
        toast("Password reset successfully", {
          description: `Password for ${staffToReset.name} has been reset to the default password.`,
        })
        setResetModalOpen(false)
        setStaffToReset(null)
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred')
        toast("Failed to reset password", {
          description: err instanceof Error ? err.message : 'An unknown error occurred',
        })
      }
    }
  }

  if (staffMembers.length === 0) {
    return <p className="text-center py-6 text-muted-foreground">No staff members found</p>
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
              <TableHead className="text-right font-medium">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {staffMembers.map((staff) => (
              <TableRow key={staff.id} className="hover:bg-muted/50">
                <TableCell className="font-medium">{staff.name}</TableCell>
                <TableCell>{staff.email}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm" onClick={() => onEdit(staff)} className="h-8 w-8 p-0 mr-2">
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleResetPasswordClick(staff)}
                    className="h-8 w-8 p-0 mr-2"
                  >
                    <Key className="h-4 w-4" />
                    <span className="sr-only">Reset Password</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDeleteClick(staff)}
                    className="h-8 w-8 p-0 text-destructive hover:text-destructive hover:bg-destructive/10"
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

      {staffToDelete && (
        <DeleteConfirmationModal
          isOpen={deleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          onConfirm={handleConfirmDelete}
          title="Delete Staff Member"
          description={`Are you sure you want to delete ${staffToDelete.name}? This action cannot be undone.`}
        />
      )}

      {staffToReset && (
        <ResetConfirmationModal
          isOpen={resetModalOpen}
          onClose={() => setResetModalOpen(false)}
          onConfirm={handleConfirmReset}
          title="Reset Staff Password"
          description={`Are you sure you want to reset the password for ${staffToReset.name}? Their password will be reset to the default password.`}
        />
      )}
    </>
  )
}