'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function BoardNavBar() {
  const router = useRouter();
  
  return (
    <nav className="h-[60px] w-screen bg-gray-950 text-white text-xl flex justify-between items-center px-16">
      <Link href="/">Logo</Link>
      <div className="cursor-pointer" onClick={() => router.back()}>
        ⬅ 뒤로가기
      </div>
    </nav>
  );
}