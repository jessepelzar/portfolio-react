import React from 'react'
import { Skill } from './Skill'
import logojs from '../../../../assets/logo-js.svg'
import logohtml from '../../../../assets/logo-html.svg'
import logocss from '../../../../assets/logo-css.svg'
import logopy from '../../../../assets/logo-python.svg'
import logoc from '../../../../assets/logo-c.svg'
import logocpp from '../../../../assets/logo-cpp.svg'

export const Skills = () => {
    return (
        <div className="sm-cell-container spacing-top-lg">
            <p className="text-md-caladea-bold">Proficient in:</p>
            <div className="skills-list spacing-top-sm">
                <Skill img={logojs}></Skill>
                <Skill img={logohtml}></Skill>
                <Skill img={logocss}></Skill>
                <Skill img={logopy}></Skill>
                <Skill img={logoc}></Skill>
                <Skill img={logocpp}></Skill>
            </div>
        </div>
    )
}
