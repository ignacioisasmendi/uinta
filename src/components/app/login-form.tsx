"use client"
import { login } from '@/actions/auth'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Lock, Mail } from "lucide-react"
import { useRouter } from 'next/navigation'
import { useFormState } from "react-dom"
import { toast } from "react-hot-toast"
import SubmitButton from '@/components/app/submit-button'




export default function LoginForm() {
  const [state, action] = useFormState(login, null)
  const router = useRouter()


  if(state?.token) {
    localStorage.setItem('token', state.token)
    router.push('/project-listing')
  }

  if (state?.errors) {
    toast.error(state.errors)  
  }

  return (
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
  )
}
