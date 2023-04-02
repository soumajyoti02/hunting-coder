import Head from 'next/head'
// import Image from 'next/image' // Don't Use this Property in Static pages. Use img tag instead
import { Inter } from 'next/font/google'
import Script from 'next/script'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import PopularBlog from '@/components/PopularBlog'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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
      <main className='box-border bg-gray-900  w-screen pb-10'>
        <header className="text-gray-400  body-font">
        </header>

        <section className=' w-[90%] m-auto  flex  justify-around items-center bg-gray-900 pt-10 pb-10 '>
          <div className="w-full md:w-[50%] h-[36rem] space-y-8 flex flex-col justify-center">
            <h1 className={` text-7xl font-bold text-white pt-1 box-border`}>Hunting Coder</h1>

            <h2 className={`text-white text-lg text-semibold font-mono w-11/12`}>Welcome to our website, where we provide innovative coding solutions to help businesses and individuals achieve their goals. Our team of expert coders specializes in creating customized solutions that are tailored to your unique needs, whether you&apos;re looking to streamline your operations, automate processes, or create dynamic applications.
              Whether you&apos;re a startup, a small business, or a large enterprise, we have the expertise and experience to help you succeed. Contact us today to learn more about our coding solutions and how we can help take your business to the next level.</h2>
          </div>
          <img src={`/homeimg.jpg`} width={637} height={198} className={`rounded-3xl `} alt='my-images'></img>
        </section>
        <section className="blogpage flex justify-between items-center w-11/12 m-auto">
          <img src={`/blog.jpg`} width={658} height={320} className={`rounded-3xl h-[320px]`} alt='my-images'></img>
          <PopularBlog />
        </section>
      </main>
    </>
  )
}
