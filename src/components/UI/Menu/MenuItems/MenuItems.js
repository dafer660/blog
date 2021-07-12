import React from 'react'
import MenuItem from "./MenuItem/MenuItem";

const MenuItems = (props) => {

    return (
        <>
            <MenuItem setMenuOpen={props.setMenuOpen} id={'intro'} name={'Introduction'}/>
            <MenuItem setMenuOpen={props.setMenuOpen} id={'about'} name={'About'}/>
            <MenuItem setMenuOpen={props.setMenuOpen} id={'places'} name={'Places'}/>
            <MenuItem setMenuOpen={props.setMenuOpen} id={'food'} name={'Food'}/>
            <MenuItem setMenuOpen={props.setMenuOpen} id={'wine'} name={'Wine'}/>
            <MenuItem setMenuOpen={props.setMenuOpen} id={'interests'} name={'Interests'}/>
        </>
    )
}

export default MenuItems