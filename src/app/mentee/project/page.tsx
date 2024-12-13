'use client'
import React, { useEffect } from 'react'
import { useState } from 'react';
import ProjectCard from '@/components/project/project-card';
import { CreateProjectDialog } from '@/components/project/create-project-dialog';

type Project = {
  id: number;
  name: string;
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
  const theme = 'light';
  const [projects, setProjects] = useState<Project[]>([]);
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
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {projects.map((item) => (
            <ProjectCard key={item.id} {...item} />
        ))}
      </div>
      <CreateProjectDialog />
    </div>
  );
}