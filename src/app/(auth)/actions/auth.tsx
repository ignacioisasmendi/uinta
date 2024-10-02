"use server"
import { SignupFormSchema, FormState } from '@/lib/zod/definitions'
import { User, addUser, getUserByEmail } from '@/models/user'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export async function signup(previousState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  })
 
  if (!validatedFields.success) {
    return {
      successful: false,
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const user: User = validatedFields.data

  const existingUser = await getUserByEmail(user.email)
  if (existingUser) {
    return {
      successful: false,
      errors: {
        email: ['Email already exists'],
      },
    }
  }

  user.password = await bcrypt.hash(user.password, 10)
  const result = await addUser(user); 
  if (result.acknowledged === false) {
    return {
      successful: false, 
      errors: {
        email: ['Failed to create user'],
      },
    }
  }

  return { successful: true, message: 'User created successfully' }
}

export async function login(previousState: FormState, formData: FormData): Promise<FormState> {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!email || !password) {
    return {
      successful: false,
      errors: {
        email: ['Email and password are required'],
      },
    }
  }

  const user = await getUserByEmail(email)
  if (!user) {
    return {
      successful: false,
      errors: {
        email: ['User not found'],
      },
    }
  }

  const validPassword = await bcrypt.compare(password, user.password)
  if (!validPassword) {
    return {
      successful: false,
      errors: {
        password: ['Invalid password'],
      },
    }
  }

  const jwtSecret: string | undefined = process.env.JWT_SECRET
  
  if (!jwtSecret) {
    return {
      successful: false,
      errors: {
        password: ['Server configuration error'],
      },
    }
  }

  const accessToken: string = jwt.sign({ email: user.email }, jwtSecret, { expiresIn: '1h' })
  
  return { successful: true, token: accessToken }
}