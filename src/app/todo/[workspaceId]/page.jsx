import { getAppUserAction } from "@/action/getAppUserAction";
import { getAllTaskByWorkspaceIdAction } from "@/action/task/getAllTaskByWorkspaceIdAction";
import { getAllWorkspaceAction } from "@/action/workspace/getAllWorkSapceAction";
import { getWorkspaceActionById } from "@/action/workspace/getWorkspaceActionById";
import CardComponent from "@/components/CardComponent";
import LogoutButton from "@/components/LogoutButton";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import { UpdateStatusButtonComponent } from "@/components/UpdateStatusButtonComponent";
import React from "react";
import AddTaskButton from "../_components/AddTaskButton";

const WorkspaceDetailPage = async ({ params }) => {
  const workspaceData = await getAllWorkspaceAction(
    "0",
    "10",
    "workspaceId",
    "ASC"
  );

  const userData = await getAppUserAction();

  const { workspaceId } = await params;

  const taskData = await getAllTaskByWorkspaceIdAction(
    workspaceId,
    "0",
    "10",
    "taskId",
    "ASC"
  );

  const workspaceDetail = await getWorkspaceActionById(workspaceId);

  const notStatedTask = taskData.payload.filter(
    (task) => task.status == "NOT_STARTED"
  );

  const inProgressTask = taskData.payload.filter(
    (task) => task.status == "IN_PROGRESS"
  );
  const finishedTask = taskData.payload.filter(
    (task) => task.status == "FINISHED"
  );

  const workspaceName = workspaceDetail.payload.workspaceName;
  const workspaceStatus = workspaceDetail.payload.isFavorite;

  return (
    <div>
      <NavbarComponent userData={userData} workspaceName={workspaceName} />
      <SidebarComponent workspaceData={workspaceData} />
      <LogoutButton />
      <div className="ml-[355px]">
        <section className="flex justify-between items-center mt-[25px] px-20">
          <h2>{workspaceName}</h2>
          <UpdateStatusButtonComponent
            workspaceStatus={workspaceStatus}
            workspaceId={workspaceId}
          />
        </section>
        <div className="flex justify-between items-start mt-8 px-20">
          <div>
            <h3>Not Stated</h3>
            <section className="flex flex-col gap-5">
              <CardComponent cardData={notStatedTask} color={"#F96666"} />
            </section>
          </div>
          <div>
            <h3>In Progress</h3>
            <section>
              <CardComponent cardData={inProgressTask} color={"#4379F2"} />
            </section>
          </div>
          <div>
            <h3>Finished</h3>
            <section>
              <CardComponent cardData={finishedTask} color={"#009990"} />
            </section>
          </div>
        </div>
      </div>
      <div className="fixed bottom-10 right-10">
        <AddTaskButton />
      </div>
    </div>
  );
};

export default WorkspaceDetailPage;
