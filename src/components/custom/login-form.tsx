import { Button} from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Lock, Mail, Loader2 } from "lucide-react"
import { useActionState } from 'react'
import { login } from '@/actions/auth'
import { useRouter } from 'next/navigation'
import { FormState } from '@/lib/zod/definitions'


export default function LoginForm() {
  const initialState: FormState = { message: '', errors: {} };
  const [state, action, isPending] = useActionState(login, initialState)
  const router = useRouter()

  if(state?.token) {
    localStorage.setItem('token', state.token)
    router.push('/admin')
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
              type="email"
              autoComplete="email"
              required
              className="pl-10 focus:ring-[#FDC107] focus:border-[#FDC107]"
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
              required
              className="pl-10 focus:ring-[#FDC107] focus:border-[#FDC107]"
              placeholder="Contraseña"
            />
          </div>
        </div>
      </div>
      <div>
      {state?.errors?.email && <p>{state.errors.email}</p>}
      <Button 
            type="submit" 
            className="w-full bg-[#FDC107] hover:bg-[#FDC107]/90 text-black"
            disabled={isPending}
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Iniciando sesión...
              </>
            ) : (
              'Iniciar sesión'
            )}
        </Button>
      </div>
    </form>
  )
}
