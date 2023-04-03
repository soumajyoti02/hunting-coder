import Link from 'next/link'
import React from 'react'
import styles from '@/styles/BlogItem.module.css'

const BlogItem = (props) => {
    const { id, title, metadesc, slug } = props
    return (
        <>


            <section className={`${styles.card} text-gray-400 bg-gray-900 body-font md:w-[400px] lg:w-[600px] mb-16`}>
                <div className="container px-5 py-12 mx-auto">
                    <div className="flex flex-wrap -m-4 h-[680px] md:h-[520px]">
                        <div className="p-4 min-h-[600px]">
                            <div className=" bg-gray-800 bg-opacity-40 px-8 pt-16  rounded-lg  text-center relative min-h-[680px] md:min-h-[530px]">
                                <h2 className="tracking-widest text-base title-font font-medium text-gray-500 mb-1">Technology</h2>
                                <Link href={`blogpost/${slug}`}><h1 className="title-font sm:text-2xl text-2xl  text-white mb-3 font-bold">{title}</h1></Link>
                                <Link href={`blogpost/${slug}`}><p className="leading-relaxed mb-3">{metadesc}</p> </Link>
                                <Link href={`blogpost/${slug}`} className="text-indigo-400 inline-flex items-center">Learn More
                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M5 12h14"></path>
                                        <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                                <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                    <span className="text-gray-500 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-700 border-opacity-50">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>1.2K
                                    </span>
                                    <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>6
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default BlogItem
