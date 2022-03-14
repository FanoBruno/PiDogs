import React from "react";
import {Link} from "react-router-dom"
import "../Diseño/LandingPage.css"

export default function LandingPage(){
    return(
        
        <div className="conteiner">
        <div className="landing">
            <Link to="/home">
                <button className="button">Show me the puppys</button>            
            </Link>
        </div>
        </div>
    )
}