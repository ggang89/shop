import Link from "next/link";

type Nav = {
  href: string;
  title: string;
};
type LinkProps = {
  link: Nav[];
};

export default function Nav({ link }: LinkProps) {
  return (
    <nav className="h-[60] bg-gray-950 text-white text-xl flex items-center px-16">
      <Link href="/">Logo</Link>
      <div className="flex justify-end ml-auto gap-7">
        {link.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
