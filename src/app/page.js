import { getAppUserAction } from "@/action/getAppUserAction";
import { getAllWorkspaceAction } from "@/action/workspace/getAllWorkSapceAction";
import LogoutButton from "@/components/LogoutButton";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";

export default async function Home() {
  const workspaceData = await getAllWorkspaceAction(
    "0",
    "10",
    "workspaceId",
    "ASC"
  );

  const userData = await getAppUserAction();

  return (
    <>
      <NavbarComponent userData={userData} />
      <SidebarComponent workspaceData={workspaceData} />
      <LogoutButton />
    </>
  );
}
