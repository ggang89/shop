import { NextResponse, NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const session = request.cookies.get("iron-session");
  const noLogin = !session;
  const requireAuthPage = ["/protect", "/user", "/logout"];
  
  if (requireAuthPage && noLogin) {
    // 세션이 없으면 로그인 페이지로 리다이렉트
    return NextResponse.redirect(new URL("/login", request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ["/user/:path*", "/protect/:path*", "/logout"],
};
