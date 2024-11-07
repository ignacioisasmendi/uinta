'use client'

import { useState } from 'react'
import { Eye, EyeOff, Lock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type UpdatePasswordProps = {
  token: string
}

export default function UpdatePasswordPage({ token }: UpdatePasswordProps) {

  const [showPassword, setShowPassword] = useState(false)
  console.log(token);
  
  return (
      <Card className="w-full max-w-md mx-auto border-none shadow-none">
        <CardHeader>
          <CardTitle className="text-center">Actualizar Contraseña</CardTitle>
          <CardDescription className="text-center">
            Por favor, ingrese su nueva contraseña siguiendo los requisitos indicados.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Nueva Contraseña</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="pl-10 pr-10 focus:ring-[#FDC107] focus:border-[#FDC107]"
                  placeholder="Ingrese su nueva contraseña"
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
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirmar Nueva Contraseña</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  className="pl-10 pr-10 focus:ring-[#FDC107] focus:border-[#FDC107]"
                  placeholder="Confirme su nueva contraseña"
                />
              </div>
            </div>
            <div className="text-xs text-gray-600 bg-gray-100 p-3 rounded-md">
              <p className="font-semibold mb-1">Requisitos de la contraseña:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Mínimo 8 caracteres</li>
                <li>Al menos una letra</li>
                <li>Al menos un número</li>
                <li>Al menos un carácter especial</li>
              </ul>
            </div>
            <Button 
              type="submit" 
              className="w-full bg-[#FDC107] hover:bg-[#FDC107]/90 text-black"
            >
              Actualizar Contraseña
            </Button>
          </form>
        </CardContent>
      </Card>
    )
}