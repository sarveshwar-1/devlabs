"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function TeamModal({ open, onOpenChange, team, onSuccess }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [maxMembers, setMaxMembers] = useState(team?.maxMembers || 4);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);

  useEffect(() => {
    if (team) {
      setName(team.name);
      setDescription(team.description || "");
      setMaxMembers(team.maxMembers || 4);
      setSelectedMembers(
        team.members.map((m) => ({
          id: m.id,
          name: m.user.name,
          email: m.user.email,
        }))
      );
    } else {
      setName("");
      setDescription("");
      setMaxMembers(4);
      setSelectedMembers([]);
    }
  }, [team]);

  const searchUsers = async (query) => {
    if (query.length < 2) {
      setSearchResults([]);
      return;
    }
    try {
      const res = await fetch(`/api/users/search?query=${query}`);
      const data = await res.json();
      // Filter out already selected members
      setSearchResults(
        data.users.filter(
          (user) => !selectedMembers.some((member) => member.id === user.id)
        )
      );
    } catch (error) {
      console.error("Failed to search users:", error);
      setSearchResults([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = team ? "PUT" : "POST";
    const body = {
      ...(team && { id: team.id }),
      name,
      description,
      maxMembers: parseInt(maxMembers),
      memberIds: selectedMembers.map((m) => m.id),
    };

    await fetch("/api/team", {
      method,
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });

    onSuccess();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{team ? "Edit Team" : "Create Team"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="maxMembers">Maximum Team Size</Label>
            <Input
              id="maxMembers"
              type="number"
              min="2"
              max="10"
              value={maxMembers}
              onChange={(e) => setMaxMembers(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label>Members</Label>
            <Input
              placeholder="Search members..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                searchUsers(e.target.value);
              }}
            />

            {searchQuery.length >= 2 && searchResults.length > 0 && (
              <div className="border rounded-md p-2 max-h-48 overflow-y-auto">
                {searchResults.map((user) => (
                  <div
                    key={user.id}
                    className="flex justify-between items-center p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSelectedMembers([...selectedMembers, user]);
                      setSearchQuery("");
                      setSearchResults([]);
                    }}
                  >
                    <span>{user.name}</span>
                    <span className="text-sm text-gray-500">{user.email}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="space-y-2 mt-2">
              {selectedMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center justify-between p-2 border rounded-md"
                >
                  <div>
                    <span>{member.name}</span>
                    <span className="text-sm text-gray-500 ml-2">
                      {member.email}
                    </span>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() =>
                      setSelectedMembers(
                        selectedMembers.filter((m) => m.id !== member.id)
                      )
                    }
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
          <Button type="submit" className="w-full">
            {team ? "Update" : "Create"} Team
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
