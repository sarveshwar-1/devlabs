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
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Search, GitBranch, Users, ChevronUp, ChevronDown } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description?: string;
  repository: string;
  status: string;
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

  useEffect(() => {
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

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "active":
        return "text-green-600 dark:text-green-400";
      case "completed":
        return "text-blue-600 dark:text-blue-400";
      case "pending":
        return "text-yellow-600 dark:text-yellow-400";
      default:
        return "text-gray-600 dark:text-gray-400";
    }
  };

  return (
    <Card className="w-full bg-white dark:bg-gray-900">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
          Projects Overview
        </CardTitle>
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2 top-3 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Input
            placeholder="Search projects..."
            className="pl-8 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border border-gray-200 dark:border-gray-700">
          <Table>
            <TableHeader className="bg-gray-50 dark:bg-gray-800">
              <TableRow className="hover:bg-gray-100 dark:hover:bg-gray-700">
                <TableHead
                  onClick={() => handleSort("title")}
                  className="cursor-pointer font-semibold text-gray-900 dark:text-white"
                >
                  <div className="flex items-center gap-2">
                    Title
                    {sortConfig.key === "title" &&
                      (sortConfig.direction === "asc" ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      ))}
                  </div>
                </TableHead>
                <TableHead className="font-semibold text-gray-900 dark:text-white">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Staff
                  </div>
                </TableHead>
                <TableHead
                  onClick={() => handleSort("status")}
                  className="cursor-pointer font-semibold text-gray-900 dark:text-white"
                >
                  <div className="flex items-center gap-2">
                    Status
                    {sortConfig.key === "status" &&
                      (sortConfig.direction === "asc" ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      ))}
                  </div>
                </TableHead>
                <TableHead className="font-semibold text-gray-900 dark:text-white">
                  <div className="flex items-center gap-2">
                    <GitBranch className="h-4 w-4" />
                    Repository
                  </div>
                </TableHead>
                <TableHead className="font-semibold text-gray-900 dark:text-white">
                  Team
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedProjects.map((project) => (
                <TableRow
                  key={project.id}
                  onClick={() => {
                    router.push(`/mentor/project/${project.id}`);
                  }}
                  className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <TableCell className="font-medium text-gray-900 dark:text-white">
                    {project.title}
                  </TableCell>
                  <TableCell className="text-gray-700 dark:text-gray-300">
                    {project.mentor.map((user) => user.user.name).join(", ")}
                  </TableCell>
                  <TableCell>
                    <span
                      className={`${getStatusColor(
                        project.status
                      )} font-medium`}
                    >
                      {project.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <a
                      href={`https://github.com/${project.repository}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 hover:underline flex items-center gap-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <GitBranch className="h-4 w-4" />
                      {project.repository}
                    </a>
                  </TableCell>
                  <TableCell className="text-gray-700 dark:text-gray-300">
                    {project.team.name}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
