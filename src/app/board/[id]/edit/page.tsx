import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowDownToLine } from "lucide-react";
import EditAction from "./edit";
import { prisma } from "@/lib/script";

type Props = Promise<{
  id: string;
}>;

export default async function EditPage({ params }: { params: Props }) {
  // id를 받아서 프리즈마에서 조회
  const postID = Number((await params).id);
  console.log("params", postID);
  console.log((await params).id)

  const post = await prisma.post.findUnique({
    where: { id: postID },
  });


  return (
    <div className="flex flex-col p-35 items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-20">게시판 글 수정하기</h1>
      <form className="grid w-full gap-2" action={EditAction}>
        <input type="hidden" name="id" value={postID} />
        <Input
          placeholder="제목을 입력하세요."
          className="mb-4"
          name="title"
          defaultValue={post?.title}
        />
        <Textarea
          placeholder="글을 저장하면 게시판에 게시됩니다."
          name="content"
          defaultValue={post?.content}
        />
        <Button className="text-xl " type="submit">
          수정 완료 <ArrowDownToLine />
        </Button>
      </form>
    </div>
  );
}
