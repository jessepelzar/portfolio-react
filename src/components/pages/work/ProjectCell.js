import React from 'react'

export const ProjectCell = ({title, txt, link}) => {
    return (
        <div className="project-cell">
            <p className="text-md-caladea-bold">{title}</p>
            <p className="text-sm-montserrat text-dark project-text">{txt}</p>
            <a className="text-md-rmo text-green project-link" href={link} target="_blank" rel="noopener noreferrer">{"VIEW PROJECT >"}</a>
        </div>
    )
}
