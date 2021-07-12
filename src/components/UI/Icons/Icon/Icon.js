import React from 'react'

const Icon = (props) => {
    return (
        <div className={'mx-1 transition duration-500 ease transform hover:scale-110'}>
            <a href={props.href} target="_blank" title={props.title}
               rel="noopener noreferrer">
                <img src={props.src} alt={props.alt} className={'w-6'}/>
            </a>
        </div>
    )
}

export default Icon
