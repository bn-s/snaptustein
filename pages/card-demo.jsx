import Head from 'next/head'

import PlayingCard from '../components/PlayingCards/PlayingCard'

export default function Home() {
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
        <PlayingCard value={5} suit="K" />
      </div>
    </>
  )
}
