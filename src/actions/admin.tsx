"use server"
import { SignupFormSchema, FormState } from '@/lib/zod/definitions'
import { User, addUser, getUserByEmail } from '@/models/user'
import bcrypt from 'bcrypt'
import { addProject } from "@/models/projects"
import {S3Client, PutObjectCommand} from "@aws-sdk/client-s3"

/* const s3 = new S3Client({ 
  region: process.env.AWS_BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
}) */

 
export async function createProject(previousState: FormState, formData: FormData) {

  const project = {
    name: formData.get('name'),
    duration: formData.get('duration'),
    mainImage: formData.get('mainImage'),
  }

  console.log(project);
  

  return {sucessfull: true}
 
}

