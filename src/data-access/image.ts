
import prisma from '@/lib/db'

export async function createImage(image: any) {
  const createdImage = await prisma.image.create({
    data: image,
  });

  return createdImage;
}