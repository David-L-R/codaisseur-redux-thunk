import { GET_POSTS, START_LOADING } from './types'
import axios from 'axios'
import { LIMIT } from './variables'
import { API_URL_BASE } from '../../config'

export const getPosts = (posts) => {
    return {
        type: GET_POSTS,
        payload: [...posts],
    }
}

export const startLoading = () => {
    return {
        type: START_LOADING,
    }
}

export const fetchNext5Posts = async (dispatch, getState) => {
    try {
        const result = await axios.get(`${API_URL_BASE}/posts`, {
            params: {
                limit: LIMIT,
                offset: getState().feed.posts.length,
            },
        })
        dispatch(getPosts(result.data.rows))
    } catch (err) {
        console.log(err)
    }
}
