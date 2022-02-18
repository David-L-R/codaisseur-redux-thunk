import { GET_ONE_POST, START_LOADING, GET_COMMENTS } from './types'
import axios from 'axios'
import { API_URL_BASE } from '../../config'

export const startLoading = () => {
    return {
        type: START_LOADING,
    }
}

const getPost = (post) => ({
    type: GET_ONE_POST,
    payload: post,
})

const getComments = (comments) => ({
    type: GET_COMMENTS,
    payload: comments,
})

export const getPostById = (id) => {
    return async (dispatch) => {
        dispatch(startLoading)
        try {
            const result = await axios.get(`${API_URL_BASE}/posts/${id}`)
            dispatch(getPost(result.data))
        } catch (err) {
            console.log(err)
        }
    }
}

export const getCommentById = (id) => {
    return async (dispatch) => {
        dispatch(startLoading)
        try {
            const result = await axios.get(
                `${API_URL_BASE}/posts/${id}/comments`
            )
            dispatch(getComments(result.data.rows))
        } catch (err) {
            console.log(err)
        }
    }
}
