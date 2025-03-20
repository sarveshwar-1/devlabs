"use client";

import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
import {
  Users,
  Calendar,
  Award,
  Book,
  Github,
  ExternalLink,
  Clock,
  Layout,
  AlertCircle,
} from "lucide-react";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TaskList } from "@/components/project/task-list";
import { CreateTaskDialog } from "@/components/tasks/create-task-dialog";
import StudentMarks from "@/components/project/scores";
import { useRouter } from "next/navigation";

// Keeping interfaces the same
interface Mentor {
  id: string;
  user: { name: string };
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
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
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
  const router = useRouter();

  const fetchTasks = async () => {
    const response = await fetch(`/api/tasks/${projectId}`);
    const data = await response.json();
    setTasks(data.tasks);
  };
  useEffect(() => {
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
      setRepository(data.repository);
      setRepoName(data.repository.split("/").pop());
    };
    fetchProject();
  }, [projectId]);

  return (
    <div className="min-h-screen">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto space-y-6"
      >
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
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
                    {repoName || "Loading..."}
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
                <ExternalLink className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <Button
                variant="contained" 
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                  onClick={
                    () => {
                      router.replace(`/mentee/pfile/${projectId}`);
                    }
                  }
              >
                Upload File
              </Button>
              </div>
            </CardContent>
            </Card>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Project Info */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-1 space-y-6"
          >
            <Card className="bg-white dark:bg-gray-800 shadow-md">
              <CardHeader className="border-b dark:border-gray-700">
                <CardTitle>Project Details</CardTitle>
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

            {/* Repository Card */}
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
                    {project?.title || "Loading..."}
                  </span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </CardContent>
            </Card>

            {/* Performance Card */}
            <Card className="bg-white dark:bg-gray-800 shadow-md">
              <CardHeader className="border-b dark:border-gray-700">
                <CardTitle>Performance</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                {user && (
                  <StudentMarks projectId={projectId} studentId={user.id} />
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Column - Tasks */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Card className="bg-white dark:bg-gray-800 shadow-md h-full">
              <CardHeader className="border-b dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Project Tasks
                  </CardTitle>
                  {/* <CreateTaskDialog projectId={projectId} /> */}
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <ScrollArea className="h-[800px] pr-4">
                  <TaskList tasks={tasks} fetchtasks={ fetchTasks} />
                </ScrollArea>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Page;
