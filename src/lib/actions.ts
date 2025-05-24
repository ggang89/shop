
'use server';
// 회원가입
//import jwt from "jsonwebtoken";
import { FormSchema } from "@/app/(noauth)/register/page";
import { prisma } from "./script";
import bcrypt from "bcrypt";

export async function RegisterAction(formData: FormSchema) { 
  
  // 비밀번호 암호화
  const securePassword = await bcrypt.hash(formData.password, 10);
  
  // 1. form에서 입력받은 데이터를 db에 저장한다
  const user = await prisma.user.create({
    data: {
      email: formData.email,
      name: formData.name,
      password: securePassword,
      passwordConfirm: formData.passwordConfirm,
    },
  });
  // 2. 저장에 성공
  return {
    isOK: true,
    user
  };
}


// 로그인
// export async function LoginAction(data: FormLoginSchema) {
//   // 1. form에서 입력받은 아이디가 db에 있는지 확인한다.
//   const user = await prisma.user.findUnique({
//     where: {
//       email: data.email,
//     },
//   });

//   // 2. 아이디가 없으면, 아이디를 찾을 수 없다고 에러 전송
//   if (!user) {
//     return {
//       isOK: false,
//       message: "아이디가 없습니다.",
//     };
//   }
//   // 3. 아이디가 있으면, 비밀번호가 맞는지 확인한다.
//   // 4. 비밀번호가 틀리면, 비밀번호가 틀렸다고 에러 전송

//   if (user.password !== data.password) {
//     return {
//       isOK: false,
//       message: "비밀번호가 틀렸습니다.",
//     };
//   }

//   // 5. 비밀번호가 맞으면, jwt 토큰을 발급한다.
//   const token = jwt.sign(
//     {
//     id: user.id,
//     email: user.email,
//   }, process.env.JWT_SECRET as string, {
//     expiresIn: "1h",
//   }
//   );

  
//   return {
//     isOK: true,
//     message: "로그인 성공",
//     token,
//   };
// }
