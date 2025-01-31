"use client";

import React, { useState, useEffect } from "react";
import { Download, Users, PieChart, Award, Book, Edit2 } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart as RechartsePieChart,
  Pie,
  Cell,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface User {
  name: string;
  email: string;
}

interface Mentee {
  id: string;
  user?: User; // Make user optional
  name?: string; // Add direct name field as fallback
}

interface Score {
  id: string;
  evaluationId: string;
  regularUpdates: number;
  viva: number;
  content: number;
  total: number;
}

interface Evaluation {
  id: string;
  projectId: string;
  stage: "Review1" | "Review2" | "Final_Review";
  scores: Score;
  comments: string | null;
  mentee: Mentee;
  evaluatedAt: string;
}

const ProjectEvaluation = ({ params: { id } }: { params: { id: string } }) => {
  const [evaluations, setEvaluations] = useState<Evaluation[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentStage, setCurrentStage] = useState<
    "Review1" | "Review2" | "Final_Review"
  >("Review1");
  const [showSummary, setShowSummary] = useState(false);
  const [editingScore, setEditingScore] = useState<{
    menteeId: string | null;
    category: string | null;
  }>({ menteeId: null, category: null });
  const [projectMembers, setProjectMembers] = useState<Mentee[]>([]);
  const [projectDetails, setProjectDetails] = useState<{
    teamId: string;
    title: string;
  } | null>(null);
  const [comments, setComments] = useState<{ [key: string]: string }>({});
  const [unsavedChanges, setUnsavedChanges] = useState<{
    [key: string]: {
      scores: Partial<Score>;
      comments?: string;
    };
  }>({});

  const stages = {
    Review1: {
      name: "Review 1",
      maxScores: { regularUpdates: 2, viva: 3, content: 5 },
    },
    Review2: {
      name: "Review 2",
      maxScores: { regularUpdates: 2, viva: 3, content: 5 },
    },
    Final_Review: {
      name: "Final Review",
      maxScores: { regularUpdates: 2, viva: 13, content: 15 },
    },
  };

  // Add this function near the top of the component, after state definitions
  const getPerformanceColor = (percentage: number) => {
    if (percentage >= 90) return "text-green-500";
    if (percentage >= 75) return "text-blue-500";
    if (percentage >= 60) return "text-yellow-500";
    return "text-red-500";
  };

  // Modify fetchProjectAndMembers to handle errors better
  const fetchProjectAndMembers = async () => {
    try {
      const projectResponse = await fetch(`/api/project/${id}`);
      if (!projectResponse.ok) {
        throw new Error(`HTTP error! status: ${projectResponse.status}`);
      }
      const projectData = await projectResponse.json();
      setProjectDetails({
        teamId: projectData.teamId,
        title: projectData.title || "Untitled Project",
      });

      // Then fetch team members using teamId
      const teamResponse = await fetch(
        `/api/team?teamid=${projectData.teamId}`
      );
      if (!teamResponse.ok) throw new Error("Failed to fetch team members");
      const teamData = await teamResponse.json();
      setProjectMembers(teamData.members);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch project details"
      );
      toast.error("Failed to fetch project details");
    }
  };

  // Modify fetchOrInitializeEvaluations for better error handling
  const fetchOrInitializeEvaluations = async () => {
    if (!projectMembers.length) return;

    try {
      const response = await fetch(
        `/api/evaluation?projectId=${id}&stage=${currentStage}`
      );
      if (!response.ok) throw new Error("Failed to fetch evaluations");
      const { data } = await response.json();

      // Initialize with empty evaluations if no data
      const evaluationsData = Array.isArray(data) ? data : [];

      const existingEvaluations = new Map(
        data.map((evaluation: Evaluation) => [evaluation.mentee.id, evaluation])
      );

      // Create or get evaluations for all team members
      const stageEvaluations = projectMembers.map((member) => {
        const existing = existingEvaluations.get(member.id);
        if (existing) return existing;

        // Create new evaluation for members without one
        return {
          id: `temp_${member.id}`,
          projectId: id,
          stage: currentStage,
          mentee: member,
          scores: {
            id: "",
            evaluationId: "",
            regularUpdates: 0,
            viva: 0,
            content: 0,
            total: 0,
          },
          comments: null,
          evaluatedAt: new Date().toISOString(),
        };
      });

      setEvaluations(stageEvaluations);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch evaluations"
      );
      toast.error("Failed to fetch evaluations");
    }
  };

  // Modify useEffect to ensure proper dependency tracking
  useEffect(() => {
    if (id) {
      fetchProjectAndMembers();
    }
  }, [id]);

  useEffect(() => {
    if (projectMembers.length > 0) {
      fetchOrInitializeEvaluations();
    }
  }, [projectMembers, currentStage, id]);

  // Update the handleCommentChange function
  const handleCommentChange = (evaluationId: string, comment: string) => {
    setUnsavedChanges((prev) => ({
      ...prev,
      [evaluationId]: {
        scores: prev[evaluationId]?.scores || {},
        comments: comment,
      },
    }));
  };

  const handleScoreChange = (
    evaluationId: string,
    category: keyof Score,
    value: number
  ) => {
    const maxValue = stages[currentStage].maxScores[category];
    const clampedValue = Math.min(Math.max(0, value), maxValue);

    setUnsavedChanges((prev) => ({
      ...prev,
      [evaluationId]: {
        ...prev[evaluationId],
        scores: {
          ...(prev[evaluationId]?.scores || {}),
          [category]: clampedValue,
        },
      },
    }));
  };

  const handleSaveChanges = async () => {
    try {
      const updates = await Promise.all(
        Object.entries(unsavedChanges).map(async ([evaluationId, changes]) => {
          if (evaluationId.startsWith("temp_")) {
            const evaluation = evaluations.find((e) => e.id === evaluationId);
            if (!evaluation) return null;

            const response = await fetch("/api/evaluation", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                projectId: id,
                stage: currentStage,
                menteeId: evaluation.mentee.id,
                scores: {
                  ...evaluation.scores,
                  ...changes.scores,
                },
                comments: changes.comments || "",
              }),
            });

            if (!response.ok) {
              const errorData = await response.json();
              throw new Error(errorData.error || "Failed to create evaluation");
            }

            const { data } = await response.json();

            return data;
          } else {
            const evaluation = evaluations.find((e) => e.id === evaluationId);
            if (!evaluation) return null;

            // Ensure all score fields are included in the update
            const updatedScores = {
              regularUpdates:
                changes.scores.regularUpdates ??
                evaluation.scores.regularUpdates,
              viva: changes.scores.viva ?? evaluation.scores.viva,
              content: changes.scores.content ?? evaluation.scores.content,
            };

            const response = await fetch(`/api/evaluation?id=${evaluationId}`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                ...updatedScores,
                comments: changes.comments ?? evaluation.comments ?? "",
              }),
            });

            if (!response.ok) {
              const errorData = await response.json();
              throw new Error(errorData.error || "Failed to update evaluation");
            }

            const { data } = await response.json();
            if (!data) throw new Error("No data returned from server");

            return data;
          }
        })
      );

      // Filter out null values and update state
      const validUpdates = updates.filter(
        (update): update is Evaluation => update !== null
      );

      if (validUpdates.length > 0) {
        setEvaluations((prev) =>
          prev.map((evaluation) => {
            const updated = validUpdates.find((u) => u.id === evaluation.id);
            return updated || evaluation;
          })
        );
        setUnsavedChanges({});
        toast.success("Changes saved successfully");
      } else {
        toast.error("No changes were saved");
      }
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Failed to save changes"
      );
      console.error(err);
    }
  };

  // Add this helper to get only the editable score fields
  const editableScoreFields: (keyof Score)[] = [
    "regularUpdates",
    "viva",
    "content",
  ];

  // Update the ScoreInput component to only show editable fields
  const ScoreInput = ({
    evaluation,
    category,
  }: {
    evaluation: Evaluation;
    category: keyof Score;
  }) => {
    // Skip rendering for non-editable fields
    if (!editableScoreFields.includes(category)) {
      return null;
    }

    const isEditing =
      editingScore.menteeId === evaluation.mentee.id &&
      editingScore.category === category;
    const maxScore = stages[currentStage].maxScores[category];
    const currentScore =
      unsavedChanges[evaluation.id]?.scores[category] ??
      evaluation.scores?.[category] ??
      0; // Add optional chaining and fallback
    const percentage = (currentScore / maxScore) * 100;

    return (
      <div className="bg-gray-50 round`ed-lg p-4">
        <div className="flex justify-between items-center mb-2">
          <label className="capitalize text-gray-700 font-medium">
            {category}
          </label>
          <div className="flex items-center gap-2">
            <span
              className={`text-lg font-semibold ${getPerformanceColor(
                percentage
              )}`}
            >
              {currentScore}
            </span>
            <span className="text-sm text-gray-600">/ {maxScore}</span>
            <button
              onClick={() =>
                setEditingScore({ menteeId: evaluation.mentee.id, category })
              }
              className="p-1 hover:bg-gray-200 rounded-full transition-colors"
            >
              <Edit2 className="w-4 h-4" />
            </button>
          </div>
        </div>
        {isEditing ? (
          <div className="mt-2">
            <input
              type="number"
              step="1"
              min="0"
              max={maxScore}
              value={currentScore}
              onChange={(e) =>
                handleScoreChange(
                  evaluation.id,
                  category,
                  Math.round(Number(e.target.value))
                )
              }
              onBlur={() => setEditingScore({ menteeId: null, category: null })}
              className="w-full p-2 border rounded-lg"
              autoFocus
            />
          </div>
        ) : (
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full ${getPerformanceColor(percentage).replace(
                "text-",
                "bg-"
              )}`}
              style={{ width: `${percentage}%` }}
            />
          </div>
        )}
      </div>
    );
  };

  // Update the name display with fallback
  const getMenteeName = (mentee: Mentee | undefined) => {
    if (!mentee) return "Unknown User";
    if (mentee.user?.name) return mentee.user.name;
    if (mentee.name) return mentee.name;
    return "Unknown User";
  };

  const ScoringInterface = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Project Evaluation
          </h2>
          <p className="text-gray-600">{stages[currentStage].name}</p>
        </div>
        <select
          className="p-2 border rounded-lg bg-white shadow-sm"
          value={currentStage}
          onChange={(e) =>
            setCurrentStage(
              e.target.value as "Review1" | "Review2" | "Final_Review"
            )
          }
        >
          {Object.keys(stages).map((stage) => (
            <option key={stage} value={stage}>
              {stages[stage as keyof typeof stages].name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-6">
        {evaluations.map((evaluation) => (
          <div
            key={evaluation.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Users className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      {getMenteeName(evaluation.mentee)}
                    </h3>
                    {/* Calculate and show total directly */}
                    <p className="text-sm text-gray-600">
                      Total Score:{" "}
                      {Object.entries(evaluation.scores)
                        .filter(([key]) =>
                          editableScoreFields.includes(key as keyof Score)
                        )
                        .reduce((acc, [_, value]) => acc + value, 0)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {editableScoreFields.map((category) => (
                  <ScoreInput
                    key={category}
                    evaluation={evaluation}
                    category={category}
                  />
                ))}
              </div>

              {/* Update the comment box implementation */}
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Comments
                </label>
                <textarea
                  value={
                    unsavedChanges[evaluation.id]?.comments ??
                    evaluation.comments ??
                    ""
                  }
                  onChange={(e) => {
                    const newComment = e.target.value;
                    setUnsavedChanges((prev) => ({
                      ...prev,
                      [evaluation.id]: {
                        scores: prev[evaluation.id]?.scores || {},
                        comments: newComment,
                      },
                    }));
                  }}
                  placeholder="Add any comments about the evaluation..."
                  className="w-full p-2 border rounded-lg min-h-[100px]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const ProjectSummary = () => {
    const chartData = evaluations.map((evaluation) => ({
      name: getMenteeName(evaluation.mentee),
      ...editableScoreFields.reduce(
        (acc, field) => ({
          ...acc,
          [field]: evaluation.scores[field],
        }),
        {}
      ),
    }));

    const maxTotal = Object.values(stages[currentStage].maxScores).reduce(
      (acc, curr) => acc + curr,
      0
    );

    const performanceData = evaluations.map((evaluation) => ({
      subject: getMenteeName(evaluation.mentee),
      regularUpdates:
        (evaluation.scores.regularUpdates /
          stages[currentStage].maxScores.regularUpdates) *
        100,
      viva:
        (evaluation.scores.viva / stages[currentStage].maxScores.viva) * 100,
      content:
        (evaluation.scores.content / stages[currentStage].maxScores.content) *
        100,
    }));

    const distributionData = editableScoreFields.map((field) => ({
      name:
        field === "regularUpdates"
          ? "Regular"
          : field.charAt(0).toUpperCase() + field.slice(1),
      value: evaluations.reduce((acc, e) => acc + e.scores[field], 0),
    }));

    const COLORS = ["#818CF8", "#34D399", "#F472B6"];

    return (
      <div className="space-y-6">
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <Users className="text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold">Total Members</h3>
                <p className="text-2xl font-bold">{evaluations.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Award className="text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold">Group Average</h3>
                <p className="text-2xl font-bold">
                  {(
                    (evaluations.reduce((acc, e) => acc + e.scores.total, 0) /
                      evaluations.length /
                      maxTotal) *
                    100
                  ).toFixed(1)}
                  %
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <Book className="text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold">Current Stage</h3>
                <p className="text-2xl font-bold">
                  {stages[currentStage].name}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-semibold mb-4">Individual Scores</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="regularUpdates" fill="#818CF8" />
                  <Bar dataKey="viva" fill="#34D399" />
                  <Bar dataKey="content" fill="#F472B6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="font-semibold mb-4">Score Distribution</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsePieChart>
                  <Pie
                    data={distributionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {distributionData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </RechartsePieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg col-span-2">
            <h3 className="font-semibold mb-4">Performance Radar</h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                  cx="50%"
                  cy="50%"
                  outerRadius="80%"
                  data={performanceData}
                >
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar
                    name="Regular"
                    dataKey="regularUpdates"
                    stroke="#818CF8"
                    fill="#818CF8"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="Viva"
                    dataKey="viva"
                    stroke="#34D399"
                    fill="#34D399"
                    fillOpacity={0.6}
                  />
                  <Radar
                    name="Content"
                    dataKey="content"
                    stroke="#F472B6"
                    fill="#F472B6"
                    fillOpacity={0.6}
                  />
                  <Legend />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const exportToCSV = () => {
    try {
      // Prepare the data for export
      const csvData = evaluations.map((evaluation) => ({
        "Student Name": getMenteeName(evaluation.mentee),
        Stage: stages[evaluation.stage].name,
        "Regular Updates": evaluation.scores.regularUpdates,
        Viva: evaluation.scores.viva,
        Content: evaluation.scores.content,
        "Total Score": Object.entries(evaluation.scores)
          .filter(([key]) => editableScoreFields.includes(key as keyof Score))
          .reduce((acc, [_, value]) => acc + value, 0),
        "Max Score": Object.values(stages[evaluation.stage].maxScores).reduce(
          (a, b) => a + b,
          0
        ),
        Percentage:
          (
            (Object.entries(evaluation.scores)
              .filter(([key]) =>
                editableScoreFields.includes(key as keyof Score)
              )
              .reduce((acc, [_, value]) => acc + value, 0) /
              Object.values(stages[evaluation.stage].maxScores).reduce(
                (a, b) => a + b,
                0
              )) *
            100
          ).toFixed(1) + "%",
        Comments: evaluation.comments || "",
      }));

      // Convert to CSV
      const headers = Object.keys(csvData[0]);
      const csvString = [
        headers.join(","),
        ...csvData.map((row) =>
          headers
            .map((header) => JSON.stringify(row[header as keyof typeof row]))
            .join(",")
        ),
      ].join("\n");

      // Create and trigger download
      const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute(
          "download",
          `project_evaluation_${currentStage}_${
            new Date().toISOString().split("T")[0]
          }.csv`
        );
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        toast.success("Report exported successfully");
      }
    } catch (err) {
      console.error("Export error:", err);
      toast.error("Failed to export report");
    }
  };

  // Remove the loading check and keep only the error check
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Project Evaluation Dashboard
        </h1>
        <div className="flex gap-4">
          <button
            onClick={() => setShowSummary(!showSummary)}
            className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
          >
            {showSummary ? (
              <PieChart className="w-5 h-5" />
            ) : (
              <Users className="w-5 h-5" />
            )}
            {showSummary ? "Show Scoring" : "Show Summary"}
          </button>
          <button
            onClick={exportToCSV}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 transition-colors"
            disabled={evaluations.length === 0}
          >
            <Download className="w-5 h-5" />
            Export Report
          </button>
          <Button
            onClick={handleSaveChanges}
            disabled={Object.keys(unsavedChanges).length === 0}
          >
            Save changes
          </Button>
        </div>
      </div>

      {showSummary ? <ProjectSummary /> : <ScoringInterface />}
    </div>
  );
};

export default ProjectEvaluation;
