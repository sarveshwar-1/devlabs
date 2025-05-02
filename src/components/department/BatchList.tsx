'use client';
import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '@/components/ui/card';
import { Pencil, Trash2, Calendar } from 'lucide-react';
import Link from 'next/link';

interface Batch {
  id: string;
  graduationYear: number;
  department: { name: string };
}

interface BatchListProps {
  departmentName: string;
  onEdit: (batch: Batch) => void;
}

export function BatchList({ departmentName, onEdit }: BatchListProps) {
  const [batches, setBatches] = useState<Batch[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBatches = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/departments/batches?departmentName=${encodeURIComponent(departmentName)}`);
      if (!response.ok) throw new Error('Failed to fetch batches');
      const data = await response.json();
      setBatches(data);
    } catch (err) {
      console.error(err);
      setError('Error fetching batches');
    } finally {
      setIsLoading(false);
    }
  }, [departmentName]);

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/departments/batches/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Failed to delete batch');
      fetchBatches();
    } catch (err) {
      console.error(err);
      setError('Error deleting batch');
    }
  };

  useEffect(() => {
    fetchBatches();
  }, [fetchBatches]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {batches.map((batch) => (
        <Card
          key={batch.id}
          className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border"
        >
          <Link href={`/admin/departments/${batch.department.name}/${batch.graduationYear}`} passHref>
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                Batch {batch.graduationYear}
              </CardTitle>
              <CardDescription className="flex items-center gap-1 text-xs">
                <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                  Department: {batch.department.name}
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <p className="text-sm text-muted-foreground line-clamp-3">
                Click to manage classes for this batch
              </p>
            </CardContent>
          </Link>
          <CardFooter className="flex justify-end items-center pt-0 pb-3 text-xs text-muted-foreground">
            <div className="flex gap-1" onClick={(e) => e.stopPropagation()}>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => onEdit(batch)}
              >
                <Pencil className="h-4 w-4 cursor-pointer" />
                <span className="sr-only">Edit</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 text-destructive hover:text-destructive hover:bg-destructive/10"
                onClick={() => handleDelete(batch.id)}
              >
                <Trash2 className="h-4 w-4 cursor-pointer" />
                <span className="sr-only">Delete</span>
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}