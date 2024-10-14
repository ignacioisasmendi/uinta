import prisma from '@/lib/db'


export type userSignUpDTO = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
}

export async function getUserByEmail(email: string) {
  return await prisma.user.findUnique({
    where: {
      email: email,
    },
  })
}

export async function createUser(user: userSignUpDTO) {
  return await prisma.user.create({
    data: user,
  })
}
