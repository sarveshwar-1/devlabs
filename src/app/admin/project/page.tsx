"use client";

import React, { useEffect, useState, useCallback } from "react";
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
import { Button } from "@/components/ui/button";
import { EditProjectDialog } from "@/components/project/edit-project-dialog";
import { useToast } from "@/components/ui/use-toast";
import { Search } from "lucide-react";

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

type Team = {
  id: number;
  name: string;
  description?: string;
  members: TeamMember[];
};

type TeamMember = {
  user: {
    name: string;
    rollNo: string;
  };
};

export default function Page() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Project;
    direction: "asc" | "desc";
  }>({ key: "title", direction: "asc" });
  const [mounted, setMounted] = useState(false);
  const [isGloballyFrozen, setIsGloballyFrozen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const { toast } = useToast();

  const fetchProjects = useCallback(async () => {
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
  }, [toast]);

  useEffect(() => {
    setMounted(true);
    fetchProjects();
  }, [fetchProjects]);

  const handleFreeze = async (projectId: number) => {
    try {
      const updatedFreezedState = !projects.find(
        (project) => project.id === projectId
      )?.freezed;

      // Make the API call first
      const response = await fetch(
        `/api/project/freeze?projectid=${projectId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            freezed: updatedFreezedState,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update project freeze status");
      }

      // Update local state after successful API call
      setProjects(
        projects.map((project) =>
          project.id === projectId
            ? { ...project, freezed: updatedFreezedState }
            : project
        )
      );

      toast({
        title: "Success",
        description: `Project ${
          updatedFreezedState ? "frozen" : "unfrozen"
        } successfully`,
      });
    } catch (error) {
      console.error("Error freezing project:", error);
      toast({
        title: "Error",
        description: "Failed to update project status",
        variant: "destructive",
      });
    }
  };

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
    <div
      className={`min-h-screen bg-white dark:bg-black transition-colors duration-300 ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-black dark:text-white tracking-tight">
            Projects
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
        <div
          className="rounded-xl border border-gray-200 dark:border-gray-800 
                       shadow-sm hover:shadow-md transition-shadow duration-300
                       animate-fade-in-up delay-100"
        >
          <Table>
            <TableHeader>
              <TableRow className="border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                <TableHead
                  onClick={() => handleSort("title")}
                  className="cursor-pointer text-black dark:text-white font-semibold"
                >
                  Title{" "}
                  {sortConfig.key === "title" &&
                    (sortConfig.direction === "asc" ? "↑" : "↓")}
                </TableHead>
                <TableHead className="text-black dark:text-white font-semibold">
                  Staff
                </TableHead>
                <TableHead
                  onClick={() => handleSort("status")}
                  className="cursor-pointer text-black dark:text-white font-semibold"
                >
                  Status{" "}
                  {sortConfig.key === "status" &&
                    (sortConfig.direction === "asc" ? "↑" : "↓")}
                </TableHead>
                <TableHead className="text-black dark:text-white font-semibold">
                  Repository
                </TableHead>
                <TableHead className="text-black dark:text-white font-semibold">
                  Team
                </TableHead>
                <TableHead className="text-black dark:text-white font-semibold">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedProjects.map((project, index) => (
                <TableRow
                  key={project.id}
                  className={`cursor-pointer border-gray-200 dark:border-gray-800 
                            hover:bg-gray-50 dark:hover:bg-gray-900
                            transition-all duration-200 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => router.push(`/mentee/project/${project.id}`)}
                >
                  <TableCell className="text-black dark:text-white font-medium">
                    {project.title}
                  </TableCell>
                  <TableCell className="text-gray-600 dark:text-gray-300">
                    {project.mentor.map((user) => user.user.name).join(", ")}
                  </TableCell>
                  <TableCell className="text-gray-600 dark:text-gray-300">
                    {project.status}
                  </TableCell>
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
                  <TableCell className="text-gray-600 dark:text-gray-300">
                    {project.team.name}
                  </TableCell>
                  <TableCell>
                    <div
                      className="flex gap-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Button
                        onClick={() => handleFreeze(project.id)}
                        variant={project.freezed ? "destructive" : "ghost"}
                        size="sm"
                        className={`transform hover:scale-105 transition-all duration-200 ${
                          project.freezed
                            ? "bg-red-600 hover:bg-red-500 text-white"
                            : "hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                      >
                        {project.freezed ? "Unfreeze" : "Freeze"}
                      </Button>
                      <EditProjectDialog project={project} />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {sortedProjects.length === 0 && (
            <div className="text-center py-12 text-gray-500 dark:text-gray-400 animate-fade-in">
              <p>
                No projects found. Try adjusting your search or create a new
                project.
              </p>
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
