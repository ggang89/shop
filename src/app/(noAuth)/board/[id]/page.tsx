import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import getPosts from "../get-post";

type Params = Promise<{
  id: number;
}>;

export default async function DetailBoardPage({ params }: { params: Params }) {
  const { id } = await params;
  console.log("id", id);
  const posts = await getPosts();
  //console.log("posts", posts);
  return (
    <div className=" w-screen p-20">
      <Card className="w-full  text-center">
        <CardHeader>
          <CardTitle>{posts[2 - id].title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="italic">{posts[2 - id].content}</p>
        </CardContent>
      </Card>
    </div>
  );
}
