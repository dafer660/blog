import React from 'react'

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Menu from "../Menu/Menu";

const Layout = (props) => {

    return (
        <>
            {/*Navbar component*/}
            <Navbar menuOpen={props.menuOpen} setMenuOpen={props.setMenuOpen}/>

            {/*Menu component*/}
            <Menu menuOpen={props.menuOpen} setMenuOpen={props.setMenuOpen} menu={props.menu} setMenu={props.setMenu}/>

            <div className={`relative top-16`} onClick={() => props.setMenuOpen(false)}>
                {props.children}
            </div>

            {/*Footer component*/}
            <Footer onClick={() => props.setMenuOpen(false)}/>
        </>
    )
}

export default Layout