import "./About.css"
import React from 'react'
import CountUp from 'react-countup'

import { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

function About() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    })
    return (
        <>
            <div className="parent__about">
                <div id="about" >
                    <div className="heading" data-aos="fade-up">
                        <p>Hello There</p>
                        <h1>I'm Deepanshu Kant</h1>
                    </div>
                    <div className="about__content" data-aos="fade-up">
                        <p>
                            I am an undergraduate student at Guru Gobind Singh Indraprastha University pursuing Bachelors of
                            Technology in Information Technology from Guru Tegh Bahadur Institute of Technology (GTBIT).
                            I have that enthusiasm to learn new technologies and to create new things. I am a self-motivated and
                            self-driven individual who is always looking for new challenges and new ways to solve problems. I am proficient
                            in many technologies with over 1 year of experience in Software Development.
                        </p>
                    </div>

                    <div className="about__boxes">
                        <div className="box" data-aos="fade-up">
                            <h1>
                                <CountUp start={0} end={5} duration={1} />
                            </h1>
                            <p>Awards Received</p>
                        </div>
                        <div className="box" data-aos="fade-up">
                            <h1><CountUp start={0} end={7} duration={1} /></h1>
                            <p>Projects Completed</p>
                        </div>
                        {/* <div className="box" data-aos="fade-up">
                            <h1>
                                <CountUp start={0} end={60} duration={1} />
                            </h1>
                            <p>Happy Clients</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )

}

export default About