import { NextRequest, NextResponse } from "next/server"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/lib/firebase"

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      )
    }

    const userCredential = await signInWithEmailAndPassword(
      auth(),
      email,
      password
    )

    return NextResponse.json({
      success: true,
      user: {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
      },
    })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Failed to sign in" },
      { status: 401 }
    )
  }
}
