import "./Skills.css"

import { useEffect } from "react"

import Aos from 'aos'
import "aos/dist/aos.css"
function Skills() {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    })


    return (
        <>
            <div className="parent__service">
                <div id="skill">
                    <div className="service__heading" data-aos="fade-up">
                        <p>Tech Stack</p>
                        <h1>Technlogies that I use</h1>
                    </div>
                    <div className="service__parent__box">
                        <div className="service__box" data-aos="fade-up">
                            <p>Web Development</p>
                            <h1>Development of static and dynamic websites of your like. With highly optimized and deployed on a perfect domain. And bla bla bla Bla  </h1>
                        </div>
                        <div className="service__box" data-aos="fade-up">
                            <p>Web Design</p>
                            <h1>Designing of interactive and creative webpages for the website in industrial leading software. Provided with high quality files and three times editable.</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills;