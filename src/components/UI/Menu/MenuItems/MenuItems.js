import React, {useEffect, useState} from 'react'
import MenuItem from "./MenuItem/MenuItem";

const MenuItems = (props) => {
    const homepageItems = ['introduction', 'about', 'places', 'food', 'wine', 'interests']
    const menuItems = ['homepage', 'blog', 'hobbies', 'kitchen']
    const [items, setItems] = useState([])
    const [type, setType] = useState('')

    useEffect(() => {
        if (props.menu === '/') {
            setItems(homepageItems)
            setType('homepage')
        } else {
            setItems(menuItems)
            setType('others')
        }
    }, [props.menu])

    return (
        <>
            {items.map((item, index) => {
                return (
                    <MenuItem setMenuOpen={props.setMenuOpen} key={index} id={item} name={item} type={type}/>
                )
            })}
        </>
    )
}

export default MenuItems