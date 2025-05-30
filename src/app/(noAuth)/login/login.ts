"use server";

import { prisma } from "@/lib/script";
import { sessionOptions } from "@/lib/session";
import bcrypt from "bcrypt";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type Params = {
  email: string;
  password: string;
};

export async function LoginAction(data: Params) {
  const { email, password } = data;
  let user = null;
  try {
    user = await prisma.user.findUnique({ where: { email } });
  } catch {
    return {
      isOk: false,
      message: "데이터베이스 오류가 발생했습니다.",
    };
  }

  if (!user) {
    return {
      isOk: false,
      message: "유저가 존재하지 않습니다.",
    };
  }

  const passwordCheck = await bcrypt.compare(password, user.password);
  if (!passwordCheck) {
    return {
      isOk: false,
      message: "비밀번호가 틀렸습니다.",
    };
  }

  const session = await getIronSession<{
    id: number;
    email: string;
    isLoggedIn: boolean;
  }>(await cookies(), sessionOptions);

  session.id = user.id;
  session.email = user.email;
  session.isLoggedIn = true;
  await session.save();

  redirect("/protect");
}
