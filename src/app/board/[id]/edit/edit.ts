"use server";

import { prisma } from "@/lib/script";
import { redirect } from "next/navigation";

export default async function EditAction(formData: FormData) {
  const id = Number(formData.get("id"));
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  await prisma.post.update({
    where: { id },
    data: { title, content },
  });

  redirect("/board");
}
