import { GET_POSTS, START_LOADING } from './types'

const initialState = {
    loading: false,
    posts: [],
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case START_LOADING:
            return {
                ...state,
                loading: true,
            }
        case GET_POSTS:
            return {
                ...state,
                loading: false,
                posts: [...state.posts, ...action.payload],
            }

        default: {
            return state
        }
    }
}
