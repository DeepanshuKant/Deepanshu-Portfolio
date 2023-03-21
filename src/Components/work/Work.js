import './Work.css'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import Aos from 'aos'
import "aos/dist/aos.css"
function Work() {

    //create a UseInView
    const { ref, inView } = useInView({
        threshold: 0.5,
    })

    const [data, setData] = useState([]);
    const reduxStore = useSelector((store) => store.worksReducer);

    useEffect(() => {
        reduxStore.works && setData(reduxStore.works);
        // console.log(data)
        Aos.init({ duration: 1000 })
    });


    return (
        <>
            <div id="work">
                <div className="work__parent">
                    <div className="work__heading" data-aos="fade-up">
                        <p>Recent Works</p>
                        <h1>I love what I do,<br /> check out some my latest works </h1>
                    </div>

                    <div className="work__parent__box"  >
                        {data.map((works) =>
                            <motion.div className="work__box" key={works._id} ref={ref}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                                transition={{ duration: .7, type: "spring", bounce: 0.5 }}
                            >
                                <p className='work__name'>{works.name}</p>
                                <a href={works.url} target="_blank" >Visit</a>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Work;