"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Search, UserX, Lock, Check } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

type Mentor = {
  id: string;
  user: {
    name: string;
    email: string;
    rollNo: string;
  };
};

export default function MentorsPage() {
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [mounted, setMounted] = useState(false);
  const [selectedMentors, setSelectedMentors] = useState<string[]>([]);
  const [isPasswordResetDialogOpen, setIsPasswordResetDialogOpen] =
    useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [passwordResetConfirmation, setPasswordResetConfirmation] =
    useState(false);
  const { toast } = useToast();

  const fetchMentors = useCallback(async () => {
    try {
      const response = await fetch("/api/admin/mentors");
      if (!response.ok) {
        throw new Error("Failed to fetch mentors");
      }
      const data = await response.json();
      setMentors(data);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch mentors",
        variant: "destructive",
      });
    }
  }, [toast]);

  useEffect(() => {
    setMounted(true);
    fetchMentors();
  }, [fetchMentors]);

  const filteredMentors = mentors.filter(
    (mentor) =>
      mentor.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.user.rollNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectMentor = (mentorId: string) => {
    setSelectedMentors((prev) =>
      prev.includes(mentorId)
        ? prev.filter((id) => id !== mentorId)
        : [...prev, mentorId]
    );
  };

  const handleSelectAllMentors = () => {
    if (selectedMentors.length === filteredMentors.length) {
      setSelectedMentors([]);
    } else {
      setSelectedMentors(filteredMentors.map((mentor) => mentor.id));
    }
  };

  const handleBulkDelete = async () => {
    if (selectedMentors.length === 0) {
      toast({
        title: "Error",
        description: "No mentors selected",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch("/api/admin/mentors/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mentorIds: selectedMentors }),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Success",
          description: `${result.count} mentor(s) deleted`,
        });
        await fetchMentors(); // Refresh the list
        setSelectedMentors([]);
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to delete mentors",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Network error. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleBulkResetPasswords = async () => {
    setIsPasswordResetDialogOpen(true);
  };

  const confirmPasswordReset = async () => {
    if (selectedMentors.length === 0) {
      toast({
        title: "Error",
        description: "No mentors selected",
        variant: "destructive",
      });
      setIsPasswordResetDialogOpen(false);
      return;
    }

    try {
      setIsDeleting(true);
      const response = await fetch("/api/admin/mentors/reset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mentorIds: selectedMentors }),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Success",
          description: `Password reset for ${result.count} mentor(s)`,
        });
        setSelectedMentors([]);

        // Trigger password reset confirmation popup
        setPasswordResetConfirmation(true);

        // Auto-dismiss the confirmation after 3 seconds
        setTimeout(() => {
          setPasswordResetConfirmation(false);
        }, 3000);
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to reset passwords",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Network error. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsDeleting(false);
      setIsPasswordResetDialogOpen(false);
    }
  };

  return (
    <div
      className={`min-h-screen bg-white dark:bg-black transition-colors duration-300 ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold text-black dark:text-white tracking-tight">
            Faculty Management
          </h1>
        </div>

        <div className="flex justify-between items-center gap-4 mb-8 animate-fade-in-up">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search by ID, name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white dark:bg-black border-gray-200 dark:border-gray-800 
                       text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500
                       focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 
                       transition-all duration-200"
            />
          </div>
        </div>

        {/* Bulk Action Buttons */}
        <div className="flex gap-4 mb-4 animate-fade-in-up">
          <Button
            variant="destructive"
            onClick={handleBulkDelete}
            disabled={selectedMentors.length === 0}
          >
            <UserX className="w-4 h-4 mr-2" />
            Delete Selected Faculty
          </Button>
          <Button
            variant="ghost"
            onClick={handleBulkResetPasswords}
            disabled={selectedMentors.length === 0}
          >
            <Lock className="w-4 h-4 mr-2" />
            Reset Passwords
          </Button>
          <span className="text-gray-500 self-center">
            {selectedMentors.length} mentor(s) selected
          </span>
        </div>

        <div
          className="rounded-xl border border-gray-200 dark:border-gray-800 
                       shadow-sm hover:shadow-md transition-shadow duration-300
                       animate-fade-in-up delay-100"
        >
          <Table>
            <TableHeader>
              <TableRow className="border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                <TableHead className="w-[50px]">
                  <Checkbox
                    className="border-black dark:border-white"
                    checked={
                      filteredMentors.length > 0 &&
                      selectedMentors.length === filteredMentors.length
                    }
                    onCheckedChange={handleSelectAllMentors}
                    aria-label="Select all mentors"
                  />
                </TableHead>
                <TableHead className="text-black dark:text-white font-semibold">
                  ID
                </TableHead>
                <TableHead className="text-black dark:text-white font-semibold">
                  Name
                </TableHead>
                <TableHead className="text-black dark:text-white font-semibold">
                  Email
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMentors.map((mentor, index) => (
                <TableRow
                  key={mentor.id}
                  className={`cursor-default border-gray-200 dark:border-gray-800 
                            hover:bg-gray-50 dark:hover:bg-gray-900
                            transition-all duration-200 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <TableCell>
                    <Checkbox
                      className="border-black dark:border-white"
                      checked={selectedMentors.includes(mentor.id)}
                      onCheckedChange={() => handleSelectMentor(mentor.id)}
                      aria-label={`Select ${mentor.user.name}`}
                    />
                  </TableCell>
                  <TableCell className="text-gray-600 dark:text-gray-300">
                    {mentor.user.rollNo}
                  </TableCell>
                  <TableCell className="text-black dark:text-white font-medium">
                    {mentor.user.name}
                  </TableCell>
                  <TableCell className="text-gray-600 dark:text-gray-300">
                    {mentor.user.email}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {filteredMentors.length === 0 && (
            <div className="text-center py-12 text-gray-500 dark:text-gray-400 animate-fade-in">
              <p>No faculty found. Try adjusting your search.</p>
            </div>
          )}
        </div>
      </div>

      {/* Password Reset Confirmation Dialog */}
      <Dialog
        open={isPasswordResetDialogOpen}
        onOpenChange={setIsPasswordResetDialogOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Password Reset</DialogTitle>
            <DialogDescription>
              Are you sure you want to reset passwords for{" "}
              {selectedMentors.length} mentor(s)? Their new password will be set
              to 'user@123'.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsPasswordResetDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={confirmPasswordReset}
              disabled={isDeleting}
            >
              {isDeleting ? "Resetting..." : "Reset Passwords"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Password Reset Confirmation Popup */}
      {passwordResetConfirmation && (
        <div
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 
                     bg-green-500 text-white px-6 py-3 rounded-lg 
                     shadow-lg flex items-center 
                     animate-slide-up z-50"
        >
          <Check className="w-5 h-5 mr-2" />
          Passwords reset successfully for Mentors{" "}
          mentor(s)
        </div>
      )}

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

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translate(-50%, 100%);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }

        .animate-slide-up {
          animation: slideUp 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
