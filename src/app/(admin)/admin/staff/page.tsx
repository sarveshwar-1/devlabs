'use client';
import { useState, useEffect } from 'react';
import { StaffList } from '@/components/staff/StaffList';
import { StaffCreateModal } from '@/components/staff/StaffCreateModal';
import { StaffEditModal } from '@/components/staff/StaffEditModal';
import { Button } from '@/components/ui/button';
import { Staff } from '@/types';

export default function StaffManagement() {
  const [staffMembers, setStaffMembers] = useState<Staff[]>([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState<Staff | null>(null);

  useEffect(() => {
    fetchStaff();
  }, []);

  const fetchStaff = async () => {
    const response = await fetch('/api/admin/staff');
    const data = await response.json();
    setStaffMembers(data);
  };

  const handleCreate = () => {
    setIsCreateModalOpen(true);
  };

  const handleEdit = (staff: Staff) => {
    setSelectedStaff(staff);
    setIsEditModalOpen(true);
  };

  const handleDelete = async (staffId: string) => {
    await fetch(`/api/admin/staff/${staffId}`, { method: 'DELETE' });
    fetchStaff();
  };

  const handleSave = () => {
    fetchStaff();
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">
        Staff Management
      </h1>
      <Button onClick={handleCreate} className="mb-4">Add New Staff</Button>
      <StaffList staffMembers={staffMembers} onEdit={handleEdit} onDelete={handleDelete} />
      <StaffCreateModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSave={handleSave}
      />
      {selectedStaff && (
        <StaffEditModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onSave={handleSave}
          staff={selectedStaff}
        />
      )}
    </div>
  );
}