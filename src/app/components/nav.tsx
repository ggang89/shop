import Link from "next/link";

export default function Nav() {
  
  return (
    <nav className="h-[60] bg-gray-950 text-white text-xl flex items-center px-16">
      <Link href="/">Logo</Link>
      <div className="flex justify-end ml-auto gap-7">
        <Link href="/login">로그인</Link>
        <Link href="/register">회원가입</Link>
      </div>
    </nav>
  );
  
 }