import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardHeader,
} from "@/components/ui/card";


type Team = {
  id: number;
  name: string;
};

type Mentor = {
    id: string;
    user: {
        name: string;
    }
}
type Project = {
  id: number;
  title: string;
  description?: string;
  repository: string;
  status: string;
  team: Team;
  mentor: Mentor[];
};

export default function ProjectCard(props: Project) {
  console.log(props);
  console.log(props.mentor);
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{props.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{props.description}</CardDescription>
              <CardDescription>Team: {props.team.name}</CardDescription>
              <CardDescription>Repository: {props.repository}</CardDescription>
              <CardDescription>Status: {props.status}</CardDescription>
                <CardDescription>Mentors: {props.mentor.map((item) => (
                    <span key={item.id}>{item.user.name} </span>
                ))}</CardDescription>
      </CardContent>
    </Card>
  );
}
