"use client";

import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Calendar,
  Award,
  Book,
  Github,
  ExternalLink,
  Clock,
  Star,
  Layout,
  GraduationCap,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TaskList } from "@/components/project/task-list";
import { CreateTaskDialog } from "@/components/tasks/create-task-dialog";
import StudentMarks from "@/components/project/scores";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Mentor {
  id: string;
  user: { name: string };
}

interface TeamMember {
  id: string;
  user: {
    id: string;
    name: string;
  };
}

interface Team {
  id: string;
  name: string;
  description: string;
  members: TeamMember[];
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
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const scoreCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

function Page({ params }: { params: { id: string } }) {
  const [repoName, setRepoName] = useState<string | null>(null);
  const [project, setProject] = useState<Project | null>(null);
  const [repository, setRepository] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const projectId = params.id;

  const fetchTasks = async () => {
    const response = await fetch(`/api/tasks/${projectId}`);
    const data = await response.json();
    setTasks(data.tasks);
  };
  useEffect(() => {
    fetchTasks();
  }, [projectId,tasks]);

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
      console.log(data);
      setProject(data);
      setRepository(data.repository);
      setRepoName(data.repository.split("/").pop());
    };
    fetchProject();
  }, [projectId]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 lg:p-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto space-y-6"
      >
        {/* Header with Project Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          <Card className="bg-white dark:bg-gray-800 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Book className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Project
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project?.title || "Loading..."}
                  </h3>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Team
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project?.team?.name || "Loading..."}
                  </h3>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <Github className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Repository
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {repoName || "Loading..."}
                  </h3>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 shadow-md">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                  <Award className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Status
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project?.isactive ? "Active" : "Inactive"}
                  </h3>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Project Overview</TabsTrigger>
            <TabsTrigger value="scores">Student Scores</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Project Details */}
              <motion.div variants={itemVariants} className="space-y-6">
                <Card className="bg-white dark:bg-gray-800 shadow-md">
                  <CardHeader className="border-b dark:border-gray-700">
                    <CardTitle className="flex items-center gap-2">
                      <Book className="w-5 h-5" />
                      Project Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Description
                      </h3>
                      <p className="mt-1 text-gray-900 dark:text-gray-100">
                        {project?.description || "Loading..."}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        Mentors
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project?.mentor?.map((ment) => (
                          <span
                            key={ment.id}
                            className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm"
                          >
                            {ment.user.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white dark:bg-gray-800 shadow-md">
                  <CardHeader className="border-b dark:border-gray-700">
                    <CardTitle className="flex items-center gap-2">
                      <Github className="w-5 h-5" />
                      Repository
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <motion.a
                      href={`https://github.com/${project?.repository}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <span className="font-medium text-gray-900 dark:text-gray-100">
                        View Repository
                      </span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Tasks Section */}
              <motion.div variants={itemVariants} className="lg:col-span-2">
                <Card className="bg-white dark:bg-gray-800 shadow-md h-full">
                  <CardHeader className="border-b dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        Project Tasks
                      </CardTitle>
                      <CreateTaskDialog projectId={projectId} fetchtaks={fetchTasks}  />
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ScrollArea className="h-[600px] pr-4">
                      <TaskList tasks={tasks} fetchtasks={fetchTasks} />
                    </ScrollArea>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="scores">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <Card className="bg-white dark:bg-gray-800 shadow-lg border-none">
                <CardHeader className="border-b dark:border-gray-700 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <GraduationCap className="w-6 h-6 text-purple-500" />
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      Team Performance Dashboard
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 gap-6">
                    {project?.team?.members?.map((member, index) => (
                      <motion.div
                        key={member.id}
                        variants={scoreCardVariants}
                        custom={index}
                      >
                        <Card className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
                          <CardHeader className="border-b border-gray-200 dark:border-gray-700">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
                                  <Users className="w-5 h-5 text-white" />
                                </div>
                                <CardTitle>{member.user.name}</CardTitle>
                              </div>
                              <motion.div
                                initial={{ rotate: -180, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                transition={{
                                  duration: 0.5,
                                  delay: index * 0.1,
                                }}
                              >
                                <Star className="w-6 h-6 text-yellow-500" />
                              </motion.div>
                            </div>
                          </CardHeader>
                          <CardContent className="p-6">
                            <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
                              <div className="flex items-center justify-between mb-2">
                                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                                  Performance Score
                                </p>
                                <TrendingUp className="w-4 h-4 text-blue-500" />
                              </div>
                              <StudentMarks
                                projectId={projectId}
                                studentId={member.id}
                              />
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}

export default Page;
