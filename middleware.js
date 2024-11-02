import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export function middleware(request) {
  if (request.url.includes("/admin")) {
    const cookieStore = /* @next-codemod-error Manually await this call and refactor the function to be async */
    cookies()
    const adminCookie = cookieStore.get("petadoption") ? cookieStore.get("petadoption").value : ""

    if (adminCookie == process.env.SESSIONCOOKIEVALUE) {
      return NextResponse.next()
    } else {
      const theUrl = request.nextUrl.clone()
      theUrl.pathname = "/login"
      return NextResponse.redirect(theUrl)
    }
  }

  return NextResponse.next()
}
