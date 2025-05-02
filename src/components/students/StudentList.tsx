import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from '@/components/ui/table';
  import { Button } from '@/components/ui/button';
  import { Student } from '@/types';
  
  interface StudentListProps {
    students: Student[];
    onEdit: (student: Student) => void;
    onDelete: (studentId: string) => void;
  }
  
  export function StudentList({ students, onEdit, onDelete }: StudentListProps) {
    if (students.length === 0) {
      return <p>No students found in this class</p>;
    }
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Roll Number</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.email}</TableCell>
              <TableCell>{student.rollNumber}</TableCell>
              <TableCell>
                <Button variant="link" onClick={() => onEdit(student)}>
                  Edit
                </Button>
                <Button
                  variant="link"
                  className="text-red-500"
                  onClick={() => {
                    if (confirm('Are you sure you want to delete this student?')) {
                      onDelete(student.id);
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