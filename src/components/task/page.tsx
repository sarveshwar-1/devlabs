import React from 'react';
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from '@/components/ui/card';
interface Task{
    id: number;
    title: string;
    description: string;
    status: string;
    dueDate: string;
}

interface TaskProps{
    task: Task;
}

export default function TaskComponent({ task }: TaskProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{task.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>{task.description}</CardDescription>
                <CardDescription>{task.status}</CardDescription>
                <CardDescription>{task.dueDate}</CardDescription>
            </CardContent>
        </Card>
    );
}