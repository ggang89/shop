import { NextResponse, NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const session = request.cookies.get("iron-session");
  const noLogin = !session;
  const login = session && session.value;
  const { pathname } = request.nextUrl;

  // 로그인 한 사람이 이용할 수 있는 페이지
  const requireAuthPage = ["/protect", "/user", "/logout", "/write-board",];
  // 로그인 안 한 사람이 이용할 수 있는 페이지
  const noAuthPage = ["/login", "/register",];

  // 세션이 없으면(=로그인 안 한 사용자) 로그인 페이지로 리다이렉트
  if (noLogin && requireAuthPage.some((path) => pathname.startsWith(path))) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // 세션이 있으면(=로그인 한 사용자)가 noAuthPage에 접근하려고 하면
  // 로그아웃 페이지로 리다이렉트?
  if (login && noAuthPage.some((path) => pathname === path)) {
    return NextResponse.redirect(new URL("/logout", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/user/:path*",
    "/protect/:path*",
    "/logout",
    "/login",
    "/register",
    "/write-board/:path*",
  ],
};
