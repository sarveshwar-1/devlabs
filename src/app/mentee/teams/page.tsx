'use client';

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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useSession } from "next-auth/react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Add useDebounce hook implementation
function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay);
        return () => clearTimeout(timer);
    }, [value, delay]);

    return debouncedValue;
}

export default function TeamsPage() {
    const { data: session } = useSession();
    const [teams, setTeams] = useState<any[]>([]); // Initialize as empty array with type
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("name");
    const [order, setOrder] = useState("asc");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTeam, setSelectedTeam] = useState(null);
    const debouncedSearch = useDebounce(search, 500);

    const fetchTeams = async () => {
        try {
            const params = new URLSearchParams({
                query: debouncedSearch,
                sort,
                order,
            });
            const res = await fetch(`/api/mentee/teams?${params}`);
            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Failed to fetch teams');
            }

            setTeams(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error('Error fetching teams:', error);
            setTeams([]);
        }
    };

    useEffect(() => {
        fetchTeams();
    }, [debouncedSearch, sort, order]);

    const handleDelete = async (id) => {
        if (confirm("Are you sure you want to delete this team?")) {
            await fetch("/api/mentee/teams", {
                method: "DELETE",
                body: JSON.stringify({ id }),
            });
            fetchTeams();
        }
    };

    const isTeamLeader = (team) => {
        return team.teamLeader.id === session?.user?.id;
    };

    return (
        <div className="container mx-auto py-10">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Teams</h1>
                <Button onClick={() => {
                    setSelectedTeam(null);
                    setIsModalOpen(true);
                }}>
                    Create Team
                </Button>
            </div>

            <div className="flex gap-4 mb-6">
                <Input
                    placeholder="Search teams..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="max-w-xs"
                />
                <Select value={sort} onValueChange={setSort}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="name">Name</SelectItem>
                        <SelectItem value="createdAt">Created Date</SelectItem>
                    </SelectContent>
                </Select>
                <Select value={order} onValueChange={setOrder}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Order" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="asc">Ascending</SelectItem>
                        <SelectItem value="desc">Descending</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>No of Members</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {teams.map((team) => (
                        <TableRow key={team.id}>
                            <TableCell>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger className="cursor-help">
                                            {team.name}
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Join Code: <span className="font-mono">{team.joinCode}</span></p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </TableCell>
                            <TableCell>{team.description}</TableCell>
                            <TableCell>
                                {team.members.length}
                            </TableCell>
                            <TableCell className="flex gap-2">
                                {
                                    isTeamLeader(team) && (
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
                                    )
                                }
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
