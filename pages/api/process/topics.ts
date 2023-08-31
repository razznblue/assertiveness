import { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import topics from '@/data/topics'
import Topic from '@/db/models/Topic'
import dbConnect from '@/db/dbConnect'

const getTopicImage = async (topic: string) => {
  try {
    const url = `https://api.unsplash.com/search/photos?query=${topic}&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
    const res = await axios.get(url)
    return res?.data?.results[0].urls?.regular
  } catch (err: any) {
    console.error(`Error retrieving image for topic ${topic}`, err)
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.send(`Backfilling ${topics.length} Topics to DB`)
  await dbConnect()

  const size: number = Number(req?.query?.size) || 10

  let count = 0
  for (const topicName of topics) {
    if (count < size) {
      const exists = await Topic.findOne({ name: topicName })
      if (!exists) {
        const newTopic = new Topic()
        newTopic.name = topicName
        newTopic.image = await getTopicImage(topicName)
        await newTopic.save()
        console.log(`Saved new Topic ${topicName}`)
        count++
      } else {
        console.log(`Skipped existing topic ${topicName}`)
      }
    }
  }
  console.log('Completed Saving Topics')
}
