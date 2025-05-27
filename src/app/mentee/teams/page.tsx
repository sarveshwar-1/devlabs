"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
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
import { Search, Plus } from "lucide-react";
import Jointeam from "@/components/team/join-team";
import { Alert } from "@/components/ui/alert";

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
  const { data: session } = useSession();
  const [teams, setTeams] = useState<Team[]>([]);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [isGloballyFrozen, setIsGloballyFrozen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setMounted(true);
    checkGlobalFreezeStatus();
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      const res = await fetch("/api/team");
      const data = await res.json();
      setTeams(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching teams:", error);
      setTeams([]);
      toast({
        title: "Error",
        description: "Failed to fetch teams",
        variant: "destructive",
      });
    }
  };

  const checkGlobalFreezeStatus = async () => {
    try {
      const res = await fetch("/api/team/global-freeze");
      const { isGloballyFrozen } = await res.json();
      setIsGloballyFrozen(isGloballyFrozen);
    } catch (error) {
      console.error("Error checking global freeze status:", error);
      toast({
        title: "Error",
        description: "Failed to check global freeze status",
        variant: "destructive",
      });
    }
  };

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
      toast({
        title: "Success",
        description: "Team deleted successfully",
      });
    } catch (error) {
      console.error("Error deleting team:", error);
      alert(error.message || "Failed to delete team");
    }
  };

  const filteredTeams = teams.filter(
    (team) =>
      team.name.toLowerCase().includes(search.toLowerCase()) ||
      team.description?.toLowerCase().includes(search.toLowerCase())
  );

  const canEditTeam = (team: Team) => {
    const isTeamLeader = team.teamLeaderId === session?.user?.id;
    return isTeamLeader && !team.freezed;
  };

  return (
    <div
      className={`min-h-screen bg-white dark:bg-gray-950 text-black dark:text-white 
                     transition-all duration-300 ${
                       mounted ? "opacity-100" : "opacity-0"
                     }`}
    >
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold tracking-tight">Teams</h1>
          {!isGloballyFrozen && (
            <div className="flex gap-3">
              <Button
                onClick={() => {
                  setSelectedTeam(null);
                  setIsModalOpen(true);
                }}
                className="bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-black transition-all duration-200 transform hover:scale-102 shadow-sm hover:shadow-md flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Create Team
              </Button>
              <Jointeam />
            </div>
          )}
        </div>

        {/* Search Section */}
        <div className="relative max-w-md mb-8 animate-fade-in-up">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500"
          />
          <Input
            placeholder="Search teams..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800 focus:border-black dark:focus:border-white focus:ring-1 focus:ring-black dark:focus:ring-white transition-all duration-200"
          />
        </div>

        {/* Table Section */}
        <div
          className="rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm animate-fade-in-up delay-100"
        >
          <Table>
            <TableHeader>
              <TableRow
                className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800"
              >
                <TableHead className="font-semibold">Name</TableHead>
                <TableHead className="font-semibold">Description</TableHead>
                <TableHead className="font-semibold">Members</TableHead>
                <TableHead className="font-semibold">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTeams.map((team, index) => (
                <TableRow
                  key={team.id}
                  className="animate-fade-in-up border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-200"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <TableCell className="font-medium">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger
                          className="cursor-help hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                        >
                          {team.name}
                        </TooltipTrigger>
                        <TooltipContent
                          className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 shadow-lg"
                        >
                          <p>Join Code: {team.joinCode}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </TableCell>
                  <TableCell className="text-gray-600 dark:text-gray-300">
                    {team.description}
                  </TableCell>
                  <TableCell className="text-gray-600 dark:text-gray-300">
                    {team.members.length}
                  </TableCell>
                  <TableCell>
                    {canEditTeam(team) && (
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setSelectedTeam(team);
                            setIsModalOpen(true);
                          }}
                          className="hover:bg-gray-50 dark:hover:bg-gray-900 hover:border-black dark:hover:border-white transition-all duration-200"
                        >
                          Edit
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDelete(team.id)}
                          className="bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 text-white dark:text-black transition-all duration-200"
                        >
                          Delete
                        </Button>
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {filteredTeams.length === 0 && (
            <div className="text-center py-12 text-gray-500 dark:text-gray-400 animate-fade-in">
              <p>
                No teams found. Try adjusting your search or create a new team.
              </p>
            </div>
          )}
        </div>
      </div>

      <TeamModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        team={selectedTeam}
        onSuccess={fetchTeams}
      />

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
