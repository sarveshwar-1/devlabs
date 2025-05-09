"use client";
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface AddSubjectModalProps {
  departmentId: string;
  semester: number;
  onSave: () => void;
  onCancel: () => void;
}

export function AddSubjectModal({ departmentId, semester, onSave, onCancel }: AddSubjectModalProps) {
  const [name, setName] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSave = async () => {
    setIsSaving(true);
    setError(null);
    try {
      const response = await fetch(`/api/admin/departments/${departmentId}/subjects`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, semester }),
      });
      if (!response.ok) throw new Error('Failed to create subject');
      onSave();
      setName('');
    } catch (err) {
      console.error(err);
      setError('Error creating subject');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <Dialog open={true} onOpenChange={onCancel}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Subject to Semester {semester}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="Subject Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isSaving}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onCancel} disabled={isSaving}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={isSaving || !name.trim()}>
            {isSaving ? 'Saving...' : 'Save'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}