
import prisma from '@/lib/db'

export async function createImage(image: any) {
  console.log("I am in createImage");
  
  const createdImage = await prisma.image.create({
    data: image,
  });

  return createdImage;
}