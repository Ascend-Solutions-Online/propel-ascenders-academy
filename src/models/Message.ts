import mongoose, { Document } from 'mongoose'

interface IMessage extends Document {
  name: string
  email: string
  message: string
  mobile: string
  whatsappChecked: boolean
  courseInterestedIn: string
  timestamp: Date
}

const messageSchema = new mongoose.Schema<IMessage>({
  name: String,
  email: String,
  message: String,
  mobile: String,
  whatsappChecked: Boolean,
  courseInterestedIn: String,
  timestamp: { type: Date, default: Date.now },
})

export default mongoose.models.Message || mongoose.model<IMessage>('Message', messageSchema)
