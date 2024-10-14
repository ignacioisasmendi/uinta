import { z } from 'zod'
 
export const SignupFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: 'El nombre debe tener al menos 2 caracteres.' })
    .trim(),
  lastName: z
    .string()
    .min(2, { message: 'El apellido debe tener al menos 2 caracteres.' })
    .trim(),
  email: z.string().email({ message: 'Por favor, introduce un correo electrónico válido.' }).trim(),
  password: z
    .string()
    .min(8, { message: 'Debe tener al menos 8 caracteres.' })
    .regex(/[a-zA-Z]/, { message: 'Debe contener al menos una letra.' })
    .regex(/[0-9]/, { message: 'Debe contener al menos un número.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Debe contener al menos un carácter especial.',
    })
    .trim(),
})

export const LoginFormSchema = z.object({
  email: z.string().email({ message: 'Por favor, introduce un correo electrónico válido.' }).trim(),
  password: z
    .string()
    .min(8, { message: 'Debe tener al menos 8 caracteres.' })
    .regex(/[a-zA-Z]/, { message: 'Debe contener al menos una letra.' })
    .regex(/[0-9]/, { message: 'Debe contener al menos un número.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Debe contener al menos un carácter especial.',
    })
    .trim(),
})



const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const CreateProjectSchema = z.object({
  name: z.string().min(1, "El nombre del proyecto es requerido"),
  duration: z.coerce.number().positive("La duración debe ser un número positivo"),
  people: z.coerce.number().int().positive("La cantidad de personas debe ser un número entero positivo"),
  area: z.coerce.number().positive("El área debe ser un número positivo"),
  description: z.string().min(10, "La descripción debe tener al menos 10 caracteres"),
  mainImage: z.any().refine((file) => file?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
  .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),"Solo archivos de formato .jpg, .jpeg, .png and .webp son permitidos"),
  images: z.array(z.any())
    .optional()
    .refine(
      (files) => files?.every((file) => file.size <= MAX_FILE_SIZE),
      "El tamaño máximo de archivo es 5MB por cada imagen."
    )
    .refine(
      (files) =>
        files?.every((file) =>
          ACCEPTED_IMAGE_TYPES.includes(file.type)
        ),
      "Solo archivos de formato .jpg, .jpeg, .png and .webp son permitidos"
    ),
});