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
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero unde mollitia, ratione similique, incidunt illum eaque et rem facere eos alias accusantium! Aut labore vitae,
                            at dolore deleniti veritatis exercitationem magnam asperiores nulla laboriosam, voluptas, odit soluta! Corrupti ducimus iste,
                            repellat eos in magnam culpa explicabo qui? Cum, praesentium eos.</p>
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
                        <div className="box" data-aos="fade-up">
                            <h1>
                                <CountUp start={0} end={60} duration={1} />
                            </h1>
                            <p>Happy Clients</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default About