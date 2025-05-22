import { NextRequest, NextResponse } from "next/server";
import { getIronSession, IronSessionData } from "iron-session";
import { cookies } from "next/headers";
import { sessionOptions } from "@/lib/session";

export async function POST(req: NextRequest) {
  const session = await getIronSession<IronSessionData>(
    await cookies(),
    sessionOptions
  );
  await session.destroy();
  session.isLoggedIn = false;
  // console.log("logout session", new URL(req.url).searchParams);
  return NextResponse.redirect(new URL("/login", req.url));
}
