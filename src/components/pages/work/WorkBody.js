import React from 'react'
import { ProjectCell } from './ProjectCell'

export const WorkBody = () => {
    const info = {
        cell_1:{
            title: `Flappy Bird RL "AI"`,
            text: "This project resembles the classic Flappy Bird mobile game but with the additionn of Reinforcement Learning to develop a policy for an agent to play the game autonomously.",
            link: "https://github.com/jessepelzar/Flappy_Bird_RL"
        },
        cell_2:{
            title: "Axis Project",
            text: "This project is a custom laser engraver software with a canvas to create designs which could then be sent to the device through a serial connection.",
            link: "https://github.com/jessepelzar/laserEngraver"
        },
        cell_3:{
            title: "Instascraper",
            text: "This is a hashtag and location based data scraper for obtaining Instagram acount data associeted with a hashtag or location. This project is built using the python framework Django.",
            link: "https://github.com/jessepelzar/instascraper"
        },
        cell_4:{
            title: "THIS",
            text: "The website you're currently on was built using React.js and the source code to this site is uploaded to my Github so feel free to check it out!",
            link: "https://github.com/jessepelzar/portfolio-react"
        }
    }
    return (
        <div className="body-container">
            <div className="lg-container">
                <div className="just-flex-between spacing-top-md spacing-bottom-md stack-for-mobile">
                    <div className="sm-container">
                        <ProjectCell title={info.cell_1.title} txt={info.cell_1.text} link={info.cell_1.link}/>        
                    </div>
                    <div className="sm-container">
                        <ProjectCell title={info.cell_2.title} txt={info.cell_2.text} link={info.cell_2.link}/>
                    </div>
                </div>
                <div className="just-flex-between spacing-top-md spacing-bottom-md stack-for-mobile">
                    <div className="sm-container">
                        <ProjectCell title={info.cell_3.title} txt={info.cell_3.text} link={info.cell_3.link}/>        
                    </div>
                    <div className="sm-container">
                        <ProjectCell title={info.cell_4.title} txt={info.cell_4.text} link={info.cell_4.link}/>        
                    </div>
                </div>
            </div>
        </div>
    )
}
