"use client"
import { signup } from '@/actions/auth'
import SubmitButton from '@/components/app/submit-button'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Lock, Mail, User } from "lucide-react"
import { useRouter } from 'next/navigation'
import { useFormState } from 'react-dom'
import toast from 'react-hot-toast'



export default function SignUpPage() {
  const [state, action] = useFormState(signup, null)
  const router = useRouter()  

  if (state?.successful == true) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4">
        <CheckCircle2 className="w-16 h-16 text-green-500" />
        <p className="text-xl font-semibold text-green-500">¡Registro exitoso!</p>
        <Button 
            type="submit" 
            className="w-full bg-[#FDC107] hover:bg-[#FDC107]/90 text-black"
            onClick={() => router.push('/login')}
          >
            Ir al inicio de sesión
          </Button>
      </div>
    )
  }

  if (state?.errors) {
    toast.error(state.errors)  
  }

  return (
    <>
      <div className="text-center">
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Registro de Administrador</h2>
      </div>
      <form className="mt-8 space-y-6" action={action}>
        <div className="space-y-4">
          <div>
            <Label htmlFor="first name" className="sr-only">
              Nombre
            </Label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                className="pl-10 focus:ring-[#FDC107] focus:border-[#FDC107]"
                placeholder="Nombre"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="last name" className="sr-only">
              Apellido
            </Label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                className="pl-10 focus:ring-[#FDC107] focus:border-[#FDC107]"
                placeholder="Apellido"
              />
            </div>
          </div>
          <div>
            <Label className="sr-only">
              Correo electrónico
            </Label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                id="email"
                name="email"
                autoComplete="email"
                className="pl-10 focus:ring-[#FDC107] focus:border-[#FDC107]"
                placeholder="Correo electrónico"
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
                autoComplete="new-password"
                className="pl-10 focus:ring-[#FDC107] focus:border-[#FDC107]"
                placeholder="Contraseña"
              />
            </div>
          </div>
        </div>
        <div>
          <SubmitButton defaultText='Registrar' pendingText='Registrando...'/>
        </div>
      </form>
    </>
  )
}


