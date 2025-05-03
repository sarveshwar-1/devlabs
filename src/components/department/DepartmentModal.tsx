'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Department } from '@/types';

interface DepartmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  department?: Department;
  onSave: () => void;
}

export function DepartmentModal({ isOpen, onClose, department, onSave }: DepartmentModalProps) {
  const [name, setName] = useState(department?.name || '');
  const [totalSemesters, setTotalSemesters] = useState(department?.totalSemesters?.toString() || '');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const method = department ? 'PUT' : 'POST';
      const url = department ? `/api/admin/departments/${department.id}` : '/api/admin/departments';
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, totalSemesters }),
      });
      if (!response.ok) throw new Error('Failed to save department');
      onSave();
      onClose();
    } catch (err) {
      console.error(err);
      setError('Error saving department');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{department ? 'Edit Department' : 'Add Department'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="totalSemesters" className="text-right">
                Total Semesters
              </Label>
              <Input
                id="totalSemesters"
                type="number"
                value={totalSemesters}
                onChange={(e) => setTotalSemesters(e.target.value)}
                className="col-span-3"
                min="1"
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
          </div>
          <DialogFooter>
            <Button type="submit">{department ? 'Update' : 'Create'}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}