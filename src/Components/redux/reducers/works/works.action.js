import { GET_ALL_WORKS } from './/works.type'
import axios from 'axios'


export const getAllWorks = () => async (dispatch) => {

    try {
        const worksList = await axios(
            {
                method: "GET",
                url: "https://portfolio-site-backend-1acu.onrender.com/works"
            }
        )
        return dispatch({ type: GET_ALL_WORKS, payload: worksList.data })

    } catch (error) {

        return dispatch({ type: "ERROR", payload: error })
    }

}