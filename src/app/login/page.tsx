import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import Link from "next/link";

export default function Login() {
  return (
    <div className="flex items-center justify-center my-20 m-auto">
      <Card >
        <CardHeader>
          <CardTitle>로그인</CardTitle>
        </CardHeader>
        <CardContent>
          <Label htmlFor="email">Email</Label>
          <Input id="email" />
         
          <Label htmlFor="password">Password</Label>
          <Input id="password" />

          <Button variant="default">로그인</Button>
        </CardContent>
        <CardFooter>
          <p className="text-sm">
            아이디가 없다면? &nbsp;
            <Link href="/register">
              <span className="text-gray-500">회원가입</span>
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
