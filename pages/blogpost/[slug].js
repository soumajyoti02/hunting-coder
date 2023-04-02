import React, { useState } from 'react'

/*
Step 1: Find the file corresponding to the slug
Step 2: Populate them inside the page
http://localhost:3000/api/getblog?slug=how-to-learn-javascript
Context is an object that represents the request/response context.
*/

// This exports a function that is executed on the server side when a page is requested
export const getServerSideProps = async (context) => {
    // Destructure the "slug" property from the "context.query" object
    const { slug } = context.query;

    // Fetch data from a custom API endpoint with a "slug" parameter
    const res = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);

    // Extract the JSON data from the response
    const myBlog = await res.json();

    // Return an object with a "props" property that contains the fetched data
    return {
        props: {
            myBlog,
        },
    };
};


const slug = (props) => { // Define a functional component called "slug"

    const [blogs, setBlogs] = useState(props.myBlog)
    return (
        <>
            <div className='min-h-screen bg-gray-900 flex flex-col items-center w-screen'>
                <h1 className='text-white font-bold text-4xl text-center mt-10'>{blogs && blogs.title}</h1>  {/* Display the title of the blog if it exists */}
                <div className='w-11/12 m-auto bg-gray-800 p-4 mt-5 rounded-3xl'>
                    <p className='text-white text-lg font-mono '>
                        {blogs && blogs.content} {/* Display the content of the blog if it exists */}
                    </p>
                </div>
            </div>
        </>
    )
}

export default slug // Export the "slug" component for use in other modules
