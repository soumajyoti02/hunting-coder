import React from 'react'
import styles from '@/styles/Home.module.css'

const PopularBlog = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.box}>
                    <div className="space-y-4 overflow-auto scroll-m-2">
                        <h3 className="text-3xl font-bold pt-2 text-white">Popular Blogs</h3>
                        <div className="">
                            <h6 className="text-xl font-semibold text-white">How to Learn JavaScript in 2022?</h6>
                            <p className="font-lg text-white">Javascript is the language used to design logic for the web</p>
                            <a className="mt-1 text-indigo-400 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="">
                            <h6 className="text-xl font-semibold text-white">How to Learn JavaScript in 2022?</h6>
                            <p className="font-lg text-white">Javascript is the language used to design logic for the web</p>
                            <a className="mt-1 text-indigo-400 inline-flex items-center">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PopularBlog
