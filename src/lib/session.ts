import { SessionOptions } from "iron-session";

export type Session = {
  name: string;
  id: number;
  email: string;
  isLoggedIn: boolean;
}

export const sessionOptions: SessionOptions = {
  password: process.env.IRON_SESSION_SECRET as string,
  cookieName: "iron-session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
};

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      name: string;
      id: number;
      email: string;
    };
    isLoggedIn: boolean;
  }
}
