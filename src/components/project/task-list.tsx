"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EditTaskDialog } from "../tasks/edit-task-dialog";
import { useRouter } from "next/navigation";
import {
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  CalendarDays,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Status } from "@prisma/client";
import { useSession } from "next-auth/react";

interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: Status;
}

interface TaskListProps {
  tasks: Task[];
  onTaskSelect?: (task: Task) => void;
  selectedTaskId?: string;
  project?: any;
  user?: any;
}

export function TaskList({ tasks: tasksProps }: TaskListProps) {
  const [activeTaskId, setActiveTaskId] = React.useState<string | null>(null);
  const { data: session } = useSession();
  const tasks = Array.isArray(tasksProps) ? tasksProps : tasksProps.tasks || [];
  const router = useRouter();

  const RedirectTask = (taskid: string, role1: string) => {
    router.push("/" + role1 + "/task/" + taskid);
  };

  const getStatusColor = (status: Status) => {
    switch (status) {
      case "COMPLETED":
        return "bg-green-300 dark:bg-green-600";
      case "PENDING":
        return "bg-amber-300 dark:bg-amber-600";
      default:
        return "bg-gray-300 dark:bg-gray-600";
    }
  };

  const getStatusIcon = (status: Status) => {
    switch (status) {
      case "COMPLETED":
        return (
          <CheckCircle2 className="w-4 h-4 text-neutral-600 dark:text-neutral-900" />
        );
      case "PENDING":
        return (
          <AlertCircle className="w-4 h-4 text-neutral-600 dark:text-neutral-900" />
        );
      default:
        return (
          <ChevronRight className="w-4 h-4 text-neutral-600 dark:text-neutral-900" />
        );
    }
  };

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return "Invalid Date";
      }
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch (error) {
      console.error("Date formatting error:", error);
      return "Invalid Date";
    }
  };

  if (!tasks || !tasks.length) {
    return (
      <div className="p-4 text-center text-neutral-600 dark:text-neutral-400">
        No tasks available
      </div>
    );
  }

  const handleTaskClick = (taskId: string, e: React.MouseEvent) => {
    // Only toggle if clicking on the main task area, not the details section
    if (!(e.target as HTMLElement).closest(".task-details")) {
      setActiveTaskId(activeTaskId === taskId ? null : taskId);
    }
  };

  return (
    <div className="relative w-full">
      <AnimatePresence>
        {tasks.map((task, index) => {
          if (!task || typeof task !== "object") {
            console.error("Invalid task object:", task);
            return null;
          }

          const isActive = activeTaskId === task.id;

          return (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <motion.div
                className={cn(
                  "relative flex items-start gap-4 p-4 rounded-xl border transition-all duration-300 cursor-pointer",
                  "backdrop-blur-sm border-cyan-500",
                  isActive
                    ? "bg-neutral-500/10 border-cyan-300"
                    : "bg-neutral-500/5 hover:bg-neutral-500/10"
                )}
                whileHover={{ scale: 1.02, translateX: 8 }}
                onClick={(e) => handleTaskClick(task.id, e)}
                onDoubleClick={() =>
                  RedirectTask(task.id, session?.user.role.toLowerCase())
                }
                layout
              >
                <motion.div
                  className={cn(
                    "relative flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
                    getStatusColor(task.status as Status)
                  )}
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  {getStatusIcon(task.status as Status)}
                </motion.div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-neutral-800 dark:text-neutral-200">
                      {task.title}
                    </span>
                    <div className="flex items-center gap-1.5 text-sm text-neutral-600 dark:text-neutral-400">
                      <CalendarDays className="w-4 h-4" />
                      {formatDate(task.dueDate)}
                    </div>
                  </div>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.15, ease: "easeInOut" }}
                        className="mt-4 pt-4 border-t border-neutral-500/20 task-details"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="text-sm text-neutral-600 dark:text-neutral-400">
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <p className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3">
                                Task Details
                              </p>
                              {
                                <EditTaskDialog
                                  task={task}
                                  userRole={session?.user.role}
                                  onTaskUpdated={() => {
                                    window.location.reload();
                                  }}
                                />
                              }
                            </div>
                            <p>{task.description}</p>
                            <p className="mt-2">
                              <span className="font-medium">Status: </span>
                              <span className="capitalize">
                                {task.status.toLowerCase().replace("_", " ")}
                              </span>
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export default TaskList;
