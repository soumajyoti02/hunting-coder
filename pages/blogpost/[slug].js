import React, { useState } from 'react'
import * as fs from 'fs';

/*
To display data on a page for a specific slug: ---->
    <*>You need to find the file that contains the data for that slug.

To get the data from an external source:
    <*> You need to use a function called getServerSideProps.
    This function takes the context object as an argument, which provides information about the request and response.

To switch to using getServerSideProps:
    <*> You need to uncomment the code for getServerSideProps.
    <*> You need to comment out the code for getStaticProps and getStaticPaths.

To generate static pages:
    <*> You need to use the functions getStaticProps and getStaticPaths.
    <*> These functions generate pages without getting data from an external source.


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

*/

/*
getStaticPaths:

    <*> Used to generate dynamic routes for static pages.
    <*> Returns an array of objects containing the parameters for each route.
    <*> This function is required when using getStaticProps.

getStaticProps:

    <*> Used to generate static props for a page.
    <*> Accepts the context object as an argument, which provides information about the request and response.
    <*> Returns an object containing the props for the page, which can be used to populate the page with 
        data.
    <*> This function can be used to fetch data from an external source and pass it as props to the page
        component.
*/
export const getStaticPaths = async () => {
    return {
        paths: [
            { params: { slug: 'how-to-learn-flask' } },
            { params: { slug: 'how-to-learn-javascript' } },
            { params: { slug: 'how-to-learn-nextjs' } }
        ],
        fallback: true,
    }
}

export const getStaticProps = async (context) => {
    // Get the slug parameter from the context object.
    const { slug } = context.params

    // Read the blog data file corresponding to the slug parameter.
    const myBlog = await fs.promises.readFile(`blogdata/${slug}.json`)

    // Return an object containing the blog data as props, after parsing it from JSON.
    return {
        props: {
            myBlog: JSON.parse(myBlog)
        }
    }
}


const Slug = (props) => { // Define a functional component called "Slug"

    const createMarkup = (content) => {
        return { __html: content }
    }
    const [blogs, setBlogs] = useState(props.myBlog)

    return (
        <>
            <div className='min-h-screen bg-gray-900 flex flex-col items-center w-screen'>
                <h1 className='text-white font-bold text-4xl text-center mt-10'>{blogs && blogs.title}</h1>  {/* Display the title of the blog if it exists */}
                <div className='w-11/12 m-auto bg-gray-800 p-4 mt-5 rounded-3xl'>
                    {blogs && <p className='text-white text-lg font-mono ' dangerouslySetInnerHTML={createMarkup(blogs.content)}></p>} {/* Display the content of the blog if it exists */}
                </div>
            </div>
        </>
    )
}

export default Slug // Export the "slug" component for use in other modules
