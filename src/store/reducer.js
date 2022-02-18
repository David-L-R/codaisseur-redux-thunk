// src/store/reducer.js
import { combineReducers } from 'redux'
import feedSliceReducer from './feed/reducer'
import postSliceReducer from './post/reducer'

const reducer = combineReducers({
    feed: feedSliceReducer,
    post: postSliceReducer,
})

export default reducer
