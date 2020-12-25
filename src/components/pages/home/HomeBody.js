import React from 'react'
import Test from '../../Test'
import { Banner } from './Banner'

export const HomeBody = () => {

    return (
        <div className="static-container text-centered">
           
            {/* <Test /> */}
            <div className="static-inner vertical-center">
                <Banner />
                
                <p className="text-lg-caladea-bold">New York-based software engineer specializing in web-driven technologies</p>
                <p className="text-lg-montserrat text-dark spacing-top-sm">Software Engineer at Resideo</p>
            </div>
        </div>
        
    )
}
