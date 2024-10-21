"use client"
import Image from 'next/image'
import logo from "../public/Logo cd.2.png"

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black/95">
      <div className="relative w-32 h-32 animate-pulse">
        <Image
          src={logo}
          alt="Uinta Construcciones Logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <p className="mt-4 text-lg font-semibold text-yellow-500 animate-pulse">
        Cargando...
      </p>
    </div>
  )
}