"use client";

import { AddNewWorkspaceComponent } from "./AddNewWorkspaceComponent";
import Link from "next/link";
import { UpdateWorkspaceComponent } from "./UpdateWorkspaceComponent";

const SidebarComponent = ({ workspaceData }) => {
  return (
    <aside className="w-[355px] p-[30px] fixed top-[100px] left-0 buttom-0">
      <article className="flex justify-between items-center my-5">
        <h2 className=" text-[#94A3B8] font-[700] text-[24px]">Workspace</h2>
        <div className="z-50">
          <AddNewWorkspaceComponent />
        </div>
      </article>
      <ul className="flex flex-col gap-[10px] h-[200px] overflow-auto">
        {workspaceData.payload.map((workspace) => (
          <li
            key={workspace.workspaceId}
            className="flex justify-between items-center p-[5px]"
          >
            <div className="flex items-center gap-[10px]">
              <div className="w-[10px] h-[10px] bg-red-500 rounded-full"></div>
              <Link href={`/todo/${workspace.workspaceId}`}>
                <h3>{workspace.workspaceName}</h3>
              </Link>
            </div>
            <UpdateWorkspaceComponent workspaceId={workspace.workspaceId} />
          </li>
          // <UpdateWorkspaceComponent workspaceId={workspace.workspaceId} />
        ))}
      </ul>

      <article className="flex justify-between items-center my-5">
        <h2 className=" text-[#94A3B8] font-[700] text-[24px]">Favorite</h2>
        <button className="cursor-pointer">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.1 8.61001C22.14 8.95001 22.62 10.43 21.15 11.89L18.67 14.37C18.25 14.79 18.02 15.6 18.15 16.18L18.86 19.25C19.42 21.68 18.13 22.62 15.98 21.35L12.99 19.58C12.45 19.26 11.56 19.26 11.01 19.58L8.01997 21.35C5.87997 22.62 4.57997 21.67 5.13997 19.25L5.84997 16.18C5.97997 15.6 5.74997 14.79 5.32997 14.37L2.84997 11.89C1.38997 10.43 1.85997 8.95001 3.89997 8.61001L7.08997 8.08001C7.61997 7.99001 8.25997 7.52002 8.49997 7.03001L10.26 3.51001C11.21 1.60001 12.77 1.60001 13.73 3.51001L15.49 7.03001C15.59 7.24001 15.77 7.45001 15.98 7.62001"
              stroke="#94A3B8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </article>
      <ul className="flex flex-col gap-[10px] h-[200px] overflow-auto">
        {workspaceData.payload
          .filter((workspace) => workspace.isFavorite)
          .map((workspace) => (
            <Link
              href={`/todo/${workspace.workspaceId}`}
              key={workspace.workspaceId}
            >
              <li className="flex justify-between items-center p-[5px]">
                <div className="flex items-center gap-[10px]">
                  <div className="w-[10px] h-[10px] bg-red-500 rounded-full"></div>
                  <h3>{workspace.workspaceName}</h3>
                </div>
                {/* <button className="cursor-pointer">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.16667 8.83331C3.25 8.83331 2.5 9.58331 2.5 10.5C2.5 11.4166 3.25 12.1666 4.16667 12.1666C5.08333 12.1666 5.83333 11.4166 5.83333 10.5C5.83333 9.58331 5.08333 8.83331 4.16667 8.83331Z"
                      stroke="#1E293B"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M15.8334 8.83331C14.9167 8.83331 14.1667 9.58331 14.1667 10.5C14.1667 11.4166 14.9167 12.1666 15.8334 12.1666C16.75 12.1666 17.5 11.4166 17.5 10.5C17.5 9.58331 16.75 8.83331 15.8334 8.83331Z"
                      stroke="#1E293B"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M8.33331 10.5C8.33331 11.4166 9.08331 12.1666 9.99998 12.1666C10.9166 12.1666 11.6666 11.4166 11.6666 10.5C11.6666 9.58331 10.9166 8.83331 9.99998 8.83331"
                      stroke="#1E293B"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button> */}
                <UpdateWorkspaceComponent workspaceId={workspace.workspaceId} />
              </li>
            </Link>
          ))}
      </ul>
    </aside>
  );
};

export default SidebarComponent;
