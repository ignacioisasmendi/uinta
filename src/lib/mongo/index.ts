import { MongoClient, MongoClientOptions } from 'mongodb'

const URI: string | undefined = process.env.MONGO_URI
const options: MongoClientOptions = {}

if (!URI) {
  throw new Error('Please define the MONGO_URI environment variable inside .env.local')
}

let client: MongoClient = new MongoClient(URI, options)
let clientPromise: Promise<MongoClient>

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

if (process.env.NODE_ENV !== 'production') {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect()
  }

  clientPromise = global._mongoClientPromise
} else {
  clientPromise = client.connect()
}

export default clientPromise