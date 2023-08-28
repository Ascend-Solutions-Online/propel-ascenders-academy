import mongoose, { ConnectOptions } from 'mongoose'

const connection: { isConnected?: number } = {}

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    return
  }

  try {
    const db = await mongoose.connect(
      process.env.MONGODB_URI as string,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false, // Use this under the useNewUrlParser option
        // useCreateIndex: true,
      } as ConnectOptions
    )

    console.log('DB connected:', db.connections[0].readyState)
    connection.isConnected = db.connections[0].readyState
    console.log('Connected to MongoDB')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
  }
}

export default dbConnect
