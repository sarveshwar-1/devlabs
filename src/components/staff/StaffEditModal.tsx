import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Staff } from '@/types';

interface StaffUpdateData {
  name: string;
  email: string;
  password?: string;
}

interface StaffEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  staff: Staff;
}

export function StaffEditModal({ isOpen, onClose, onSave, staff }: StaffEditModalProps) {
  const [name, setName] = useState(staff.name);
  const [email, setEmail] = useState(staff.email);
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const updateData: StaffUpdateData = { name, email };
      if (password) {
        updateData.password = password;
      }
      const response = await fetch(`/api/admin/staff/${staff.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateData),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to update staff');
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
          <DialogTitle>Edit Staff</DialogTitle>
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
            placeholder="New Password (optional)"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4"
          />
          <Button onClick={handleSubmit}>Update Staff</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}