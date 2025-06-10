import Board from "../components/board-component";
import getPosts from "./get-post";

export type Post = {
  id: number;
  title: string;
  content: string;
  author: {
    name: string;
    email: string;
  };
  createdAt: Date; //2025-06006T06:20:13.090Z
};

export default async function BoardPage() {
  const posts: Post[] = await getPosts();

  return (
    <>
      <Board posts={posts} />
    </>
  );
}
