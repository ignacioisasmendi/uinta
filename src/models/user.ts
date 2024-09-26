import { MongoClient, Db, Collection, InsertOneResult  } from 'mongodb'
import clientPromise from "@/lib/mongo/index"

let client: MongoClient
let db: Db
let users: Collection<User>

export interface User {
  name:string,
  email:string,
  password:string
}

async function init(){
  if (db) return
  try{
    client = await clientPromise
    db = client.db()
    users = db.collection('users')
  } catch (err) {
    throw new Error('Failed to connect to databse')
  }
}

export async function getUsers(){
  try{
    if (!users) await init()
    const result:User[] = await users
      .find({})
      .toArray()
    return {users: result}
  } catch (err) {
    return {error: 'Failed to fetch users'}
  }
}

export async function addUser(user:User) : Promise<InsertOneResult<User>>{
  if (!users) await init()
  const result = await users.insertOne(user);
  return result 
}

export async function getUserByEmail(email: string):Promise<User | null>{
  if (!users) await init()
  const result: User | null = await users.findOne({ email })
  console.log(result);
  
  return result
  
}
