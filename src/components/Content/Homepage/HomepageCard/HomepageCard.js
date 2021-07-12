import React from 'react'
import {NavLink} from "react-router-dom";

import doubleArrow from "../../../../assets/svg/double_arrow_black_24dp.svg";

const HomepageCard = (props) => {
    return (
        <div className="flex p-4 sm:p-8 md:p-4 text-center justify-center">
            <div
                className="bg-current min-w-ws rounded-lg overflow-hidden shadow-lg
                                min-w-72 max-w-72
                                lg:min-w-72 lg:max-w-72
                                md:max-w-[225px] md:min-w-[225px]
                                sm:max-w-[225px] sm:min-w-[225px]
                                hover:bg-gray-100 transform hover:scale-105 transition duration-1000 bg-white">
                <NavLink to={props.to} className={'cursor-pointer'}>
                    <div className="space-y-4">
                        <div
                            className="inline-flex px-6 py-3 w-full justify-center border-b-2 border-black bg-indigo-900">
                            <img className={'w-14 p-1 rounded-lg border border-black bg-white'}
                                 src={props.image} alt={'...'}/>
                        </div>
                        <div className="px-6 py-1">
                            <div className="space-y-4 md:min-h-[150px] sm:min-h-[150px]">
                                <div className="font-bold text-xl mb-2">{props.title}</div>
                                <p className="text-gray-700 text-base">
                                    {props.content}
                                </p>
                            </div>
                        </div>
                        <div className="px-6 py-2 inline-flex w-full justify-end bg-indigo-900">
                            <img className={'w-auto rounded-full border border-black bg-white'}
                                 src={doubleArrow} alt={'...'}/>
                        </div>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default HomepageCard
