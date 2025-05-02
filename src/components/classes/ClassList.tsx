import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from '@/components/ui/table';
  import { Button } from '@/components/ui/button';
  import Link from 'next/link';
  import { ClassWithStudents } from '@/types';
  
  interface ClassListProps {
    classes: ClassWithStudents[];
    onEdit: (classItem: ClassWithStudents) => void;
    onDelete: (classId: string) => void;
  }
  
  export function ClassList({ classes, onEdit, onDelete }: ClassListProps) {
    if (classes.length === 0) {
      return <p>No classes found</p>;
    }
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Total Students</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {classes.map((classItem) => (
            <TableRow key={classItem.id}>
              <TableCell>
                <Link href={`/admin/classes/${classItem.id}`} className="text-blue-500 hover:underline">
                  {classItem.section}
                </Link>
              </TableCell>
              <TableCell>{classItem.totalStudents}</TableCell>
              <TableCell>
                <Button
                  variant="link"
                  className="text-blue-500 mr-2"
                  onClick={() => onEdit(classItem)}
                >
                  Edit
                </Button>
                <Button
                  variant="link"
                  className="text-red-500"
                  onClick={() => {
                    if (confirm('Are you sure you want to delete this class?')) {
                      onDelete(classItem.id);
                    }
                  }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }