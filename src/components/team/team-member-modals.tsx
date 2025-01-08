import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { UserCircle } from "lucide-react";

const TeamMembersModal = ({ open, onOpenChange, team }) => {
  if (!team) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xl transition-all duration-200">
        <DialogHeader className="border-b border-gray-200 dark:border-gray-800 pb-4">
          <DialogTitle className="text-2xl font-bold text-black dark:text-white tracking-tight">
            {team.name} - Team Members
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="mt-4 max-h-[60vh] pr-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {team.members.map((member, index) => (
              <Card
                key={member.user.rollNo}
                className="group hover:shadow-md transition-all duration-300 transform hover:scale-102 
                         bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700
                         animate-fade-in-up"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-3">
                    <UserCircle className="w-8 h-8 text-blue-500 dark:text-blue-400" />
                    <CardTitle className="text-lg font-semibold text-black dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                      {member.user.name}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <p className="flex items-center space-x-2">
                      <span className="font-medium">Roll Number:</span>
                      <span>{member.user.rollNo}</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default TeamMembersModal;
