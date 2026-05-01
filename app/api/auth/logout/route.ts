/* eslint-disable @typescript-eslint/no-unused-vars */
import { authApiRequest } from "@/apiRequests/auth";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const cookieStore = cookies();
  const accessToken = (await cookieStore).get("accessToken")?.value;
  const refreshToken = (await cookieStore).get("refreshToken")?.value;
  (await cookieStore).delete("accessToken");
  (await cookieStore).delete("refreshToken");
  if (!accessToken || !refreshToken) {
    return Response.json(
      {
        message: "Access token or refresh token not found",
      },
      {
        status: 200,
      },
    );
  }
  try {
    const result = await authApiRequest.sLogout({
      accessToken,
      refreshToken,
    });

    return Response.json(result.payload);
  } catch (error) {
    console.log(error);
    return Response.json(
      {
        message: "API Calling error",
      },
      {
        status: 200,
      },
    );
  }
}
