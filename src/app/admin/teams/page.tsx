"use client";

import { useState, useEffect, useCallback } from "react";
import TeamMembersModal from "@/components/team/team-member-modals";
import { TeamModal } from "@/components/team/team-modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Snowflake } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/components/ui/use-toast";

interface Team {
  id: string;
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
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [isMembersModalOpen, setIsMembersModalOpen] = useState(false);
  const [selectedTeamForMembers, setSelectedTeamForMembers] =
    useState<Team | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isGloballyFrozen, setIsGloballyFrozen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Memoize fetchTeams to prevent unnecessary recreations
  const fetchTeams = useCallback(async () => {
    try {
      const res = await fetch("/api/team");
      if (!res.ok) {
        throw new Error("Failed to fetch teams");
      }
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
  }, [toast]);

  // Handle successful team creation/update
  const handleTeamSuccess = useCallback(async () => {
    await fetchTeams();
    setIsModalOpen(false);
    toast({
      title: "Success",
      description: `Team ${selectedTeam ? "updated" : "created"} successfully`,
    });
  }, [fetchTeams, selectedTeam, toast]);

  useEffect(() => {
    setMounted(true);
    checkGlobalFreezeStatus();
    fetchTeams();
  }, [fetchTeams]);

  const checkGlobalFreezeStatus = async () => {
    try {
      const res = await fetch("/api/team/global-freeze");
      if (!res.ok) {
        throw new Error("Failed to check global freeze status");
      }
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

  const handleGlobalFreeze = async () => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      const res = await fetch("/api/team/global-freeze", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          globallyFrozen: !isGloballyFrozen,
        }),
      });

      if (!res.ok) throw new Error("Failed to update global freeze status");

      const { teams: updatedTeams, isGloballyFrozen: newFreezeStatus } =
        await res.json();
      setTeams(updatedTeams);
      setIsGloballyFrozen(newFreezeStatus);

      toast({
        title: "Success",
        description: `Teams ${
          newFreezeStatus ? "frozen" : "unfrozen"
        } successfully`,
      });
    } catch (error) {
      console.error("Error updating global freeze status:", error);
      toast({
        title: "Error",
        description: "Failed to update global freeze status",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleFreeze = async (teamId: string) => {
    try {
      const res = await fetch(`/api/team/freeze?teamid=${teamId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          freezed: !teams.find((team) => team.id === teamId)?.freezed,
        }),
      });

      if (!res.ok) throw new Error("Failed to update team freeze status");

      await fetchTeams(); // Fetch fresh data instead of optimistic update
      toast({
        title: "Success",
        description: "Team status updated successfully",
      });
    } catch (error) {
      console.error("Error freezing team:", error);
      toast({
        title: "Error",
        description: "Failed to update team status",
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
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const filteredTeams = teams.filter(
    (team) =>
      (team.name || "").toLowerCase().includes(search.toLowerCase()) ||
      (team.description || "").toLowerCase().includes(search.toLowerCase())
  );

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
            Teams
          </h1>
          <div className="flex gap-4">
            <Button
              onClick={handleGlobalFreeze}
              disabled={isLoading}
              className={`${
                isGloballyFrozen
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-blue-600 hover:bg-blue-700"
              } text-white transition-all duration-200 transform hover:scale-102 
              shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              <Snowflake
                className={`w-4 h-4 mr-2 ${isLoading ? "animate-spin" : ""}`}
              />
              {isGloballyFrozen ? "Global Unfreeze" : "Global Freeze"}
            </Button>
            <Button
              onClick={() => {
                setSelectedTeam(null);
                setIsModalOpen(true);
              }}
              className="bg-black hover:bg-gray-800 text-white dark:bg-white dark:text-black 
                       dark:hover:bg-gray-200 transition-all duration-200 transform hover:scale-102 
                       shadow-sm hover:shadow-md"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Team
            </Button>
          </div>
        </div>

        {/* Search Section */}
        <div className="relative max-w-md mb-8 animate-fade-in-up">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search teams..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
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
                <TableHead className="text-black dark:text-white font-semibold">
                  Name
                </TableHead>
                <TableHead className="text-black dark:text-white font-semibold">
                  Description
                </TableHead>
                <TableHead className="text-black dark:text-white font-semibold">
                  Members
                </TableHead>
                <TableHead className="text-black dark:text-white font-semibold">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTeams.map((team, index) => (
                <TableRow
                  key={team.id}
                  className={`cursor-pointer border-gray-200 dark:border-gray-800 
                            hover:bg-gray-50 dark:hover:bg-gray-900
                            transition-all duration-200 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => {
                    setSelectedTeamForMembers(team);
                    setIsMembersModalOpen(true);
                  }}
                >
                  <TableCell className="text-black dark:text-white font-medium">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className="cursor-help hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                          {team.name}
                        </TooltipTrigger>
                        <TooltipContent
                          className="bg-white dark:bg-black text-black dark:text-white 
                                                border border-gray-200 dark:border-gray-800 shadow-lg"
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
                    <div
                      className="flex gap-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Button
                        onClick={() => handleFreeze(team.id)}
                        variant={team.freezed ? "destructive" : "ghost"}
                        size="sm"
                        className={`transform hover:scale-105 transition-all duration-200 ${
                          team.freezed
                            ? "hover:bg-red-600"
                            : "hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                      >
                        {team.freezed ? "Unfreeze" : "Freeze"}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          setSelectedTeam(team);
                          setIsModalOpen(true);
                        }}
                        className="transform hover:scale-105 transition-all duration-200"
                      >
                        Edit
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDelete(team.id)}
                        className="transform hover:scale-105 transition-all duration-200"
                      >
                        Delete
                      </Button>
                    </div>
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

      {/* Modals */}
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
