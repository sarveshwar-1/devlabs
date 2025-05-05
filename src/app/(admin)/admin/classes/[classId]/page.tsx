'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { StudentList } from '@/components/students/StudentList';
import { StudentCreateModal } from '@/components/students/StudentCreateModal';
import { StudentEditModal } from '@/components/students/StudentEditModal';
import { Button } from '@/components/ui/button';
import { Student } from '@/types';

interface ClassDetails {
  id: string;
  section: string;
}

export default function ClassPage() {
  const params = useParams();
  const classId = params.classId as string;
  const [classDetails, setClassDetails] = useState<ClassDetails | null>(null);
  const [students, setStudents] = useState<Student[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [classResponse, studentsResponse] = await Promise.all([
          fetch(`/api/classes/${classId}`),
          fetch(`/api/students?classId=${classId}`),
        ]);
        if (!classResponse.ok || !studentsResponse.ok) {
          throw new Error('Failed to fetch data');
        }
        const classData = await classResponse.json();
        const studentsData = await studentsResponse.json();
        setClassDetails(classData);
        setStudents(studentsData);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [classId]);

  const handleStudentAddedOrUpdated = () => {
    fetch(`/api/students?classId=${classId}`)
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => setError(err.message));
  };

  const handleEdit = (student: Student) => {
    setSelectedStudent(student);
    setIsEditModalOpen(true);
  };

  const handleDelete = async (studentId: string) => {
    try {
      const response = await fetch(`/api/admin/students/${studentId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to delete student');
      }
      setStudents(students.filter((s) => s.id !== studentId));
    } catch (err: unknown) {
      console.error(err);
      alert('Error deleting student');
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">
        Students in Class {classDetails?.section}
      </h1>
      <Button onClick={() => setIsCreateModalOpen(true)} className="mb-4">
        Add Student
      </Button>
      <StudentList students={students} onEdit={handleEdit} onDelete={handleDelete} />
      <StudentCreateModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSave={handleStudentAddedOrUpdated}
        classId={classId}
      />
      {selectedStudent && (
        <StudentEditModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onSave={handleStudentAddedOrUpdated}
          student={selectedStudent}
        />
      )}
    </div>
  );
}