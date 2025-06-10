import Nav from "../components/nav";

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const authLinks = [
    { href: "/logout", title: "로그아웃" },
    { href: "/user", title: "내 페이지" },
    { href: "/board", title: "게시판" },
  ];

  return (
    <div>
      <Nav link={authLinks} />
      {children}
    </div>
  );
}
