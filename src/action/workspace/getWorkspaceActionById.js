import { getWorkspaceServiceById } from "@/service/workspace/workspace.service";

export const getWorkspaceActionById = async (workspaceId) => {
  try {
    const res = await getWorkspaceServiceById(workspaceId);
    return res;
  } catch (e) {
    console.log("Error : ", e);
  }
};
