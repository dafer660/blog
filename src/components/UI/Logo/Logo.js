import React from 'react'

import iconLogo from '../../../assets/images/logosmall.png'
import {NavLink} from "react-router-dom";

const Logo = () => {
    return (
        <div className='transition duration-700 ease-in-out transform hover:scale-105'>
            <NavLink to={'/'}>
                <img className={'w-10'} src={iconLogo} alt="Homepage"/>
            </NavLink>
        </div>
    )
}

export default Logo