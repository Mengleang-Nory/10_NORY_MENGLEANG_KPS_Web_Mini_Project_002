"use server";

import { updateTaskServiceStatusByIdAndByWorkspaceId } from "@/service/task/task.service";
import { revalidateTag } from "next/cache";

export const updateTaskActionStatusByIdAndByWorkspaceId = async (
  taskId,
  workspaceId,
  status
) => {
  try {
    const res = await updateTaskServiceStatusByIdAndByWorkspaceId(
      taskId,
      workspaceId,
      status
    );

    revalidateTag("task");
    revalidateTag("status");
    return res;
  } catch (e) {
    console.log("Error : ", e);
  }
};
