"use server"

//import { addProject } from "@/models/projects"
import {S3Client, PutObjectCommand} from "@aws-sdk/client-s3"
import { createProject } from "@/data-access/project"
import { getSignedUrl} from "@aws-sdk/s3-request-presigner"

const s3 = new S3Client({ 
  region: process.env.AWS_BUCKET_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY! ,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!
  }
})


export async function newProject(formData: FormData) {

  const project = {
    name: formData.get('name') as string,
    slug: (formData.get('name') as string).toLowerCase().replace(/\s+/g, '-'),
    duration: parseInt(formData.get('duration') as string, 10) || 0, 
    people: parseInt(formData.get('people') as string, 10) || 0,
    area: parseFloat(formData.get('area') as string) || 0, 
    description: formData.get('description') as string,
  };

  const { id: projectId } = await createProject(project);
  

  return { success: true, message: 'Project created successfully!' }
}




export async function getSignedURL () {
  
  const putObjectCommand = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME!,
    Key: 'test-file',
  })

  const signedUrl = getSignedUrl(s3, putObjectCommand, {
    expiresIn: 60 
  })

  return signedUrl
}