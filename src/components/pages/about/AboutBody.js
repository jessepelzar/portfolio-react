import React from 'react'
import { AboutLeft } from './AboutLeft'
import { AboutRight } from './AboutRight'

export const AboutBody = () => {
    return (
        // <div className="scroll-y">
            <div className="about-container scroll-y scroll-lock-x" >
                <div className=" lg-container just-flex-around stack-for-mobile spacing-top-lg">
                    <AboutLeft />
                    <AboutRight />
                </div>
            </div>
        // </div>
    )
}
