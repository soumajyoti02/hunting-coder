import React from 'react'

const Alert = (props) => {
    return (

        props.message && <div className="bg-green-200 text-green-700 border border-green-500 px-4 py-3 rounded absolute top-0 z-30 w-screen" role="alert">
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline"> Thank you for reaching out to us! Your message has been successfully submitted and we will get back to you as soon as possible. Have a great day!</span>
        </div>

    )
}

export default Alert
