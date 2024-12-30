import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  AlertCircle,
  ChevronRight,
  CalendarDays,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: string;
}

interface TaskListProps {
  tasks: Task[];
}

export function TaskList({ tasks }: TaskListProps) {
  const [activeTaskId, setActiveTaskId] = React.useState<string | null>(null);

  const getStatusColor = (status: string) => {
    switch (status.toUpperCase()) {
      case "COMPLETED":
        return "bg-green-300 dark:bg-green-600";
      case "IN_PROGRESS":
        return "bg-blue-300 dark:bg-blue-600";
      case "PENDING":
        return "bg-amber-300 dark:bg-amber-600";
      default:
        return "bg-gray-300 dark:bg-gray-600";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status.toUpperCase()) {
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
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="relative w-full">
      <AnimatePresence>
        {tasks.map((task, index) => {
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
                onClick={() => setActiveTaskId(isActive ? null : task.id)}
                layout
              >
                <motion.div
                  className={cn(
                    "relative flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
                    getStatusColor(task.status)
                  )}
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  {getStatusIcon(task.status)}
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
                        className="mt-4 pt-4 border-t border-neutral-500/20"
                      >
                        <div className="text-sm text-neutral-600 dark:text-neutral-400">
                          <div className="space-y-2">
                            <p className="font-semibold text-neutral-800 dark:text-neutral-200 mb-3">
                              Task Details
                            </p>
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
