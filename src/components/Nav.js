import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AboutBody } from './pages/about/AboutBody'
import { HomeBody } from './pages/home/HomeBody'

export const Nav = () => {
    return (
        <>
                <div className="navbar header">
                    <a href="/about" className="text-lg-rmo">ABOUT</a>
                    <a href="/" className="text-lg-rmo">JESSE PELZAR</a>
                    <a href="/work" className="text-lg-rmo">WORK</a>
                </div>
                <div className="navbar footer">
                    <a href="https://github.com/jessepelzar" target="_blank" rel="noopener noreferrer" className="text-lg-rmo">GITHUB</a>
                    <a href="/contact" className="text-lg-rmo">CONTACT ME</a>
                </div>
        </>
    )
}
