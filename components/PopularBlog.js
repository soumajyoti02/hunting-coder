import React from 'react'
import styles from '@/styles/Home.module.css'

const PopularBlog = () => {
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.box}>
                    <div className="space-y-4 overflow-auto">
                        <h3 className="text-3xl font-bold pt-2 text-white">Popular Blogs</h3>
                        <div className="">
                            <p className="text-xl font-semibold text-white">How to Learn JavaScript in 2022?</p>
                            <p className="font-lg text-white">Javascript is the language used to design logic for the web</p>
                        </div>
                        <div className="">
                            <p className="text-xl font-semibold text-white">How to Learn JavaScript in 2022?</p>
                            <p className="font-lg text-white">Javascript is the language used to design logic for the web</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PopularBlog
