import axios from "axios";

export const FETCH_DATA_START = "FETCH_DATA_START"
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS"
export const FETCH_DATA_FAILURE = "FETCH_TRAILS_FAILURE"

export const getData = () => dispatch => {
    dispatch({ type: FETCH_DATA_START})
    axios.get("https://cs25-lock-industry-dev.herokuapp.com/api/adv/map")
        .then(response => {
            dispatch({ type: FETCH_DATA_SUCCESS, payload: response})
            console.log(response)
        })
        .catch(err => {
            dispatch({ type: FETCH_DATA_FAILURE, payload: `${err}` })
            console.log("cool story bro", err)
        })

}