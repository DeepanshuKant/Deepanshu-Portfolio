
import { GET_ALL_WORKS } from './works.type'

const initialState = {
    works: []
}

const worksReducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_ALL_WORKS:
            return {
                ...state,
                works: action.payload
            }
        default:
            return {
                ...state
            }
    }
}


export default worksReducer;