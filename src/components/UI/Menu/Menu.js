import React from 'react'

import MenuItems from "./MenuItems/MenuItems";

const Menu = (props) => {
    console.log(props.menu)
    return (
        <div className={`flex flex-col w-64 h-screen fixed items-center justify-center z-30
                    transition-all duration-1000 ease-in-out bg-indigo-600`}
        style={{
            right: props.menuOpen ? '0' : '-300px'
        }}>
            <MenuItems setMenuOpen={props.setMenuOpen}/>
        </div>

    )
}

export default Menu