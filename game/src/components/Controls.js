import React, { useEffect, useState} from "react";
import { connect } from "react-redux";
import { getGameInfo } from "../store/actions/index.js";
import { axiosWithAuth } from '../utils/axiosWithAuth';

function Controls({gameData, getGameInfo}){
// export default function Controls(){
        // const [state, setState] = useState({})



    const movePlayer = (direction) => {
        
        useEffect(() => {
            getGameInfo(direction);
            }, [getGameInfo]);
            console.log("Controls", gameData)
    }
 
    // const movePlayer = (direction) => {
    //         axiosWithAuth()
    //         .post('https://cs25-lock-industry-dev.herokuapp.com/api/adv/move/', direction)
    //         .then (res => {
    //             console.log('setstate', res)
    //             setState(res.data)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }

    return(
        <div>
            <div
                onClick={() => movePlayer( "n")}    
            ><p>Press <strong>UP</strong> or <strong>N</strong> to go North.</p></div>
            <p>Press <strong>LEFT</strong> or <strong>W</strong> to go West.</p>
            <p>Press <strong>RIGHT</strong> or <strong>E</strong> to go East.</p>
            <p>Press <strong>DOWN</strong> or <strong>S</strong> to go South.</p>
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