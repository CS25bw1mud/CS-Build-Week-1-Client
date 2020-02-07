import React, { useEffect, useState} from "react";
import { connect } from "react-redux";
import { getGameInfo, getInit } from "../store/actions/index.js";
import { axiosWithAuth } from '../utils/axiosWithAuth';


function Controls({getGameData, getInit, initInfo}){
// export default function Controls(){
    const [tracker, setTracker] = useState({})
    useEffect(() => {
        getGameInfo();
        }, [getGameInfo]);
        console.log("Controls", initInfo)

    const movePlayer = (input) => {
        axiosWithAuth()
        .post('https://cs25-lock-industry-dev.herokuapp.com/api/adv/move/', JSON.parse(JSON.stringify(input)))
        .then(res => {
            console.log('dir response', res)
            setTracker(res.data)
            getInit()
        })
        .catch(err => {
            console.log(err)
        })
    }

    return(
        <div class="button-outer">
        <div>
            <button onClick={() => movePlayer({"direction": "n"})}>North</button>
        </div>
        <div>
            <button class="west" onClick={() => movePlayer({"direction": "w"})}>West</button>
            <button class="east" onClick={() => movePlayer({"direction": "e"})}>East</button>
        </div>
        <div>
            <button onClick={() => movePlayer({"direction": "s"})}>South</button>
        </div>
            
        </div>
    )
}
const mapStateToProps = state => {
    return {
        initInfo: state.initInfo,
        error: ""
    }
}
export default connect (mapStateToProps, {getGameInfo, getInit})(Controls)