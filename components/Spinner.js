import React from 'react'
import styles from '@/styles/Spinner.module.css'
const Spinner = () => {
    return (
        <>
            <div className='flex justify-center items-center h-16'>
                <div className={styles.load}>
                    <div className={styles.progress}></div>
                    <div className={styles.progress}></div>
                    <div className={styles.progress}></div>
                </div>
            </div >
        </>
    )
}

export default Spinner

