"use client";

import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

type Mentor = {
  id: string;
  user: {
    id: string;
    name: string;
  };
};

type Team = {
  id: number;
  name: string;
};

type Repository = {
  name: string;
  full_name: string;
};

type Project = {
  id: number;
  title: string;
  description?: string;
  repository: string;
  status: string;
  isPrivate?: boolean;
  team: Team;
  mentor: Mentor[];
};

interface EditProjectDialogProps {
  project: Project;
  fetchProject: () => void;
}

interface FormData {
  title: string;
  description: string;
  repository: string;
  teamId: number;
  mentorIds: string[];
  isPrivate: boolean;
}

export function EditProjectDialog({ project,fetchProject }: EditProjectDialogProps) {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const [teams, setTeams] = useState<Team[]>([]);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [formData, setFormData] = useState<FormData>({
    title: project.title,
    description: project.description || "",
    repository: project.repository,
    teamId: project.team.id,
    mentorIds: project.mentor.map((m) => m.id), // Use mentor.id instead of m.user.id
    isPrivate: project.isPrivate || false,
  });
  const router = useRouter();

  useEffect(() => {
    if (open) {
      const fetchTeams = async () => {
        const response = await fetch("/api/team");
        const data = await response.json();
        setTeams(data);
      };
      const fetchRepos = async () => {
        if (!session?.githubToken) return;
        const response = await fetch(
          "/api/github/repo?githubToken=" + session.githubToken
        );
        const data = await response.json();
        setRepositories(data);
      };
      const fetchMentors = async () => {
        const response = await fetch("/api/mentor");
        const data = await response.json();
        setMentors(data);
      };

      fetchTeams();
      fetchRepos();
      fetchMentors();
    }
  }, [open, session?.githubToken]);

  // Helper function to get mentor name by ID
  const getMentorName = (mentorId: string) => {
    const mentor = mentors.find((m) => m.id === mentorId);
    return mentor ? mentor.user.name : "Select mentor";
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/project`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: project.id,
          ...formData,
        }),
      });

      if (!response.ok) throw new Error("Failed to update project");
      fetchProject()
      setOpen(false);
    } catch (error) {
      console.error("Failed to update project:", error);
    }
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this project?")) return;

    try {
      const response = await fetch(`/api/project`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: project.id }),
      });

      if (!response.ok) throw new Error("Failed to delete project");
      fetchProject();
    } catch (error) {
      console.error("Failed to delete project:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div style={{ display: "none" }}>
        <pre>
          {JSON.stringify(
            {
              projectMentors: project.mentor,
              currentMentors: mentors,
              formDataMentorIds: formData.mentorIds,
            },
            null,
            2
          )}
        </pre>
      </div>
      <div className="flex space-x-2">
        <DialogTrigger asChild>
          <Button variant="ghost" size="icon">
            <Pencil className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <Button variant="ghost" size="icon" onClick={handleDelete}>
          <Trash2 className="h-4 w-4 text-red-500" />
        </Button>
      </div>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Project</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Project Name</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="repository">Repository</Label>
            <Select
              value={formData.repository}
              onValueChange={(value) =>
                setFormData({ ...formData, repository: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select repository">
                  {repositories.find((r) => r.full_name === formData.repository)
                    ?.name || formData.repository}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {repositories.map((repo) => (
                  <SelectItem key={repo.full_name} value={repo.full_name}>
                    {repo.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="team">Team</Label>
            <Select
              value={formData.teamId.toString()}
              onValueChange={(value) =>
                setFormData({ ...formData, teamId: parseInt(value) })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select team">
                  {teams.find((t) => t.id === formData.teamId)?.name ||
                    "Select team"}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {teams.map((team) => (
                  <SelectItem key={team.id} value={team.id.toString()}>
                    {team.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="mentors">Mentors</Label>
            <div className="space-y-2">
              {formData.mentorIds.map((mentorId, index) => (
                <div key={index} className="flex gap-2">
                  <Select
                    value={mentorId}
                    onValueChange={(value) => {
                      const newMentorIds = [...formData.mentorIds];
                      newMentorIds[index] = value;
                      setFormData({ ...formData, mentorIds: newMentorIds });
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select mentor">
                        {getMentorName(mentorId)}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {mentors.map((mentor) => {
                        return (
                          <SelectItem key={mentor.id} value={mentor.id}>
                            {mentor.user.name}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={() => {
                      const newMentorIds = formData.mentorIds.filter(
                        (_, i) => i !== index
                      );
                      setFormData({ ...formData, mentorIds: newMentorIds });
                    }}
                  >
                    Remove
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={() =>
                  setFormData({
                    ...formData,
                    mentorIds: [...formData.mentorIds, ""],
                  })
                }
              >
                Add Mentor
              </Button>
            </div>
          </div>

          <Button type="submit">Save Changes</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
