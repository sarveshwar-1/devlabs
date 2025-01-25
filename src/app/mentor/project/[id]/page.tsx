"use client";

import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Calendar,
  Award,
  Book,
  Github,
  ExternalLink,
  Clock,
} from "lucide-react";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TaskList } from "@/components/project/task-list";
import { CreateTaskDialog } from "@/components/tasks/create-task-dialog";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface Mentor {
  id: string;
  user: {
    name: string;
  };
}

interface Team {
  id: string;
  name: string;
  description: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  repository: string;
  teamId: string;
  mentor: Mentor[];
  isPrivate: boolean;
  team: Team;
  isactive: boolean;
  githubtoken: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  githubToken: string;
}

interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function Page({ params }: { params: { id: string } }) {
  const [repoName, setRepoName] = useState<string | null>(null);
  const [project, setProject] = useState<Project | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const projectId = params.id;
  const router = useRouter();

  const handleEvaluate = () => {
    router.push(`/mentor/evaluation/${projectId}`);
  };

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch(`/api/tasks/${projectId}`);
      const data = await response.json();
      setTasks(data.tasks);
    };
    fetchTasks();
  }, [projectId]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/user");
        if (!response.ok) throw new Error("Failed to fetch user data");
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const fetchProject = async () => {
      const response = await fetch("/api/project/" + projectId);
      const data = await response.json();
      setProject(data);
      setRepoName(data.repository.split("/").pop());
    };
    fetchProject();
  }, [projectId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black p-8">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl mx-auto space-y-8"
      >
        {/* Header Section */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-2 text-center"
        >
          <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-500 to-indigo-500 text-transparent bg-clip-text">
            {repoName || "Loading..."}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Project Dashboard
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Project Details Card */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Card className="hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-0 shadow-lg">
              <CardHeader className="border-b border-gray-100 dark:border-gray-700">
                <CardTitle className="flex items-center justify-center gap-3 text-2xl">
                  <div className="p-2 rounded-lg bg-violet-100 dark:bg-violet-900/30">
                    <Book className="w-6 h-6 text-violet-500" />
                  </div>
                  Project Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid gap-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Project Title
                        </h3>
                        <p className="text-lg font-semibold mt-1 truncate">
                          {project?.title || "Loading..."}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Team
                        </h3>
                        <p className="text-lg font-semibold mt-1 truncate">
                          {project?.team?.name || "Loading..."}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Description
                        </h3>
                        <p className="mt-1 text-gray-800 dark:text-gray-200 line-clamp-3">
                          {project?.description || "Loading..."}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Mentors
                        </h3>
                        <AnimatePresence>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {project?.mentor?.map((ment, index) => (
                              <motion.span
                                key={ment.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm"
                              >
                                {ment.user.name}
                              </motion.span>
                            ))}
                          </div>
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Actions Card */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Card className="hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-0 shadow-lg">
              <CardHeader className="border-b border-gray-100 dark:border-gray-700">
                <CardTitle className="flex items-center justify-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                    <Award className="w-5 h-5 text-emerald-500" />
                  </div>
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={handleEvaluate}
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white py-6 rounded-xl font-medium"
                  >
                    Evaluate Project
                  </Button>
                </motion.div>
                <motion.a
                  href={`https://github.com/${project?.repository}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5" />
                    <span className="font-medium">View Repository</span>
                  </div>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tasks Card */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <Card className="hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-0 shadow-lg">
              <CardHeader className="border-b border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                      <Clock className="w-5 h-5 text-blue-500" />
                    </div>
                    Project Tasks
                  </CardTitle>
                  <CreateTaskDialog projectId={projectId} />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ScrollArea className="h-[400px] pr-4">
                  <TaskList tasks={tasks} />
                </ScrollArea>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Page;
