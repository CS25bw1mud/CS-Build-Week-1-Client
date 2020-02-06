import React, { useState, useEffect } from "react";
import Description from './Description';
import Controls from './Controls';
import Map from './Map';
import './component-css/MainView.css';


export default function MainView(){
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