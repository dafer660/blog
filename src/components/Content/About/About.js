import React, {useEffect} from 'react'
import {useLocation} from "react-router-dom";

const About = (props) => {
    const location = useLocation()

    useEffect(() => {
        props.setMenu(location.pathname)
    }, [])
    return (
        <div>
          <h1>About</h1>
        </div>
    )
}

export default About
