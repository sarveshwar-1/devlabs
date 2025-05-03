export interface Department {
  id: string;
  name: string;
  totalSemesters: number;
}

export interface Batch {
  id: string;
  name: string;
  startYear: number;
  endYear: number;
  departmentId: string;
  department?: Department;
}

export interface Class {
  id: string;
  section: string;
  batchId: string;
}

export interface ClassWithStudents extends Class {
  totalStudents: number;
  batchId: string;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  rollNumber: string;
}

export type Staff = {
  id: string;
  name: string;
  email: string;
};