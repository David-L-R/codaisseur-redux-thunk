import { SET_TOKEN } from './types'

const initialState = {
    me: null,
    accessToken: null,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        default: {
            return state
        }
    }
}
