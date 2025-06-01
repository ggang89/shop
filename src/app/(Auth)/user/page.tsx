import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SquarePen } from "lucide-react";
import { Mail } from "lucide-react";
import { prisma } from "@/lib/script";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { sessionOptions } from "@/lib/session";

type SessionUser = {
  id: number;
  email: string;
  isLoggedIn: boolean;
};

export default async function User() {
  const userInfo = await getIronSession<SessionUser>(
    await cookies(),
    sessionOptions
  );
  const { email: userEmail } = userInfo;

  const user = await prisma.user.findUnique({
    where: {
      email: userEmail,
    },
  });
  //console.log("user22", user);

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
          <p className="font-bold text-xl">{user?.name}님</p>
          <p className="flex items-center gap-1">
            {" "}
            <Mail /> {user?.email}
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
