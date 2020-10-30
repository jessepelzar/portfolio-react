import React from 'react'

export const Skill = ({img}) => {
    return (
        <div className="skill-cell text-right">
            {/* <span>{txt}</span> */}
            <img src={img} alt=""/>
        </div>
    )
}
