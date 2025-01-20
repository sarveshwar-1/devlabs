"use client";
import React, { useEffect, useState } from "react";
import MarkdownRenderer from "@/components/task/markdown-renderer";

export default function Page({ params: { id } }: { params: { id: string } }) {
    const [markdownContent, setMarkdownContent] = useState<string>("");

    const fetchfile = async (id: string) => {
        try {
            const response = await fetch("/api/task?id=" + id);
            if (!response.ok) {
                throw new Error('Failed to fetch file');
            }
            const content = await response.text();
            setMarkdownContent(content);
        } catch (error) {
            console.error('Error fetching file:', error);
        }
    };

    useEffect(() => {
        fetchfile(id);
    }, [id]);

    return (
        <div>
            <h1>File Content</h1>
            <MarkdownRenderer markdown={markdownContent} />
        </div>
    );
}
