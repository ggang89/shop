// 회원가입
// 3. 발급된 jwt 토큰을 쿠키에 저장한다

'use server';

import { FormSchema } from "@/app/register/page";
import { prisma } from "./script";

export async function RegisterAction(formData: FormSchema) { 
  // 1. form에서 입력받은 데이터를 db에 저장한다
  const user = await prisma.user.create({
    data: {
      email: formData.email,
      name: formData.name,
      password: formData.password,
      passwordConfirm: formData.passwordConfirm
    },
  })
  // 2. 저장에 성공
  return {
    isOK: true,
    user
  };
}


// 로그인
// 1. form에서 입력받은 아이디가 db에 있는지 확인한다.
// 2. 아이디가 없으면, 아이디를 찾을 수 없다고 에러 전송
// 3. 아이디가 있으면, 비밀번호가 맞는지 확인한다.
// 4. 비밀번호가 틀리면, 비밀번호가 틀렸다고 에러 전송
// 5. 비밀번호가 맞으면, jwt 토큰을 발급한다.