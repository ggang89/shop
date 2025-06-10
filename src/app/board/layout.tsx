import BoardNavBar from "../components/board-navbar";

type Props = {
  children: React.ReactNode;
};

export default async function Layout({ children }: Props) {
  return (
    <div>
      <BoardNavBar />

      <main>{children}</main>
    </div>
  );
}
