"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowDownToLine } from "lucide-react";
import PublishAction from "./write";
import { useRouter } from "next/navigation";

export default function WriteBoardPage() {
const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    try {
      const result = await PublishAction({ title, content });

      if (result.isOK) {
        alert(result.message);
        router.push("/board")
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="flex flex-col p-35 items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-20">게시판 글쓰기</h1>
      <form className="grid w-full gap-2" onSubmit={handleSubmit}>
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
