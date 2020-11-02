import React from 'react'
import { Experience } from './Experience'

export const Experiences = () => {
    const text1 = "Graduated with a masters in Computer & Electrical Engineering. Worked on projects ranging from low to high level programming."
    const text2 = "As a software engineer, I developed a web-based, cross-platform software for a laser engraver as well as an Open-CV object detection system for UAVs."
    const text3 = "I started Loomx with a passion for engineering and visual design. Loomx develops interactive LED systems with the intentions on developing additional consumer products.";
    return (
        <div className="sm-container">
            <Experience label={"Binghamton University"} date={"2019 - 2020"} text={text1}/>
            <Experience label={"Advanced Photonic Sciences"} date={"2019 - 2020"} text={text2}/>
            <Experience label={"Loomx LLC."} date={"2017 - 2020"} text={text3}/>
            {/* <Experience label={"Binghamton University"} date={"2019 - 2020"} text={text1}/> */}
        </div>
    )
}
