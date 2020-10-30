import React from 'react'
import { Description } from './left/Description'
import { Skills } from './left/Skills'

export const AboutLeft = () => {
    return (
        <div className="sm-container">
            <Description />
            <Skills />
        </div>
    )
}
