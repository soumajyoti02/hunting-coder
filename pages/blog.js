import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import * as fs from 'fs';
import InfiniteScroll from 'react-infinite-scroll-component';
import Head from 'next/head'
import Spinner from '@/components/Spinner';

/*
Step 1: Collect all the files from the blogdata directory
Step 2: Iterate through them and display them

To switch to using getServerSideProps:
    <*> Uncomment the code for getServerSideProps.
    <*> Comment out the code for getStaticProps.

To generate static pages:
    <*> Use the function getStaticProps.
    <*> Comment out the code for getServerSideProps.


// This function fetches data from the server on every request
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

// This function fetches data from the server at build time
export const getStaticProps = async (context) => {
    // Read the directory "blogdata" and get an array of file names
    const data = await fs.promises.readdir("blogdata");

    // Count the total number of blog posts
    let allCount = data.length

    // Create an empty array to store all blog data
    const allBlogs = []

    // Loop through each file name in the array and read the corresponding file
    for (let index = 0; index < 2; index++) { // Type the Number of How Many Blog Should Present Initially 
        const item = data[index];
        const myFile = await fs.promises.readFile(('blogdata/' + item))

        // Parse the JSON data from the file and push it to the array of all blog data
        allBlogs.push(JSON.parse(myFile))
    }

    // Return an object containing all blog data as props
    return {
        props: {
            data: allBlogs,
            allCount,
        }
    }
}


const Blog = (props) => {
    // Define a state variable 'blogs' to store blog data, and a function 'setBlogs' to update it.
    // Set the initial value of 'blogs' to the 'data' prop passed to the component.
    const [blogs, setBlogs] = useState(props.data)

    // Define a state variable 'count' to keep track of the number of blogs currently shown, 
    // and a function 'setCount' to update it. Set the initial value to 2.
    const [count, setCount] = useState(2)

    // Define a function 'fetchData' to fetch more blog data when called.
    const fetchData = async () => {
        // Use the fetch API to make a fake async API call to a local server at http://localhost:3000/api/blogs/.
        // Pass in the current count plus 5 as a query parameter to fetch the next 5 blog records.
        let res = await fetch(`http://localhost:3000/api/blogs/?count=${count + 5}`)

        // Update the count state by adding 5 to the previous count.
        setCount(count + 5)

        // Parse the response data as JSON and update the blogs state with the new data.
        let data = await res.json()
        setBlogs(data)
    };


    return (
        <>
            <Head><title>Blog - Hunting Coder</title></Head>
            <div className="text-gray-400 bg-gray-900 body-font overflow-hidden min-h-screen">
                {/* {loading && <Spinner />} */}
                <InfiniteScroll
                    dataLength={blogs.length} //This is important field to render the next data
                    next={fetchData}
                    hasMore={props.allCount !== blogs.length}
                    loader={<Spinner />}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    <div className="container px-5 py-24 mx-auto w-11/12" >


                        {
                            blogs.map((blogItem) => {
                                return <div className="-my-8 divide-y-2 divide-gray-800" key={blogItem.id}>
                                    <div className="py-8 flex flex-wrap md:justify-between md:flex-nowrap" >
                                        <div className="md:w-[22rem] md:mb-0 mb-6 flex-shrink-0 flex flex-col" >

                                            <h2 className="sm:text-3xl text-2xl text-white font-medium title-font mb-2 md:w-[95%]"><Link href={`/blogpost/${blogItem.slug}`}>{blogItem.title}</Link></h2>
                                            <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>

                                        </div>
                                        <div className="md:w-[50%]" >
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
                </InfiniteScroll >
            </div>
        </>
    )
}

export default Blog
