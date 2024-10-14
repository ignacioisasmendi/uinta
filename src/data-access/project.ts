
import prisma from '@/lib/db'

export async function createProject(project: any) {
  return await prisma.project.create({
    data: project,
  })
}