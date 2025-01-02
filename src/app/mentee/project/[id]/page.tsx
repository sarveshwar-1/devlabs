"use client";

import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CommitTree } from "@/components/project/tree";
import { Pie, PieChart, Cell, Label, ResponsiveContainer } from "recharts";
import { ChartTooltip } from "@/components/ui/chart";
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Users, Calendar, Award, Book } from "lucide-react";
import TaskList from "@/components/project/task-list";
interface Commit {
  url: string;
  user: string;
  message: string;
  timestamp: string;
  additions: number;
  deletions: number;
}

interface Contributor {
  login: string;
  contributions: number;
}
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
}
interface User {
  id: string;
  name: string;
  email: string;
  githubToken: string;
}

async function fetchWithAuth(url: string) {
  const response = await fetch(`/api/github/repo/${url}`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return await response.json();
}
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

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
      staggerChildren: 0.1,
    },
  },
};

function Page({ params }: { params: { id: string } }) {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [repoName, setRepoName] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [project, setProject] = useState<Project | null>(null);
  const [repository, setRepository] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const projectId = params.id;
  useEffect(() => { 
    const fetchTasks = async () => {
      const response = await fetch(`/api/tasks/${projectId}`);
      const data = await response.json();
      setTasks(data.tasks);
    }
    fetchTasks();
  }, [projectId]);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/user");
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
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
    };
    fetchProject();
  }, [projectId]);

  useEffect(() => {
    const fetchData = async () => {
      if (!repository) {
        return;
      }

      try {
        const repoData = await fetchWithAuth(repository);
        setRepoName(repoData.name);

        const events = await fetchWithAuth(`${repository}/commits`);
        const commitsData: Commit[] = await Promise.all(
          events.map(async (event: Commit) => {
            const commitUrl = event.url.split("repos/")[1];
            const tempdata = await fetchWithAuth(commitUrl);
            return {
              user: tempdata.commit.author.name,
              message: tempdata.commit.message,
              timestamp: tempdata.commit.author.date,
              additions: tempdata.stats.additions,
              deletions: tempdata.stats.deletions,
            };
          })
        );

        setCommits(commitsData);

        const contributorsData: Contributor[] = await fetchWithAuth(
          `${repository}/contributors`
        );
        setContributors(contributorsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [repository]);

  // chartData is already declared above

  const COLORS = [
    "#6366f1",
    "#8b5cf6",
    "#ec4899",
    "#06b6d4",
    "#10b981",
    "#f59e0b",
  ];

  const onPieEnter = (_: MouseEvent, index: number) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };

  const chartData = contributors.map((contributor) => ({
    name: contributor.login,
    value: contributor.contributions,
  }));
  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-gray-900">
      <motion.h1
        className="text-4xl font-bold mb-8 bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {repoName ? repoName : "Loading..."}
      </motion.h1>

      <motion.div
        className="grid grid-cols-6 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="col-span-2" variants={cardVariants}>
          <div className="flex flex-col gap-5">
            <Card className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-lg border border-slate-200 dark:border-slate-700 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-indigo-500">
                  <Book className="w-5 h-5 text-indigo-500" />
                  Project Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  <div>
                    <span className="font-semibold">Title:</span>{" "}
                    {project?.title || "loading"}
                  </div>
                  <div>
                    <span className="font-semibold">Description:</span>{" "}
                    {project?.description || "loading"}
                  </div>
                  <div>
                    <span className="font-semibold">Repository:</span>{" "}
                    {project?.repository || "loading"}
                  </div>
                  <div>
                    <span className="font-semibold">Team:</span>{" "}
                    {project?.team?.name || "loading"}
                  </div>
                  <div>
                    <span className="font-semibold">Mentors:</span>{" "}
                    {project?.mentor?.map((ment) => ment.user.name).join(", ")}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-lg border border-slate-200 dark:border-slate-700 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-purple-500">
                  <Calendar className="w-5 h-5 text-purple-500" />
                  Upcoming Tasks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <TaskList tasks={tasks} />
              </CardContent>
            </Card>
          </div>
        </motion.div>

        <motion.div className="col-span-2" variants={cardVariants}>
          <Card className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-lg border border-slate-200 dark:border-slate-700 shadow-lg h-[82vh]">
            <ScrollArea className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-pink-500">
                  <Users className="w-5 h-5 text-pink-500" />
                  Working Tree
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CommitTree commits={commits} />
              </CardContent>
            </ScrollArea>
          </Card>
        </motion.div>

        <motion.div
          className="flex flex-col col-span-2 gap-6"
          variants={cardVariants}
        >
          <Card className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-lg border border-slate-200 dark:border-slate-700 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-cyan-500">
                <Users className="w-5 h-5 text-cyan-500" />
                Contributors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <ChartTooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-white dark:bg-black p-2 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800">
                            <p className="font-medium">{payload[0].name}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {payload[0].value} contributions
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Pie
                    data={chartData}
                    innerRadius="60%"
                    outerRadius="80%"
                    paddingAngle={4}
                    onMouseEnter={onPieEnter}
                    onMouseLeave={onPieLeave}
                  >
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                        opacity={
                          activeIndex === null || activeIndex === index
                            ? 1
                            : 0.6
                        }
                        className="transition-opacity duration-300"
                      />
                    ))}
                    <Label
                      content={({ viewBox }) => {
                        if (!viewBox) return null;
                        const totalContributions = chartData.reduce(
                          (sum, entry) => sum + entry.value,
                          0
                        );
                        return (
                          <g>
                            <text
                              x={viewBox.cx}
                              y={viewBox.cy}
                              textAnchor="middle"
                              dominantBaseline="central"
                              className="fill-black dark:fill-white text-3xl font-bold"
                            >
                              {totalContributions}
                            </text>
                            <text
                              x={viewBox.cx}
                              y={viewBox.cy + 25}
                              textAnchor="middle"
                              className="fill-gray-600 dark:fill-gray-400 text-sm"
                            >
                              Total Commits
                            </text>
                          </g>
                        );
                      }}
                    />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-lg border border-slate-200 dark:border-slate-700 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-emerald-500">
                <Award className="w-5 h-5 text-emerald-500" />
                Mentor
              </CardTitle>
            </CardHeader>
            <CardContent>{/* Mentor content */}</CardContent>
          </Card>

          <Card className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-lg border border-slate-200 dark:border-slate-700 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-500">
                <Award className="w-5 h-5 text-amber-500" />
                Marks
              </CardTitle>
            </CardHeader>
            <CardContent>{/* Marks content */}</CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Page;
