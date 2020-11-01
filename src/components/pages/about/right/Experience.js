import React from 'react'

export const Experience = ({label, text, date}) => {
    return (
        <>
        <div className="just-flex-between">
            <p className="text-lg-montserrat-bold spacing-bottom-xsm">{label}</p>
            <p className="text-lg-montserrat-bold text-nowrap">{date}</p>
        </div>
        <p className="text-sm-montserrat-bold text-dark spacing-bottom-sm">{text}</p>
        </>
    )
}
