"use client";

"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ArrowRight, Lock } from "lucide-react";
import { motion } from "framer-motion";

export function LoginForm() {
  const router = useRouter();
  const [rollno, setRollno] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const result = await signIn("credentials", {
        redirect: false,
        rollNo: rollno,
        password,
      });

      if (result?.error) {
        setError("Invalid roll no or password");
      } else {
        const response = await fetch("/api/role", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ rollNo: rollno }),
        });

        const data = await response.json();

        if (data.role === "MENTEE") {
          router.push("/mentee");
        } else if (data.role === "MENTOR") {
          router.push("/mentor/project");
        } else if (data.role === "ADMIN") {
          router.push("/admin/project");
        } else {
          router.push("/");
        }
        setTimeout(() => { router.refresh() },500);
      }
    } catch (error) {
      setError("An unexpected error occurred");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-black overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-gradient-to-br from-purple-100/30 via-white to-blue-100/30 dark:from-purple-900/20 dark:via-black dark:to-blue-900/20"
      />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="relative z-10 w-full max-w-md bg-white/50 dark:bg-white/5 backdrop-blur-lg rounded-2xl shadow-xl p-8"
      >
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8 flex items-center justify-center"
        >
          <Lock
            className="mr-3 text-purple-600 dark:text-purple-500"
            size={32}
          />
          Dev<span className="text-purple-600 dark:text-purple-500">Labs</span>
        </motion.h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <label
              htmlFor="rollno"
              className="block text-sm font-medium text-gray-700 dark:text-purple-200 mb-2"
            >
              Roll No
            </label>
            <input
              id="rollno"
              type="text"
              placeholder="Enter your roll no"
              value={rollno}
              onChange={(e) => setRollno(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-purple-700 rounded-lg bg-white/70 dark:bg-white/10 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-purple-200 mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-purple-700 rounded-lg bg-white/70 dark:bg-white/10 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </motion.div>

          {error && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-red-100 dark:bg-red-900/30 border border-red-400 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg"
            >
              {error}
            </motion.div>
          )}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-purple-700 dark:from-purple-500 dark:to-pink-500 text-white py-3 rounded-full font-semibold hover:from-purple-600 hover:to-purple-800 dark:hover:from-purple-600 dark:hover:to-pink-600 transition-all duration-500 flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl"
          >
            Log In
            <ArrowRight className="transition-transform duration-500 group-hover:translate-x-1" />
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default LoginForm;
