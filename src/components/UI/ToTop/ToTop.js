import React from 'react'

import arrow from '../../../assets/svg/arrow_upward_black_24dp.svg'

const ToTop = (props) => {

    const handleToTop = () => {
        // does not work well for mobile for the homepage.
        const element = Object.values(props.isTop.intro)
        const intro = element[0][0].current
        // console.log(intro[0][0].current)
        intro.scrollIntoView()
    }

    return (
        <div
            className='animate-pulse absolute bottom-20 right-4 bg-gray-200 border-2 border-gray-900 rounded-lg cursor-pointer
        transition-all ease-in-out duration-700 hover:animate-none'
            onClick={handleToTop}>
            <img className='w-6' src={arrow} alt='^'/>
        </div>
    )
}

export default ToTop
