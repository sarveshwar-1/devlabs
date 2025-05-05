import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface StaffCreateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

export function StaffCreateModal({ isOpen, onClose, onSave }: StaffCreateModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      // Extract roll number from email (everything before @)
      const rollNumber = email.split('@')[0];
      if (!rollNumber) {
        throw new Error('Invalid email format');
      }

      const response = await fetch('/api/admin/staff', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, rollNumber }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create staff');
      }
      setName('');
      setEmail('');
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
          <DialogTitle>Add New Staff</DialogTitle>
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
            className="mb-4"
          />
          <Button onClick={handleSubmit}>Create Staff</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}