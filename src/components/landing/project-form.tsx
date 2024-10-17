import { Button} from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Lock, Mail, Loader2 } from "lucide-react"
import { useFormState } from 'react-dom'
import { login } from '@/actions/auth'
import { useRouter } from 'next/navigation'


export default function CreateProjectForm() {



  return (
    <form className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-white">Nombre del Proyecto</Label>
        <Input
          id="name"
          name="name"
          required
          className="text-black border-[#FDC107]/20 placeholder:text-gray-400"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <Label htmlFor="duration" className="text-white">Duración (meses)</Label>
          <Input
            id="duration"
            name="duration"
            type="number"
            required
            className="bg-primary border-[#FDC107]/20 text-white placeholder:text-gray-400"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="people" className="text-white">Cantidad de Personas</Label>
          <Input
            id="people"
            name="people"
            type="number"
            required
            className="bg-primary border-[#FDC107]/20 text-white placeholder:text-gray-400"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="area" className="text-white">Área Total (m²)</Label>
          <Input
            id="area"
            name="area"
            type="number"
            required
            className="bg-primary border-[#FDC107]/20 text-white placeholder:text-gray-400"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="description" className="text-white">Descripción del Proyecto</Label>
        <Textarea
          id="description"
          name="description"
          required
          className="bg-primary border-[#FDC107]/20 text-white placeholder:text-gray-400"
          rows={4}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="mainImage" className="text-white">Imagen Principal</Label>
        <Input
          id="mainImage"
          name="mainImage"
          type="file"
          accept="image/*"
          required
          className="bg-primary border-[#FDC107]/20 text-white file:bg-[#FDC107] file:text-black file:border-0"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="images" className="text-white">Imágenes Adicionales</Label>
        <Input
          id="images"
          name="images"
          type="file"
          accept="image/*"
          multiple
          className="bg-primary border-[#FDC107]/20 text-white file:bg-[#FDC107] file:text-black file:border-0"
        />
      </div>
      {/* <Button type="submit" className="w-full bg-[#FDC107] text-black hover:bg-[#FDC107]/90" disabled={isPending}>
        {isPending ? 'Creando Proyecto...' : 'Crear Proyecto'}
      </Button> */}
    </form>
   /*  {{state && (
      <div className={`mt-4 p-4 rounded ${state.success ? 'bg-green-500' : 'bg-red-500'}`}>
        {state.message}
      </div>
    )}} */
  )
}

