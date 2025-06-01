'use client';

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SquarePen } from "lucide-react";
import { Mail } from "lucide-react";

import axios from "axios";
import { useEffect, useState } from "react";


type SessionUser = {
  name: string;
  id: number;
  email: string;
  isLoggedIn: boolean;
};

export default function User() {

  const [user, setUser] = useState<SessionUser|null>(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get("/api/login");
        if (res.data.isOK) {
          setUser(res.data.session);
        }
        console.log("res", res);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    getUser();
  }, [setUser]);

  console.log("user", user);
  //{id: 4, email: 'abc@abc.com', isLoggedIn: true}
 const writingBorad = () => {
  alert("게시판 글쓰기 탭으로 이동합니다."); 
  }
  
  return (
    <div className="flex-wrap ">
      {/* 프로필 => id / 게시판 글쓰기 탭 */}
      <section className=" border-2 p-4 m-4 rounded-lg ">
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
          </p>{" "}
        </div>
        <Button className="w-[200px] m-auto mt-5 flex justify-center bg-gray-500 hover:bg-gray-600" onClick={writingBorad}>
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
