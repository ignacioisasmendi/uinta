import { MongoClient, Db, Collection, InsertOneResult  } from 'mongodb'
import clientPromise from "@/lib/mongo/index"

let client: MongoClient
let db: Db
let projects: Collection<Project>

export interface Project {
  id: number
  name:string,
  duration: number,
  people: number,
  description: string,
  mainImage: string,
  images: string[]
}

async function init(){
  if (db) return
  try{
    client = await clientPromise
    db = client.db()
    projects = db.collection('users')
  } catch (err) {
    throw new Error('Failed to connect to databse')
  }
}

export async function getProjects(){
  try{
    if (!projects) await init()
    const result:Project[] = await projects
      .find({})
      .toArray()
    return {users: result}
  } catch (err) {
    return {error: 'Failed to fetch users'}
  }
}

export async function addProject(user:Project) : Promise<InsertOneResult<Project>>{
  if (!projects) await init()
  const result = await projects.insertOne(user);
  return result 
}


