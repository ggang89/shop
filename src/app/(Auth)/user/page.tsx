import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SquarePen } from "lucide-react";
import { Mail } from "lucide-react";

export default function User() {
  return (
    <div className="flex-wrap ">
      {/* 프로필 => id / 게시판 글쓰기 탭 */}
      <section
        className="border-2 p-4 m-4 rounded-lg 
      "
      >
        <h1 className="text-2xl font-bold text-center">내 정보</h1>
        <div className="mt-4 flex items-center justify-center gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p>홍길동</p>
          <p>
            {" "}
            <Mail />{" "}
          </p>
        </div>

        <Button>
          게시판 글쓰기 <SquarePen />
        </Button>
      </section>

      {/* 장바구니 */}
      <section className=" border-2 p-4 m-4 rounded-lg ">
        <h1 className="text-2xl font-bold text-center">장바구니</h1>
        <div></div>
      </section>
    </div>
  );
}
