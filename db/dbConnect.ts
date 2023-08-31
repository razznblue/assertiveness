import _mongoose, { connect } from 'mongoose'

declare global {
  const mongoose: {
    promise: ReturnType<typeof connect> | null
    conn: typeof _mongoose | null
  }
}
const globalAny: any = global

const MONGODB_URI = process.env.MONGO_URI
if (!MONGODB_URI) {
  throw new Error('Could not find the MONGODB_URI in .env.local. Did you miss it?')
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections from growing exponentially
 * during API Route usage.
 */
let cached = globalAny.mongoose
if (!cached) {
  cached = globalAny.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }

    cached.promise = connect(MONGODB_URI!, opts).then((mongoose) => {
      return mongoose
    })
  }

  try {
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    throw e
  }

  return cached.conn
}

export default dbConnect
