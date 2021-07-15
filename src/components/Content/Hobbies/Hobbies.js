import React, {useEffect} from 'react'
import {useLocation} from "react-router-dom";
import Development from "../../UI/Development/Development";

const Hobbies = (props) => {
    const location = useLocation()

    useEffect(() => {
        props.setMenu(location.pathname)
    }, [])

    return (
        <div>
            <h1>Hobbies</h1>
            <Development/>
        </div>
    )
}

export default Hobbies
