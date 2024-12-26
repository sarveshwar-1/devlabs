"use client";

import React, { useEffect, useState } from "react";
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

type Project = {
  id: number;
  title: string;
  description?: string;
  repository: string;
  status: string;
  team: Team;
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

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };
    fetchProjects();
  }, []);

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

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <Input
          placeholder="Search projects..."
          className="max-w-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <CreateProjectDialog />
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
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedProjects.map((project) => (
            <TableRow key={project.id} onClick={
              () => {
                window.location.href = `/mentee/project/${project.id}`;
              }
            }>
              <TableCell>{project.title}</TableCell>
              <TableCell>{project.mentor.map((user) => (user.user.name))}</TableCell>
              <TableCell>{project.status}</TableCell>
              <TableCell>
                <a
                  href={`https://github.com/${project.repository}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {project.repository}
                </a>
              </TableCell>
              <TableCell>{project.team.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
