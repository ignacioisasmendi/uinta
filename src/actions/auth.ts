"use server"
import bcrypt from 'bcrypt'
import { getUserByEmail, createUser} from '@/data-access/user'
import { SignupFormSchema, LoginFormSchema } from '@/lib/zod/definitions'
import { createSession, deleteSession} from '@/lib/session'
import { redirect } from "next/navigation";
import { sendEmail } from './email'
import WelcomeEmail from '@/emails/welcome';
import ForgotPasswordEmail from '@/emails/forgotPassword'


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
      errorMessage += "• " + issue.message + "\n"
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
  const resultEmail = await sendEmail({toProp: user.email, subjectProp: "Bienvenido a Uinta Construcciones", emailProp: WelcomeEmail({userFirstname: user.firstName})})
  console.log(resultEmail);
  

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
 
  await createSession(resultUser.email, resultUser.role); 

  redirect("/project-listing")
} 

export async function logout() {
  await deleteSession();
  redirect("/login");
}

export async function forgotPassword(state: any, formData: FormData) {
  const email = formData.get('email') as string

  const user = await getUserByEmail(email)

  if (!user) {
    return {
      successful: false,
      errors: "Correo electronico no registrado",
    }
  }

  const token = await createSession(user.email, user.role)

  const response = await sendEmail({toProp: user.email, subjectProp: "Restablecer contraseña - Uinta Construcciones", emailProp: ForgotPasswordEmail({userFirstname: user.firstName, token: token})})

  return {successful: true, errors: ""}
}