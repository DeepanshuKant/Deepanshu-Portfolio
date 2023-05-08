import './Home.css'
import { IoIosArrowDown } from 'react-icons/io'
import { useEffect } from 'react'
import { Link } from 'react-scroll'

import { motion } from 'framer-motion'

import Aos from 'aos'
import "aos/dist/aos.css"

function Home() {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    })
    return (
        <>
            <div id="home" >
                <div className="home__parent" >
                    <div className="home__text" >
                        <motion.p className="home__para"
                            initial={{
                                y: 100,
                                opacity: 0
                            }}

                            animate={{
                                y: 0,
                                opacity: 1,
                                transition: {
                                    delay: 0.5
                                }
                            }} >
                            Hi! I'm Deepanshu Kant
                        </motion.p>

                        <motion.h1 className="home__heading"
                            initial={{
                                x: 200,
                                opacity: 0
                            }}
                            animate={{
                                x: 0,
                                opacity: 1
                            }}
                        >A Full Stack Web Developer<br /> and Software Engineer.</motion.h1>
                    </div>

                    <div className="home__buttons" data-aos="fade-up">
                        <Link to='work' spy={true} smooth={true} offset={50} duration={500}>
                            Works
                        </Link>

                        {/* <Link to='https://drive.google.com/file/d/15dkXkSqaTUCFdvn3FptzAamOO-RV0HsO/view?usp=sharing' target='_blank' > Download Resume</Link> */}
                        <a href="https://drive.google.com/u/0/uc?id=1OAvx3qlR9-TNOJSlItzalex9RE03lxLT&export=download"
                            style={{
                                backgroundColor: "#39b54a",
                                color: "#111111",
                                border: "1px solid #39b54a",
                            }}

                        >Download Resume</a>
                    </div>

                    <div className="home__scroll" >
                        <div className="icon" style={{ color: "#39b54a", margin: "none" }}><IoIosArrowDown /></div>
                        <div className="scroll__text" style={{ color: "white" }}> <Link to='about' spy={true} smooth={true} offset={1} duration={500}> Scroll Down</Link></div>
                    </div>
                </div>
            </div>


        </>
    )
}


export default Home