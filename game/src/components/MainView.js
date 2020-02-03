import React, { useState, useEffect } from "react";
import Description from './Description';
import Controls from './Controls';
import Map from './Map';


export default function MainView{
    return(
        <h1>Welcome to Lock Enterprises</h1>
        <p>We make games, on the internet</p>
        <div class = "outerBox">
        <div class="leftpanel">
            <Map />
        </div>
        <div class="rightpanel">
            <Description />
            <Controls />
        </div>
        </div>
    )
}