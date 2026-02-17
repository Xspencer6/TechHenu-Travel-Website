import { initializeApp, getApps, FirebaseApp } from "firebase/app"
import { getAuth, Auth } from "firebase/auth"
import { getFirestore, Firestore } from "firebase/firestore"
import { getStorage, FirebaseStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

// Check if Firebase config is valid (all required fields present)
const isFirebaseConfigValid = () => {
  return !!(
    firebaseConfig.apiKey &&
    firebaseConfig.authDomain &&
    firebaseConfig.projectId &&
    firebaseConfig.storageBucket &&
    firebaseConfig.messagingSenderId &&
    firebaseConfig.appId
  )
}

// Initialize Firebase only if config is valid
let app: FirebaseApp | null = null

const getFirebaseApp = (): FirebaseApp => {
  if (!isFirebaseConfigValid()) {
    throw new Error(
      "Firebase configuration is missing. Please set NEXT_PUBLIC_FIREBASE_* environment variables in .env.local"
    )
  }

  if (!app) {
    if (!getApps().length) {
      app = initializeApp(firebaseConfig)
    } else {
      app = getApps()[0]
    }
  }
  return app
}

// Lazy initialization of services - only initialize when actually used
let _auth: Auth | null = null
let _db: Firestore | null = null
let _storage: FirebaseStorage | null = null

export const auth = (): Auth => {
  if (!_auth) {
    _auth = getAuth(getFirebaseApp())
  }
  return _auth
}

export const db = (): Firestore => {
  if (!_db) {
    _db = getFirestore(getFirebaseApp())
  }
  return _db
}

export const storage = (): FirebaseStorage => {
  if (!_storage) {
    _storage = getStorage(getFirebaseApp())
  }
  return _storage
}

// For backward compatibility, export as getters
export const getAuthInstance = auth
export const getDbInstance = db
export const getStorageInstance = storage

export default getFirebaseApp
