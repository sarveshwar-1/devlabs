"use client";
import { useState, useEffect, useCallback } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { AddSubjectModal } from '@/components/department/AddSubjectModal';
import { EditSubjectModal } from '@/components/department/EditSubjectModal';
import { DeleteConfirmationModal } from '@/components/DeleteConfirmationModal';
import type { Subject } from '@/types';

interface SubjectManagementModalProps {
  isOpen: boolean;
  onClose: () => void;
  departmentId: string;
  departmentName: string;
  totalSemesters: number;
  onDeleteSubject?: (subject: Subject) => void;
  refreshTrigger?: number;
}

export function SubjectManagementModal({
  isOpen,
  onClose,
  departmentId,
  departmentName,
  totalSemesters,
  onDeleteSubject,
  refreshTrigger = 0,
}: SubjectManagementModalProps) {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [subjectToDelete, setSubjectToDelete] = useState<Subject | null>(null);
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);

  const fetchSubjects = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/admin/departments/${departmentId}/subjects`);
      if (!response.ok) throw new Error('Failed to fetch subjects');
      const data = await response.json();
      setSubjects(data);
    } catch (err: unknown) {
      console.error(err);
      setError('Error fetching subjects');
    } finally {
      setIsLoading(false);
    }
  }, [departmentId]);

  useEffect(() => {
    if (isOpen) {
      fetchSubjects();
    }
  }, [isOpen, fetchSubjects, refreshTrigger]);

  const handleDeleteClick = (subject: Subject) => {
    setSubjectToDelete(subject);
    setIsDeleteModalOpen(true);
    if (onDeleteSubject) {
      onDeleteSubject(subject);
    }
  };

  const handleConfirmDelete = async () => {
    if (!subjectToDelete) return;
    try {
      const response = await fetch(`/api/subjects/${subjectToDelete.id}`, { method: 'DELETE' });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to delete subject');
      }
      await fetchSubjects();
      setSubjectToDelete(null);
      setIsDeleteModalOpen(false);
    } catch (err: unknown) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      setIsDeleteModalOpen(false);
    }
  };

  return (
    <>
      <Dialog
        open={isOpen}
        onOpenChange={(open) => {
          if (!open && !isDeleteModalOpen && !isAddModalOpen && !isEditModalOpen) {
            onClose();
          }
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Manage Subjects for {departmentName}</DialogTitle>
          </DialogHeader>
          {isLoading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <div>
              {Array.from({ length: totalSemesters }, (_, i) => i + 1).map((semester) => (
                <div key={semester} className="mb-4">
                  <h3 className="text-lg font-semibold">Semester {semester}</h3>
                  <ul className="list-disc pl-5">
                    {subjects
                      .filter((subj) => subj.semester === semester)
                      .map((subj) => (
                        <li key={subj.id} className="flex justify-between items-center py-1">
                          <span>{subj.name}</span>
                          <div className="flex gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => {
                                setSelectedSubject(subj);
                                setIsEditModalOpen(true);
                              }}
                            >
                              Edit
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-red-500 hover:text-red-700"
                              onClick={() => handleDeleteClick(subj)}
                            >
                              Delete
                            </Button>
                          </div>
                        </li>
                      ))}
                  </ul>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSelectedSemester(semester);
                      setIsAddModalOpen(true);
                    }}
                  >
                    Add Subject
                  </Button>
                </div>
              ))}
            </div>
          )}
        </DialogContent>
      </Dialog>
      {subjectToDelete && (
        <DeleteConfirmationModal
          isOpen={isDeleteModalOpen}
          onClose={() => {
            setIsDeleteModalOpen(false);
            setSubjectToDelete(null);
          }}
          onConfirm={handleConfirmDelete}
          title="Delete Subject"
          description={`Are you sure you want to delete ${subjectToDelete.name}? This action cannot be undone.`}
        />
      )}
      {isAddModalOpen && selectedSemester && (
        <AddSubjectModal
          departmentId={departmentId}
          semester={selectedSemester}
          onSave={() => {
            setIsAddModalOpen(false);
            fetchSubjects();
          }}
          onCancel={() => setIsAddModalOpen(false)}
        />
      )}
      {isEditModalOpen && selectedSubject && (
        <EditSubjectModal
          subject={selectedSubject}
          onSave={() => {
            setIsEditModalOpen(false);
            fetchSubjects();
          }}
          onCancel={() => setIsEditModalOpen(false)}
        />
      )}
    </>
  );
}