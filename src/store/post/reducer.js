import { GET_COMMENTS, GET_ONE_POST, START_LOADING } from './types'

const initialState = {
    loading: false,
    post: null,
    comments: [],
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case START_LOADING:
            return {
                ...state,
                loading: true,
            }
        case GET_ONE_POST:
            return {
                ...state,
                loading: false,
                post: { ...action.payload },
            }

        case GET_COMMENTS:
            return {
                ...state,
                loading: false,
                comments: [...action.payload],
            }
        default: {
            return state
        }
    }
}
