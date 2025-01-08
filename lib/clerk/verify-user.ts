import { headers } from "next/headers";
import { verifySessionToken } from "./verify-session-token";

export const verifyUser = async () => {
  const headersList = await headers();

  const token = headersList.get("authorization")?.split(" ")?.[1] as string;

  const verifiedUser = await verifySessionToken(token);

  return verifiedUser;
};
