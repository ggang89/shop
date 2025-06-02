import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowDownToLine } from "lucide-react";

export default function WriteBoardPage() {
  return (
    <div className="flex flex-col p-35 items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-20">게시판 글쓰기</h1>
      <div className="grid w-full gap-2">
        <Input placeholder="제목을 입력하세요." className="mb-4" />
        <Textarea
          placeholder="글을 저장하면 게시판에 게시됩니다."
          className=""
        />
        <Button className="text-xl ">
          저장 <ArrowDownToLine />
        </Button>
      </div>
    </div>
  );
}
