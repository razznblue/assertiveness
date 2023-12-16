import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@/db/dbConnect'
import User from '@/db/models/User'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect()

  if (req?.method === 'POST') {
    console.info(req?.body)
    const username: string = req?.body?.username
    const email: string = req?.body?.email
    const provider = req?.body?.provider

    console.log('dataToSave')
    console.log(username)
    console.log(email)
    console.log(provider)

    const existingPlayer = await User.exists({ username: username, email: email })
    if (!existingPlayer) {
      try {
        const player: any = new User({
          username: username,
          email: email,
          provider: provider,
        })
        await player.save()
        console.info(`Created new player with Id ${player?._id}`)
        return res.status(201).json(player?.toJSON())
      } catch (err) {
        console.error(`Could not save player due to error ${err}`)
        return res.status(500).send('Unexpected Error. Check logs')
      }
    } else {
      console.warn(`Player ${username} already exists`)
      return existingPlayer
    }
  } else {
    console.error('Method not Allowed')
  }
}
