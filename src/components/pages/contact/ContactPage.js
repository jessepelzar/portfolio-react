import React from 'react'

export const ContactPage = () => {
    const bottomTextStyle = {
        color: "#9f9f9f",
        marginTop: '27px'
    }
    return (
        <div className="body-container vertical-center text-centered">
            <a href="mailto:jessepelzar@gmail.com" target="_blank" rel="noopener noreferrer" className="text-lg-caladea">Jessepelzar@gmail.com</a>
            <p className="text-lg-montserrat" style={bottomTextStyle}>Email Me</p>
        </div>
    )
}
