import React, {useEffect, useRef, useState} from 'react'
import ReactDOM from 'react-dom'

import './Homepage.scss'

import Introduction from "./HomepageItems/Introduction";
import About from "./HomepageItems/About";
import Places from "./HomepageItems/Places";
import Food from "./HomepageItems/Food";
import Wine from "./HomepageItems/Wine";
import Interests from "./HomepageItems/Interests";
import {useLocation} from "react-router-dom";

const Homepage = (props) => {
    const location = useLocation()

    useEffect(() => {
        // Update the document title using the browser API
        console.log(location.pathname)
        props.setMenu(location.pathname)
    }, [])

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const currentScrollY = window.innerHeight
    //         const element = ReactDOM.findDOMNode(currentRef.current);
    //         // console.log(currentScrollY);
    //     };
    //
    //     window.addEventListener('wheel', handleScroll, { passive: true });
    //
    //     return () => window.removeEventListener('wheel', handleScroll);
    // }, []);

    const scrollTo = (ref) => {
        if (ref) {
            ref.current.scrollIntoView({behavior: 'smooth', block: 'start'})
        }
    }

    const handleWheel = (e) => {
        // console.log(e.target.nextElementSibling)
        console.log(e)
    }

    return (
        <div id={'sections'} className={'sections'}>
            <Introduction/>
            <About/>
            <Places/>
            <Food/>
            <Wine/>
            <Interests/>
        </div>
    )
}

export default Homepage
