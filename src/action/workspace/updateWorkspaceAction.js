"use server";

import { updateWorkspaceService } from "@/service/workspace/workspace.service";
import { revalidateTag } from "next/cache";

export const updateWorkspaceAction = async (workspaceId, workspaceData) => {
  try {
    const res = await updateWorkspaceService(workspaceId, workspaceData);
    revalidateTag("workspace");
    return res;
  } catch (e) {
    console.log("Error : ", e);
  }
};
