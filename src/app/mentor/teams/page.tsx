"use client";

import { useState, useEffect } from "react";
import TeamMembersModal from "@/components/team/team-member-modals";
import { TeamModal } from "@/components/team/team-modal";
import { Input } from "@/components/ui/input";
import { Search, Plus } from "lucide-react";
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
import { useSession } from "next-auth/react";

interface Team {
  id: number;
  name: string;
  description?: string;
  joinCode: string;
  teamLeaderId: string;
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
        </div>

        {/* Search Section */}
        <div className="relative max-w-md mb-8 animate-fade-in-up">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search teams..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 bg-white dark:bg-black border-gray-200 dark:border-gray-800  text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500
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
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Empty State */}
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

      {/* Add global styles for animations */}
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
