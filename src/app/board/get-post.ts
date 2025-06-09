'use server';
import { prisma } from "@/lib/script";

export default async function getPosts() {


  const posts = await prisma.post.findMany({

    // 게시물과 작성자 반환
    include: {
      author: true, 
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return posts;
 }