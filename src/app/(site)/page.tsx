"use client";

import React, { useEffect, useState } from "react";
import { Rocket, Zap, Sparkles, ArrowRight } from "lucide-react";

export default function Page() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const calculateRotation = (element) => {
    const rect = element?.getBoundingClientRect();
    if (!rect) return { x: 0, y: 0 };
    const x = (mousePosition.y - rect.top - rect.height / 2) / 50;
    const y = -(mousePosition.x - rect.left - rect.width / 2) / 50;
    return `rotateX(${x}deg) rotateY(${y}deg)`;
  };

  return (
    <div className="min-h-screen overflow-hidden relative bg-white dark:bg-black transition-colors duration-500">
      {/* Gradient background for both modes */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 via-white to-blue-100/30 dark:from-purple-900/20 dark:via-black dark:to-blue-900/20 transition-colors duration-500" />

      <div className="container mx-auto px-4 pt-20 pb-32 relative">
        {/* Main heading */}
        <div
          className={`text-center transform transition-all duration-2000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-glow transition-colors duration-500">
            Dev
            <span className="text-purple-600 dark:text-purple-500">Labs</span>
          </h1>
          <p className="text-2xl text-gray-600 dark:text-purple-200 max-w-2xl mx-auto leading-relaxed transition-colors duration-500">
            Making project evaluation, collaboration, and management
            <span className="text-purple-600 dark:text-pink-400 font-semibold">
              {" "}
              beautifully simple
            </span>
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {[
            {
              icon: (
                <Rocket
                  className="text-purple-600 dark:text-purple-400"
                  size={32}
                />
              ),
              title: "Streamlined Workflow",
              description:
                "Experience seamless project management from start to finish",
            },
            {
              icon: (
                <Zap className="text-purple-600 dark:text-pink-400" size={32} />
              ),
              title: "Real-time Collaboration",
              description:
                "Work together effortlessly with instant updates and feedback",
            },
            {
              icon: (
                <Sparkles
                  className="text-purple-600 dark:text-blue-400"
                  size={32}
                />
              ),
              title: "Smart Evaluation",
              description:
                "Track progress and evaluate projects with powerful tools",
            },
          ].map((card, index) => (
            <div
              key={index}
              className={`bg-white/50 dark:bg-white/5 backdrop-blur-lg rounded-2xl p-8 transform transition-all duration-1000 hover:bg-purple-50/50 dark:hover:bg-white/10 shadow-lg hover:shadow-xl ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{
                transitionDelay: `${400 + index * 300}ms`,
                transform: calculateRotation(
                  document.getElementById(`card-${index}`)
                ),
              }}
              id={`card-${index}`}
            >
              <div className="mb-6">{card.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-500">
                {card.title}
              </h3>
              <p className="text-gray-600 dark:text-purple-200 transition-colors duration-500">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div
          className={`text-center mt-16 transform transition-all duration-1500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <button className="bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-500 dark:to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-purple-800 dark:hover:from-purple-600 dark:hover:to-pink-600 transition-all duration-500 transform hover:scale-102 flex items-center mx-auto gap-2 group shadow-lg hover:shadow-xl">
            Get Started
            <ArrowRight className="transition-transform duration-500 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes glow {
          0%,
          100% {
            text-shadow: 0 0 20px rgba(167, 139, 250, 0.3);
          }
          50% {
            text-shadow: 0 0 30px rgba(167, 139, 250, 0.5);
          }
        }
        .animate-glow {
          animation: glow 5s ease-in-out infinite;
        }
        @media (prefers-color-scheme: light) {
          .animate-glow {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
