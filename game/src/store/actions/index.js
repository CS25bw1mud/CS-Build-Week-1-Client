import axios from "axios";
import { axiosWithAuth } from '../../utils/axiosWithAuth.js';
export const FETCH_DATA_START = "FETCH_DATA_START"
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS"
export const FETCH_DATA_FAILURE = "FETCH_TRAILS_FAILURE"

export const getData = () => {
    return (dispatch) => {
    dispatch({ type: FETCH_DATA_START})
    axios.get("https://cs25-lock-industry-dev.herokuapp.com/api/adv/map")
        .then(response => {
            // console.log(Object.values(response.data))
            const roomData = Object.values(response.data)
            dispatch({ type: FETCH_DATA_SUCCESS, payload: roomData})
        })
        .catch(err => {
            dispatch({ type: FETCH_DATA_FAILURE, payload: `${err}` })
            console.log("cool story bro", err)
        })
    }
}
export const FETCH_GAMEINFO_START = "FETCH_GAMEINFO_START"
export const FETCH_GAMEINFO_SUCCESS = "FETCH_GAMEINFO_SUCCESS"
export const FETCH_GAMEINFO_FAILURE = "FETCH_GAMEINFO_FAILURE"

export const getGameInfo = (creds) => dispatch => {
    dispatch({type: FETCH_GAMEINFO_START})
    axiosWithAuth().post("https://cs25-lock-industry-dev.herokuapp.com/api/adv/move/", creds)
        .then(response => {
            console.log(response)
            const gameInfo = response
            dispatch({type: FETCH_GAMEINFO_SUCCESS, payload: gameInfo})
        })
        .catch(err => {
            dispatch({type: FETCH_GAMEINFO_FAILURE, payload: `${err}`})
            console.log("Dude, seriously???", err)
        })
}