"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { GitHubRepo, RepoStats } from "@/types/github";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, LineChart } from "@/components/charts";
import { Skeleton } from "@/components/ui/skeleton";

export default function RepositoryPage() {
  const { data: session } = useSession();
  const params = useParams();
  const [repo, setRepo] = useState<GitHubRepo | null>(null);
  const [stats, setStats] = useState<RepoStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepoDetails = async () => {
      if (!session?.githubToken) return;

      try {
        const [repoData, languagesData, commitsData, contributorsData] =
          await Promise.all([
            fetch(
              `https://api.github.com/repos/${params.owner}/${params.name}`,
              {
                headers: { Authorization: `Bearer ${session.githubToken}` },
              }
            ).then((res) => res.json()),

            fetch(
              `https://api.github.com/repos/${params.owner}/${params.name}/languages`,
              {
                headers: { Authorization: `Bearer ${session.githubToken}` },
              }
            ).then((res) => res.json()),

            fetch(
              `https://api.github.com/repos/${params.owner}/${params.name}/stats/commit_activity`,
              {
                headers: { Authorization: `Bearer ${session.githubToken}` },
              }
            ).then((res) => res.json()),

            fetch(
              `https://api.github.com/repos/${params.owner}/${params.name}/contributors`,
              {
                headers: { Authorization: `Bearer ${session.githubToken}` },
              }
            ).then((res) => res.json()),
          ]);

        setRepo(repoData);
        setStats({
          languages: languagesData,
          commits: {
            total: commitsData.reduce(
              (acc: number, week: any) => acc + week.total,
              0
            ),
            history: commitsData.map((week: any) => ({
              date: new Date(week.week * 1000).toISOString().split("T")[0],
              count: week.total,
            })),
          },
          contributors: contributorsData,
          pullRequests: {
            open: repoData.open_pulls_count || 0,
            closed: repoData.closed_pulls_count || 0,
          },
          issues: {
            open: repoData.open_issues_count,
            closed: repoData.closed_issues_count || 0,
          },
        });
      } catch (error) {
        console.error("Error fetching repo details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepoDetails();
  }, [session, params]);

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <Skeleton className="h-[500px]" />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{repo?.name}</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Languages</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart
              data={Object.entries(stats?.languages || {}).map(
                ([name, value]) => ({
                  name,
                  value,
                })
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Commit Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <LineChart
              data={stats?.commits.history || []}
              xKey="date"
              yKey="count"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Contributors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats?.contributors.slice(0, 5).map((contributor) => (
                <div
                  key={contributor.login}
                  className="flex items-center gap-2"
                >
                  <img
                    src={contributor.avatar_url}
                    alt={contributor.login}
                    className="w-8 h-8 rounded-full"
                  />
                  <span>{contributor.login}</span>
                  <span className="ml-auto">
                    {contributor.contributions} commits
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
