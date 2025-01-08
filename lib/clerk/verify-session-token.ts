import { verifyToken } from "@clerk/clerk-sdk-node";

export async function verifySessionToken(token: string) {
  const session = await verifyToken(token, {
    jwtKey: process.env.CLERK_JWT_KEY,
    authorizedParties: ["http://localhost:3001", "mandarino.io"],
  });

  return session;
}
