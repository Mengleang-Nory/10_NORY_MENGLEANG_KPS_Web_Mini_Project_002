"use client";

import { addNewWorkspaceAction } from "@/action/workspace/addNewWorkspaceAction";
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
import { useState } from "react";
import { useForm } from "react-hook-form";

export function AddNewWorkspaceComponent() {
  const { handleSubmit, reset, register } = useForm();
  const [open, setOpen] = useState(false);

  const onSubmit = async (data) => {
    const res = await addNewWorkspaceAction(data);
    reset();
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="text-[40px]">
          <div className="cursor-pointer">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.53 12H16.54"
                stroke="#94A3B8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.54004 12H12.35"
                stroke="#94A3B8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.54 16V8"
                stroke="#94A3B8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.54004 13.04V15C2.54004 20 4.54004 22 9.54004 22H15.54C20.54 22 22.54 20 22.54 15V9C22.54 4 20.54 2 15.54 2H9.54004C4.54004 2 2.54004 4 2.54004 9"
                stroke="#94A3B8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Create New Workspace</DialogTitle>
          <DialogDescription>Workspace Name</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Input
                id="workspaceName"
                name="workspaceName"
                type="text"
                placeholder="Please type your workspace name"
                className="col-span-3 w-[375px]"
                {...register("workspaceName")}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-black text-white">
              Create
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
