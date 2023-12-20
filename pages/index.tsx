/* eslint-disable react/no-unescaped-entities */
import styles from '@/styles/Home.module.css'
// import { useState, useEffect } from 'react'
// import { useSession } from 'next-auth/react'
// import axios from 'axios'
// import Image from 'next/image'

export default function Home() {
  // const { data: session } = useSession()

  // useEffect(() => {
  //   if (!session) {

  //   }
  // }, [])

  /* JSX */
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Hello Kyle</h1>
        <p>
          "Being passive gets you nowhere. Being aggressive gets you noticed. Being assertive gets
          you respect." - Steve Maraboli
        </p>

        <div className="topic-of-day">
          <p>Topic Of The Day: Syrup</p>
        </div>

        {/* <div className="buttons">
          
        </div> */}
      </main>
    </div>
  )
}
