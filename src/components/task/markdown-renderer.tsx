"use client";

import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm"; // Enables GitHub-flavored markdown (e.g., tables)
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// Custom renderer for specific Markdown components
const MarkdownComponents = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="text-3xl font-bold my-4">{children}</h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl font-bold my-3">{children}</h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xl font-bold my-2">{children}</h3>
  ),
  h4: ({ children }: { children: React.ReactNode }) => (
    <h4 className="text-lg font-bold my-2">{children}</h4>
  ),
  h5: ({ children }: { children: React.ReactNode }) => (
    <h5 className="text-base font-bold my-1">{children}</h5>
  ),
  h6: ({ children }: { children: React.ReactNode }) => (
    <h6 className="text-sm font-bold my-1">{children}</h6>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="my-2 text-gray-800">{children}</p>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="list-disc ml-5 my-2">{children}</ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="list-decimal ml-5 my-2">{children}</ol>
  ),
  table: ({ children }: { children: React.ReactNode }) => (
    <table className="table-auto border-collapse border border-gray-400 my-4">
      {children}
    </table>
  ),
  thead: ({ children }: { children: React.ReactNode }) => (
    <thead className="bg-gray-200">{children}</thead>
  ),
  tr: ({ children }: { children: React.ReactNode }) => (
    <tr className="border border-gray-400">{children}</tr>
  ),
  th: ({ children }: { children: React.ReactNode }) => (
    <th className="border border-gray-400 px-2 py-1 text-left font-bold">
      {children}
    </th>
  ),
  td: ({ children }: { children: React.ReactNode }) => (
    <td className="border border-gray-400 px-2 py-1">{children}</td>
  ),
  code: ({
    node,
    inline,
    className,
    children,
    ...props
  }: {
    node: any;
    inline: boolean;
    className: string;
    children: React.ReactNode;
  }) => {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={materialDark}
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code
        className={`bg-gray-100 px-1 py-0.5 rounded ${className}`}
        {...props}
      >
        {children}
      </code>
    );
  },
};

export default function MarkdownRenderer({ markdown }: { markdown: string }) {
  return (
    <div className="markdown-body">
      <Markdown
        remarkPlugins={[remarkGfm]} // Ensures tables and GFM syntax are parsed correctly
        components={MarkdownComponents} // Customizes rendering of Markdown elements
      >
        {markdown}
      </Markdown>
    </div>
  );
}
