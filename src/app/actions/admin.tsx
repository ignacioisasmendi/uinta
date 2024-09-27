"use server"
import { SignupFormSchema, FormState } from '@/lib/zod/definitions'
import { User, addUser, getUserByEmail } from '@/models/user'
import bcrypt from 'bcrypt'

 
export async function createProject(previousState: FormState, formData: FormData) {

  const project = {
    name: formData.get('name'),
    duration: formData.get('duration'),
    mainImage: formData.get('mainImage'),
  }

  console.log(project);
  

  return {sucessfull: true}
 
}

