"use client"
import { login } from '@/actions/auth'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Lock, Mail } from "lucide-react"
import { useFormState } from "react-dom"
import { toast } from "react-hot-toast"
import Link from 'next/link'
import SubmitButton from '@/components/app/submit-button'

export default function LoginPage() {
  const [state, action] = useFormState(login, null)

  if (state?.errors) {
    toast.error(state.errors)  
  }

  return (
    <>
      <div className="text-center">
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Iniciar Sesion</h2>
        <p className="mt-2 text-sm text-gray-600">
          Enter your credentials to access the admin panel
        </p>
      </div>

      <form className="mt-8 space-y-6" action={action}>
      <div className="space-y-4">
        <div>
          <Label htmlFor="email" className="sr-only">
            Dirección de correo electrónico
          </Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              id="email"
              name="email"
              autoComplete="email"
              className="pl-10 focus:ring-[#FDC107] focus:border-[#FDC107] text-black"
              placeholder="Dirección de correo electrónico"
            />
          </div>
        </div>
        <div>
          <Label htmlFor="password" className="sr-only">
            Contraseña
          </Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              className="pl-10 focus:ring-[#FDC107] focus:border-[#FDC107]"
              placeholder="Contraseña"
            />
          </div>
        </div>
      </div>
      <div>
        <SubmitButton defaultText='Iniciar Sesion' pendingText='Iniciando sesion...'/>
      </div>
      </form>

      <div className="text-sm text-center">
        <Link href="/forgot-password" className="font-medium text-[#FDC107] hover:text-[#FDC107]/80">
          Forgot your password?
        </Link>
      </div>
    </>
  )
}