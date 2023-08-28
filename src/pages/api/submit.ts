import { NextApiRequest, NextApiResponse } from 'next'
import MessageModel from '../../models/Message'
import dbConnect from '@/utils/dbConnect'

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  await dbConnect()

  if (req.method === 'POST') {
    const { name, email, message } = req.body

    try {
      const newMessage = new MessageModel({ name, email, message })
      await newMessage.save()

      res.status(200).json({ message: 'Message submitted and saved successfully!' })
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while saving the message.' })
    }
  } else {
    res.status(405).end()
  }
}
