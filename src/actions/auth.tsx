"use server"
import { SignupFormSchema, FormState } from '@/lib/zod/definitions'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import prisma from '@/lib/db'

export async function signup(previousState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = SignupFormSchema.safeParse({
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    password: formData.get('password'),
  })
 
  if (!validatedFields.success) {
    return {
      successful: false,
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const user = validatedFields.data
  const existingUser = await prisma.user.findUnique({
    where: {
      email: user.email,
    },
  })

  if (existingUser) {
    return {
      successful: false,
      errors: {
        email: ['Email already exists'],
      },
    }
  }

  user.password = await bcrypt.hash(user.password, 10)
  await prisma.user.create({
    data: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    }
  }); 

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

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  })

  if (!user) {
    return {
      successful: false,
      errors: {
        email: ['User not found'],
      },
    }
  }  

  const validPassword = await bcrypt.compare(password, user.password)
  console.log(validPassword);
  
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
  console.log(accessToken);
  
  
  return { successful: true, token: accessToken }
} 