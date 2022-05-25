import './Home.css'
import { IoIosArrowDown } from 'react-icons/io'
import { useEffect } from 'react'
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
                    <div className="home__text" data-aos="fade-up">
                        <p className="home__para">Hi! I'm Deepanshu Kant</p>
                        <h1 className="home__heading">I am a Full Stack Web Developer<br /> and Software Engineer.</h1>
                    </div>
                    <div className="home__buttons" data-aos="fade-up">
                        <button>
                            Projects
                        </button>
                        <button>
                            Download Resume
                        </button>
                    </div>

                    <div className="home__scroll" >
                        <div className="icon" style={{ color: "#39b54a", marginLeft: "80px" }}><IoIosArrowDown /></div>
                        <div className="scroll__text" style={{ color: "white" }}>Scroll Down</div>
                    </div>
                </div>
            </div>


        </>
    )
}


export default Home