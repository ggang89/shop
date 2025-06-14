import { getIronSession, SessionOptions } from "iron-session";
import { cookies } from "next/headers";

export type Session = {
  name: string;
  id: number;
  email: string;
  isLoggedIn: boolean;
};

export const sessionOptions: SessionOptions = {
  password: process.env.IRON_SESSION_SECRET as string,
  cookieName: "iron-session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};


export async function getIronSessionData() {
  const session: Session = await getIronSession(
    await cookies(),
    sessionOptions
  );
  return session;
}
