import React from 'react'
import {NavLink} from "react-router-dom";


const MenuItem = (props) => {
    return (
        <li className={`capitalize text-white p-2 text-xl hover:text-black`}>
            {props.type === 'homepage' ?
                <a onClick={() => props.setMenuOpen(false)} href={`#${props.id}`}>{props.name}</a> :
                <NavLink onClick={() => props.setMenuOpen(false)}
                         to={`/${props.id}`}>{props.name}</NavLink>}
        </li>
    )
}

export default MenuItem