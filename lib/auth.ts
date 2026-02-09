import { getAuth, onAuthStateChanged, User as FirebaseUser } from "firebase/auth"
import { auth } from "./firebase"
import { getUser, createUser, updateUser } from "./firestore"
import type { User } from "./firestore"

// Get current Firebase user
export function getCurrentFirebaseUser(): Promise<FirebaseUser | null> {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe()
      resolve(user)
    })
  })
}

// Get current user with Firestore data
export async function getCurrentUser(): Promise<User | null> {
  const firebaseUser = await getCurrentFirebaseUser()
  if (!firebaseUser) return null
  
  let user = await getUser(firebaseUser.uid)
  
  // Create user in Firestore if doesn't exist
  if (!user && firebaseUser.email) {
    const userId = await createUser({
      email: firebaseUser.email,
      name: firebaseUser.displayName || undefined,
      image: firebaseUser.photoURL || undefined,
      emailVerified: firebaseUser.emailVerified,
    })
    user = await getUser(userId)
  } else if (user && firebaseUser.email) {
    // Sync Firebase Auth data with Firestore
    const updates: Partial<User> = {}
    if (firebaseUser.displayName !== user.name) {
      updates.name = firebaseUser.displayName || undefined
    }
    if (firebaseUser.photoURL !== user.image) {
      updates.image = firebaseUser.photoURL || undefined
    }
    if (firebaseUser.emailVerified !== user.emailVerified) {
      updates.emailVerified = firebaseUser.emailVerified
    }
    
    if (Object.keys(updates).length > 0) {
      await updateUser(user.id, updates)
      user = await getUser(user.id)
    }
  }
  
  return user
}
