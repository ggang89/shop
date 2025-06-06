"use server";

import { prisma } from "@/lib/script";
import { sessionOptions } from "@/lib/session";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

type Session = {
  name: string;
  id: number;
  email: string;
  isLoggedIn: boolean;
}
type FormData = {
  title: string;
  content: string;
}

export default async function PublishAction({title,content}:FormData) {

  const session:Session = await getIronSession(await cookies(), sessionOptions);
  const email = session.email;
  
 
  if (!title || !content) {
    throw new Error("제목과 내용을 모두 입력해주세요.");
  }

  await prisma.post.create({
    data: {
      title,
      content,
      author: {
        connect: {
          email:email
        }
      }
    }
  })
  return {
    isOK: true,
    message: "게시글이 성공적으로 작성되었습니다.",
}
 
}
