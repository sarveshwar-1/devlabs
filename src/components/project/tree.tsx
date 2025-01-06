"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitCommit, MessageCircle, Clock, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface Commit {
  user: string;
  message: string;
  timestamp: string;
}

interface CommitTreeProps {
  commits: Commit[];
}

export function CommitTree({ commits }: CommitTreeProps) {
  const [activeCommitId, setActiveCommitId] = React.useState<string | null>(
    null
  );

  const getPatternStyle = (str: string) => {
    const patterns = [
      "bg-gradient-to-br from-white/20 to-white/10",
      "bg-gradient-to-br from-white/25 to-white/15",
      "bg-gradient-to-br from-white/30 to-white/20",
    ];
    const hash = str
      .split("")
      .reduce((acc, char) => char.charCodeAt(0) + acc, 0);
    return patterns[hash % patterns.length];
  };

  return (
    <div className="relative w-full">
      {commits.map((commit, index) => {
        const commitId = `${commit.user}-${commit.timestamp}`;
        const isActive = activeCommitId === commitId;

        return (
          <motion.div
            key={commitId}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="mb-4"
          >
            <motion.div
              className={cn(
                "relative flex items-start gap-4 p-4 rounded-xl border transition-all duration-300 cursor-pointer",
                "backdrop-blur-sm border-pink-500",
                isActive
                  ? "bg-neutral-500/10 border-pink-300"
                  : "bg-neutral-500/5 hover:bg-neutral-500/10"
              )}
              whileHover={{ scale: 1.02, translateX: 8 }}
              onClick={() => setActiveCommitId(isActive ? null : commitId)}
              layout
            >
              <motion.div
                className={cn(
                  "relative flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-pink-300 dark:bg-pink-600",
                  getPatternStyle(commit.user)
                )}
                whileHover={{ scale: 1.1, rotate: 180 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <GitCommit className="w-4 h-4 text-neutral-600 dark:text-neutral-900" />
              </motion.div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                    <span className="font-medium text-neutral-800 dark:text-neutral-200">
                      {commit.user}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-neutral-600 dark:text-neutral-400">
                    <Clock className="w-4 h-4" />
                    {commit.timestamp}
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <MessageCircle className="w-4 h-4 mt-0.5 text-neutral-600 dark:text-neutral-400" />
                  <p className="text-sm text-neutral-700 dark:text-neutral-300 line-clamp-2">
                    {commit.message}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default CommitTree;
