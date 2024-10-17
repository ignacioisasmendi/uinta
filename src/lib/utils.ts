import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const generateFileName = (bytes = 32) => {
  const array = new Uint8Array(bytes)
  crypto.getRandomValues(array)
  return [...array].map((b) => b.toString(16).padStart(2, "0")).join("")
}