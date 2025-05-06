export interface Department {
  id: string;
  name: string;
  totalSemesters: number;
}

export interface Batch {
  id: string;
  graduationYear: number;
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
  rollNumber: string; // Note: this is rollNumber in the interface but rollNumber in schema
}

export type Staff = {
  id: string;
  name: string;
  email: string;
};

export enum Role {
  STUDENT = "STUDENT",
  STAFF = "STAFF",
  ADMIN = "ADMIN"
}

export interface Subject {
  id: string;
  name: string;
  departmentId: string;
  semester: number;
}

export interface Rubric {
  id?: string;
  criterion: string;
  description: string;
  maxScore: number;
}

export interface RubricTemplate {
  id: string;
  name: string;
  rubrics: Rubric[];
  createdBy: string;
}

export interface Review {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  departmentId?: string;
  batchId?: string;
  classId?: string;
  semester: number;
  rubricTemplateId?: string;
  rubricTemplate?: RubricTemplate;
}

export enum TitleStatus {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED"
}