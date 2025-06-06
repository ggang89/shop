"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowDownToLine } from "lucide-react";
import PublishAction from "./write";

export default function WriteBoardPage() {
  return (
    <div className="flex flex-col p-35 items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-20">게시판 글쓰기</h1>
      <form className="grid w-full gap-2" action={PublishAction}>
        <Input placeholder="제목을 입력하세요." className="mb-4" name="title" />
        <Textarea
          placeholder="글을 저장하면 게시판에 게시됩니다."
          name="content"
        />
        <Button className="text-xl " type="submit">
          저장 <ArrowDownToLine />
        </Button>
      </form>
    </div>
  );
}
