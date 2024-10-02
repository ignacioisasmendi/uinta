"use server"
import { SignupFormSchema, FormState } from '@/lib/zod/definitions'
import { addUser } from '@/lib/mongo/user'
import { User } from '@/domain/user'

export async function signup(previousState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  })
 
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }
 
  const user: User = {
    name: validatedFields.data.name,
    email: validatedFields.data.email,  // Fixed: was using name instead of email
    password: validatedFields.data.password,  // Fixed: was using name instead of password
  } 

  try {
    await addUser(user);
    return { message: 'User created successfully' }
  } catch (err) {
    console.error(err)
    return { message: 'An error occurred while creating the user' }
  }
}