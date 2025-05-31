import LinkComponents from "../components/nav";

export default function NoAuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const noAuthLinks = [
    { href: "/login", title: "로그인" },
    { href: "/register", title: "회원가입" },
  ];

  return (
    <div>
      <LinkComponents link={noAuthLinks} />
      {children}
    </div>
  );
}
