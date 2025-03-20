"use client";

import { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useParams } from "next/navigation";

export default function FilePage() {
  const [uploading, setUploading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState<string>("");
  const [existingFiles, setExistingFiles] = useState<string[]>([]);
  const [deletingFile, setDeletingFile] = useState<string | null>(null);
  const params = useParams();

  useEffect(() => {
    const fetchExistingFiles = async () => {
      try {
        const response = await fetch(
          `/api/pfile?projectId=${params.id}&bucketName=devlabs`
        );
        if (response.ok) {
          const data = await response.json();
          setExistingFiles(
            data.files.map((file: string) => file.split("/").pop())
          );
        }
      } catch (error) {
        console.error("Failed to fetch existing files:", error);
      }
    };

    fetchExistingFiles();
  }, [params.id, uploading]); // Refetch after new upload

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setSelectedFiles((prev) => [...prev, ...acceptedFiles]);
  }, []);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setSelectedFiles((prev) => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const uploadFiles = async () => {
    setUploading(true);
    try {
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        setUploadProgress(
          `Uploading ${file.name} (${i + 1}/${selectedFiles.length})`
        );

        // Convert file to base64
        const base64File = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            const base64String = (reader.result as string).split(",")[1];
            resolve(base64String);
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });

        const response = await fetch(`/api/pfile`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            file: base64File,
            filename: file.name,
            fileType: file.type,
            bucketName: "devlabs",
            folderName: "files",
            projectId: params.id,
          }),
        });

        if (!response.ok) {
          throw new Error(`Failed to upload ${file.name}`);
        }
      }
      setSelectedFiles([]);
      setUploadProgress("");
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setUploading(false);
    }
  };

  const deleteFile = async (filename: string) => {
    try {
      setDeletingFile(filename);
      if (!params.id || !filename) throw new Error("Missing required fields");
      const response = await fetch(`/api/pfile`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filename: `files/${params.id}/${filename}`,
          bucketName: "devlabs",
          projectId: params.id,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete file");
      }

      // Refresh file list
      setExistingFiles((prev) => prev.filter((f) => f !== filename));
    } catch (error) {
      console.error("Delete error:", error);
    } finally {
      setDeletingFile(null);
    }
  };

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({
      onDrop,
      accept: {
        "application/msword": [".doc"],
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
          [".docx"],
        "application/vnd.ms-powerpoint": [".ppt"],
        "application/vnd.openxmlformats-officedocument.presentationml.presentation":
          [".pptx"],
        "application/vnd.ms-excel": [".xls"],
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
          ".xlsx",
        ],
        "text/csv": [".csv"],
        "application/pdf": [".pdf"],
      },
      maxSize: 10000000, // 10MB max file size
      noClick: true, // Disable click to select
    });

  return (
    <div className="p-4 space-y-4">
      <div className="flex gap-4 items-center">
        <label
          htmlFor="file-upload"
          className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Select Files
          <input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={handleFileSelect}
            multiple
            accept=".doc,.docx,.ppt,.pptx,.xls,.xlsx,.csv,.pdf"
          />
        </label>
        <span className="text-sm text-gray-500">
          or drag and drop files below
        </span>
      </div>

      <div
        {...getRootProps()}
        className={`border-2 border-dashed p-8 text-center
          ${isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here...</p>
        ) : (
          <p>Drag and drop files here</p>
        )}
      </div>

      {fileRejections.length > 0 && (
        <div className="text-red-500">
          File type not accepted or file is too large (max 10MB)
        </div>
      )}

      {existingFiles.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold">Existing Files:</h3>
          <ul className="mt-2 space-y-2">
            {existingFiles.map((filename, index) => (
              <li
                key={index}
                className="flex items-center justify-between  p-2 rounded"
              >
                <span>{filename}</span>
                <button
                  onClick={() => deleteFile(filename)}
                  disabled={deletingFile === filename}
                  className={`text-red-500 hover:text-red-700 ${
                    deletingFile === filename
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  {deletingFile === filename ? "Deleting..." : "Delete"}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedFiles.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold">Selected Files:</h3>
          <ul className="mt-2 space-y-2">
            {selectedFiles.map((file, index) => (
              <li
                key={index}
                className="flex items-center justify-between p-2 rounded"
              >
                <span>{file.name}</span>
                <button
                  onClick={() => removeFile(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {uploadProgress && <div className="text-blue-600">{uploadProgress}</div>}

      {selectedFiles.length > 0 && (
        <button
          onClick={uploadFiles}
          disabled={uploading}
          className={`mt-4 px-4 py-2 bg-blue-500 text-white rounded 
            ${
              uploading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
            }`}
        >
          {uploading
            ? "Uploading..."
            : selectedFiles.length === 1
            ? "Upload File"
            : "Upload Files"}
        </button>
      )}
    </div>
  );
}
