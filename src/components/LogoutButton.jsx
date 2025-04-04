"use client";
import React from "react";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  return (
    <button
      onClick={() => signOut()}
      className="flex items-center gap-[10px] cursor-pointer fixed left-[30px] bottom-[100px]"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.9167 10.8334V12.7167C17.9167 16.4417 16.425 17.9334 12.7 17.9334H12.5917C9.24165 17.9334 7.69999 16.725 7.42499 13.775"
          stroke="#009990"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.41669 6.29995C7.67502 3.29995 9.21669 2.07495 12.5917 2.07495H12.7C16.425 2.07495 17.9167 3.56662 17.9167 7.29162"
          stroke="#009990"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.5 10H3.01666"
          stroke="#009990"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.87498 7.20837L2.08331 10L4.87498 12.7917"
          stroke="#009990"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <h3 className="text-[#009990] font-[700] text-[20px]">Logout</h3>
    </button>
  );
};

export default LogoutButton;
