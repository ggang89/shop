import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import getPosts from "../get-post";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { Session, sessionOptions } from "@/lib/session";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Params = Promise<{
  id: number;
}>;

export default async function DetailBoardPage({ params }: { params: Params }) {
  const { id } = await params; // params로 받은 id는 string이라서 숫자로 바꿔줘야함

  const posts = await getPosts();

  // 세션 정보를 받아와서
  const session: Session = await getIronSession(
    await cookies(),
    sessionOptions
  );
  //console.log("sessionUser", session.email);

  // posts의 순서와 DB순서가 다름 => id가 같은 post의 글을 보여줌
  const post = posts.find((post) => post.id === Number(id));
  //DB에서 받은 id는 숫자이고, params id는 string이라서 숫자로 바꿔서 비교
  // console.log("post", post);

  // 세션이 있고 세션 정보와 게시판 글쓴이가 같으면
  //  수정버튼을 보여준다.
  const isOwner = session && session.email === post?.author.email;
  //console.log("isOwner",isOwner)

  return (
    <div className=" w-screen p-20">
      <Card className="w-full  text-center">
        <CardHeader>
          <CardTitle>{post?.title}</CardTitle>
        </CardHeader>
        <CardContent className="">
          <p className="text-right italic">작성자 : {post?.author.email}</p>
          <div className="flex justify-end">
            {isOwner && (
              <Link href={`/board/${id}/edit`}>
                <Button className="w-[90px] ">수정하기</Button>
              </Link>
            )}
          </div>
          <p className="">{post?.content}</p>
        </CardContent>
      </Card>
    </div>
  );
}
