import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import * as fs from 'fs';
import InfiniteScroll from 'react-infinite-scroll-component';
import Head from 'next/head'
import Spinner from '@/components/Spinner';
import LoadingBar from 'react-top-loading-bar'
import BlogItem from '@/components/BlogItem';

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
    for (let index = 0; index < 4; index++) { // Type the Number of How Many Blog Should Present Initially 
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
    const [count, setCount] = useState(3)

    // Define a function 'fetchData' to fetch more blog data when called.
    const fetchData = async () => {
        // Use the fetch API to make a fake async API call to a local server at http://localhost:3000/api/blogs/.
        // Pass in the current count plus 5 as a query parameter to fetch the next 5 blog records.
        let res = await fetch(`http://localhost:3000/api/blogs/?count=${count + 3}`)

        // Update the count state by adding 5 to the previous count.
        setCount(count + 3)

        // Parse the response data as JSON and update the blogs state with the new data.
        let data = await res.json()
        setBlogs(data)
    };

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
            <Head><title>Blog - Hunting Coder</title></Head>
            <LoadingBar color='#00c0ff' progress={loadingProgress} height={2.5} />
            <div className="text-gray-400 bg-gray-900 body-font overflow-hidden min-h-screen">
                {/* {loading && <Spinner />} */}
                <InfiniteScroll
                    dataLength={blogs.length} //This is important field to render the next data
                    next={fetchData}
                    hasMore={props.allCount !== blogs.length}
                    loader={<Spinner />}
                    endMessage={
                        <p style={{ textAlign: 'center', marginBottom: '16px' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                >
                    <div className="container flex flex-wrap justify-center lg:justify-between px-1 md:px-5 py-10 md:py-14  mx-auto md:w-[90%] box-border" >
                        {

                            blogs.map((blogItem) => {
                                return <BlogItem title={blogItem.title} key={blogItem.id} slug={blogItem.slug} metadesc={blogItem.metadesc} />
                            })
                        }

                    </div>
                </InfiniteScroll >
            </div>
        </>
    )
}

export default Blog
