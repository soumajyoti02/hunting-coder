import { useRouter } from 'next/router'
import React from 'react'

const slug = () => {
    const Router = useRouter()
    const { slug } = Router.query
    return (
        <div>
            {slug}
        </div>
    )
}

export default slug
