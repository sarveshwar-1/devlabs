"use client";
import TeamMembersModal from "@/components/team/team-member-modals";
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
import { TeamModal } from "@/components/team/team-modal";
import { useSession } from "next-auth/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
interface Team {
  id: number;
  name: string;
  description?: string;
  joinCode: string;
  teamLeaderId: string;
  freezed: boolean;
  members: {
    id: number;
    name: string;
  }[];
}

export default function TeamsPage() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [isMembersModalOpen, setIsMembersModalOpen] = useState(false);
  const [selectedTeamForMembers, setSelectedTeamForMembers] = useState(null);
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
  const handleFreeze = async (teamid: string) => {
    const updatedTeams = teams.map((team) => {
      if (team.id === teamid) {
        return { ...team, freezed: !team.freezed };
      }
      return team;
    });
    setTeams(updatedTeams);
    try {
      await fetch(`/api/team/freeze?teamid=${teamid}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          freezed: updatedTeams.find((team) => team.id === teamid)?.freezed 
        }),
      });
    } catch (error) {
      console.error("Error freezing team");
    }
  }

  const filteredTeams = teams.filter((team) =>
    (team.name || '').toLowerCase().includes(search.toLowerCase()) ||
    (team.description || '').toLowerCase().includes(search.toLowerCase())
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
            <TableRow
              key={team.id}
              className="cursor-pointer hover:bg-gray-500"
              onClick={() => {
                setSelectedTeamForMembers(team);
                setIsMembersModalOpen(true);
              }}
            >
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
                <Button 
                  onClick={(e) => {
                  e.stopPropagation();
                  handleFreeze(team.id);
                  }}
                  variant={team.freezed ? "destructive" : "ghost"}
                  size="sm"
                >
                  {team.freezed ? "Unfreeze" : "Freeze"}
                </Button>
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
      <TeamMembersModal
        open={isMembersModalOpen}
        onOpenChange={setIsMembersModalOpen}
        team={selectedTeamForMembers}
      />
    </div>
  );
}
