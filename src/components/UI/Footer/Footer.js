import React from 'react'
import Icons from "../Icons/Icons";

const Footer = (props) => {

    const Copyright = () => {
        return (
            <>
                <p>
                    <a className={'hover:text-white'}
                       href={'https://www.ferreiratech.pt'}
                       target="_blank"
                       rel="noopener noreferrer">
                        FerreiraTech
                    </a>
                    <span className={'text-xs align-top'}>©</span> {new Date().getFullYear()}
                </p>
            </>
        )
    }

    return (
        <footer
            className="flex flex-wrap content-center bg-current bg-indigo-600 text-black text-center
             fixed inset-x-0 bottom-0 h-16 justify-between p-5 z-40 shadow-xl">
            <div className="leftFooter">
                <Copyright/>
            </div>
            <div className="rightFooter">
                <Icons/>
            </div>
        </footer>
    )
}

export default Footer
