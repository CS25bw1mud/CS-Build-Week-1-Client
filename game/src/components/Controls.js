import React, { useEffect, useState} from "react";
import { connect } from "react-redux";
import { getGameInfo } from "../store/actions/index.js";
import { axiosWithAuth } from '../utils/axiosWithAuth';

function Controls({getGameData, initData}){
// export default function Controls(){
    const [tracker, setTracker] = useState({})
    useEffect(() => {
        getGameInfo();
        }, [getGameInfo]);
        console.log("Controls", initData)

    const movePlayer = (input) => {
        axiosWithAuth()
        .post('https://cs25-lock-industry-dev.herokuapp.com/api/adv/move/', JSON.parse(JSON.stringify(input)))
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
            <button onClick={() => movePlayer({"direction": "s"})}>South</button>
            <button onClick={() => movePlayer({"direction": "w"})}>West</button>
            <button onClick={() => movePlayer({"direction": "e"})}>East</button>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        initData: state.initData,
        error: ""
    }
}
export default connect (mapStateToProps, {getGameInfo})(Controls)
