'use client'
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";

export function CreateTeamDialog() {
  const [teamMembers, setTeamMembers] = useState<string[]>([]);
  const [teamData, setTeamData] = useState({
    name: "",
    description: "",
  });

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/team", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: teamData.name,
          description: teamData.description,
          members: teamMembers,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create team");
      }

      // Reset form and close dialog
      setTeamData({ name: "", description: "" });
      setTeamMembers([]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full mt-5 mb-5">Create Team</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Team</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Input
              placeholder="Team Name"
              value={teamData.name}
              onChange={(e) =>
                setTeamData({ ...teamData, name: e.target.value })
              }
            />
          </div>
          <div className="space-y-2">
            <Textarea
              placeholder="Team Description"
              value={teamData.description}
              onChange={(e) =>
                setTeamData({ ...teamData, description: e.target.value })
              }
            />
          </div>
          <div className="space-y-2">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex items-center gap-2">
                <Input
                  placeholder="Member RollNo"
                  value={member}
                  onChange={(e) => {
                    const newMembers = [...teamMembers];
                    newMembers[index] = e.target.value;
                    setTeamMembers(newMembers);
                  }}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setTeamMembers(teamMembers.filter((_, i) => i !== index));
                  }}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button
              variant="outline"
              onClick={() => setTeamMembers([...teamMembers, ""])}
            >
              Add Team Member
            </Button>
          </div>
          <Button onClick={handleSubmit}>Create Team</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}