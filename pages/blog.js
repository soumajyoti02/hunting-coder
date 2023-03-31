import Link from 'next/link'
import React from 'react'

/*
Step 1: Collect all the files from blogdata directory
Step 2: Iterate through them and Display them

*/

const Blog = () => {

    return (
        <>
            <section className="text-gray-400 bg-gray-900 body-font overflow-hidden min-h-screen">
                <div className="container px-5 py-24 mx-auto w-11/12">
                    <div className="-my-8 divide-y-2 divide-gray-800">
                        <div className="py-8 flex flex-wrap md:flex-nowrap">
                            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">

                                <h2 className="sm:text-3xl text-2xl text-white font-medium title-font mb-2 md:w-[95%]"><Link href={`/blogpost/learn-javascript`}>How to Use JavaScript</Link></h2>
                                <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>

                            </div>
                            <div className="md:flex-grow">
                                <p className="leading-relaxed text-base">JavaScript is a high-level, interpreted programming language that is widely used for web development. It allows for dynamic and interactive user experiences, and can be used both on the client-side and server-side. With its vast ecosystem of libraries and frameworks, JavaScript continues to be a popular and versatile language for building modern web applications.....</p>

                                <div className="flex md:mt-4 mt-6">

                                    <Link href={`/blogpost/learn-javascript`} className="text-indigo-400 inline-flex items-center ml-4" >Learn More
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>

                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>




        </>
    )
}

export default Blog
