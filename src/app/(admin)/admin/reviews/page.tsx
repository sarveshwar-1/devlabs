'use client'

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import CreateReviewForm from '@/components/review/CreateReviewForm';

export default function CreateReviewPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Create Review</h1>
      <Button onClick={() => setIsModalOpen(true)}>Create Review</Button>
      <CreateReviewForm 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}