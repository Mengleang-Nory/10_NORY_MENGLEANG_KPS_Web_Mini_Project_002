"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { deleteTaskActionByIdAndByWorkspaceId } from "@/action/task/deleteTaskActionByIdAndByWorkspaceId";

export function DeleteTaskComponent({ taskId }) {
  const { handleSubmit, reset, register } = useForm();
  const [open, setOpen] = useState(false);

  const workspaceId = usePathname().split("/")[2];

  const onSubmit = async () => {
    console.log("taskId", taskId);
    console.log("workspaceId", workspaceId);
    const res = await deleteTaskActionByIdAndByWorkspaceId(taskId, workspaceId);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="text-red-500">Delete</button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Delete Workspace</DialogTitle>
          <DialogDescription>Are you sure to delete this ? </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogFooter>
            <Button type="submit" className="bg-black text-white">
              Delete
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
