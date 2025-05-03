'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';

interface BatchModalProps {
  isOpen: boolean;
  onClose: () => void;
  departmentName: string;
  batch?: { id: string; graduationYear: number };
  onSave: () => void;
}

export function BatchModal({ isOpen, onClose, departmentName, batch, onSave }: BatchModalProps) {
  const [graduationYear, setGraduationYear] = useState(batch?.graduationYear?.toString() || '');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const year = parseInt(graduationYear);
    if (isNaN(year) || year < 2000 || year > 2100) {
      setError('Please enter a valid graduation year (2000-2100)');
      return;
    }

    try {
      const method = batch ? 'PUT' : 'POST';
      const url = batch ? `/api/admin/departments/batches/${batch.id}` : '/api/admin/departments/batches';
      const body = batch ? { graduationYear: year } : { departmentName, graduationYear: year };
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      if (!response.ok) throw new Error('Failed to save batch');
      onSave();
      onClose();
    } catch (err) {
      console.error(err);
      setError('Error saving batch');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{batch ? 'Edit Batch' : 'Add Batch'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="graduationYear" className="text-right">
                Graduation Year
              </Label>
              <Input
                id="graduationYear"
                type="number"
                value={graduationYear}
                onChange={(e) => setGraduationYear(e.target.value)}
                className="col-span-3"
                placeholder="e.g., 2027"
              />
            </div>
            {error && <p className="text-red-500">{error}</p>}
          </div>
          <DialogFooter>
            <Button type="submit">{batch ? 'Update' : 'Create'}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}