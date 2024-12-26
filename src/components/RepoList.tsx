"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { GitHubRepo } from "@/types/github";
import { useRouter } from "next/navigation";

export default function RepoList() {
  const { data: session } = useSession();
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [error, setError] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        if (session?.githubToken) {
          const response = await fetch(
            "https://api.github.com/user/repos?affiliation=owner&sort=updated&per_page=100",
            {
              headers: {
                Authorization: `Bearer ${session.githubToken}`,
                Accept: "application/vnd.github.v3+json",
              },
            }
          );

          if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message || "Failed to fetch repositories");
          }

          const data = await response.json();
          setRepos(data);
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch repositories"
        );
        console.error("Error fetching repos:", err);
      }
    };

    fetchRepos();
  }, [session]);

  const handleRepoClick = (repo: GitHubRepo) => {
    const [owner, name] = repo.full_name.split("/");
    router.push(`/repository/${owner}/${name}`);
  };

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {repos.map((repo) => (
        <div
          key={repo.id}
          className="p-4 border rounded-lg cursor-pointer hover:border-primary"
          onClick={() => handleRepoClick(repo)}
        >
          <div className="flex justify-between items-center">
            <h3 className="font-bold">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </h3>
            <span className="text-xs px-2 py-1 rounded-full bg-gray-100">
              {repo.visibility}
            </span>
          </div>
          <p className="text-sm text-gray-600">{repo.description}</p>
          {repo.language && (
            <p className="text-sm text-gray-500">Language: {repo.language}</p>
          )}
        </div>
      ))}
    </div>
  );
}
