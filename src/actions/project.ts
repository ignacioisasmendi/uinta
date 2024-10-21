"use server"

import {S3Client, PutObjectCommand} from "@aws-sdk/client-s3"
import { createProject, getAllProjectsWithImages } from "@/data-access/project"
import { createImage } from "@/data-access/image"
import { generateFileName } from "@/lib/utils"
import { getSignedUrl} from "@aws-sdk/s3-request-presigner"

const s3 = new S3Client({ 
  region: process.env.AWS_BUCKET_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY! ,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!
  }
})

const acceptedFileTypes = ['image/png', 'image/jpeg', 'image/jpg']
const maxFileSize = 1024 * 1024 * 5 // 5MB

export async function newProject(formData: FormData) {
  try {
    const project = {
      name: formData.get('name') as string,
      slug: (formData.get('name') as string).toLowerCase().replace(/\s+/g, '-'),
      duration: parseInt(formData.get('duration') as string, 10) || 0, 
      location: formData.get('location') as string,
      area: parseFloat(formData.get('area') as string) || 0, 
      description: formData.get('description') as string,
    };

    console.log(project);
    
    const { id: projectId } = await createProject(project);
    
    
    return {success: true, projectId: projectId};
  
  } catch (error) {
    return {success: false, error: "Error al crear el proyecto"};
  }
}


export async function newImage(imageURL: string, projectId: number) {
  try {
    const image = {
      url: imageURL,
      projectId: projectId
    };

    await createImage(image);
    
    return {success: true};
  
  } catch (error) {
    return {success: false, error: "Error al crear el proyecto"};
  }
}


export async function getSignedURL (fileType: string, fileSize:number, projectId: number) {

  if (!acceptedFileTypes.includes(fileType)) {
    return { failure: "Tipo de archivo no permitido" }
  }

  if (fileSize > maxFileSize) {
    return { failure: "Maximo de 5MB" }
  }
  
  const putObjectCommand = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME!,
    Key: generateFileName(),
    ContentType: fileType,
    ContentLength: fileSize,
    Metadata: {
      projectId: projectId.toString()
    }
  })

  const url = await getSignedUrl(s3, putObjectCommand, {
    expiresIn: 60 
  })

  return { success: { url } }
}


export async function getProjects () {
  try {
    const projects = await getAllProjectsWithImages()
    return projects
  
  } catch (error) {
    return {success: false, error: "Error al crear el proyecto"};
  }
}