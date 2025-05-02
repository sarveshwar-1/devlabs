'use client';
import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ClassWithStudents } from '@/types';
import { ClassList } from '@/components/classes/ClassList';
import { ClassCreateModal } from '@/components/classes/ClassCreateModal';
import { ClassEditModal } from '@/components/classes/ClassEditModal';

export default function BatchClassesPage() {
  const params = useParams();
  const departmentName = decodeURIComponent(params.departmentName as string);
  const graduationYear = params.graduationYear as string;
  const [classes, setClasses] = useState<ClassWithStudents[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState<ClassWithStudents | undefined>(undefined);

  const fetchClasses = useCallback(async () => {
    try {
      const response = await fetch(
        `/api/classes?departmentName=${encodeURIComponent(
          departmentName
        )}&graduationYear=${graduationYear}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch classes');
      }
      const data = await response.json();
      setClasses(data);
    } catch (err: Error | unknown) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  }, [departmentName, graduationYear]);

  useEffect(() => {
    fetchClasses();
  }, [fetchClasses]);

  const handleEdit = (classItem: ClassWithStudents) => {
    setSelectedClass(classItem);
    setIsEditModalOpen(true);
  };

  const handleDelete = async (classId: string) => {
    try {
      const response = await fetch(`/api/classes/${classId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete class');
      }
      setClasses(classes.filter((c) => c.id !== classId));
    } catch (err: unknown) {
      console.error(err);
      alert('Error deleting class');
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          Classes for Batch {graduationYear} in {departmentName}
        </h1>
        <Button onClick={() => setIsCreateModalOpen(true)}>
          Create Classes
        </Button>
      </div>

      <ClassList classes={classes} onEdit={handleEdit} onDelete={handleDelete} />

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
    </div>
  );
}