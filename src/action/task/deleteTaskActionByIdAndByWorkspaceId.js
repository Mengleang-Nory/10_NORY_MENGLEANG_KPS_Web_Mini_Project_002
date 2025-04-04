"use server";

import { deleteTaskServiceByIdAndByWorkspaceId } from "@/service/task/task.service";
import { revalidateTag } from "next/cache";

export const deleteTaskActionByIdAndByWorkspaceId = async (
  taskId,
  workspaceId
) => {
  try {
    const res = await deleteTaskServiceByIdAndByWorkspaceId(
      taskId,
      workspaceId
    );
    revalidateTag("task");
    revalidateTag("status");
    return res;
  } catch (e) {
    console.log("Error : ", e);
  }
};
