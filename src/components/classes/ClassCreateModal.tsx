import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface ClassCreateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  departmentName: string;
  graduationYear: string;
}

export function ClassCreateModal({
  isOpen,
  onClose,
  onSave,
  departmentName,
  graduationYear,
}: ClassCreateModalProps) {
  const [count, setCount] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `/api/classes?departmentName=${encodeURIComponent(
          departmentName
        )}&graduationYear=${graduationYear}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ count: parseInt(count) }),
        }
      );
      if (!response.ok) {
        throw new Error('Failed to create classes');
      }
      setCount('');
      onSave();
      onClose();
    } catch (err: unknown) {
      console.error(err);
      alert('Error creating classes');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Classes</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="count" className="text-right">
                Number of classes
              </Label>
              <Input
                id="count"
                type="number"
                value={count}
                onChange={(e) => setCount(e.target.value)}
                min="1"
                max="26"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Create</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}