import "./About.css"
import React from 'react'
import CountUp, { useCountUp } from 'react-countup';



function About() {

    return (
        <>
            <CountUp start={0} end={4} duration={1}>

            </CountUp>
            <button>click me</button>
        </>
    )

}

export default About