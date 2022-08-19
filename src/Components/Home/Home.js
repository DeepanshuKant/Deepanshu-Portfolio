import './Home.css'
import { IoIosArrowDown } from 'react-icons/io'
import { useEffect } from 'react'
import { Link } from 'react-scroll'

import Aos from 'aos'
import "aos/dist/aos.css"

function Home() {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    })
    return (
        <>
            <div id="home" >
                {/* <iframe src='https://my.spline.design/untitled-46ba5896a587b67eef94c75065136c5a/' frameborder='0' width='50%' height='50%'></iframe> */}
                <div className="home__parent" >
                    <iframe src='https://my.spline.design/roomrelaxingcopy-37f5f6f09c186a3c2cff8257d9633d2a/' frameborder='0' width='100%' height='100%'></iframe>
                    <div className="home__text" data-aos="fade-up">
                        <p className="home__para">Hi! I'm Deepanshu Kant</p>
                        <h1 className="home__heading">A Full Stack Web Developer<br /> and Software Engineer.</h1>
                    </div>
                    <div className="home__buttons" data-aos="fade-up">
                        <Link to='work' spy={true} smooth={true} offset={50} duration={500}>
                            Works
                        </Link>

                        {/* <Link to='https://drive.google.com/file/d/15dkXkSqaTUCFdvn3FptzAamOO-RV0HsO/view?usp=sharing' target='_blank' > Download Resume</Link> */}
                        <a href="https://drive.google.com/u/0/uc?id=1q66yhl5mZaaVykarYl4dBMbletrG8AKd&export=download" >Download Resume</a>
                    </div>

                    <div className="home__scroll" >
                        <div className="icon" style={{ color: "#39b54a", marginLeft: "80px" }}><IoIosArrowDown /></div>
                        <div className="scroll__text" style={{ color: "white" }}> <Link to='about' spy={true} smooth={true} offset={1} duration={500}> Scroll Down</Link></div>
                    </div>
                </div>
            </div>


        </>
    )
}


export default Home