import { NextResponse } from "next/server"
import { signOut } from "firebase/auth"
import { auth } from "@/lib/firebase"

export const dynamic = 'force-dynamic'

export async function POST() {
  try {
    await signOut(auth())
    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to sign out" },
      { status: 500 }
    )
  }
}
