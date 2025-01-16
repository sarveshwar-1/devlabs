"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FolderGit, ListTodo, Github, Users } from "lucide-react";
import { motion } from "framer-motion";

const useTaskPriority = () => {
  const getPriority = (dueDate: Date) => {
    const today = new Date();
    const due = new Date(dueDate);
    const daysUntilDue = Math.ceil((due - today) / (1000 * 60 * 60 * 24));

    if (daysUntilDue < 0) return "Overdue";
    if (daysUntilDue <= 2) return "High";
    if (daysUntilDue <= 5) return "Medium";
    return "Low";
  };

  const getUrgencyColor = (dueDate: Date) => {
    const priority = getPriority(dueDate);

    switch (priority) {
      case "Overdue":
        return {
          light: "bg-red-50 border-red-200 text-red-700",
          dark: "dark:bg-red-950 dark:border-red-800 dark:text-red-300",
        };
      case "High":
        return {
          light: "bg-orange-50 border-orange-200 text-orange-700",
          dark: "dark:bg-orange-950 dark:border-orange-800 dark:text-orange-300",
        };
      case "Medium":
        return {
          light: "bg-yellow-50 border-yellow-200 text-yellow-700",
          dark: "dark:bg-yellow-950 dark:border-yellow-800 dark:text-yellow-300",
        };
      default:
        return {
          light: "bg-green-50 border-green-200 text-green-700",
          dark: "dark:bg-green-950 dark:border-green-800 dark:text-green-300",
        };
    }
  };

  return { getPriority, getUrgencyColor };
};

interface Project {
  id: string;
  title: string;
  description: string;
  repository: string;
  mentor: Mentor[];
}

interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  status: string;
  projectName: string;
}

interface Mentor {
  name: string;
}

export default function Page() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const { getPriority, getUrgencyColor } = useTaskPriority();
  const router = useRouter();

  const RedirectTask = (taskid: string) => {
    router.push("/mentee/task/" + taskid);
  };

  const containerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Fetch projects
        const response = await fetch("/api/project");
        const data = await response.json();

        const projdatas: Project[] = data.map((projdata: Project) => ({
          id: projdata.id,
          title: projdata.title,
          description: projdata.description,
          repository: "https://github.com/" + projdata.repository,
          mentor: projdata.mentor.map((mentor1: Mentor) => ({
            name: mentor1.user.name,
          })),
        }));
        setProjects(projdatas);
      } catch {
        console.error("Error fetching projects");
      }
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const allTasks: Task[] = [];

        if (!projects) return; // Guard clause if projects aren't loaded yet

        for (let i = 0; i < projects.length; i++) {
          const taskResponse = await fetch(`/api/tasks/${projects[i].id}`);
          const { tasks } = await taskResponse.json();

          if (tasks && Array.isArray(tasks)) {
            for (let j = 0; j < tasks.length; j++) {
              if (
                tasks[j].status.toLowerCase() === "pending" ||
                tasks[j].status.toLowerCase() === "ongoing"
              ) {
                allTasks.push({
                  id: tasks[j].id,
                  title: tasks[j].title,
                  description: tasks[j].description,
                  dueDate: new Date(tasks[j].dueDate).toISOString(),
                  status: tasks[j].status,
                  projectName: projects[i].title,
                });
              }
            }
          }
        }

        setTasks(allTasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, [projects]);

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-black">
      <motion.h1
        className="text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400"
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        Mentee Dashboard
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
        <motion.div
          className="h-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg border border-purple-200 dark:border-purple-800 h-full transition-transform duration-300 hover:scale-[1.02]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                <FolderGit className="w-5 h-5" />
                Active Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px]">
                <div className="space-y-4">
                  {projects.map((project) => (
                    <div
                      key={project.title}
                      className="p-4 rounded-lg bg-purple-50/80 dark:bg-purple-950/50 border border-purple-100 dark:border-purple-800 transition-all duration-300 hover:bg-purple-100/80 dark:hover:bg-purple-900/50"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-purple-900 dark:text-purple-100">
                          {project.title}
                        </h3>
                        <a
                          href={project.repository}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-200"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      </div>
                      <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
                        {project.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                        <div className="flex flex-wrap gap-2">
                          {project.mentor.map((mentor, index) => (
                            <span
                              key={index}
                              className="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
                            >
                              {mentor.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="h-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          <Card className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg border border-pink-200 dark:border-pink-800 h-full transition-transform duration-300 hover:scale-[1.02]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-pink-600 dark:text-pink-400">
                <ListTodo className="w-5 h-5" />
                Pending Tasks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px]">
                <div className="space-y-4">
                  {tasks.map((task) => {
                    const priority = getPriority(task.dueDate);
                    const urgencyColor = getUrgencyColor(task.dueDate);
                    return (
                      <div
                        key={task.id}
                        className={`p-4 rounded-lg border transition-all duration-300 hover:translate-x-1 ${urgencyColor.light} ${urgencyColor.dark}`}
                        onClick={() => RedirectTask(task.id)}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium">{task.title}</h3>
                          <span className="text-sm">
                            Due: {new Date(task.dueDate).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-600 dark:text-gray-300">
                            Project: {task.projectName}
                          </span>
                        </div>
                        <p className="text-sm opacity-90 mb-2">
                          {task.description}
                        </p>
                        <span className="text-xs font-medium px-2 py-1 rounded-full bg-white/50 dark:bg-black/20">
                          {priority} Priority
                        </span>
                      </div>
                    );
                  })}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
