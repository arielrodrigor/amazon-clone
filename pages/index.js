import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from "@/components/Header";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Amazon Clone</title>
        <meta name="description" content="Amazon Clone by Ariel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <Header />
      </main>
    </>
  )
}
