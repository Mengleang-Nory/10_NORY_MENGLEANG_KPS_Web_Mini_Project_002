"use server";

import { getAllWorkspaceService } from "@/service/workspace/workspace.service";

export const getAllWorkspaceAction = async (
  pageNumber,
  pageSize,
  sortBy,
  sortDirection
) => {
  try {
    const res = await getAllWorkspaceService(
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
