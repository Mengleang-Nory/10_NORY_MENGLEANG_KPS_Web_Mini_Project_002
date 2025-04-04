import headerToken from "@/app/api/headerToken";
import { baseUrl } from "@/service/constants";

export const getAppUserService = async () => {
  try {
    const header = await headerToken();
    const res = await fetch(`${baseUrl}/user`, { headers: header });
    const data = await res.json();
    return data;
  } catch (e) {
    console.log("Error : ", e);
  }
};
