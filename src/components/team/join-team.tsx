import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
function Jointeam() {
  const [open, setOpen] = useState(false);
  const [joincode, setJoincode] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    if (!joincode) {
      setError("Join code is required");
      return;
    }

    try {
      const res = await fetch("/api/team/join", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ joincode }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to join team");
        return;
      }

      setOpen(false);
      setJoincode("");
      window.location.reload();
    } catch (error) {
      setError("Failed to join team");
      console.error("Failed to join team:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Join Team</Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Join Team</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Label>
            Join Code
            <Input
              value={joincode}
              onChange={(e) => {
                setJoincode(e.target.value);
                setError("");
              }}
              placeholder="Enter team join code"
              className={error ? "border-red-500" : ""}
            />
          </Label>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <div className="flex justify-end">
            <Button onClick={handleSubmit}>Join</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default Jointeam;
