import './Work.css'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Aos from 'aos'
import "aos/dist/aos.css"
function Work() {

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
                    <div className="work__parent__box" data-aos="fade-up">
                        {data.map((works) =>
                            <div className="work__box" key={works._id} >
                                <p className='work__name'>{works.name}</p>
                                <a href={works.url} target="_blank" >Visit</a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Work;