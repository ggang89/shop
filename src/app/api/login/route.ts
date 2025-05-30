import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../lib/script";
import { getIronSession } from "iron-session";
//import { serialize } from "cookie";
import { cookies } from "next/headers";
import { sessionOptions } from "@/lib/session";
import bcrypt from "bcrypt";

export async function GET(req: NextRequest) {
  const session = await getIronSession(await cookies(), sessionOptions);
  //console.log("get session", new URL(req.url).searchParams);

  return NextResponse.json({
    isOK: true,
    session,
  });
}

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  // 입력받은 정보로 유저를 찾는다.
  const user = await prisma.user.findUnique({ where: { email } });

  // 유저가 없으면 에러 반환
  if (!user) {
    return NextResponse.json(
      { isOK: false, message: "아이디가 없습니다." },
      { status: 400 }
    );
  }

  // 유저가 있으면 비밀번호 확인

  // 비밀번호가 있으면 bcrypt로 비교
  const passwordCheck = await bcrypt.compare(password, user.password);

  // 비밀번호가 틀리면 에러 반환
  if (!passwordCheck) {
    //console.log("비밀번호가 틀렸습니다.");
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

  const session = await getIronSession<{
    id: number;
    email: string;
    isLoggedIn: boolean;
  }>(await cookies(), sessionOptions);

  // session.user = {
  //   id: user.id,
  //   email: user.email,
  // };
  session.id = user.id;
  session.email = user.email;
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
