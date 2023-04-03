import Head from 'next/head'
import React, { useState, useEffect } from 'react'
// import Image from 'next/image' // Don't Use this Property in Static pages. Use img tag instead
import { Inter } from 'next/font/google'
// import Script from 'next/script'
import styles from '@/styles/Home.module.css'
import PopularBlog from '@/components/PopularBlog'
import HomeText from '@/components/HomeText'
import LoadingBar from 'react-top-loading-bar'
import Testimonial from '@/components/Testimonial'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  // ---------------------------------------------------------------------------------------------------
  //Using the Top Loading Bar for Scrolling Progress
  // Define a state variable 'loadingProgress' with initial value of 0
  const [loadingProgress, setLoadingProgress] = useState(0)

  // Set up an effect that runs once when the component is mounted, and adds an event listener to the window object
  // The event listener will call the 'handleScroll' function whenever the user scrolls the page
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    // Return a cleanup function that removes the event listener when the component is unmounted
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Define the 'handleScroll' function, which calculates the user's scroll position as a percentage of the total scrollable height
  // This percentage is then set as the new value of the 'loadingProgress' state variable
  const handleScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrolled = (winScroll / height) * 100
    setLoadingProgress(scrolled)
  }
  // ---------------------------------------------------------------------------------------------------


  return (
    <>
      <div className="w-[100vw] overflow-hidden">
        <Head>
          <title>Home - Hunting Coder</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="keywords" content="nextjs, hunting coder, coding blog" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* <Script src='/sc.js' strategy='lazyOnload'></Script> */}
        <LoadingBar color='#00c0ff' progress={loadingProgress} height={2.5} />

        <main className='box-border bg-gray-900  w-screen pb-10 min-w-[100vw] max-w-[100vw] overflow-hidden'>
          <header className="text-gray-400  body-font">
          </header>

          <section className=' w-[90%] min-h-[90vh] max-w-screen-xl  mx-auto px-4  flex flex-wrap items-center justify-between overflow-hidden'>
            <HomeText />
          </section>
          <section className="blogpage flex flex-wrap-reverse max-w-screen-xl lg:flex-wrap justify-center lg:justify-between items-center  mx-auto px-4  overflow-hidden">
            <div className={`${styles.card} w-full lg:w-1/2 flex justify-center items-center lg:pr-12 mb-8 lg:mb-0 shadow-none`}>
              <img src="/blog.jpg" className="rounded-3xl h-auto lg:h-[90%] w-[90%] md:w-full lg:w-[100%] mb-8" alt="my-images" />
            </div>
            <div className="w-full lg:w-1/2 sm: mb-10 md:mb-6 lg:mb-0">
              <PopularBlog />
            </div>
          </section>
          <Testimonial />
        </main >

      </div>
    </>
  )
}


