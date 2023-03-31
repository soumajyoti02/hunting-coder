import { useRouter } from 'next/router'
import React from 'react'

/*
Step 1: Find the file corresponding to the slug
Step 2: Populate them inside the page
*/

const slug = () => {
    const Router = useRouter()
    const { slug } = Router.query
    return (
        <>
            <div className='min-h-screen bg-gray-900 flex flex-col items-center w-screen'>
                <h1 className='text-white font-bold text-4xl text-center mt-10'>Title {slug}</h1>
                <div className='w-11/12 m-auto bg-gray-800 p-4 mt-5 rounded-3xl'>
                    <p className='text-white text-lg font-mono '>
                        JavaScript is a dynamic and versatile programming language that has become an essential tool for modern web development. It is used to create interactive web pages and applications that respond to user input and provide a rich and engaging user experience.
                        One of the key features of JavaScript is its ability to be used both on the client-side and server-side. On the client-side, JavaScript is used to manipulate web pages in real-time, allowing for the creation of dynamic and interactive interfaces that respond to user input. On the server-side, JavaScript can be used with popular web frameworks like Node.js to build powerful and scalable web applications.
                        JavaScript's popularity is due in part to its vast ecosystem of libraries and frameworks, including React, Angular, and Vue.js, which enable developers to build complex applications quickly and easily. Additionally, JavaScript's flexibility allows it to be used in conjunction with other web technologies like HTML and CSS to create highly customized user experiences.
                        Despite its ubiquity in modern web development, JavaScript continues to evolve and improve, with new features and functionality being added to the language regularly. As such, it is a language that is well worth learning for any aspiring web developer looking to build dynamic and engaging web applications.
                    </p>
                </div>
            </div>
        </>
    )
}

export default slug
