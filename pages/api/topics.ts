import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@/db/dbConnect'
import Topic from '@/db/models/Topic'
import axios from 'axios'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect()

  const { name } = req.body

  if (!name) {
    return res.status(400).json({ error: 'Name not found on Request Body' })
  }

  const existingTopic = await Topic.findOne({ name })
  if (existingTopic) {
    return res.status(409).json({ error: 'Topic already exists', existingTopic })
  }

  const unsplashURL = `https://api.unsplash.com/search/photos?query=${name}&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  const imgResponse = await axios.get(unsplashURL)
  const imageURL = imgResponse?.data?.results[0].urls?.regular

  const newTopic = new Topic({ name: name, image: imageURL })

  await newTopic.save()
  console.log('created new topic', { topic: newTopic })

  res.status(201).json({ message: 'Topic created successfully', topic: newTopic })
}
