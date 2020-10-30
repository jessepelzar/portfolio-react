import React from 'react'
import { Experience } from './Experience'

export const Experiences = () => {
    const text1 = "Graduated with a masters in Computer & Electrical Engineering. Worked on projects ranging from low to high level programming."
    return (
        <div>
            <Experience label={"Binghamton University"} date={"2019 - 2020"} text={text1}/>
            <Experience label={"Binghamton University"} date={"2019 - 2020"} text={text1}/>
            <Experience label={"Binghamton University"} date={"2019 - 2020"} text={text1}/>
            <Experience label={"Binghamton University"} date={"2019 - 2020"} text={text1}/>
        </div>
    )
}
