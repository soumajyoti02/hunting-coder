import React from 'react'

const HomeText = () => {
    return (
        <>
            <div className="w-full lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
                <h2 className={`text-4xl md:text-6xl font-bold text-white pt-1 mb-6 md:mb-8 text-center md:text-left`}>&lt;Hunting Coder/&gt;</h2>

                <p className={`text-white text-lg md:text-xl font-medium leading-relaxed md:pr-12`}>Welcome to our website, where we provide innovative coding solutions to help businesses and individuals achieve their goals. Our team of expert coders specializes in creating customized solutions that are tailored to your unique needs, whether you&apos;re looking to streamline your operations, automate processes, or create dynamic applications.
                    Whether you&apos;re a startup, a small business, or a large enterprise, we have the expertise and experience to help you succeed. Contact us today to learn more about our coding solutions and how we can help take your business to the next level.</p>
            </div>
            <div className="w-full lg:w-1/2">
                <img src="/homeimg.jpg" className="rounded-3xl" alt="my-images" />
            </div>
        </>
    )
}

export default HomeText
