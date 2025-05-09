"use client";
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DepartmentList } from '@/components/department/DepartmentList';
import { DepartmentModal } from '@/components/department/DepartmentModal';
import { SubjectManagementModal } from '@/components/department/SubjectManagementModal';
import type { Department } from '@/types';

export default function DepartmentsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState<Department | undefined>(undefined);
  const [isSubjectModalOpen, setIsSubjectModalOpen] = useState(false);
  const [selectedDepartmentForSubjects, setSelectedDepartmentForSubjects] = useState<Department | null>(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleAdd = () => {
    setSelectedDepartment(undefined);
    setIsModalOpen(true);
  };

  const handleEdit = (department: Department) => {
    setSelectedDepartment(department);
    setIsModalOpen(true);
  };

  const handleEditSubjects = (department: Department) => {
    setSelectedDepartmentForSubjects(department);
    setIsSubjectModalOpen(true);
  };

  const handleSave = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Departments</h1>
        <Button onClick={handleAdd}>Add Department</Button>
      </div>
      <DepartmentList key={refreshKey} onEdit={handleEdit} onEditSubjects={handleEditSubjects} />
      <DepartmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        department={selectedDepartment}
        onSave={handleSave}
      />      {selectedDepartmentForSubjects && (
        <SubjectManagementModal
          isOpen={isSubjectModalOpen}
          onClose={() => setIsSubjectModalOpen(false)}
          departmentId={selectedDepartmentForSubjects.id}
          departmentName={selectedDepartmentForSubjects.name}
          totalSemesters={selectedDepartmentForSubjects.totalSemesters}
          onDeleteSubject={() => {}}
          refreshTrigger={refreshKey}
        />
      )}
    </div>
  );
}