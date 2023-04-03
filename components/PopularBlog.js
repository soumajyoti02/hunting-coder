import React from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const PopularBlog = () => {
    return (
        <div>
            <div className={`${styles.container} flex justify-center`}>
                <div className={styles.box}>
                    <div className="space-y-4 overflow-auto scroll-m-2">
                        <h3 className="text-3xl font-bold pt-2 text-white">Popular Blogs</h3>
                        <div className="">
                            <h6 className="text-xl font-semibold text-white">The Role of Blockchain in Supply Chain Management</h6>
                            <p className="font-lg text-white">This blog post examines how blockchain can enhance supply chain management by improving efficiency, reducing costs, and increasing trust. It addresses current challenges and emphasizes the significance of collaboration among supply chain stakeholders. The post also includes real-world use cases and explores future possibilities for blockchain technology in the industry.</p>
                            <Link href="blogpost/role-of-blockchain" className="mt-1 text-indigo-400 inline-flex items-center cursor-pointer">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                        <div className="">
                            <h6 className="text-xl font-semibold text-white">The Importance of Cybersecurity for Small Businesses</h6>
                            <p className="font-lg text-white">This blog post delves into the significance of cybersecurity for small businesses, including the financial and reputational risks of cyberattacks. It provides effective protective measures and highlights the need for cybersecurity awareness among employees.</p>
                            <Link href="blogpost/cybersecurity-in-small-business" className="mt-1 text-indigo-400 inline-flex items-center cursor-pointer">Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PopularBlog
