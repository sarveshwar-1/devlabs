"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
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

interface User {
  id: string;
  name: string;
  email: string;
}

interface TeamDialogProps {
  team?: any; // Add proper type for existing team data
  mode?: "create" | "update";
  onSuccess?: () => void;
}

export function CreateTeamDialog({
  team,
  mode = "create",
  onSuccess,
}: TeamDialogProps) {
  const { data: session } = useSession();
  const [teamMembers, setTeamMembers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<User[]>([]);
  const [teamData, setTeamData] = useState({
    name: team?.name || "",
    description: team?.description || "",
    class: team?.class || "",
    semester: team?.semester || "",
  });

  useEffect(() => {
    // Set current user as default member
    if (session?.user && mode === "create") {
      setTeamMembers([
        {
          id: session.user.id,
          name: session.user.name || "",
          email: session.user.email || "",
        },
      ]);
    }

    if (team && mode === "update") {
      setTeamMembers(team.members.map((m: any) => m.user));
    }
  }, [session, team, mode]);

  const searchUsers = async (query: string) => {
    if (query.length < 2) return;
    try {
      const response = await fetch(`/api/users/search?query=${query}`);
      const { users } = await response.json(); // Destructure users from response
      setSearchResults(
        users.filter(
          (user: User) => !teamMembers.find((member) => member.id === user.id)
        )
      );
    } catch (error) {
      console.error("Failed to search users:", error);
      setSearchResults([]);
    }
  };

  const handleSubmit = async () => {
    try {
      if (!teamData.name.trim()) {
        toast.error("Team name is required");
        return;
      }

      if (!teamData.class.trim()) {
        toast.error("Class is required");
        return;
      }

      if (!teamData.semester.trim()) {
        toast.error("Semester is required");
        return;
      }

      if (teamMembers.length < 1) {
        toast.error("At least one team member is required");
        return;
      }

      const endpoint = "/api/team";
      const method = mode === "create" ? "POST" : "PUT";

      const response = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: team?.id,
          name: teamData.name.trim(),
          description: teamData.description.trim(),
          class: teamData.class.trim(),
          semester: teamData.semester.trim(),
          memberIds: teamMembers.map((member) => member.id),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to save team");
      }

      toast.success(
        `Team ${mode === "create" ? "created" : "updated"} successfully`
      );
      onSuccess?.();
      setTeamData({ name: "", description: "", class: "", semester: "" });
      setTeamMembers([]);
    } catch (error: any) {
      console.error("Submit error:", error);
      toast.error(error.message || "Failed to save team");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mt-5 mb-5">
          {mode === "create" ? "Create Team" : "Update Team"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {mode === "create" ? "Create New Team" : "Update Team"}
          </DialogTitle>
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
            <Input
              placeholder="Class"
              value={teamData.class}
              onChange={(e) =>
                setTeamData({ ...teamData, class: e.target.value })
              }
            />
          </div>
          <div className="space-y-2">
            <Input
              placeholder="Semester"
              value={teamData.semester}
              onChange={(e) =>
                setTeamData({ ...teamData, semester: e.target.value })
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
            <Input
              placeholder="Search members by name or email..."
              value={searchQuery}
              onChange={(e) => {
                const value = e.target.value;
                setSearchQuery(value);
                if (value.length >= 2) {
                  searchUsers(value);
                } else {
                  setSearchResults([]);
                }
              }}
            />

            {searchQuery.length >= 2 &&
              (searchResults.length > 0 ? (
                <div className="border rounded-md p-2 max-h-48 overflow-y-auto">
                  {searchResults.map((user) => (
                    <div
                      key={user.id}
                      className="flex justify-between items-center p-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => {
                        setTeamMembers([...teamMembers, user]);
                        setSearchQuery("");
                        setSearchResults([]);
                      }}
                    >
                      <span>{user.name}</span>
                      <span className="text-sm text-gray-500">
                        {user.email}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-sm text-gray-500 p-2">No users found</div>
              ))}

            {teamMembers.map((member) => (
              <div key={member.id} className="flex items-center gap-2">
                <div className="flex-1">
                  <span>{member.name}</span>
                  <span className="text-sm text-gray-500 ml-2">
                    {member.email}
                  </span>
                </div>
                {member.id !== session?.user?.id && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      setTeamMembers(
                        teamMembers.filter((m) => m.id !== member.id)
                      );
                    }}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
          </div>

          <Button onClick={handleSubmit}>
            {mode === "create" ? "Create Team" : "Update Team"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
