import React from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const Navbar = () => {
    return (
        <>
            <div className='bg-gray-900 md:sticky md: top-0 md: z-10'>
                <div className="bg-gray-900 container w-[93%] mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
                    <Link href={`/`} className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        {/* <span className={` ml-3 text-[1.95rem] font-bold text-yellow-100`}>Hunting Coder</span> */}
                        <img src="/logo.png" alt="Hunting Coder Logo" className="ml-3 w-[13rem] h-[5rem]" />

                    </Link>
                    <nav className=" flex flex-wrap items-center text-base justify-center list-none space-x-5  md:space-x-8">
                        <Link href={`/`} ><li className={`${styles.animate}  hover:text-white text-center`}>Home</li></Link>
                        <Link href={`/about`} ><li className={`${styles.animate}  hover:text-white text-center`}>About</li></Link>
                        <Link href={`/blog`} ><li className={`${styles.animate}  hover:text-white text-center`}>Blog</li></Link>
                        <Link href={`/contact`} ><li className={`${styles.animate}  hover:text-white text-center`}>Contact</li></Link>
                    </nav>
                    {/* <div className="flex space-x-5 justify-center items-center">
                    <button className={styles.btn}>
                        REGISTER
                    </button>
                    <button className={styles.btn}>
                        LOGIN
                    </button>
                </div> */}

                </div>
            </div>
        </>
    )
}

export default Navbar
