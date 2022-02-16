import { GET_POSTS } from './types'

const initialState = {
    loading: false,
    posts: [],
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS: {
            return {
                ...state,
                loading: false,
                posts: [],
            }
        }
        default: {
            return state
        }
    }
}
