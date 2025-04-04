"use server";

import { updateWorkspaceServiceStatusById } from "@/service/workspace/workspace.service";
import { revalidateTag } from "next/cache";

export const updateWorkspaceActionStatusById = async (workspaceId, status) => {
  try {
    const res = await updateWorkspaceServiceStatusById(workspaceId, status);
    revalidateTag("workspace");
    revalidateTag("status");
    return res;
  } catch (e) {
    console.log("Error : ", e);
  }
};
