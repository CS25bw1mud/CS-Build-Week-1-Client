import React from "react";
import './component-css/Description.css';

export default function Description(){
    return(
        <div className="desc">
            <h1 className="room">Palace Gates</h1>
            <h2 className="currentroom">Current Room</h2>
            <p className="details">You are standing in front of a very old, very ornate palace. The <strong>King</strong> and <strong>Queen</strong> live here with their socially stunted son, <strong>Prince Derek</strong>.</p>
        </div>
    )
}