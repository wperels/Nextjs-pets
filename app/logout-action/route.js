import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function GET(request) {
  (await cookies()).delete("petadoption")
  return NextResponse.json({ message: "Success" })
}
