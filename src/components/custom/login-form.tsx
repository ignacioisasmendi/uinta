import { Button} from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Lock, Mail } from "lucide-react"

export default function LoginForm() {

  return (
    <form className="mt-8 space-y-6" action={}>
      <div className="space-y-4">
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
              autoComplete="current-password"
              required
              className="pl-10 focus:ring-[#FDC107] focus:border-[#FDC107]"
              placeholder="Password"
            />
          </div>
        </div>
      </div>
      <div>
        <Button type="submit" className="w-full bg-[#FDC107] hover:bg-[#FDC107]/90 text-black">
          Sign in
        </Button>
      </div>
    </form>
  )
}