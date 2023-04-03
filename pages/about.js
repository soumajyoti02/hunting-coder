import React from 'react'
import Head from 'next/head'

const About = () => {
	return (
		<>
			<Head><title>About - Hunting Coder</title></Head>
			<section className="text-gray-400 bg-gray-900 body-font min-h-screen">
				<div className="container px-5 py-14 md:py-24 mx-auto flex flex-wrap">
					<div className="flex flex-col text-center w-full mb-5 md:mb-10">
						<h1 className="sm:text-2xl text-2xl md:text-3xl  title-font text-blue-50 font-bold">Innovative Coding Solutions</h1>
					</div>
					<div className="flex flex-wrap -m-4">
						<div className="p-4 md:w-1/3">
							<div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
								<div className="flex items-center mb-3">
									<div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
										<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
											<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
										</svg>
									</div>
									<h2 className="text-white text-lg title-font font-medium">Website Development</h2>
								</div>
								<div className="flex-grow">
									<p className="leading-relaxed text-base">At our company, we specialize in website development solutions that are tailored to your specific needs. Our team of expert coders has years of experience in creating beautiful, functional websites that help businesses succeed online. From simple brochure sites to complex e-commerce platforms, we have the expertise and knowledge to bring your website vision to life. We work closely with you throughout the development process to ensure that your website meets your business goals and exceeds your expectations.</p>
								</div>
							</div>
						</div>
						<div className="p-4 md:w-1/3">
							<div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
								<div className="flex items-center mb-3">
									<div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
										<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
											<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
											<circle cx="12" cy="7" r="4"></circle>
										</svg>
									</div>
									<h2 className="text-white text-lg title-font font-medium">Process Automation</h2>
								</div>
								<div className="flex-grow">
									<p className="leading-relaxed text-base">Process automation is one of our core specialties. We understand the importance of streamlining business processes to increase efficiency and productivity, which is why we offer a range of automation solutions that are designed to meet your unique needs. Our team of expert coders will work closely with you to identify areas of your business that can benefit from automation and create customized solutions that save you time and money.</p>
								</div>
							</div>
						</div>
						<div className="p-4 md:w-1/3">
							<div className="flex rounded-lg h-full bg-gray-800 bg-opacity-60 p-8 flex-col">
								<div className="flex items-center mb-3">
									<div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
										<svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
											<circle cx="6" cy="6" r="3"></circle>
											<circle cx="6" cy="18" r="3"></circle>
											<path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
										</svg>
									</div>
									<h2 className="text-white text-lg title-font font-medium">Application Development</h2>
								</div>
								<div className="flex-grow">
									<p className="leading-relaxed text-base">At our company, we specialize in website development solutions that are tailored to your specific needs. Our team of expert coders has years of experience in creating beautiful, functional websites that help businesses succeed online. From simple brochure sites to complex e-commerce platforms, we have the expertise and knowledge to bring your website vision to life. We closely with you throughout the development process to ensure that your website meets your business goals and exceeds your expectations.</p>
								</div>

							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default About
