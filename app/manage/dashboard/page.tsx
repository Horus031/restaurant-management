/* eslint-disable @typescript-eslint/no-explicit-any */
import accountApiRequest from "@/apiRequests/account";
import { cookies } from "next/headers";

const Dashboard = async () => {
  const cookieStore = cookies();
  const accessToken = (await cookieStore).get("accessToken")?.value as string;
  let name = "";
  try {
    const result = await accountApiRequest.sGetMe(accessToken);
    name = result.payload.data.name;
  } catch (error: any) {
    if (error.digest?.includes("NEXT_REDIRECT")) {
      throw error;
    }
    console.log(error);
  }
  return <div>Dashboard {name}</div>;
};

export default Dashboard;
