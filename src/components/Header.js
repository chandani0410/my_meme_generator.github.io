import React from "react";
import troll_face from "../Images/troll_face.png"
export default function Head(){
    return(
        <header className="header">
            <img src={troll_face} alt='Page_logo' className="header-image"/>
            <h2 className="header-title">Meme Generator</h2>
            <h4 className="header-subtitle">React Course - Project 3</h4>
        </header>
    )
}