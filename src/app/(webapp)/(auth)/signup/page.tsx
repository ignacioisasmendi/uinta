"use client"
import { signup } from '@/actions/auth'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Lock, Mail, User, Eye, EyeOff, Check} from "lucide-react"
import { useRouter } from 'next/navigation'
import { useFormState } from 'react-dom'
import { useState, useEffect} from 'react'
import SubmitButton from '@/components/app/submit-button'
import Link from 'next/link'
import toast from 'react-hot-toast'
import styles from './styles.module.css'

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')

  const [state, action] = useFormState(signup, null)
  const router = useRouter()  

  const [requirements, setRequirements] = useState({
    length: false,
    letter: false,
    number: false,
    special: false,
  })

  useEffect(() => {
    setRequirements({
      length: password.length >= 8,
      letter: /[a-zA-Z]/.test(password),
      number: /\d/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    })
  }, [password])


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
      <Card className="w-full max-w-md mx-auto border-none shadow-none">
        <CardHeader>
          <CardTitle className="text-center">Crea una cuenta</CardTitle>
          <CardDescription className="text-center">
            Por favor, completa el formulario.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" action={action}>
            <div className="space-y-2">
              <div>
                <Label htmlFor="first name">
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
                <Label htmlFor="last name">
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
                <Label >
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
                <Label htmlFor="password" >
                  Contraseña
                </Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    className="pl-10 focus:ring-[#FDC107] focus:border-[#FDC107]"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute inset-y-0 right-0 px-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            </div>
            <style type="text/css">
              {`
                .svg-icon {
                  width: calc-size(auto, size); Sos el 
                  transition: width 0.5s;
                  @starting-style{width:0;}
                }
              `}
            </style>
            <div className="text-xs text-gray-600 bg-gray-100 p-3 rounded-md">
              <p className="font-semibold mb-1">Requisitos de la contraseña:</p>
              <ul className="list-none space-y-1">
                <li className={`flex items-center ${requirements.length ? 'text-green-500' : ''}`}>
                  {requirements.length && <Check className="h-4 w-4 mr-2 svg-icon" />}
                  Mínimo 8 caracteres
                </li>
                <li className={`flex items-center ${requirements.letter ? 'text-green-500' : ''}`}>
                  {requirements.letter && <Check className="h-4 w-4 mr-2 svg-icon" />}
                  Al menos una letra
                </li>
                <li className={`flex items-center ${requirements.number ? 'text-green-500' : ''}`}>
                  {requirements.number && <Check className="h-4 w-4 mr-2 svg-icon" />}
                  Al menos un número
                </li>
                <li className={`flex items-center ${requirements.special ? 'text-green-500' : ''}`}>
                  {requirements.special && <Check className="h-4 w-4 mr-2 svg-icon" />}
                  Al menos un carácter especial
                </li>
              </ul>
            </div>
            <div>
              <SubmitButton defaultText='Registrar' pendingText='Registrando...'/>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="mt-6 flex flex-col space-y-4 text-sm text-center">
        <p>
          ¿Ya tiene una cuenta?{" "}
          <Link href="/login" className="underline">
            Inicie sesión
          </Link>
        </p>
      </div>
    </>
  )
}


