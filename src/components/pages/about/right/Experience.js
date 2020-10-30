import React from 'react'

export const Experience = ({label, text, date}) => {
    return (
        <div className="just-flex-between">
            <div className="xsm-container">
                <p className="text-lg-montserrat-bold spacing-bottom-xsm">{label}</p>
                <p className="text-sm-montserrat-bold text-dark spacing-bottom-sm">{text}</p>
            </div>
            <div>
                <p className="text-lg-montserrat-bold">{date}</p>
            </div>
        </div>
    )
}
