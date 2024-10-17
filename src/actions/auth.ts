"use server"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { getUserByEmail, createUser} from '@/data-access/user'
import { SignupFormSchema, LoginFormSchema } from '@/lib/zod/definitions'


export async function signup(state:any, formData: FormData){

  const user = {
    firstName: formData.get('firstName') as string,
    lastName: formData.get('lastName') as string,
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const result = SignupFormSchema.safeParse(user);

  if(!result.success){
    let errorMessage = ""
    result.error.issues.forEach((issue) => {
      errorMessage += issue.path[0] + ': ' + issue.message + "\n"
    })
    return {successful: false, errors: errorMessage}
  }
  

  const existingUser = await getUserByEmail(user.email)

  if (existingUser) {
    console.log({successful: false, errors: "Correo electronico ya registrado"});
    return {successful: false, errors: "Correo electronico ya registrado"}
  }

  user.password = await bcrypt.hash(user.password, 10)
  await createUser(user)

  return {successful: true, errors: ""}
}

export async function login(state: any, formData: FormData) {
  
  const user = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const result = LoginFormSchema.safeParse(user);

  if(!result.success){
    let errorMessage = ""
    result.error.issues.forEach((issue) => {
      errorMessage += issue.path[0] + ': ' + issue.message + "\n"
    })
    return {successful: false, errors: errorMessage}
  }

  const resultUser = await getUserByEmail(user.email)
  
  if (!resultUser) {
    return {
      successful: false,
      errors: "Correo electronico no registrado",
    }
  }  

  const validPassword = await bcrypt.compare(user.password, resultUser.password )
  if (!validPassword) {
    return {
      successful: false,
      errors: "Contraseña incorrecta",
    }
  }

  const jwtSecret: string | undefined = process.env.JWT_SECRET
  if (!jwtSecret) {
    return {
      successful: false
    }
  }

  const accessToken: string = jwt.sign({ email: user.email }, jwtSecret , { expiresIn: '1h' })  
  
  return { successful: true, token: accessToken }
} 