'use server';
import { prisma } from "@/lib/script";

export default async function getPosts() {


  const posts = await prisma.post.findMany({
    include: {
      author: true, // author name 표시용
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return posts;
 }