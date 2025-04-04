"use server";

import { createTaskServiceByWorkspaceId } from "@/service/task/task.service";
import { revalidateTag } from "next/cache";

export const addNewTaskActionByWorkspaceId = async (workspaceId, task) => {
  try {
    const res = await createTaskServiceByWorkspaceId(workspaceId, task);
    revalidateTag("task");
    return res;
  } catch (e) {
    console.log("Error : ", e);
  }
};
