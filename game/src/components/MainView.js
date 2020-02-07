import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getInit } from "../store/actions/index.js";
import Description from './Description';
import Controls from './Controls';
import Map from './Map';
import './component-css/MainView.css';


    

export function MainView({gameData, getInit}){

    useEffect((props) => {
        getInit();
        }, [getInit]);
        
        console.log("GAMEDATA!!!!!!!", gameData)
    return(
        <>
        <div className="header">
        <h1 className="maptitle">ADVENTURE</h1>
        </div>
        <div className = "outer-box">
            <div className="left-panel">
                <Map />
            </div>
            <div className="right-panel">
                <Description />
                <Controls />
            </div>
        </div>
        </>
    )
}
const mapStateToProps = state => {
    return {
        gameData: state,
        error: ""
    }
}
export default connect (mapStateToProps, {getInit})(MainView)