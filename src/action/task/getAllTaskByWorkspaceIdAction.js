"use server";

import { getAllTaskServiceByWorkspaceId } from "@/service/task/task.service";

export const getAllTaskByWorkspaceIdAction = async (
  workspaceId,
  pageNumber,
  pageSize,
  sortBy,
  sortDirection
) => {
  try {
    const res = await getAllTaskServiceByWorkspaceId(
      workspaceId,
      pageNumber,
      pageSize,
      sortBy,
      sortDirection
    );
    return res;
  } catch (e) {
    console.log("Error : ", e);
  }
};
