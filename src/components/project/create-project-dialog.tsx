"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

type Team = {
  id: number;
  name: string;
};

type Repository = {
  name: string;
  full_name: string;
};
type Mentor = {
  id: string;
  user: {
    name: string;
  };
};

export function CreateProjectDialog() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const [teams, setTeams] = useState<Team[]>([]);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    repository: "",
    teamId: "",
    mentorIds: [] as string[], // Changed to array
  });

  useEffect(() => {
    // Fetch teams
    const fetchTeams = async () => {
      const response = await fetch("/api/team");
      const data = await response.json();
      setTeams(data);
    };

    // Fetch repositories
    const fetchRepos = async () => {
      if (!session?.githubToken) return;
      const response = await fetch("https://api.github.com/user/repos", {
        headers: { Authorization: `Bearer ${session.githubToken}` },
      });
      const data = await response.json();
      setRepositories(data);
    };
    //Fetch mentors
    const fetchMentors = async () => {
      const response = await fetch("/api/mentor");
      const data = await response.json();
      setMentors(data);
    };

    fetchTeams();
    fetchRepos();
    fetchMentors();
  }, [session]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/project", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          status: "PENDING",
          teamId: formData.teamId,
          mentorIds: formData.mentorIds,
        }),
      });

      if (response.ok) {
        setOpen(false);
        // You might want to refresh the projects list here
        window.location.reload();
      }
    } catch (error) {
      console.error("Failed to create project:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="mt-5">Create Project</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Project</DialogTitle>
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
                <SelectValue placeholder="Select repository" />
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
              value={formData.teamId}
              onValueChange={(value) =>
                setFormData({ ...formData, teamId: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select team" />
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
                      <SelectValue placeholder="Select mentor" />
                    </SelectTrigger>
                    <SelectContent>
                      {mentors.map((mentor) => (
                        <SelectItem key={mentor.id} value={mentor.id}>
                          {mentor.user.name}
                        </SelectItem>
                      ))}
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
          <Button type="submit">Create Project</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
