"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState, useEffect } from "react";
import { TeamModal } from "./team-modal";
import { useSession } from "next-auth/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Jointeam from "@/components/team/join-team";

export default function TeamsPage() {
  const { data: session } = useSession();
  const [teams, setTeams] = useState([]);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchTeams = async () => {
    try {
      const res = await fetch("/api/team");
      const data = await res.json();
      setTeams(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching teams:", error);
      setTeams([]);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this team?")) return;

    try {
      const res = await fetch("/api/team", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to delete team");
      }

      await fetchTeams();
      // You might want to add a toast notification here for success
    } catch (error) {
      console.error("Error deleting team:", error);
      alert(error.message);
      // You might want to add a toast notification here for error
    }
  };

  const filteredTeams = teams.filter(
    (team) =>
      team.name.toLowerCase().includes(search.toLowerCase()) ||
      team.description?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Teams</h1>
        <div className="flex gap-2">
          <Button
            onClick={() => {
              setSelectedTeam(null);
              setIsModalOpen(true);
            }}
          >
            Create Team
          </Button>
          <Jointeam />
        </div>
      </div>

      <Input
        placeholder="Search teams..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="max-w-sm mb-6"
      />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Members</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredTeams.map((team) => (
            <TableRow key={team.id}>
              <TableCell>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="cursor-help">
                      {team.name}
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Join Code: {team.joinCode}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableCell>
              <TableCell>{team.description}</TableCell>
              <TableCell>{team.members.length}</TableCell>
              <TableCell className="flex gap-2">
                {team.teamLeaderId === session?.user?.id && (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setSelectedTeam(team);
                        setIsModalOpen(true);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(team.id)}
                    >
                      Delete
                    </Button>
                  </>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <TeamModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        team={selectedTeam}
        onSuccess={fetchTeams}
      />
    </div>
  );
}
