import React, {createRef, useEffect, useRef, useState} from 'react'
import {useLocation} from "react-router-dom";

import './Homepage.scss'

import Introduction from "./HomepageItems/Introduction";
import About from "./HomepageItems/About";
import Places from "./HomepageItems/Places";
import Food from "./HomepageItems/Food";
import Wine from "./HomepageItems/Wine";
import Interests from "./HomepageItems/Interests";

const Homepage = (props) => {
    const location = useLocation()
    const components = [<Introduction/>, <About/>, <Places/>, <Food/>, <Wine/>, <Interests/>]
    const elementsRef = useRef(components.map(() => createRef()));
    const [currentElement, setCurrentElement] = useState({
        ref: null,
        child: null
    })

    useEffect(() => {
        props.setMenu(location.pathname)
    }, [])

    useEffect(() => {
        if (currentElement.child) {
            if (currentElement.child.id !== 'introduction') {
                props.setIsTop({
                    top: false,
                    ref: currentElement,
                    intro: elementsRef
                })
            } else if (currentElement.child.id === 'introduction') {
                props.setIsTop({
                    top: true,
                    ref: null,
                    intro: elementsRef
                })
            }
        }
    }, [currentElement])

    const handleMouseOver = (ref) => {
        const currentChild = ref.currentTarget.firstElementChild
        if (ref && currentChild !== currentElement.child) {
            setCurrentElement({
                ref: ref,
                child: ref.currentTarget.firstElementChild
            })
        }
    }

    return (
        <div id={'sections'} className={'sections'}>
            {components.map((item, index) => {
                return (
                    <div ref={elementsRef.current[index]} key={index}
                         onMouseOver={(ref) => handleMouseOver(ref)}
                         onTou
                    >{item}
                    </div>
                )
            })}
        </div>
    )
}

export default Homepage
