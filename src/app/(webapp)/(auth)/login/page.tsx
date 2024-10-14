"use client"
import Image from "next/image"
import Link from "next/link"
import LoginForm from '@/components/landing/login-form'
import signup from '@/public/entre-sierras/7.jpg'
import logo from '@/public/uinta-logo.svg'


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