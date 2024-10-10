"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, Lock, Mail, User, CheckCircle2 } from "lucide-react"
import { signup } from '@/actions/auth'
import {useFormState} from 'react-dom'
import { FormState } from '@/lib/zod/definitions'
import { useRouter } from 'next/navigation'

export default function SignUpForm() {
  const initialState: FormState = { message: '', errors: {} };
  const [state, action, isPending] = useFormState(signup, initialState)

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
                required
                className="pl-10 focus:ring-[#FDC107] focus:border-[#FDC107]"
                placeholder="Nombre"
              />
            </div>
            {state?.errors?.firstName && <p>{state.errors.firstName}</p>}
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
                required
                className="pl-10 focus:ring-[#FDC107] focus:border-[#FDC107]"
                placeholder="Apellido"
              />
            </div>
            {state?.errors?.lastName && <p>{state.errors.lastName}</p>}
          </div>
          <div>
            <Label htmlFor="email" className="sr-only">
              Correo electrónico
            </Label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="pl-10 focus:ring-[#FDC107] focus:border-[#FDC107]"
                placeholder="Correo electrónico"
              />
            </div>
          </div>
          {state?.errors?.email && <p>{state.errors.email}</p>}
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
                required
                className="pl-10 focus:ring-[#FDC107] focus:border-[#FDC107]"
                placeholder="Contraseña"
              />
            </div>
          </div>
        </div>
        {state?.errors?.password && (
          <div>
            <p>La contraseña debe:</p>
            <ul>
              {state.errors.password.map((error) => (
                <li key={error}>- {error}</li>
              ))}
            </ul>
          </div>
        )}
        <div>
        <Button 
            type="submit" 
            className="w-full bg-[#FDC107] hover:bg-[#FDC107]/90 text-black"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Registrando...
              </>
            ) : (
              'Registrar'
            )}
          </Button>
        </div>
      </form>
    </>
  )
}
