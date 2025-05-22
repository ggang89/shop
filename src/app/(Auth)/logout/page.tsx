import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default function Logout() {
  
  return (
    <Card className="m-auto  my-40 h-[250px]">
      <CardTitle>로그아웃</CardTitle>
      <CardContent>
        <form action="/api/logout" method="POST">
          <p className="font-bold text-center p-5">
            정말 로그아웃 하시겠습니까?
          </p>
          <Button type="submit">로그아웃</Button>
        </form>
      </CardContent>
    </Card>
  );
}
