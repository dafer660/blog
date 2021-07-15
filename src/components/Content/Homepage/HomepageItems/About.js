import React from 'react'
import '../../About/About.scss'

import daniel from '../../../../assets/images/danielferreira_image.jpg'

const About = (props) => {
    return (
        <div id="about" className={'flex h-full w-full relative'}>
            <div className={'grid grid-cols-2 gap-8 h-3/4 w-full bg-gray-100 relative items-center self-center'}>
                <div className="left w-full h-full overflow-hidden">
                    <div className="flex items-center justify-center min-h-full">
                        <div className='flex h-full overflow-hidden items-center justify-center'>
                            <img
                                className='flex h-4/6 w-4/6 rounded-full shadow border-4 border-gray-900 border-opacity-25'
                                src={daniel} alt={'...'}/>
                        </div>
                    </div>
                </div>
                <div className="right w-full pr-16">
                    <div className="overflow-hidden">
                        <h1 className='text-center text-5xl pb-8'>About me</h1>
                        <p className='text-2xl text-justify'>
                            Hello friends! My name is Daniel, I am from <span>Portugal</span> and I am a <span>Sys Admin/Junior Developer</span>!
                            One of my favorite delicacies is called <span>Pastel de Nata</span>,
                            from Belém and I truly enjoy a good "<span>bica</span>" (expresso).</p>
                        <button className='pt-8'>More about me</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
