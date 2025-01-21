"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  FolderGit,
  ListTodo,
  Github,
  Users,
  CheckCircle2,
  AlertCircle,
  Clock,
  ArrowUpRight,
  Calendar,
} from "lucide-react";

// Keep existing interfaces
interface Mentor {
  user: { name: string };
}

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
  dueDate: string;
  status: string;
  projectName?: string;
}

// Modified StatCard component with new design
const StatCard = ({
  label,
  value,
  icon: Icon,
  color,
}: {
  label: string;
  value: number;
  icon: React.ElementType;
  color: string;
}) => (
  <Card className="relative overflow-hidden">
    <div className={`absolute top-0 left-0 w-1 h-full bg-${color}-500`} />
    <CardContent className="p-6">
      <div className="flex justify-between items-start">
        <div className="space-y-2">
          <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
          <p className="text-3xl font-bold">{value}</p>
        </div>
        <div
          className={`p-2 rounded-lg bg-${color}-100 dark:bg-${color}-900/20`}
        >
          <Icon
            className={`w-5 h-5 text-${color}-500 dark:text-${color}-400`}
          />
        </div>
      </div>
    </CardContent>
  </Card>
);

const useTaskPriority = () => {
  const getPriority = (dueDate: string) => {
    const today = new Date();
    const due = new Date(dueDate);
    const daysUntilDue = Math.ceil(
      (due.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
    );

    if (daysUntilDue < 0) return "Overdue";
    if (daysUntilDue <= 2) return "High";
    if (daysUntilDue <= 5) return "Medium";
    return "Low";
  };

  const getUrgencyColor = (priority: string) => {
    const colors = {
      Overdue: {
        bg: "bg-red-50 dark:bg-red-900/20",
        text: "text-red-700 dark:text-red-300",
        accent: "bg-red-500",
      },
      High: {
        bg: "bg-orange-50 dark:bg-orange-900/20",
        text: "text-orange-700 dark:text-orange-300",
        accent: "bg-orange-500",
      },
      Medium: {
        bg: "bg-yellow-50 dark:bg-yellow-900/20",
        text: "text-yellow-700 dark:text-yellow-300",
        accent: "bg-yellow-500",
      },
      Low: {
        bg: "bg-green-50 dark:bg-green-900/20",
        text: "text-green-700 dark:text-green-300",
        accent: "bg-green-500",
      },
    };
    return colors[priority as keyof typeof colors];
  };

  return { getPriority, getUrgencyColor };
};

export default function Dashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskStats, setTaskStats] = useState({
    total: 0,
    completed: 0,
    ongoing: 0,
    overdue: 0,
  });
  const { getPriority, getUrgencyColor } = useTaskPriority();
  const router = useRouter();

  // Keep existing useEffect hooks for fetching data

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/project");
        const data = await response.json();
        const projdatas: Project[] = data.map((projdata: any) => ({
          id: projdata.id,
          title: projdata.title,
          description: projdata.description,
          repository: "https://github.com/" + projdata.repository,
          mentor: projdata.mentor,
        }));
        setProjects(projdatas);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const allTasks: Task[] = [];
        let completed = 0;
        let ongoing = 0;
        let overdue = 0;

        for (const project of projects) {
          const taskResponse = await fetch(`/api/tasks/${project.id}`);
          const { tasks: projectTasks } = await taskResponse.json();

          if (projectTasks && Array.isArray(projectTasks)) {
            projectTasks.forEach((task: Task) => {
              if (task.status.toLowerCase() === "completed") completed++;
              else if (task.status.toLowerCase() === "ongoing") ongoing++;
              if (new Date(task.dueDate) < new Date()) overdue++;

              if (["pending", "ongoing"].includes(task.status.toLowerCase())) {
                allTasks.push({
                  ...task,
                  projectName: project.title,
                });
              }
            });
          }
        }

        setTasks(allTasks);
        setTaskStats({
          total: allTasks.length + completed,
          completed,
          ongoing,
          overdue,
        });
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    if (projects.length > 0) {
      fetchTasks();
    }
  }, [projects]);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Mentee Dashboard
          </h1>
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-gray-500" />
            <span className="text-sm text-gray-500">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatCard
            label="Total Tasks"
            value={taskStats.total}
            icon={ListTodo}
            color="blue"
          />
          <StatCard
            label="Completed"
            value={taskStats.completed}
            icon={CheckCircle2}
            color="green"
          />
          <StatCard
            label="Ongoing"
            value={taskStats.ongoing}
            icon={Clock}
            color="yellow"
          />
          <StatCard
            label="Overdue"
            value={taskStats.overdue}
            icon={AlertCircle}
            color="red"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="overflow-hidden">
            <CardHeader className="border-b border-gray-200 dark:border-gray-700">
              <CardTitle className="flex items-center gap-2">
                <FolderGit className="w-5 h-5 text-indigo-500" />
                Active Projects
              </CardTitle>
            </CardHeader>
            <ScrollArea className="h-[500px]">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className="group p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                          {project.title}
                        </h3>
                        <a
                          href={project.repository}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          <Github className="w-5 h-5 text-gray-500 group-hover:text-indigo-500 transition-colors" />
                        </a>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                        {project.description}
                      </p>
                      <div className="flex items-center gap-3">
                        <Users className="w-4 h-4 text-gray-400" />
                        <div className="flex flex-wrap gap-2">
                          {project.mentor.map((mentor, index) => (
                            <span
                              key={index}
                              className="text-xs px-2 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300"
                            >
                              {mentor.user.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </ScrollArea>
          </Card>

          <Card className="overflow-hidden">
            <CardHeader className="border-b border-gray-200 dark:border-gray-700">
              <CardTitle className="flex items-center gap-2">
                <ListTodo className="w-5 h-5 text-pink-500" />
                Pending Tasks
              </CardTitle>
            </CardHeader>
            <ScrollArea className="h-[500px]">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {tasks.map((task) => {
                    const priority = getPriority(task.dueDate);
                    const colors = getUrgencyColor(priority);
                    return (
                      <div
                        key={task.id}
                        onClick={() => router.push(`/mentee/task/${task.id}`)}
                        className={`group relative p-4 rounded-lg ${colors.bg} border border-gray-200 dark:border-gray-700 cursor-pointer hover:shadow-md transition-all duration-200`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium text-gray-900 dark:text-gray-100">
                            {task.title}
                          </h3>
                          <ArrowUpRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                          {task.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            {task.projectName}
                          </span>
                          <div className="flex items-center gap-3">
                            <span
                              className={`text-xs px-2 py-1 rounded-full ${colors.bg} ${colors.text}`}
                            >
                              {priority}
                            </span>
                            <span className="text-sm text-gray-500">
                              Due: {new Date(task.dueDate).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </ScrollArea>
          </Card>
        </div>
      </div>
    </div>
  );
}
