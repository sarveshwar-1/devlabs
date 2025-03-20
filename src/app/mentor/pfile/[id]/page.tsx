"use client";

import { useEffect, useState, useRef } from "react";
import {
  Checkbox,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import DownloadIcon from "@mui/icons-material/Download";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import MarkdownRenderer from "@/components/task/markdown-renderer";
import { styled } from "@mui/material/styles";
import html2pdf from "html2pdf.js";

const PrintContainer = styled("div")`
  @media print {
    padding: 20px;
    .no-print {
      display: none;
    }
    .prose {
      max-width: none !important;
    }
  }
`;

export default function FileList({
  params: { id },
}: {
  params: { id: string };
}) {
  const [files, setFiles] = useState<string[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [markdownContent, setMarkdownContent] = useState<string>("");
  const markdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetchFiles();
    fetchMarkdown();
  }, []);

  const fetchMarkdown = async () => {
    try {
      const response = await fetch("/api/task?id=" + id);
      if (!response.ok) {
        throw new Error("Failed to fetch file");
      }
      const content = await response.text();
      setMarkdownContent(content);
    } catch (error) {
      console.error("Error fetching file:", error);
    }
  };

  const fetchFiles = async () => {
    try {
      const response = await fetch(`/api/pfile?projectId=${id}&bucketName=devlabs`);
      const data = await response.json();
      if (data.files) {
        setFiles(data.files);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching files:", error);
      setLoading(false);
    }
  };

  const handlePdfExport = async () => {
    if (!markdownRef.current) return;

    // Wait for all images to load
    const images = markdownRef.current.querySelectorAll("img");
    await Promise.all(
      Array.from(images).map((img) => {
        return new Promise<void>((resolve) => {
          if (img.complete) {
            resolve();
          } else {
            img.onload = () => resolve();
            img.onerror = () => resolve();
          }
        });
      })
    );

    // Generate the PDF
    const element = markdownRef.current;
    const options = {
      filename: `Project-${id}-Description.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true, // Enable cross-origin images
      },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(options).from(element).save();
  };

  const handleToggleFile = (filename: string) => {
    setSelectedFiles((prev) =>
      prev.includes(filename)
        ? prev.filter((f) => f !== filename)
        : [...prev, filename]
    );
  };

  const handleDownloadSelected = async () => {
    for (const filename of selectedFiles) {
      try {
        const response = await fetch(
          `/api/pfile/download?filename=${encodeURIComponent(
            filename
          )}&projectId=${id}`
        );
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Download failed");
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename.split("/").pop() || filename;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        a.remove();
      } catch (error) {
        console.error(`Error downloading ${filename}:`, error);
      }
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <PrintContainer className="p-4">
      <div className="mb-8">
        <div className="flex justify-between mb-4 no-print">
          <h1 className="text-2xl font-bold">Project Description</h1>
          <Button
            variant="contained"
            startIcon={<PictureAsPdfIcon />}
            onClick={handlePdfExport}
          >
            Export as PDF
          </Button>
        </div>
        <div ref={markdownRef} className="prose max-w-none print-content">
          <MarkdownRenderer markdown={markdownContent} />
        </div>
      </div>

      <div className="mt-8 no-print">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl font-bold">Project Files</h2>
          {selectedFiles.length > 0 && (
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              onClick={handleDownloadSelected}
            >
              Download Selected ({selectedFiles.length})
            </Button>
          )}
        </div>

        <List>
          {files.map((file) => (
            <ListItem
              key={file}
              dense
              button
              onClick={() => handleToggleFile(file)}
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={selectedFiles.includes(file)}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemIcon>
                <InsertDriveFileIcon />
              </ListItemIcon>
              <ListItemText primary={file.split("/").pop()} />
            </ListItem>
          ))}
        </List>

        {files.length === 0 && (
          <div className="text-center text-gray-500 mt-4">
            No files found for this project
          </div>
        )}
      </div>
    </PrintContainer>
  );
}
