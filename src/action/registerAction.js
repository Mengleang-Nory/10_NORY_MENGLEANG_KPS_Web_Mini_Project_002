"use server";
import { registerService } from "@/service/auth/authentication.service";

export const registerAction = async (user) => {
  try {
    const res = await registerService(user);
    return res;
  } catch (e) {
    console.log("Error : ", e);
  }
};
