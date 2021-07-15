import React from 'react'

import underDev from '../../../assets/images/under_construction.png'

const Development = () => {
    return (
        <div className={'inline-flex p-10 w-full h-full justify-center'}>
            <div className={'flex flex-col self-center p-10 border-4 border-red-500 bg-yellow-300 rounded-xl'}>
                <img className={'flex self-center lg:w-80 lg:h-80 md:w-80 md:h-80 sm:w-40 sm:h-40'} src={underDev}
                     alt={'...'}/>
                <h2 className={'lg:text-4xl md:text-3xl sm:text-2xl subpixel-antialiased font-semibold text-center overflow-hidden'}>
                    Under Construction
                </h2>
            </div>
        </div>
    )
}

export default Development
