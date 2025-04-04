import { getAppUserService } from "@/service/appUser/appUser.service";

export const getAppUserAction = async () => {
  try {
    const res = await getAppUserService();
    return res;
  } catch (e) {
    console.log("Error : ", e);
  }
};
