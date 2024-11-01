"use client"
import { forgotPassword } from '@/actions/auth'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Mail } from "lucide-react"
import { useFormState } from "react-dom"
import { toast } from "react-hot-toast"
import Link from 'next/link'
import SubmitButton from '@/components/app/submit-button'

export default function ForgotPasswordPage() {
  const [state, action] = useFormState(forgotPassword, null)

  if (state?.successful == true) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4">
        <CheckCircle2 className="w-16 h-16 text-green-500" />
        <p className="text-xl font-semibold text-green-500">Verifica tu mail y segui las instrucciones</p>
      </div>
    )
  }

  if (state?.errors) {
    toast.error(state.errors)  
  }

  return (
    <>
      <div className="text-center">
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Olvidé mi contraseña</h2>
        <p className="mt-2 text-sm text-gray-600">
          Ingresa tu email para restablecer tu contraseña
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
      </div>
      <div>
        <SubmitButton defaultText='Reiniciar contraseña' pendingText='Reiniciando contraseña...'/>
      </div>
      </form>

      <div className="mt-6 flex flex-col space-y-4 text-sm text-center">
        <Link href="/forgot-password" className="underline">
          Volver al inicio de sesión
        </Link>
      </div>
    </>
  )
}