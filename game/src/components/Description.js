import React from "react";
import './component-css/Description.css';
import { connect } from "react-redux";
import { getGameInfo, getInit } from "../store/actions/index.js";

// export default function Description({ getGameInfo, gameData}){
function Description({getGameInfo, gameData, initInfo}){

    return(
        <div className="desc">
            <h1 className="room">{initInfo.title}</h1>
            <h2 className="currentroom">Current Room</h2>
            <p className="details">{initInfo.description}</p>
            <p>Players with you: {initInfo.players}</p>
            <p> You cannot move that way!: {} </p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        gameData: state.data,
        initInfo: state.initInfo,
        error: ""
    }
}

export default connect (mapStateToProps, {getGameInfo, getInit})(Description)