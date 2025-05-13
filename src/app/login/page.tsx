"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

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

const schema = z.object({
  email: z.string().trim().email("이메일 또는 비밀번호가 올바르지 않습니다."),
  password: z.string().trim().min(8, "비밀번호가 올바르지 않습니다."),
});
type FormSchema = z.infer<typeof schema>;

export default function Login() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormSchema> = (data) =>
    console.log("loginData", data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center justify-center my-20 m-auto"
    >
      <Card>
        <CardHeader>
          <CardTitle>로그인</CardTitle>
        </CardHeader>
        <CardContent>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="example@example.com"
            {...register("email")}
          />
          {errors.email && <span>이메일 또는 비밀번호가 틀렸습니다.</span>}
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="********"
            {...register("password")}
          />
          {errors.password && <span>아이디 또는 비밀번호가 틀렸습니다.</span>}
          <Button type="submit" variant="default">
            로그인
          </Button>
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
    </form>
  );
}
