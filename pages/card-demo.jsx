import { useState } from 'react'

import Head from 'next/head'

import PlayingCard from '../components/PlayingCards/PlayingCard'

export default function Home() {
  const [value, setValue] = useState(0)
  const [suit, setSuit] = useState(0)
  return (
    <>
      <Head>
        <title>Snaptustein: Card Demo</title>
        <meta
          name="description"
          content="Demonstration of a card for a card game... thrilling."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <div>
          <button
            type="button"
            className="px-6 py-4 m-2 bg-red-500"
            onClick={() => setValue((value + 1) % 13)}
          >
            rotate value
          </button>
          <button
            type="button"
            className="px-6 py-4 m-2 bg-green-500"
            onClick={() => setSuit((suit + 1) % 4)}
          >
            rotate suit
          </button>
        </div>
        <PlayingCard value={value} suit={['h', 'c', 'd', 's'][suit]} />
      </div>
    </>
  )
}
