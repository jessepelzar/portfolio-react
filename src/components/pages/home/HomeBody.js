import React from 'react'

export const HomeBody = () => {
    const bottomTextStyle = {
        color: "#9f9f9f",
        marginTop: '27px'
    }
    return (
        <div className="home-body-container vertical-center">
            <p className="text-lg-caladea">New york based software engineer specializing in creating digital prodcuts.</p>
            <p className="text-lg-montserrat" style={bottomTextStyle}>Currently seeking opportunities</p>
        </div>
    )
}
