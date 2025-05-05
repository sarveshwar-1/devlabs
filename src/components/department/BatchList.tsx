"use client"
import { useState, useEffect, useCallback } from "react"
import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from "@/components/ui/card"
import { Pencil, Trash2, Calendar } from "lucide-react"
import Link from "next/link"
import { DeleteConfirmationModal } from "@/components/DeleteConfirmationModal"
import { SkeletonCardGrid } from "@/components/ui/skeleton-card-grid"

interface Batch {
  id: string
  graduationYear: number
  department: { name: string }
}

interface BatchListProps {
  departmentName: string
  onEdit: (batch: Batch) => void
}

export function BatchList({ departmentName, onEdit }: BatchListProps) {
  const [batches, setBatches] = useState<Batch[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [batchToDelete, setBatchToDelete] = useState<Batch | null>(null)

  const fetchBatches = useCallback(async () => {
    setIsLoading(true)
    try {
      const response = await fetch(
        `/api/departments/batches?departmentName=${encodeURIComponent(departmentName)}`,
      )
      if (!response.ok) throw new Error("Failed to fetch batches")
      const data = await response.json()
      setBatches(data)
    } catch (err) {
      console.error(err)
      setError("Error fetching batches")
    } finally {
      setIsLoading(false)
    }
  }, [departmentName])

  const handleDeleteClick = (batch: Batch, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setBatchToDelete(batch)
    setDeleteModalOpen(true)
  }

  const handleConfirmDelete = async () => {
    if (!batchToDelete) return

    try {
      const response = await fetch(`/api/admin/departments/batches/${batchToDelete.id}`, { method: "DELETE" })
      if (!response.ok) throw new Error("Failed to delete batch")
      fetchBatches()
      setDeleteModalOpen(false)
      setBatchToDelete(null)
    } catch (err) {
      console.error(err)
      setError("Error deleting batch")
    }
  }

  useEffect(() => {
    fetchBatches()
  }, [fetchBatches])

  if (isLoading) {
    return <SkeletonCardGrid cards={6} />
  }

  if (error) {
    return (
      <div className="rounded-md border p-8 text-center">
        <p className="text-destructive">{error}</p>
        <Button variant="outline" className="mt-4" onClick={fetchBatches}>
          Retry
        </Button>
      </div>
    )
  }

  if (batches.length === 0) {
    return (
      <div className="rounded-md border p-8 text-center">
        <p className="text-muted-foreground">No batches found</p>
      </div>
    )
  }

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {batches.map((batch) => (
          <Card key={batch.id} className="overflow-hidden hover:shadow-lg transition-shadow border relative">
            <Link
              href={`/admin/departments/${batch.department.name}/${batch.graduationYear}`}
              className="absolute inset-0 z-10"
              aria-label={`Manage classes for Batch ${batch.graduationYear}`}
            >
              <span className="sr-only">View batch details</span>
            </Link>
            <CardHeader className="pb-2 relative z-20">
              <CardTitle className="text-base font-medium flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                Batch {batch.graduationYear}
              </CardTitle>
              <CardDescription className="flex items-center gap-1 text-xs">
                <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                  Department: {batch.department.name}
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-2 relative z-20">
              <p className="text-sm text-muted-foreground line-clamp-3">Click to manage classes for this batch</p>
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
                    onEdit(batch)
                  }}
                >
                  <Pencil className="h-4 w-4 cursor-pointer" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 text-destructive hover:text-destructive hover:bg-destructive/10 relative z-30"
                  onClick={(e) => handleDeleteClick(batch, e)}
                >
                  <Trash2 className="h-4 w-4 cursor-pointer" />
                  <span className="sr-only">Delete</span>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {batchToDelete && (
        <DeleteConfirmationModal
          isOpen={deleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          onConfirm={handleConfirmDelete}
          title="Delete Batch"
          description={`Are you sure you want to delete Batch ${batchToDelete.graduationYear}? This action cannot be undone.`}
        />
      )}
    </>
  )
}
