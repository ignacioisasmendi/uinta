"use server"
import { SignupFormSchema, FormState } from '@/lib/zod/definitions'
import { addUser } from '@/lib/mongo/user'
 
 
export async function signup(previousState, formData: FormData) {

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
 


  try{
    const users = await addUser({name: formData.get('name'), email: formData.get('email'), password: formData.get('password')}); 
  } catch (err) {
    console.log(err)
  }

  //console.log('Inserting data in db', formData);
  //return 'Inserted'
}