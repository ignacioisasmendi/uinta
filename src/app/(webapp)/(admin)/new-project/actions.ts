"use server"

//import { addProject } from "@/models/projects"
import {S3Client, PutObjectCommand} from "@aws-sdk/client-s3"
import { CreateProjectSchema } from "@/lib/zod/definitions"
import { createProject } from "@/data-access/project"
import { getSignedUrl} from "@aws-sdk/s3-request-presigner"

const s3 = new S3Client({ 
  region: process.env.AWS_BUCKET_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY! ,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!
  }
})


export async function newProject(state:any, formData: FormData) {

  const project = {
    name: formData.get('name'),
    duration: formData.get('duration'),
    people: formData.get('people'),
    area: formData.get('area'),
    description: formData.get('description'),
    mainImage: formData.get('mainImage'),
    images: formData.getAll('images')
  }

  const signedUrl = await getSignedURL()
  console.log(signedUrl);
  
  const result = CreateProjectSchema.safeParse(project)

  if (!result.success) {
    return { success: false, message: result.error.message }
  }
  
  await createProject(project)



  return { success: true, message: 'Project created successfully!' }
}




async function getSignedURL () {
  
  const putObjectCommand = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME!,
    Key: 'test-file',
  })

  const signedUrl = getSignedUrl(s3, putObjectCommand, {
    expiresIn: 3600 
  })

  return signedUrl
}