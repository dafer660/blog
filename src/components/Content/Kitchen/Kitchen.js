import React, {useEffect} from 'react'
import {useLocation} from "react-router-dom";
import Development from "../../UI/Development/Development";

const Kitchen = (props) => {
    const location = useLocation()

    useEffect(() => {
        props.setMenu(location.pathname)
    }, [])

    return (
        <>
            <Development page={'Kitchen'}/>
        </>
    )
}

export default Kitchen
