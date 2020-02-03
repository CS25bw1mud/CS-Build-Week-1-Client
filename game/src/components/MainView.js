import React, { useState, useEffect } from "react";
import Description from './Description';
import Controls from './Controls';
import Map from './Map';
import './component-css/MainView.css';


export default function MainView(){
    return(
        <>
        <div class="header">
        <h1>Welcome to Lock Enterprises</h1>
        <p>We make games, on the internet</p>
        </div>
        <div class = "outer-box">
            <div class="left-panel">
                <Map />
            </div>
            <div class="right-panel">
                <Description />
                <Controls />
            </div>
        </div>
        </>
    )
}