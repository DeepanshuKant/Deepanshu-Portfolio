import "./About.css"
import React from 'react'
import CountUp from 'react-countup'

function About() {

    return (
        <>
            <div className="parent__about">
                <div id="about">
                    <div className="heading">
                        <p>Hello There</p>
                        <h1>I'm Deepanshu Kant</h1>
                    </div>
                    <div className="about__content">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero unde mollitia, ratione similique, incidunt illum eaque et rem facere eos alias accusantium! Aut labore vitae,
                            at dolore deleniti veritatis exercitationem magnam asperiores nulla laboriosam, voluptas, odit soluta! Corrupti ducimus iste,
                            repellat eos in magnam culpa explicabo qui? Cum, praesentium eos.</p>
                    </div>

                    <div className="about__boxes">
                        <div className="box">
                            <h1>
                                <CountUp start={0} end={5} duration={1} />
                            </h1>
                            <p>Awards Received</p>
                        </div>
                        <div className="box">
                            <h1><CountUp start={0} end={7} duration={1} /></h1>
                            <p>Projects Completed</p>
                        </div>
                        <div className="box">
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