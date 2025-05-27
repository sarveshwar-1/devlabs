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
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
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
    <div
      className={`min-h-screen bg-white dark:bg-black transition-colors duration-300 ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-black dark:text-white tracking-tight">
            Projects Overview
          </h1>
        </div>

        {/* Search Section */}
        <div className="relative max-w-md mb-8 animate-fade-in-up">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-white dark:bg-black border-gray-200 dark:border-gray-800 
                     text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500
                     focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 
                     transition-all duration-200"
          />
        </div>

        {/* Table Section */}
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in-up delay-100">
          <Table>
            <TableHeader>
              <TableRow className="border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                <TableHead
                  onClick={() => handleSort("title")}
                  className="cursor-pointer text-black dark:text-white font-semibold"
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
                <TableHead className="text-black dark:text-white font-semibold">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Staff
                  </div>
                </TableHead>
                <TableHead
                  onClick={() => handleSort("status")}
                  className="cursor-pointer text-black dark:text-white font-semibold"
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
                <TableHead className="text-black dark:text-white font-semibold">
                  <div className="flex items-center gap-2">
                    <GitBranch className="h-4 w-4" />
                    Repository
                  </div>
                </TableHead>
                <TableHead className="text-black dark:text-white font-semibold">
                  Team
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedProjects.map((project, index) => (
                <TableRow
                  key={project.id}
                  onClick={() => router.push(`/mentor/project/${project.id}`)}
                  className="cursor-pointer border-gray-200 dark:border-gray-800 
                            hover:bg-gray-50 dark:hover:bg-gray-900
                            transition-all duration-200 animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <TableCell className="text-black dark:text-white font-medium">
                    {project.title}
                  </TableCell>
                  <TableCell className="text-gray-600 dark:text-gray-300">
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
                  <TableCell className="text-gray-600 dark:text-gray-300">
                    {project.team.name}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12 text-gray-500 dark:text-gray-400 animate-fade-in">
              <p>No projects found. Try adjusting your search.</p>
            </div>
          )}
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
