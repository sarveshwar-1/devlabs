"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import type { Staff } from "@/types"
import { DeleteConfirmationModal } from "@/components/deleteConfirmationModal"
import { Edit, Trash2 } from "lucide-react"

interface StaffListProps {
  staffMembers: Staff[]
  onEdit: (staff: Staff) => void
  onDelete: (staffId: string) => void
}

export function StaffList({ staffMembers, onEdit, onDelete }: StaffListProps) {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [staffToDelete, setStaffToDelete] = useState<Staff | null>(null)

  const handleDeleteClick = (staff: Staff) => {
    setStaffToDelete(staff)
    setDeleteModalOpen(true)
  }

  const handleConfirmDelete = () => {
    if (staffToDelete) {
      onDelete(staffToDelete.id)
      setDeleteModalOpen(false)
      setStaffToDelete(null)
    }
  }

  if (staffMembers.length === 0) {
    return <p className="text-center py-6 text-muted-foreground">No staff members found</p>
  }

  return (
    <>
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
    </>
  )
}
