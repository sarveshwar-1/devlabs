"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Buffer } from "buffer";
import Image from "next/image";
import MDEditor, { type TextAreaTextApi } from "@uiw/react-md-editor";
import {
  ChevronRight,
  ChevronLeft,
  Save,
  Upload,
  Image as ImageIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";

function Page({ params: { id } }: { params: { id: string } }) {
  const [value, setValue] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const editorRef = useRef<TextAreaTextApi | null>(null);

  const handleSave = async () => {
    try {
      setIsSaving(true);
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
      toast({
        title: "Success",
        description: "Document saved successfully",
      });
    } catch (error) {
      console.error("Failed to save file:", error);
      toast({
        title: "Error",
        description: "Failed to save document",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
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
        setSidebarOpen(true);
        toast({
          title: "Success",
          description: "Image uploaded successfully",
        });
      } catch (error) {
        console.error("Failed to upload image:", error);
        toast({
          title: "Error",
          description: "Failed to upload image",
          variant: "destructive",
        });
      }
    };

    fileReader.readAsDataURL(file);
  };

  const insertImageToEditor = (url: string, index: number) => {
    const imageMarkdown = `![Image ${index + 1}](${url})`;
    if (editorRef.current) {
      const editor = editorRef.current;
      const pos = editor.getSelection();
      editor.replaceSelection(imageMarkdown);
      editor.focus();
    } else {
      setValue((prev) => prev + imageMarkdown);
    }
  };

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await fetch(`/api/task?id=${id}`);
        if (!response.ok) throw new Error("Failed to fetch task");
        const text = await response.text();
        setValue(text);
      } catch (error) {
        console.error("Failed to fetch task:", error);
        toast({
          title: "Error",
          description: "Failed to load document",
          variant: "destructive",
        });
      }
    };

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

    fetchTask();
    fetchImages();
  }, [id]);

  return (
    <div className="flex h-[calc(100vh-64px)] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <motion.div
        className="flex-1 flex flex-col p-4 space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="flex-1 overflow-hidden">
          <MDEditor
            value={value}
            onChange={setValue}
            preview="edit"
            className="h-full !min-h-full border-none"
            textareaProps={{
              onFocus: (e, api) => {
                editorRef.current = api;
              },
            }}
          />
        </Card>

        <div className="flex gap-4">
          <Button
            onClick={handleSave}
            className="px-6 relative overflow-hidden"
            disabled={isSaving}
          >
            <motion.div
              animate={isSaving ? { rotate: 360 } : {}}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="mr-2"
            >
              <Save className="h-4 w-4" />
            </motion.div>
            {isSaving ? "Saving..." : "Save"}
          </Button>

          <div className="relative">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <Button variant="outline" className="px-6">
              <Upload className="h-4 w-4 mr-2" />
              Upload Image
            </Button>
          </div>
        </div>
      </motion.div>

      {images.length > 0 && (
        <motion.button
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="px-2 bg-white dark:bg-gray-800 border-y border-l dark:border-gray-700 rounded-l-md shadow-sm self-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isSidebarOpen ? (
            <ChevronRight className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          ) : (
            <ChevronLeft className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          )}
        </motion.button>
      )}

      <AnimatePresence>
        {images.length > 0 && isSidebarOpen && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-80 bg-white dark:bg-gray-800 p-4 shadow-lg overflow-y-auto border-l border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-center gap-2 mb-4">
              <ImageIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              <h4 className="text-lg font-semibold dark:text-gray-100">
                Uploaded Images
              </h4>
            </div>
            <div className="grid gap-4">
              {images.map((url, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-gray-50 dark:bg-gray-700 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <button
                    onClick={() => insertImageToEditor(url, index)}
                    className="w-full p-0 border-0 bg-transparent cursor-pointer"
                  >
                    <Image
                      src={url}
                      alt={`Uploaded Image ${index + 1}`}
                      width={200}
                      height={200}
                      className="w-full h-auto rounded object-cover"
                    />
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <p className="text-white text-sm">Click to insert</p>
                    </motion.div>
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Page;
