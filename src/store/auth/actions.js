import { SET_TOKEN } from './types'
import axios from 'axios'
import { API_LOGIN, API_URL_BASE } from '../../config'

const setToken = (token) => ({
    action: SET_TOKEN,
    payload: token,
})

export const login = ({ email, password }) => {
    return async (dispatch, getState) => {
        try {
            const result = await axios.post(`${API_URL_BASE}${API_LOGIN}`, {
                email,
                password,
            })
            console.log(result.jwt)
            dispatch(setToken(result.jwt))
        } catch (err) {
            console.log(err)
        }
    }
}
