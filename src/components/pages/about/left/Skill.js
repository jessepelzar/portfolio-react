import React from 'react'

export const Skill = ({img}) => {
    return (
        <div className="skill-cell text-right">
            <img style={{height: '100%'}} src={img} alt=""/>
        </div>
    )
}
