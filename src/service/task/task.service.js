import headerToken from "@/app/api/headerToken";
import { baseUrl } from "@/service/constants";

export const getAllTaskServiceByWorkspaceId = async (
  workspaceId,
  pageNumber,
  pageSize,
  sortBy,
  sortDirection
) => {
  try {
    const header = await headerToken();
    const res = await fetch(
      `${baseUrl}/tasks/workspace/${workspaceId}?pageNo=${pageNumber}&pageSize=${pageSize}&sortBy=${sortBy}&sortDirection=${sortDirection}`,
      {
        headers: header,
        next: { tags: ["task"] },
      }
    );
    const data = await res.json();
    return data;
  } catch {
    console.log("Error : ", e);
  }
};

export const getTaskServiceByIdAndByWorkspaceId = async (
  taskId,
  workspaceId
) => {
  try {
    const header = await headerToken();
    const res = await fetch(
      `${baseUrl}/task/${taskId}/workspace/${workspaceId}`,
      { headers: header, next: { tags: ["status"] } }
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("Error : ", e);
  }
};

export const createTaskServiceByWorkspaceId = async (workspaceId, task) => {
  try {
    const header = await headerToken();
    const res = await fetch(`${baseUrl}/task/workspace/${workspaceId}`, {
      method: "POST",
      body: JSON.stringify(task),
      headers: header,
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("Error : ", e);
  }
};

export const updateTaskServiceByIdAndByWorkspaceId = async (
  taskId,
  workspaceId,
  task
) => {
  try {
    const header = await headerToken();
    const res = await fetch(
      `${baseUrl}/task/${taskId}/workspace/${workspaceId}`,
      {
        method: "PUT",
        body: JSON.stringify(task),
        headers: header,
      }
    );
    const data = await res.json();
    return data;
  } catch {
    console.log("Error : ", e);
  }
};

export const deleteTaskServiceByIdAndByWorkspaceId = async (
  taskId,
  workspaceId
) => {
  try {
    const header = await headerToken();
    const res = await fetch(
      `${baseUrl}/task/${taskId}/workspace/${workspaceId}`,
      {
        method: "DELETE",
        headers: header,
      }
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("Error : ", e);
  }
};

export const updateTaskServiceStatusByIdAndByWorkspaceId = async (
  taskId,
  workspaceId,
  status
) => {
  try {
    const header = await headerToken();
    const res = await fetch(
      `${baseUrl}/task/${taskId}/workspace/${workspaceId}/status?status=${status}`,
      {
        method: "PATCH",
        headers: header,
      }
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("Error : ", e);
  }
};
