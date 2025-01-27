"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { CreateProjectDialog } from "@/components/project/create-project-dialog";
import { EditProjectDialog } from "@/components/project/edit-project-dialog";
import { useToast } from "@/components/ui/use-toast";

type Project = {
  id: number;
  title: string;
  description?: string;
  repository: string;
  status: string;
  freezed: boolean;
  team: Team;
  mentor: Mentor[];
};

type Mentor = {
  user: {
    id: string;
    name: string;
  };
};

type TeamMember = {
  user: {
    name: string;
    rollNo: string;
  };
};

type Team = {
  id: number;
  name: string;
  description?: string;
  members: TeamMember[];
};

export default function Page() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Project;
    direction: "asc" | "desc";
  }>({ key: "title", direction: "asc" });

  const router = useRouter();
  const { toast } = useToast();

  const fetchProjects = async () => {
    try {
      const response = await fetch("/api/project");
      if (!response.ok) {
        throw new Error("Failed to fetch projects");
      }
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
      toast({
        title: "Error",
        description: "Failed to fetch projects",
        variant: "destructive",
      });
    }
  };
  useEffect(() => {
    fetchProjects();
  }, [toast]);

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key])
      return sortConfig.direction === "asc" ? -1 : 1;
    if (a[sortConfig.key] > b[sortConfig.key])
      return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  const handleSort = (key: keyof Project) => {
    setSortConfig({
      key,
      direction:
        sortConfig.key === key && sortConfig.direction === "asc"
          ? "desc"
          : "asc",
    });
  };

  const handleRowClick = (projectId: number) => {
    router.push(`/mentee/project/${projectId}`);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <Input
          placeholder="Search projects..."
          className="max-w-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <CreateProjectDialog fetchProjects ={fetchProjects}/>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead
              onClick={() => handleSort("title")}
              className="cursor-pointer"
            >
              Title{" "}
              {sortConfig.key === "title" &&
                (sortConfig.direction === "asc" ? "↑" : "↓")}
            </TableHead>
            <TableHead>Staff</TableHead>
            <TableHead
              onClick={() => handleSort("status")}
              className="cursor-pointer"
            >
              Status{" "}
              {sortConfig.key === "status" &&
                (sortConfig.direction === "asc" ? "↑" : "↓")}
            </TableHead>
            <TableHead>Repository</TableHead>
            <TableHead>Team</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedProjects.map((project) => (
            <TableRow
              key={project.id}
              onClick={() => handleRowClick(project.id)}
              className="cursor-pointer"
            >
              <TableCell>
                {project.title}
                {project.freezed && (
                  <span className="ml-2 text-sm text-gray-500">(Frozen)</span>
                )}
              </TableCell>
              <TableCell>
                {project.mentor.map((user) => user.user.name).join(", ")}
              </TableCell>
              <TableCell>{project.status}</TableCell>
              <TableCell>
                <a
                  href={`https://github.com/${project.repository}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  {project.repository}
                </a>
              </TableCell>
              <TableCell>{project.team.name}</TableCell>
              <TableCell
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                {!project.freezed ? (
                  <EditProjectDialog project={project} fetchProject={fetchProjects}/>
                ) : (
                  <span className="text-sm text-gray-500">Frozen by admin</span>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
