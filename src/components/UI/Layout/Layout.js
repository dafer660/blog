import React from 'react'

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Menu from "../Menu/Menu";
import ToTop from "../ToTop/ToTop";

import './Layout.scss'

const Layout = (props) => {

    return (
        <>
            {/*Navbar component*/}
            <Navbar menuOpen={props.menuOpen} setMenuOpen={props.setMenuOpen}/>

            {/*Menu component*/}
            <Menu menuOpen={props.menuOpen} setMenuOpen={props.setMenuOpen} menu={props.menu} setMenu={props.setMenu}/>

            {/*Children components*/}
            <div className={`child relative top-16`} onClick={() => props.setMenuOpen(false)}>
                {props.children}
            </div>

            {/*To top arrow in case we are not in the top location */}
            {props.isTop.top ? '' : <ToTop isTop={props.isTop} setIsTop={props.setIsTop}/>}

            {/*Footer component*/}
            <Footer onClick={() => props.setMenuOpen(false)}/>
        </>
    )
}

export default Layout