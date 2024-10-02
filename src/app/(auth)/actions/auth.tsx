"use server"
import { SignupFormSchema, FormState } from '@/lib/zod/definitions'
import { addUser } from '@/lib/mongo/user'
import {User} from '@/domain/user'
 
 
export async function signup(formData: FormData) {

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
 
  const user:User = {
    name: validatedFields.data.name,
    email: validatedFields.data.name,
    password: validatedFields.data.name,
  } 

  try{
    const users = await addUser(user ); 
  } catch (err) {
    console.log(err)
  }

}