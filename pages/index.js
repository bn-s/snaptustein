import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Snaptustein</title>
        <meta name="description" content="A card game." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div className="flex items-center justify-center w-full h-screen">
      <h1 className="text-5xl">Snaptustein</h1>
    </div>
    </>
  )
}
