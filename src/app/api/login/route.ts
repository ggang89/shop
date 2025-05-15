import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../lib/script";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";

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

  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET!,
    { expiresIn: "1h" }
  );

  const response = NextResponse.json({ isOK: true, message: "로그인 성공" });

  response.headers.set(
    "Set-Cookie",
    serialize("token", token, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    })
  );

  return response;
}
