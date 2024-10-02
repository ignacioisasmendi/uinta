import { MongoClient, Db, Collection } from 'mongodb'
import clientPromise from "./index"
import {User} from '@/domain/user'

let client: MongoClient
let db: Db
let users: Collection<User>


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

export async function addUser(user:User){
  try{
    if (!users) await init()
    const result = await users.insertOne(user);
  } catch (err) {
    return {error: 'Failed to add the user'}
  }
}