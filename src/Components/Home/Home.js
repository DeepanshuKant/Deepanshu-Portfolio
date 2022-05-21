import './Home.css'
import { IoIosArrowDown } from 'react-icons/io'

function Home() {
    return (
        <>
            <div id="home" >
                {/* <iframe src='https://my.spline.design/untitled-46ba5896a587b67eef94c75065136c5a/' frameborder='0' width='50%' height='50%'></iframe> */}
                <div className="home__parent">
                    <div className="home__text">
                        <p className="home__para">Hi! My name is Deepanshu Kant</p>
                        <h1 className="home__heading">I am a Full Stack Web Developer<br /> and Software Engineer.</h1>
                    </div>
                    <div className="home__buttons">
                        <button>
                            Projects
                        </button>
                        <button>
                            Download Resume
                        </button>
                    </div>

                    <div className="home__scroll">
                        <div className="icon" style={{ color: "#39b54a", marginLeft: "80px" }}><IoIosArrowDown /></div>
                        <div className="scroll__text" style={{ color: "white" }}>Scroll Down</div>
                    </div>
                </div>
            </div>


        </>
    )
}


export default Home