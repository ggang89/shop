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

export default async function PublishAction(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  const session:Session = await getIronSession(await cookies(), sessionOptions);
  //console.log("user", session);
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

 
}
