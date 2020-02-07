import React, { useEffect, useState} from "react";
import { connect } from "react-redux";
import { getGameInfo } from "../store/actions/index.js";
import { axiosWithAuth } from '../utils/axiosWithAuth';
function Controls(props){
// export default function Controls(){
        const [tracker, setTracker] = useState({})
        useEffect(() => {
            getGameInfo();
            }, [getGameInfo]);
            console.log("Controls", props.gameData)
    const movePlayer = (input) => {
        axiosWithAuth()
        .post('https://cs25-lock-industry-dev.herokuapp.com/api/adv/move/', input)
        .then(res => {
            console.log('dir response', res)
            setTracker(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    return(
        <div>
            <button onClick={() => movePlayer({"direction": "n"})}>North</button>
            <button onClick={() => props.gameData({"direction": "s"})}>South</button>
            <button onClick={() => props.gameData({"direction": "w"})}>West</button>
            <button onClick={() => props.gameData({"direction": "e"})}>East</button>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        gameData: state,
        error: ""
    }
}
export default connect (mapStateToProps, {getGameInfo})(Controls)
