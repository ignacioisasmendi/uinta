"use client"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Lock, Mail } from "lucide-react"
import Link from "next/link"
import Image from 'next/image'
import SignUpForm from '@/components/app/signup-form'
import signup from '@/public/entre-sierras/7.jpg'
import logo from '@/public/uinta-logo.svg'

export default function SignUpPage() {
  
  return (
    <div className="flex h-screen">
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-12">
        <div className="max-w-md w-full space-y-8">
          <SignUpForm />
        </div>
      </div>
      
      <div className="hidden lg:block w-1/2 bg-black relative overflow-hidden">
        <div className="absolute inset-0 -top-1/4">
          <Image 
            src={signup} 
            alt='Scenic mountain view'
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className="absolute top-0 left-0 w-full p-8 flex justify-center">
          <Image 
            src={logo} 
            alt="Uinta logo" 
            width={400} 
            height={128} 
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}