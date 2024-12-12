import React from 'react'
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car } from 'lucide-react';

function page() {
  
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
            <CardDescription>Team 1</CardDescription>
            <CardDescription>Team 2</CardDescription>
            <CardDescription>Team 3</CardDescription>
          </CardContent>
        </Card>
        <Button className='w-[100%] mt-5 mb-5'>
          Create Team
        </Button>
        <Card>
          <CardHeader>
            <CardTitle>Projects</CardTitle>
          </CardHeader>
          <CardContent className='overflow-scroll'>
            <CardDescription>Project 1</CardDescription>
            <CardDescription>Project 2</CardDescription>
            <CardDescription>Project 3</CardDescription>
          </CardContent>
        </Card>
        <Button className='w-[100%] mt-5 mb-5'>
          Create Project
        </Button>


      </div>
      
    </div>
  )
}

export default page
