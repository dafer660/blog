import React from 'react'

import iconLogo from '../../../assets/images/logosmall.png'
import {NavLink, useLocation} from "react-router-dom";

const Logo = (props) => {
    const location = useLocation()

    return (
        <div className='transition duration-700 ease-in-out transform hover:scale-105'>
            {location.pathname === '/' ?
                <a onClick={() => props.setMenuOpen(false)} href={`#introduction`}>
                    <img className={'w-10'} src={iconLogo} alt="Homepage"/>
                </a>
                :
                <NavLink to={'/'}>
                    <img className={'w-10'} src={iconLogo} alt="Homepage"/>
                </NavLink>
            }
        </div>
    )
}


export default Logo