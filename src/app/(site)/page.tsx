"use client";

import React from "react";
import { Cpu, Globe, BarChart, ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const RedirectLogin = () => router.push("/auth/login");

  const sections = [
    {
      icon: <Cpu className="text-teal-500 w-12 h-12" />,
      title: "Smart Project Management",
      description:
        "AI-powered tools that transform how teams collaborate and innovate",
      color: "teal",
    },
    {
      icon: <Globe className="text-indigo-500 w-12 h-12" />,
      title: "Global Workflow Sync",
      description:
        "Break geographical barriers with seamless digital collaboration",
      color: "indigo",
    },
    {
      icon: <BarChart className="text-emerald-500 w-12 h-12" />,
      title: "Advanced Analytics",
      description: "Real-time insights that drive strategic decision-making",
      color: "emerald",
    },
  ];

  return (
    <div className="min-h-screenbg-gradient-to-br from-purple-100/30 via-white to-blue-100/30 dark:from-purple-900/20 dark:via-black dark:to-blue-900/20 dark:text-white overflow-hidden">
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-indigo-500 to-emerald-500">
            DevLabs
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Revolutionizing project management with intelligent collaboration
            and cutting-edge tools
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="transform transition-all duration-500 p-6 rounded-xl shadow-lg bg-white/50 dark:bg-gray-800/30 hover:bg-white dark:hover:bg-gray-800/50"
            >
              <div className="mb-4">{section.icon}</div>
              <h3 className="text-xl font-bold mb-3">{section.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {section.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button
            onClick={RedirectLogin}
            className="
              px-8 py-3 rounded-full 
              bg-gradient-to-r from-teal-500 to-emerald-500 
              text-white font-bold 
              hover:from-teal-600 hover:to-emerald-600
              transition-transform duration-300 
              transform hover:scale-105 
              flex items-center gap-2 mx-auto
              group
            "
          >
            Start Your Journey
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
