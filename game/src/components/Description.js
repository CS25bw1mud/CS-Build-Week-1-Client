import React from "react";
import './component-css/Description.css';
import { connect } from "react-redux";
import { getGameInfo } from "../store/actions/index.js";

// export default function Description({ getGameInfo, gameData}){
function Description({getGameInfo, gameData}){

    return(
        <div className="desc">
            <h1 className="room">{gameData.data.title}</h1>
            <h2 className="currentroom">Current Room</h2>
    <p className="details">{}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        gameData: state,
        error: ""
    }
}

export default connect (mapStateToProps, {getGameInfo})(Description)