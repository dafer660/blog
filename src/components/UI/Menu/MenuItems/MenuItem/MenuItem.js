import React from 'react'

const MenuItem = (props) => {
    return (
        <li className={`capitalize text-white p-2 text-xl hover:font-bold`}>
            <a onClick={() => props.setMenuOpen(false)} href={`#${props.id}`}>{props.name}</a>
        </li>
    )
}

export default MenuItem