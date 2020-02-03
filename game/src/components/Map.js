import React from "react";
import './component-css/Map.css';

export default function Map(){
    return(
        <div class="map-border">
            <h1 class="label">Map</h1>
            <div class="row">
                <div class="box hidden"></div>
                <div class="box hidden"></div>
                <div class="box hidden"></div>
                <div class="box hidden"></div>
                <div class="box hidden"></div>
            </div>
            <div class="row">
                <div class="box hidden"></div>
                <div class="box hidden"></div>
                <div class="box hidden"></div>
                <div class="box hidden"></div>
                <div class="box hidden"></div>
            </div>
            <div class="row">
                <div class="box hidden"></div>
                <div class="box visible"></div>
                <div class="box active"></div>
                <div class="box hidden"></div>
                <div class="box hidden"></div>
            </div>
            <div class="row">
                <div class="box hidden"></div>
                <div class="box visible"></div>
                <div class="box hidden"></div>
                <div class="box hidden"></div>
                <div class="box hidden"></div>
            </div>
            <div class="row">
                <div class="box hidden"></div>
                <div class="box visible"></div>
                <div class="box visible"></div>
                <div class="box visible"></div>
                <div class="box visible"></div>
            </div>
        </div>
    )
}