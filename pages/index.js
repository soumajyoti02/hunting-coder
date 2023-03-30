import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import PopularBlog from '@/components/PopularBlog'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="nextjs, hunting coder, coding blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Script src='/sc.js' strategy='lazyOnload'></Script> */}
      <main className='box-border'>
        <header className="text-gray-400 bg-gray-900 body-font">
          <Navbar />
        </header>

        <section className='box-border h-[88.9vh] w-screen space-y-10 flex flex-col justify-center items-center bg-gray-900'>
          <h1 className={`${styles.linear_wipe} text-6xl font-bold text-white`}>Hunting Coder</h1>
          <h2 className={`${styles.inner_wipe} text-4xl text-semibold font-mono text-white`}>A Blog for Hunting Coders By a Hunting Coder</h2>

          <PopularBlog />
        </section>


      </main>
    </>
  )
}
