'use client';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { BatchList } from '@/components/department/BatchList';
import { BatchModal } from '@/components/department/BatchModal';

export default function DepartmentBatchesPage() {
  const params = useParams();
  const departmentName = decodeURIComponent(params.departmentName as string);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBatch, setSelectedBatch] = useState<{ id: string; graduationYear: number } | undefined>(undefined);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleAdd = () => {
    setSelectedBatch(undefined);
    setIsModalOpen(true);
  };

  const handleEdit = (batch: { id: string; graduationYear: number }) => {
    setSelectedBatch(batch);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Batches for {departmentName}</h1>
        <Button onClick={handleAdd}>Add Batch</Button>
      </div>
      <BatchList key={refreshKey} departmentName={departmentName} onEdit={handleEdit} />
      <BatchModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        departmentName={departmentName}
        batch={selectedBatch}
        onSave={handleSave}
      />
    </div>
  );
}
