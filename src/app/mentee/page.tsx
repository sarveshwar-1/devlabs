"use client"
import React, { useEffect, useState } from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreateTeamDialog } from "@/components/team/create-team-dialog";
import TeamCard from "@/components/team/team-card";

type TeamMember = {
  user: {
    name: string;
    rollNo: string;
  }
}

type Team = {
  id: number;
  name: string;
  description?: string;
  members: TeamMember[];
}

function Page() {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    fetch("/api/team")
      .then((res) => res.json())
      .then((data) => setTeams(data))
      .catch((error) => console.error("Failed to fetch teams:", error));
  }, []);


  return (
    <div className='flex justify-evenly'>
      <div className='w-[45%] h-[100%]'>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Task 1</CardDescription>
            <CardDescription>Task 2</CardDescription>
            <CardDescription>Task 3</CardDescription>
          </CardContent>
        </Card>
      </div>
      <div className='w-[45%] '>
        <Card>
          <CardHeader>
            <CardTitle>Teams</CardTitle>
          </CardHeader>
          <CardContent className='overflow-scroll'>
            {teams.map((item) => (
              <TeamCard key={item.id} {...item} />
            ))}
          </CardContent>
        </Card>
        <CreateTeamDialog />
        <Card>
          <CardHeader>
            <CardTitle>Projects</CardTitle>
          </CardHeader>
          
        </Card>
        <Button className='w-[100%] mt-5 mb-5'>
          Create Project
        </Button>


      </div>
      
    </div>
  )
}

export default Page;
