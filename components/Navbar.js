import React from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='bg-gray-900'>
            <div className="bg-gray-900 container w-[90%] mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <span className={` ml-3 text-[1.95rem] font-bold text-yellow-100`}>Hunting Coder</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center list-none">
                    <Link href={`/`} ><li className={`${styles.animate} mr-5 hover:text-white`}>Home</li></Link>
                    <Link href={`/about`} ><li className={`${styles.animate} mr-5 hover:text-white`}>About</li></Link>
                    <Link href={`/blog`} ><li className={`${styles.animate} mr-5 hover:text-white`}>Blog</li></Link>
                    <Link href={`/contact`} ><li className={`${styles.animate} mr-5 hover:text-white`}>Contact Us</li></Link>
                </nav>
                <div className="flex space-x-5 justify-center items-center">
                    <button className={styles.btn}>
                        REGISTER
                    </button>
                    <button className={styles.btn}>
                        LOGIN
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Navbar
