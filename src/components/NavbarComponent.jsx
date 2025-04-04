import { getWorkspaceActionById } from "@/action/workspace/getWorkspaceActionById";
import React from "react";

const NavbarComponent = async ({ userData, workspaceName }) => {
  return (
    <section className="flex justify-between items-center px-20 py-[30px] bg-[#ffffff] sticky top-[0px] left-[355px] w-[1325px]">
      <ul className="flex items-center gap-[30px]">
        <li>Workspace</li>
        <li>{workspaceName}</li>
      </ul>
      <div className="flex items-center gap-[10px]">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 7.51334V11.3983"
            stroke="#1E293B"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M24.0217 17.6983C24.8733 19.1217 24.1967 20.965 22.6217 21.49C17.045 23.345 11.0133 23.345 5.43668 21.49C3.75668 20.93 3.11501 19.2267 4.03668 17.6983L5.51835 15.225C5.92668 14.5483 6.25335 13.3467 6.25335 12.565V10.115C6.25335 5.81001 9.73001 2.33334 14.0233 2.33334C18.2933 2.33334 21.7933 5.83334 21.7933 10.1033V12.5533C21.7933 12.7633 21.8167 12.9967 21.8517 13.2417"
            stroke="#1E293B"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
          <path
            d="M17.885 21.9567C17.885 24.0917 16.135 25.8417 14 25.8417C12.9383 25.8417 11.9583 25.3983 11.2583 24.6983C10.5583 23.9983 10.115 23.0183 10.115 21.9567"
            stroke="#1E293B"
            strokeWidth="1.5"
            strokeMiterlimit="10"
          />
        </svg>
        <article className="flex items-center gap-[10px]">
          <img
            className="w-[50px] h-[50px] rounded-full"
            src={userData.payload.profile}
            alt={`${userData.payload.username} profile`}
          />
          <div>
            <h2>{userData.payload.username}</h2>
            <p>{userData.payload.email}</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default NavbarComponent;
