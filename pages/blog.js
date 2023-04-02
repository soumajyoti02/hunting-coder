import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import * as fs from 'fs';

/*
Step 1: Collect all the files from blogdata directory
Step 2: Iterate through them and Display them

To switch to using getServerSideProps:
    <*> You need to uncomment the code for getServerSideProps.
    <*> You need to comment out the code for getStaticProps.

To generate static pages:
    <*> You need to use the functions getStaticProps.
    <*> You need to comment out the code for getServerSideProps.

export const getServerSideProps = async (context) => {
    const res = await fetch('http://localhost:3000/api/blogs')
    const data = await res.json()

    return {
        props: {
            data,
        }
    }
}

*/
export const getStaticProps = async (context) => {
    // Read the directory "blogdata" and get an array of file names
    const data = await fs.promises.readdir("blogdata");

    // Create an empty array to store all blog data
    const allBlogs = []

    // Loop through each file name in the array and read the corresponding file
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        const myFile = await fs.promises.readFile(('blogdata/' + item))

        // Parse the JSON data from the file and push it to the array of all blog data
        allBlogs.push(JSON.parse(myFile))
    }

    // Return an object containing all blog data as props
    return {
        props: {
            data: allBlogs
        }
    }
}


const Blog = (props) => {
    const [blogs, setBlogs] = useState(props.data)
    // useEffect(() => {

    // }, [])

    return (
        <>
            <div className="text-gray-400 bg-gray-900 body-font overflow-hidden min-h-screen">
                <div className="container px-5 py-24 mx-auto w-11/12" >
                    {
                        blogs.map((blogItem) => {
                            return <div className="-my-8 divide-y-2 divide-gray-800" key={blogItem.id}>
                                <div className="py-8 flex flex-wrap md:flex-nowrap" >
                                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col" >

                                        <h2 className="sm:text-3xl text-2xl text-white font-medium title-font mb-2 md:w-[95%]"><Link href={`/blogpost/${blogItem.slug}`}>{blogItem.title}</Link></h2>
                                        <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>

                                    </div>
                                    <div className="md:flex-grow" >
                                        <p className="leading-relaxed text-base">{blogItem.metadesc.substr(0, 400)}...</p>

                                        <div className="flex md:mt-4 mt-6">

                                            <Link href={`/blogpost/${blogItem.slug}`} className="text-indigo-400 inline-flex items-center ml-4" >Learn More
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                </svg>

                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Blog
