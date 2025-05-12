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

export default function Register() {
  return (
    <div className="flex items-center justify-center my-20 m-auto">
      <Card>
        <CardHeader>
          <CardTitle>회원가입</CardTitle>
        </CardHeader>
        <CardContent>
          <Label htmlFor="email">Email</Label>
          <Input id="email" />
          <Label htmlFor="name">Name</Label>
          <Input id="name" />
          <Label htmlFor="password">Password</Label>
          <Input id="password" />

          <Button variant="default">회원가입</Button>
        </CardContent>
        <CardFooter>
          <p>
            아이디가 있다면? &nbsp;
            <Link href="/login">
              <span className="text-gray-500">로그인</span>
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
