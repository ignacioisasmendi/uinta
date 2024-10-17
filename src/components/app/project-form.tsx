"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useFormState } from "react-dom"
import { toast } from "react-hot-toast"
import SubmitButton from '@/components/app/submit-button'
import {newProject, getSignedURL, newImage} from "@/actions/project"
import { CreateProjectSchema } from "@/lib/zod/definitions"




export default function NewProjectForm() {
  const initialState = {
    success: false,
    message: '',
  };
  const [state, action] = useFormState(clientAction, initialState);
  
  async function clientAction(state: any, formData: FormData) {
    try {
      // Build the project object
      const project = {
        name: formData.get('name'),
        duration: formData.get('duration'),
        location: formData.get('location'),
        area: formData.get('area'),
        description: formData.get('description'),
      };
      console.log(project);
      
  
      // Get images
      const images = formData.getAll('images') as File[];
  
      // Validate the project data
      const result = CreateProjectSchema.safeParse(project);
      if (!result.success) {
        let errorMessage = result.error.issues
          .map(issue => `${issue.path[0]}: ${issue.message}`)
          .join('\n');
        return { success: false, message: `Validation failed: ${errorMessage}` };
      }
  
      // Create the project
      const projectResult = await newProject(formData);
      if (!projectResult || !projectResult.projectId) {
        throw new Error('Failed to create project.');
      }
  
      // Process and upload images if project creation succeeded
      for (const image of images) {
        const signedUrlResult = await getSignedURL(image.type, image.size, projectResult.projectId);
  
        if (!signedUrlResult.success) {
          throw new Error(signedUrlResult.failure || 'Failed to get signed URL.');
        }
  
        // Upload the image
        const uploadResponse = await fetch(signedUrlResult.success.url, {
          method: 'PUT',
          headers: { 'Content-Type': image.type },
          body: image,
        });
  
        if (!uploadResponse.ok) {
          throw new Error('Image upload failed.');
        }
  
        // Save the image URL
        await newImage(signedUrlResult.success.url.split('?')[0], projectResult.projectId);
      }
  
      // If all succeeds
      return { success: true, message: 'Project created successfully!' };
  
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
      return { success: false, message: `Error: ${errorMessage}` };
    }
  }
  
  // Handling response
  if (!state?.success) {
    toast.error(state.message);  
  } else {
    toast.success(state.message);
  }
  

  return (
  <form action={action} className="space-y-6">
    <div className="space-y-2">
      <Label htmlFor="name" className="text-gray-700">Nombre del Proyecto</Label>
      <Input
        id="name"
        name="name"
        required
        className="bg-gray-50 border-gray-300 text-gray-900 focus:border-[#FDC107] focus:ring-[#FDC107]"
      />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="space-y-2">
        <Label htmlFor="duration" className="text-gray-700">Duración (meses)</Label>
        <Input
          id="duration"
          name="duration"
          type="number"
          required
          className="bg-gray-50 border-gray-300 text-gray-900 focus:border-[#FDC107] focus:ring-[#FDC107]"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="location" className="text-gray-700">Ubicacion</Label>
        <Input
          id="location"
          name="location"
          type="text"
          required
          className="bg-gray-50 border-gray-300 text-gray-900 focus:border-[#FDC107] focus:ring-[#FDC107]"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="area" className="text-gray-700">Área Total (m²)</Label>
        <Input
          id="area"
          name="area"
          type="number"
          required
          className="bg-gray-50 border-gray-300 text-gray-900 focus:border-[#FDC107] focus:ring-[#FDC107]"
        />
      </div>
    </div>
    <div className="space-y-2">
      <Label htmlFor="description" className="text-gray-700">Descripción del Proyecto</Label>
      <Textarea
        id="description"
        name="description"
        required
        className="bg-gray-50 border-gray-300 text-gray-900 focus:border-[#FDC107] focus:ring-[#FDC107]"
        rows={4}
      />
    </div>
    <div className="space-y-2">
      <Label htmlFor="images" className="text-gray-700">Imágenes</Label>
      <Input
        id="images"
        name="images"
        type="file"
        accept="image/*"
        multiple
        className="bg-gray-50 border-gray-300 text-gray-900 file:bg-[#FDC107] file:text-white file:border-0"
      />
    </div>
    <SubmitButton defaultText="Crear proyecto" pendingText="Creando proyecto" />
  </form>
  )
}


