"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

type Score = {
  regularUpdates: number;
  viva: number;
  content: number;
};

type Evaluation = {
  id: string;
  stage: "Review1" | "Review2" | "Final_Review";
  scores: Score;
  comments?: string | null;
  evaluatedAt: string;
  evaluator: {
    id: string;
    user: {
      name: string;
    };
  };
};

const StudentMarks = ({
  projectId,
  studentId,
}: {
  projectId: string;
  studentId: string;
}) => {
  const [evaluations, setEvaluations] = useState<
    (Evaluation & { isExpanded: boolean })[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvaluations = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `/api/scores?projectId=${projectId}&menteeId=${studentId}`
        );
        const result = await response.json();

        if (!result.success) {
          throw new Error(result.error || "Failed to fetch evaluations");
        }

        const evaluationsWithExpanded = result.data.map(
          (eval1: Evaluation) => ({
            ...eval1,
            isExpanded: false,
          })
        );

        setEvaluations(evaluationsWithExpanded);
        setError(null);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch evaluations"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvaluations();
  }, [projectId, studentId]);

  const toggleExpand = (index: number) => {
    setEvaluations(
      evaluations.map((eval1, i) => ({
        ...eval1,
        isExpanded: i === index ? !eval1.isExpanded : false,
      }))
    );
  };

  if (isLoading) {
    return (
      <div className="border rounded-lg bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-8">
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="border rounded-lg bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 p-8">
        <div className="text-center text-red-500">
          <p>Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="border rounded-lg bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="border-b p-3">
        <h2 className="font-semibold">Review Progress</h2>
      </div>
      <div className="h-72 overflow-y-auto p-4">
        {evaluations.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <p className="text-muted-foreground text-center">
              Not evaluated so far
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {evaluations.map((eval1, index) => (
              <Card
                key={eval1.id}
                className={`bg-white/50 dark:bg-slate-900/50 backdrop-blur-lg cursor-pointer 
                  transition-all duration-300 ease-in-out
                  hover:bg-white/60 dark:hover:bg-slate-900/60 hover:shadow-lg
                  ${eval1.isExpanded ? "scale-102" : "scale-100"}`}
                onClick={() => toggleExpand(index)}
              >
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-lg font-medium">
                        {eval1.stage.replace("_", " ")}
                      </CardTitle>
                      <div
                        className={`transform transition-transform duration-300 ${
                          eval1.isExpanded ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {new Date(eval1.evaluatedAt).toISOString().split("T")[0]}
                    </span>
                  </div>
                  <div
                    className={`transform transition-all duration-300 ease-in-out origin-top 
                    ${
                      eval1.isExpanded
                        ? "scale-y-100 opacity-100 h-auto"
                        : "scale-y-0 opacity-0 h-0"
                    }`}
                  >
                    <CardDescription className="text-xs mt-1">
                      Evaluated by {eval1?.evaluator.user.name}
                    </CardDescription>
                  </div>
                </CardHeader>
                <div
                  className={`transform transition-all duration-300 ease-in-out origin-top
                  ${
                    eval1.isExpanded
                      ? "scale-y-100 opacity-100"
                      : "scale-y-0 opacity-0 h-0"
                  }`}
                >
                  <CardContent>
                    <div className="grid grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-sm font-medium">Regular</div>
                        <div className="text-2xl font-bold text-indigo-500">
                          {eval1.scores.regularUpdates}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-medium">Viva</div>
                        <div className="text-2xl font-bold text-pink-500">
                          {eval1.scores.viva}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-medium">Content</div>
                        <div className="text-2xl font-bold text-cyan-500">
                          {eval1.scores.content}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-medium">Total</div>
                        <div className="text-2xl font-bold text-emerald-500">
                          {eval1.scores.regularUpdates +
                            eval1.scores.viva +
                            eval1.scores.content}
                        </div>
                      </div>
                    </div>
                    {eval1.comments && (
                      <p className="mt-4 text-sm text-muted-foreground">
                        {eval1.comments}
                      </p>
                    )}
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentMarks;
