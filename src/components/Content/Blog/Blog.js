import React, {useEffect} from 'react'
import {useLocation} from "react-router-dom";

const Blog = (props) => {
    const location = useLocation()

    useEffect(() => {
        // Update the document title using the browser API
        console.log(location.pathname)
        props.setMenu(location.pathname)
    }, [])

    return (
        <div>
            <h1>Blog</h1>
        </div>
    )
}

export default Blog
