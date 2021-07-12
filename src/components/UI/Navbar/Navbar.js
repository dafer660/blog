import React from 'react'
import Logo from "../Logo/Logo";

import menu from "../../../assets/svg/menu_black_24dp.svg";
import close from '../../../assets/svg/close_black_24dp.svg'

const Navbar = (props) => {
    return (
        <header className={`w-full h-16 fixed top-0 z-40 bg-indigo-600 shadow-xl`}>
            <nav className={`flex h-16 justify-between item-center p-2 text-black`}>
                <div className={`left flex pl-8 overflow-hidden min-w-14`} onClick={() => props.setMenuOpen(false)}>
                    <Logo/>
                </div>
                <div className={`right flex pr-8 z-40 cursor-pointer transition-all duration-1000 ease delay-500`}>
                    <img className='w-10'
                         src={props.menuOpen ? close : menu} alt={'FerreiraTech.'}
                         onClick={() => props.setMenuOpen(!props.menuOpen)}/>
                </div>
            </nav>
        </header>
        // <NavbarItem menuOpen={props.menuOpen} setMenuOpen={props.setMenuOpen}>
        //
        //     <NavbarItem to={'/blog'} title={'Blog'}>Blog</NavbarItem>
        //     <NavbarItem to={'/hobbies'} title={'Hobbies'}>Hobbies</NavbarItem>
        //     <NavbarItem to={'/kitchen'} title={'Kitchen'}>Kitchen</NavbarItem>
        // </NavbarItem>
    )
}

export default Navbar
