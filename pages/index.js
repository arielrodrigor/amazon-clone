import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import ProductFeed from "@/components/ProductFeed";

const inter = Inter({ subsets: ['latin'] })

export default function Home({products}) {
  return (
    <div className={'bg-gray-100'}>
      <Head>
        <title>Amazon Clone by Ariel</title>
        <meta name="description" content="Amazon Clone by Ariel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header />
      <main className={'max-w-screen-2xl mx-auto'}>
          {/* Banner*/}
          <Banner />
          {/* Product Feed*/}
          <ProductFeed products={products} />


      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}
