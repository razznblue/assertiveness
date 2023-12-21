/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import Button from '@/components/button/Button'
import { useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { primaryColor } from '@/util/constants'

export default function Home() {
  const { data: session } = useSession()

  /* Hooks */
  const [username, setUsername] = useState('Kyle')

  /* JSX */
  return (
    <div className="flex items-center justify-center h-screen">
      <main className="flex flex-col items-center justify-evenly h-full">
        {!session ? (
          <p className="text-white p-3 m-2 text-4xl text-center">
            Please Sign In to start practicing!
          </p>
        ) : (
          <>
            <div id="top-content" className="flex flex-col items-center">
              <h1 className={`text-[${primaryColor}] text-3xl`}>Hello {username}!</h1>
              <p className="text-white p-3 m-2 text-lg w-1/2 text-center">
                "Being passive gets you nowhere. Being aggressive gets you noticed. Being assertive
                gets you respect." - Steve Maraboli
              </p>
            </div>

            <div id="bottom-content" className="flex flex-col items-center justify-evenly">
              <div id="topic-of-day" className="text-white text">
                <p className="text-lg pb-4 mb-1">Topic Of The Day: Syrup</p>
              </div>

              <div id="buttons" className="grid grid-cols-2 gap-2">
                <Button text="My Profile" link="/" backgroundColor="primary" onClick={() => {}} />
                <Button text="My Progress" link="/" backgroundColor="primary" onClick={() => {}} />
                <Button text="New Session" link="/" backgroundColor="primary" onClick={() => {}} />
                <Button text="My Settings" link="/" backgroundColor="primary" onClick={() => {}} />
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  )
}
