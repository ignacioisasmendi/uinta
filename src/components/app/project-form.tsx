"use client"
import { useState, useCallback, useEffect, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useFormState } from "react-dom"
import { toast } from "react-hot-toast"
import SubmitButton from '@/components/app/submit-button'
import {newProject, getSignedURL, newImage} from "@/actions/project"
import { CreateProjectSchema } from "@/lib/zod/definitions"
import { X } from "lucide-react"
import { error } from "console"

export default function NewProjectForm() {
  const [state, action] = useFormState(clientAction, {
    message: '',
    errors: undefined,
  });
  const [previewImages, setPreviewImages] = useState<{ file: File; preview: string }[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message === 'success') {
      toast.success("Obra creada exitosamente");
      formRef.current?.reset();
      setPreviewImages([]);
    }else if (state.message === 'failed'){
      toast.error(state.errors!);
    }
  }, [state]);


  const handleImageChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files).map(file => ({
        file,
        preview: URL.createObjectURL(file)
      }));
      setPreviewImages(prev => [...prev, ...newImages]);
    }
  }, []);

  const handleImageDelete = useCallback((index: number) => {
    setPreviewImages(prev => {
      const newPreviews = [...prev];
      URL.revokeObjectURL(newPreviews[index].preview);
      newPreviews.splice(index, 1);
      return newPreviews;
    });
  }, []);

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
      
      // Get images
      const images = previewImages.map(img => img.file);
  
      // Validate the project data
      const result = CreateProjectSchema.safeParse(project);
      if (!result.success) {
        let errorMessage = result.error.issues
          .map(issue => ` ${issue.message}`)
          .join('\n');
        return { message: "failed", errors: `${errorMessage}` };
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
      setPreviewImages([]);
      return { message: "success", errors: undefined };
  
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
      return { message: "failed", errors: `Error: ${errorMessage}` };
    }
  }
  
  

  return (
    <form action={action} ref={formRef} className="space-y-6">
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
      <Label htmlFor="images" className="text-gray-700">Imágenes ({previewImages.length} seleccionadas) </Label>
        <Input
          id="images"
          name="images"
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="bg-gray-50 border-gray-300 text-gray-900  file:border-0"
        />
        {previewImages.length > 0 && (
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {previewImages.map((image, index) => (
              <div key={index} className="relative group">
                <img
                  src={image.preview}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-24 object-cover rounded-md"
                />
                <button
                  type="button"
                  onClick={() => handleImageDelete(index)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label={`Delete image ${index + 1}`}
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <SubmitButton defaultText="Crear proyecto" pendingText="Creando proyecto" />
    </form>
  )
}