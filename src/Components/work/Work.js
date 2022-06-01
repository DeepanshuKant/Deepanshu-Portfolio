import './Work.css'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllWorks } from '../redux/reducers/works/works.action'

function Work() {
    const dispatch = useDispatch();

    const [data, setData] = useState([]);
    const reduxStore = useSelector((store) => store.worksReducer);

    useEffect(() => {
        reduxStore.works && setData(reduxStore.works)
        console.log(data)
    }, [reduxStore.works]);


    return (
        <>
            <div id="work">
                <div className="work__parent">
                    <div className="work__heading">
                        <p>Recent Works</p>
                        <h1>I love what I do,<br /> check out some my latest works </h1>
                    </div>
                    <div className="work__parent__box">
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