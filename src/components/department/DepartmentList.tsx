'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '@/components/ui/card';
import { Pencil, Trash2, Building } from 'lucide-react';
import Link from 'next/link';
import { Department } from '@/types';

interface DepartmentListProps {
  onEdit: (department: Department) => void;
}

export function DepartmentList({ onEdit }: DepartmentListProps) {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDepartments = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/departments');
      if (!response.ok) throw new Error('Failed to fetch departments');
      const data = await response.json();
      setDepartments(data);
    } catch (err) {
      console.error(err);
      setError('Error fetching departments');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/departments/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Failed to delete department');
      fetchDepartments(); // Refresh the list
    } catch (err) {
      console.error(err);
      setError('Error deleting department');
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {departments.map((dept) => (
        <Card
          key={dept.id}
          className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border"
        >
          <Link href={`/admin/departments/${dept.name}`} passHref>
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium flex items-center gap-2">
                <Building className="h-4 w-4 text-primary" />
                {dept.name}
              </CardTitle>
              <CardDescription className="flex items-center gap-1 text-xs">
                <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                  Total Semesters: {dept.totalSemesters}
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <p className="text-sm text-muted-foreground line-clamp-3">
                Click to explore subjects in this department
              </p>
            </CardContent>
          </Link>
          <CardFooter className="flex justify-end items-center pt-0 pb-3 text-xs text-muted-foreground">
            <div className="flex gap-1" onClick={(e) => e.stopPropagation()}>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => onEdit(dept)}
              >
                <Pencil className="h-4 w-4 cursor-pointer" />
                <span className="sr-only">Edit</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 text-destructive hover:text-destructive hover:bg-destructive/10"
                onClick={() => handleDelete(dept.id)}
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