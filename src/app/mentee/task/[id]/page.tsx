"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Buffer } from "buffer";
import Image from "next/image";

function Page({ params: { id } }: { params: { id: string } }) {
  const [value, setValue] = useState("**Hello world!!!**");
  const [images, setImages] = useState<string[]>([]);

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
            taskId: id,
            imgNum,
          }),
        });

        if (!res.ok) throw new Error("Failed to upload image");
        const { url } = await res.json();
        setImages((prev) => [...prev, url]);
      } catch (error) {
        console.error("Failed to upload image:", error);
      }
    };

    fileReader.readAsDataURL(file);
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`/api/task?id=${id}&images=true`);
        if (!response.ok) throw new Error("Failed to fetch images");
        const data = await response.json();
        setImages(data.images || []);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      }
    };

    fetchImages();
  }, [id]);

  return (
    <div>
      <div className="container">
        <MDEditor value={value} height="100%" onChange={setValue} />
      </div>

      <div className="mt-4 flex">
        <Button onClick={handleSave}>Save</Button>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="ml-4"
        />
      </div>

      <div className="sidebar mt-4">
        <h4>Uploaded Images</h4>
        <ul>
          {images.map((url, index) => (
            <li key={index}>
              <Image
                src={url}
                alt={`Uploaded Image ${index + 1}`}
                width={100}
                height={100}
                className="cursor-pointer"
                onClick={() =>
                  setValue((prev) => `${prev}![Image ${index + 1}](${url})`)
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Page;
