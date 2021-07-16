import React from 'react'
import HomepageCard from "../HomepageCard/HomepageCard";

import blog from "../../../../assets/svg/border_color_black_24dp.svg";
import handyman from "../../../../assets/svg/handyman_black_24dp.svg";
import kitchen from "../../../../assets/svg/restaurant_black_24dp.svg";

const Introduction = (props) => {
    return (
        <div id="introduction">
            <div className="bg-gradient-to-r bg-green-200 bg-indigo-200 bg-left-top bg-auto bg-repeat-x h-80"/>

            <div className="-mt-64">
                <div className="w-full text-center">
                    <p className="text-sm tracking-widest text-black">Welcome to my website</p>
                    <h1 className="font-bold text-3xl text-black">
                        FerreiraTech.
                    </h1>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <HomepageCard title={'Blog'} to={'/blog'} image={blog}
                                  content={'Check out my Blog here. Feel free to provide feedback!'}/>
                    <HomepageCard title={'Hobbies'} to={'/hobbies'} image={handyman}
                                  content={'Take a look at some of my hobbies!'}/>
                    <HomepageCard title={'Kitchen'} to={'/kitchen'} image={kitchen}
                                  content={'I enjoy preparing my own meals. Come cook with me!'}/>
                </div>
            </div>
        </div>
    )
}

export default Introduction
