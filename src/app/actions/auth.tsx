"use server"
import { SignupFormSchema, FormState } from '@/lib/zod/definitions'
import { User, addUser, getUserByEmail } from '@/models/user'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {Secret} from 'jsonwebtoken'
 
 
export async function signup(previousState: FormState, formData: FormData) {

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

  const user:User = validatedFields.data

  const existingUser = await getUserByEmail(user.email)
  if (existingUser) {
    return {
      errors: {
        email: 'Email already exists',
      },
    }
  }

  user.password = await bcrypt.hash(user.password, 10)
  const result = await addUser(user); 
  if (result.acknowledged == false) {
    return {
      sucessfull: false, 
      errors: {
        email: 'Failed to create user',
      },
    }
  }

  return {sucessfull: true}
  
 
}

export async function login(previousState: FormState, formData: FormData){

  const user = await getUserByEmail(formData.get('email') as string)
  if (!user) {
    return {
      errors: {
        email: 'User not found',
      },
    }
  }

  const validPassword = await bcrypt.compare(formData.get('password') as string, user.password)
  if (!validPassword) {
    return {
      errors: {
        password: 'Invalid password',
      },
    }
  }

  const jwtSecret: string | undefined = process.env.JWT_SECRET
  
  const accessToken: string = jwt.sign({ email: user.email }, jwtSecret as string)
  
  return {token: accessToken}
}