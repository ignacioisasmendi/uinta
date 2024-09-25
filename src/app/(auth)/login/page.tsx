"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Lock, Mail } from "lucide-react"
import Link from "next/link"
import LoginForm from '@/components/custom/login-form'

export default function LoginPage() {
  
  return (
    <div className="flex h-screen">
      {/* Left side - Login Form */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-12">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Admin Login</h2>
            <p className="mt-2 text-sm text-gray-600">
              Enter your credentials to access the admin panel
            </p>
          </div>
          
          <LoginForm></LoginForm>

          <div className="text-sm text-center">
            <Link href="/forgot-password" className="font-medium text-[#FDC107] hover:text-[#FDC107]/80">
              Forgot your password?
            </Link>
          </div>
        </div>
      </div>

      {/* Right side - New Design */}
      <div className="hidden lg:flex w-1/2 bg-black flex-col items-center justify-between p-12 relative">
        {/* Logo placeholder */}
        <div className="w-32 h-32 bg-[#FDC107] rounded-full mb-8"></div>

        {/* Company name */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-2">SIP System Homes</h1>
          <p className="text-xl text-[#FDC107]">Building Dreams, One Home at a Time</p>
        </div>

        {/* Decorative drawing */}
        <div className="relative w-full max-w-md aspect-square">
          <div className="absolute inset-0 border-8 border-[#FDC107] rounded-lg"></div>
          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-[#FDC107]/20 rounded-lg transform -rotate-6"></div>
          <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border-4 border-[#FDC107] rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-1/4 h-1/4 bg-[#FDC107] rounded-sm transform rotate-12"></div>
        </div>

        {/* Footer text */}
        <p className="text-white text-sm mt-12">© 2023 SIP System Homes. All rights reserved.</p>
      </div>
    </div>
  )
}