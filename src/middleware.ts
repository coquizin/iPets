import { NextRequest, NextResponse } from "next/server";
import { CookieKey } from "@global-utils/cookies/types";

export function middleware(req: NextRequest) {
  const token = req.cookies.get(CookieKey.JwtAuthToken);

  // if (!token || token.length === 0) {
  //   if (req.url.includes("criar-conta/cliente")) {
  //     return NextResponse.redirect(`${req.nextUrl.origin}/criar-conta`);
  //   }

  //   if (
  //     req.url.includes(`perfil`) ||
  //     req.url.includes(`historico`) ||
  //     req.url.includes(`carteira`) ||
  //     req.url.includes(`cupons`) ||
  //     req.url.includes(`suporte`)
  //   ) {
  //     return NextResponse.redirect(`${req.nextUrl.origin}/login`);
  //   }

  //   return;
  // }

  return NextResponse.next();
}
