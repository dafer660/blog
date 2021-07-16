import React, {useEffect} from 'react'

import Modal from "../../../../UI/Modal/Modal";

import './About.scss'

import daniel from '../../../../../assets/images/danielferreira_image.jpg'

const About = (props) => {
    const [showModal, setShowModal] = React.useState(false);

    useEffect(() => {
        const handleClick = (e) => {
            if (e.target && e.target.className === 'modal display-block') {
                return setShowModal(false);
            }
        };
        if (showModal) {
            window.addEventListener("click", handleClick);
        }
    }, [showModal, setShowModal]);

    const handleShowModal = () => {
        setShowModal(true)
    };

    const handleHideModal = () => {
        setShowModal(false)
    };

    return (
        <div id="about" className={'flex h-full w-full relative'}>
            <Modal show={showModal} handleClose={handleHideModal}>
                <div className="modalContainer">
                    stuff
                </div>
            </Modal>
            <div className='grid gap-4 h-4/5 w-full
            lg:grid-flow-col lg:grid-rows-none lg:grid-cols-2 lg:gap-8
            md:grid-flow-col md:grid-rows-none md:grid-cols-2 md:gap-8
            sm:grid-rows-2 sm:grid-flow-row sm:gap-4
            bg-gray-100 relative items-center self-center
            overflow-hidden'>
                <div className="flex h-full items-center justify-center overflow-hidden p-2">
                    <img
                        className='flex
                                w-40 h-40
                                lg:w-80 lg:h-80
                                md:w-80 md:h-80
                                sm:w-40 sm:h-40
                                rounded-full shadow border-4 border-gray-900 border-opacity-25'
                        src={daniel} alt={'...'}/>
                </div>
                <div className="flex w-full p-2 lg:pr-16 md:pr-16 sm:p-0">
                    <div className="overflow-hidden">
                        <h1 className='text-center text-2xl pb-2
                        lg:text-5xl md:text-4xl sm:text-3xl lg:pb-8 md:pb-8 sm:pb-2'>About me</h1>
                        <p className='text-justify p-2
                        lg:text-2xl lg:pb-4
                        md:text-1xl md:pb-4
                        sm:text-lg sm:pb-4'>
                            Hello friends! My name is Daniel, I am from <span>Portugal</span> and I am a <span>Sys Admin/Junior Developer</span>!
                            One of my favorite delicacies is called <span>Pastel de Nata</span>,
                            from Belém and I truly enjoy a good "<span>bica</span>" (expresso).</p>
                        <button className='p-2 text-lg lg:text-lg sm:text-base font-semibold shadow float-right rounded-2xl bg-yellow-500
                        hover:bg-yellow-700 hover:text-white hover:bg-opacity-75'
                                onClick={handleShowModal}>More about me
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
