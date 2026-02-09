import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  setDoc, 
  updateDoc, 
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  Timestamp,
  QueryConstraint
} from "firebase/firestore"
import { db } from "./firebase"

// Type definitions
export interface User {
  id: string
  name?: string
  email: string
  emailVerified?: boolean
  image?: string
  createdAt: Date
  updatedAt: Date
}

export interface Tour {
  id: string
  title: string
  description: string
  destination: string
  duration: number // in days
  price: number
  image?: string
  images: string[]
  maxCapacity: number
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface Booking {
  id: string
  tourId: string
  userId: string
  guests: number
  totalPrice: number
  status: "pending" | "confirmed" | "cancelled"
  startDate: Date
  endDate: Date
  createdAt: Date
  updatedAt: Date
}

// Helper to convert Firestore Timestamp to Date
const timestampToDate = (timestamp: any): Date => {
  if (timestamp?.toDate) {
    return timestamp.toDate()
  }
  if (timestamp instanceof Date) {
    return timestamp
  }
  return new Date(timestamp)
}

// Helper to convert Date to Firestore Timestamp
const dateToTimestamp = (date: Date) => Timestamp.fromDate(date)

// User operations
export const userCollection = collection(db, "users")

export async function getUser(userId: string): Promise<User | null> {
  const userDoc = await getDoc(doc(userCollection, userId))
  if (!userDoc.exists()) return null
  
  const data = userDoc.data()
  return {
    id: userDoc.id,
    ...data,
    createdAt: timestampToDate(data.createdAt),
    updatedAt: timestampToDate(data.updatedAt),
  } as User
}

export async function createUser(userData: Omit<User, "id" | "createdAt" | "updatedAt">): Promise<string> {
  const userRef = doc(userCollection)
  const now = new Date()
  await setDoc(userRef, {
    ...userData,
    createdAt: dateToTimestamp(now),
    updatedAt: dateToTimestamp(now),
  })
  return userRef.id
}

export async function updateUser(userId: string, updates: Partial<User>): Promise<void> {
  const userRef = doc(userCollection, userId)
  await updateDoc(userRef, {
    ...updates,
    updatedAt: dateToTimestamp(new Date()),
  })
}

// Tour operations
export const tourCollection = collection(db, "tours")

export async function getTour(tourId: string): Promise<Tour | null> {
  const tourDoc = await getDoc(doc(tourCollection, tourId))
  if (!tourDoc.exists()) return null
  
  const data = tourDoc.data()
  return {
    id: tourDoc.id,
    ...data,
    createdAt: timestampToDate(data.createdAt),
    updatedAt: timestampToDate(data.updatedAt),
  } as Tour
}

export async function getTours(filters?: {
  isActive?: boolean
  destination?: string
  limitCount?: number
}): Promise<Tour[]> {
  const constraints: QueryConstraint[] = []
  
  if (filters?.isActive !== undefined) {
    constraints.push(where("isActive", "==", filters.isActive))
  }
  if (filters?.destination) {
    constraints.push(where("destination", "==", filters.destination))
  }
  if (filters?.limitCount) {
    constraints.push(limit(filters.limitCount))
  }
  
  constraints.push(orderBy("createdAt", "desc"))
  
  const q = query(tourCollection, ...constraints)
  const snapshot = await getDocs(q)
  
  return snapshot.docs.map((doc) => {
    const data = doc.data()
    return {
      id: doc.id,
      ...data,
      createdAt: timestampToDate(data.createdAt),
      updatedAt: timestampToDate(data.updatedAt),
    } as Tour
  })
}

export async function createTour(tourData: Omit<Tour, "id" | "createdAt" | "updatedAt">): Promise<string> {
  const tourRef = doc(tourCollection)
  const now = new Date()
  await setDoc(tourRef, {
    ...tourData,
    createdAt: dateToTimestamp(now),
    updatedAt: dateToTimestamp(now),
  })
  return tourRef.id
}

export async function updateTour(tourId: string, updates: Partial<Tour>): Promise<void> {
  const tourRef = doc(tourCollection, tourId)
  await updateDoc(tourRef, {
    ...updates,
    updatedAt: dateToTimestamp(new Date()),
  })
}

export async function deleteTour(tourId: string): Promise<void> {
  await deleteDoc(doc(tourCollection, tourId))
}

// Booking operations
export const bookingCollection = collection(db, "bookings")

export async function getBooking(bookingId: string): Promise<Booking | null> {
  const bookingDoc = await getDoc(doc(bookingCollection, bookingId))
  if (!bookingDoc.exists()) return null
  
  const data = bookingDoc.data()
  return {
    id: bookingDoc.id,
    ...data,
    startDate: timestampToDate(data.startDate),
    endDate: timestampToDate(data.endDate),
    createdAt: timestampToDate(data.createdAt),
    updatedAt: timestampToDate(data.updatedAt),
  } as Booking
}

export async function getBookingsByUser(userId: string): Promise<Booking[]> {
  const q = query(
    bookingCollection,
    where("userId", "==", userId),
    orderBy("createdAt", "desc")
  )
  const snapshot = await getDocs(q)
  
  return snapshot.docs.map((doc) => {
    const data = doc.data()
    return {
      id: doc.id,
      ...data,
      startDate: timestampToDate(data.startDate),
      endDate: timestampToDate(data.endDate),
      createdAt: timestampToDate(data.createdAt),
      updatedAt: timestampToDate(data.updatedAt),
    } as Booking
  })
}

export async function getBookingsByTour(tourId: string): Promise<Booking[]> {
  const q = query(
    bookingCollection,
    where("tourId", "==", tourId),
    orderBy("createdAt", "desc")
  )
  const snapshot = await getDocs(q)
  
  return snapshot.docs.map((doc) => {
    const data = doc.data()
    return {
      id: doc.id,
      ...data,
      startDate: timestampToDate(data.startDate),
      endDate: timestampToDate(data.endDate),
      createdAt: timestampToDate(data.createdAt),
      updatedAt: timestampToDate(data.updatedAt),
    } as Booking
  })
}

export async function createBooking(bookingData: Omit<Booking, "id" | "createdAt" | "updatedAt">): Promise<string> {
  const bookingRef = doc(bookingCollection)
  const now = new Date()
  await setDoc(bookingRef, {
    ...bookingData,
    startDate: dateToTimestamp(bookingData.startDate),
    endDate: dateToTimestamp(bookingData.endDate),
    createdAt: dateToTimestamp(now),
    updatedAt: dateToTimestamp(now),
  })
  return bookingRef.id
}

export async function updateBooking(bookingId: string, updates: Partial<Booking>): Promise<void> {
  const bookingRef = doc(bookingCollection, bookingId)
  const updateData: any = {
    ...updates,
    updatedAt: dateToTimestamp(new Date()),
  }
  
  if (updates.startDate) {
    updateData.startDate = dateToTimestamp(updates.startDate)
  }
  if (updates.endDate) {
    updateData.endDate = dateToTimestamp(updates.endDate)
  }
  
  await updateDoc(bookingRef, updateData)
}
