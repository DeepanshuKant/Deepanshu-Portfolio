import { combineReducers } from 'redux'
import worksReducer from './works/works.reducer'

const rootReducer = combineReducers(
    {
        worksReducer,
    }
)

export default rootReducer;