import headerToken from "@/app/api/headerToken";
import { baseUrl } from "@/service/constants";

export const getAllWorkspaceService = async (
  pageNumber,
  pageSize,
  sortBy,
  sortDirection
) => {
  try {
    const header = await headerToken();
    const res = await fetch(
      `${baseUrl}/workspaces?pageNo=${pageNumber}&pageSize=${pageSize}&sortBy=${sortBy}&sortDirection=${sortDirection}`,
      {
        headers: header,
        next: { tags: ["workspace"] },
      }
    );

    const data = await res.json();
    return data;
  } catch (e) {
    console.log("Error : ", e);
  }
};

export const getWorkspaceServiceById = async (workspaceId) => {
  try {
    const header = await headerToken();
    const res = await fetch(`${baseUrl}/workspace/${workspaceId}`, {
      headers: header,
      next: { tags: ["status"] },
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("Error : ", e);
  }
};

export const createWorkspaceService = async (workspace) => {
  console.log("workspace : ", workspace);
  try {
    const header = await headerToken();
    const res = await fetch(`${baseUrl}/workspace`, {
      method: "POST",
      body: JSON.stringify(workspace),
      headers: header,
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("Error : ", e);
  }
};

export const updateWorkspaceService = async (workspaceId, workspace) => {
  try {
    const header = await headerToken();
    const res = await fetch(`${baseUrl}/workspace/${workspaceId}`, {
      method: "PUT",
      body: JSON.stringify(workspace),
      headers: header,
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("Error : ", e);
  }
};

export const updateWorkspaceServiceStatusById = async (workspaceId, status) => {
  try {
    const header = await headerToken();
    const res = await fetch(
      `${baseUrl}/workspace/${workspaceId}/favorite?favorite=${status}`,
      {
        method: "PATCH",
        headers: header,
      }
    );
  } catch {
    console.log("Error : ", e);
  }
};
