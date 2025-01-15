"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Buffer } from "buffer";
import Image from "next/image";
import MDEditor from "@uiw/react-md-editor";
import { ChevronRight, ChevronLeft } from "lucide-react";

function Page({ params: { id } }: { params: { id: string } }) {
  const [value, setValue] = useState("**Hello world!!!**");
  const [images, setImages] = useState<string[]>([]);
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const handleSave = async () => {
    try {
      if (!value) throw new Error("No file found in request");
      if (!id) throw new Error("Id is required");

      const fileBuffer = Buffer.from(value, "utf-8");
      const base64File = fileBuffer.toString("base64");
      const fileType = "markdown";
      const bucketName = "devlabs";

      const res = await fetch("/api/task", {
        method: "POST",
        body: JSON.stringify({
          file: base64File,
          filename: id,
          fileType,
          bucketName,
        }),
      });

      if (!res.ok) throw new Error("Failed to save file");
      const { url } = await res.json();
      console.log("File saved at:", url);
    } catch (error) {
      console.error("Failed to save file:", error);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const file = e.target.files[0];
    const imgNum = images.length + 1;
    const fileReader = new FileReader();

    fileReader.onload = async () => {
      try {
        const base64File = fileReader.result?.toString().split(",")[1];
        if (!base64File) throw new Error("Invalid file format");

        const res = await fetch("/api/task", {
          method: "POST",
          body: JSON.stringify({
            file: base64File,
            filename: `${id}-img${imgNum}`,
            fileType: file.type,
            bucketName: "devlabs-images",
            folderName: id,
            taskId: id,
            imgNum,
          }),
        });

        if (!res.ok) throw new Error("Failed to upload image");
        const url = await res.json();
        setImages((prev) => [...prev, url]);
        setSidebarOpen(true); // Open sidebar when new image is uploaded
      } catch (error) {
        console.error("Failed to upload image:", error);
      }
    };

    fileReader.readAsDataURL(file);
  };

  const insertImageToEditor = (url: string, index: number) => {
    const imageMarkdown = `![Image ${index + 1}](${url})`;
    const textArea = document.querySelector("textarea");

    if (textArea) {
      const start = textArea.selectionStart;
      const end = textArea.selectionEnd;
      const newValue =
        value.substring(0, start) +
        "\n" +
        imageMarkdown +
        "\n" +
        value.substring(end);
      setValue(newValue);
    } else {
      setValue((prev) => prev + "\n" + imageMarkdown + "\n");
    }
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`/api/task?id=${id}&images=true`);
        if (!response.ok) throw new Error("Failed to fetch images");
        const data = await response.json();
        setImages(data.images || []);
        setSidebarOpen(data.images?.length > 0);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      }
    };

    fetchImages();
  }, [id]);

  return (
    <div className="flex h-[calc(100vh-64px)] bg-gray-100 dark:bg-gray-900">
      <div className="flex-1 flex flex-col p-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md mb-4 flex flex-col h-full">
          <MDEditor
            value={value}
            onChange={setValue}
            className="h-full w-full"
            style={{ height: "100%" }}
            preview="edit"
          />
        </div>

        <div className="flex gap-4">
          <Button onClick={handleSave} className="px-6">
            Save
          </Button>
          <div className="relative">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <Button variant="outline" className="px-6">
              Upload Image
            </Button>
          </div>
        </div>
      </div>

      {/* Toggle Sidebar Button */}
      {images.length > 0 && (
        <button
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="px-2 bg-white dark:bg-gray-800 border-y border-l dark:border-gray-700 rounded-l-md shadow-sm self-center"
        >
          {isSidebarOpen ? (
            <ChevronRight className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          ) : (
            <ChevronLeft className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          )}
        </button>
      )}

      {/* Image Sidebar */}
      {images.length > 0 && isSidebarOpen && (
        <div className="w-64 bg-white dark:bg-gray-800 p-4 shadow-lg overflow-y-auto border-l border-gray-200 dark:border-gray-700">
          <h4 className="text-lg font-semibold mb-4 dark:text-gray-100">
            Uploaded Images
          </h4>
          <div className="grid gap-4">
            {images.map((url, index) => (
              <div
                key={index}
                className="group relative bg-gray-50 dark:bg-gray-700 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <Image
                  src={url}
                  alt={`Uploaded Image ${index + 1}`}
                  width={200}
                  height={200}
                  className="w-full h-auto rounded cursor-pointer object-cover"
                  onClick={() => insertImageToEditor(url, index)}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                  <p className="text-white text-sm">Click to insert</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
