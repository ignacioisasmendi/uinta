"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Lock, Mail, User } from "lucide-react"
import { signup } from "@/app/(auth)/actions/auth"
import { useActionState } from 'react'

export default function SignUpForm() {
  const initialState = { message: '', errors: {} };
  const [state, action] = useActionState(signup, initialState)

  return (
    <form className="mt-8 space-y-6" action={action}>
      <div className="space-y-4">
        <div>
          <Label htmlFor="name" className="sr-only">
            Name
          </Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              id="name"
              name="name"
              type="text"
              autoComplete="given-name"
              required
              className="pl-10 focus:ring-[#FDC107] focus:border-[#FDC107]"
              placeholder="First Name"
            />
          </div>
          {state?.errors?.name && <p>{state.errors.name}</p>}
        </div>
        <div>
          <Label htmlFor="email" className="sr-only">
            Email address
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
              placeholder="Email address"
            />
          </div>
        </div>
        {state?.errors?.email && <p>{state.errors.email}</p>}
        <div>
          <Label htmlFor="password" className="sr-only">
            Password
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
              placeholder="Password"
            />
          </div>
        </div>
      </div>
      {state?.errors?.password && (
        <div>
          <p>Password must:</p>
          <ul>
            {state.errors.password.map((error) => (
              <li key={error}>- {error}</li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <Button type="submit" className="w-full bg-[#FDC107] hover:bg-[#FDC107]/90 text-black">
          Sign up
        </Button>
      </div>
    </form>
  )
}

