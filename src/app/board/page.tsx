'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


import { ArrowRight } from "lucide-react";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import getPosts from "./get-post";


type Post = {
  id: number;
  title: string;
  content: string;
  author: {
    name: string;
    email: string;
  } 
  createdAt:Date; //2025-06006T06:20:13.090Z
}


export default function BoardPage() {

 const [posts, setPosts] = useState<Post[]>([]);


  const router = useRouter();
  const handleLoginRedirect = () => {
    router.push("/login");
  };


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchPosts();
   },[])
    

  return (
    <div className="w-full h-svh">
      <AlertDialog>
        <AlertDialogTrigger>➕ 글쓰기</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>로그인이 필요합니다.</AlertDialogTitle>
            <AlertDialogDescription>
              게시판에 글을 작성하려면 로그인이 필요합니다.
              <br /> 로그인 페이지로 이동하시겠습니까?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>취소</AlertDialogCancel>
            <AlertDialogAction onClick={handleLoginRedirect}>
              로그인 페이지 이동
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">순번</TableHead>
            <TableHead>내용</TableHead>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead className="text-right">등록일</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">01</TableCell>
            <TableCell>사이트 이용 후기 & 여행 후기 작성</TableCell>
            <TableCell>관리자</TableCell>
            <TableCell className="text-right">2025.05.28</TableCell>
          </TableRow>
          {posts.map((post) => (
            <TableRow key={post.id}>
              <TableCell className="font-medium">{post.id}</TableCell>
              <TableCell>

                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>{post.title}</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                      {/* 글자수 자르기 200자?? */}
                      <p className="flex items-center gap-2">
                        {post.content}{" "}
                        <Link href={`/board/${post.id}`}>
                          {" "}
                          <span className="flex text-sm text-gray-500 italic">
                            {" "}
                            more <ArrowRight size={15}/>
                          </span>
                        </Link>
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TableCell>
              <TableCell>{post.author.email}</TableCell>
              <TableCell className="text-right">
                {new Date(post.createdAt).toLocaleDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
