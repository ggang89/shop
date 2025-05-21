import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../lib/script";
import { getIronSession, IronSessionData } from "iron-session";
//import { serialize } from "cookie";
import { cookies } from "next/headers";
import { sessionOptions } from "@/lib/session";

export async function GET(req: NextRequest) {
  const session = await getIronSession(await cookies(), sessionOptions);
  console.log("get session", new URL(req.url).searchParams);

  return NextResponse.json({
    isOK: true,
    session,
  });
}

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return NextResponse.json(
      { isOK: false, message: "아이디가 없습니다." },
      { status: 400 }
    );
  }

  if (user.password !== password) {
    return NextResponse.json(
      { isOK: false, message: "비밀번호가 틀렸습니다." },
      { status: 400 }
    );
  }

  // const token = jwt.sign(
  //   { id: user.id, email: user.email },
  //   process.env.JWT_SECRET!,
  //   { expiresIn: "1h" }
  // );

  const session = await getIronSession<IronSessionData>(
    await cookies(),
    sessionOptions
  );

  // session.user = {
  //   id: user.id,
  //   email: user.email,
  // };
  session.isLoggedIn = true;
  await session.save();

  const response = NextResponse.json({ isOK: true, message: "로그인 성공" });

  //https://developer.mozilla.org/ko/docs/Web/API/Headers
  //https://ko.javascript.info/cookie
  // response.headers.set(
  //   "Set-Cookie",
  //   serialize("token", token, {
  //     httpOnly: true,
  //     path: "/",
  //     maxAge: 60 * 60,
  //     sameSite: "lax",
  //     secure: process.env.NODE_ENV === "production", // false => http로 설정
  //   })
  // );

  return response;
}
