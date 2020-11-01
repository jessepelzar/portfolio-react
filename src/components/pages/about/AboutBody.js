import React from 'react'
import { AboutLeft } from './AboutLeft'
import { AboutRight } from './AboutRight'

export const AboutBody = () => {
    return (
        <div className="body-container">
            <div className="lg-container just-flex-between stack-for-mobile spacing-top-md">
                <AboutLeft />
                <AboutRight />
            </div>
        </div>
    )
}
