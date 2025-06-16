// import { sessionOptions } from "@/lib/session";
// import { getIronSession } from "iron-session";
// import { cookies } from "next/headers";

type Props = {
  children: React.ReactNode;
};

export default async function Layout({ children }: Props) {
  // const session = await getIronSession(await cookies(), sessionOptions);
  // console.log("user", session);
  return <>{children}</>;
}
