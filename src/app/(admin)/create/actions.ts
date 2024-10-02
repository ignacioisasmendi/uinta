"use server"

import {S3Client, PutObjectCommand} from "@aws-sdk/client-s3"

/* const s3 = new S3Client({ 
  region: process.env.AWS_BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
}) */


export async function createProject(formData: FormData) {


  //Implement the logic to save the project data in the database and upload the images to S3
  console.log('New project:', Object.fromEntries(formData))

  return { success: true, message: 'Project created successfully!' }
}