
import prisma from '@/lib/db'

export async function createProject(project: any) {
  const createdProject = await prisma.project.create({
    data: project,
    select: {
      id: true, 
    },
  });

  return createdProject;
}

export async function getAllProjectsWithImages() {
  const projects = await prisma.project.findMany({
    include: {
      images: true, 
    },
  });
    return projects;
}