import React from 'react'

import MenuItems from "./MenuItems/MenuItems";

const Menu = (props) => {
    return (
        <div className={`flex flex-col w-64 h-screen fixed items-center justify-center z-30
                    transition-all duration-700 ease-in-out bg-indigo-600`}
        style={{
            right: props.menuOpen ? '0' : '-300px'
        }}>
            <MenuItems setMenuOpen={props.setMenuOpen} menu={props.menu} setMenu={props.setMenu}/>
        </div>

    )
}

export default Menu