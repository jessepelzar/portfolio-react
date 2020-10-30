import React from 'react'
import { AboutLeft } from './AboutLeft'
import { AboutRight } from './AboutRight'

export const AboutBody = () => {
    return (
        <div className="body-container lg-container vertical-center">
            <div className="just-flex-between">
                <AboutLeft />
                <AboutRight />
            </div>
        </div>
    )
}
