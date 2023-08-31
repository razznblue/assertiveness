import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'

export default function Home() {
  const [topic, setTopic] = useState(null)
  const [image, setImage] = useState('')

  const setRandomTopic = async () => {
    const res = await axios.get('/api/topic')
    setTopic(res?.data?.topic?.name)
    setImage(res?.data?.topic?.image)
  }

  /* Set the initial topic once */
  useEffect(() => {
    setRandomTopic()
  }, [])

  /* Press ENTER to change topic */
  useEffect(() => {
    async function handleKeyPress(event: any) {
      if (event.key === 'Enter') {
        setRandomTopic()
      }
    }

    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Assertiveness | Training</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p style={{ fontSize: '130px', zIndex: 2 }}>{topic}</p>
        <Image width={100} height={100} alt="" src={image} unoptimized />
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://www.udemy.com/course/say-no-to-people-pleasing-become-the-assertive-and-authentic-you/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Assertiveness Training Course →{` `}
        </a>
      </footer> */}
    </div>
  )
}
