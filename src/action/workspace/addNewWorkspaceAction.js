"use server";

import { createWorkspaceService } from "@/service/workspace/workspace.service";
import { revalidateTag } from "next/cache";

export const addNewWorkspaceAction = async (workspaceData) => {
  try {
    const res = await createWorkspaceService(workspaceData);
    revalidateTag("workspace");
    return res;
  } catch (e) {
    console.log("Error : ", e);
  }
};
