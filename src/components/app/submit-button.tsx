"use client"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { useFormStatus } from 'react-dom'


interface SubmitButtonProps {
  defaultText: string
  pendingText: string
}

export default function SubmitButton({ defaultText, pendingText }: SubmitButtonProps) {
  const { pending } = useFormStatus()

  return (
    <Button 
      type="submit" 
      className="w-full bg-[#FDC107] hover:bg-[#FDC107]/90 text-black"
      disabled={pending}
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {pendingText}
        </>
      ) : (
        defaultText
      )}
    </Button>
  )
}
