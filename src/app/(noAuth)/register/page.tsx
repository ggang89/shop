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
import { RegisterAction } from "@/lib/actions";

const schema = z
  .object({
    email: z.string().trim().email("이메일을 입력해주세요."),
    name: z.string().trim().min(2, "이름을 입력해주세요."),
    password: z.string().trim().min(8, "비밀번호를 입력해주세요."),
    passwordConfirm: z.string().trim().min(8, "비밀번호를 입력해주세요."),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "비밀번호가 일치하지 않습니다.",
  });

export type FormSchema = z.infer<typeof schema>;

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      passwordConfirm: "",
    },
  });
  const onSubmit: SubmitHandler<FormSchema> = async (data) => {
    // 받은 data를 서버액션에 보내준다.
    const result = await RegisterAction(data);
    //console.log("registerData", result);

    if (result.isOK) {
      alert("회원가입이 완료되었습니다.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-center justify-center my-20 m-auto"
    >
      <Card>
        <CardHeader>
          <CardTitle>회원가입</CardTitle>
        </CardHeader>
        <CardContent>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="example@example.com"
            {...register("email")}
          />
          {errors.email && <span>이메일을 입력해주세요.</span>}
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="2글자 이상 입력해주세요"
            {...register("name")}
          />
          {errors.name && <span>이름을 입력해주세요.</span>}
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="8글자 이상 입력해주세요"
            {...register("password")}
          />
          {errors.password && <span>비밀번호를 입력해주세요.</span>}
          <Label htmlFor="passwordConfirm">Password</Label>
          <Input
            type="password"
            id="passwordConfirm"
            placeholder="비밀번호를 확인해주세요"
            {...register("passwordConfirm")}
          />
          {errors.passwordConfirm && <span>비밀번호가 일치하지 않습니다.</span>}

          <Button type="submit" variant="default">
            회원가입
          </Button>
        </CardContent>
        <CardFooter>
          <p className="text-sm">
            아이디가 있다면? &nbsp;
            <Link href="/login">
              <span className="text-gray-500">로그인</span>
            </Link>
          </p>
        </CardFooter>
      </Card>
    </form>
  );
}
