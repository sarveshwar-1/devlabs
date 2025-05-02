import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Student } from '@/types';

interface StudentUpdateData {
  name: string;
  email: string;
  rollNumber: string;
  password?: string;
}

interface StudentEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  student: Student;
}

export function StudentEditModal({ isOpen, onClose, onSave, student }: StudentEditModalProps) {
  const [name, setName] = useState(student.name);
  const [email, setEmail] = useState(student.email);
  const [rollNumber, setRollNumber] = useState(student.rollNumber);
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const updateData: StudentUpdateData = { name, email, rollNumber };
      if (password) {
        updateData.password = password;
      }
      const response = await fetch(`/api/students/${student.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateData),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to update student');
      }
      onSave();
      onClose();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Student</DialogTitle>
        </DialogHeader>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <div>
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-2"
          />
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-2"
          />
          <Input
            placeholder="Roll Number"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
            className="mb-2"
          />
          <Input
            placeholder="New Password (optional)"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4"
          />
          <Button onClick={handleSubmit}>Update Student</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}