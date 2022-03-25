import React from "react";
import "../Diseño/Card.css"
import Favorites from "./Favorites";
import "../Diseño/Home.css"
import { Link } from "react-router-dom";

export default function Card({id, name, img, weight_min, weight_max, height_min, height_max, life_span, temperaments, handleRemove}){
    
    return(
        <div key={id} className="card">
            {typeof id === "string"? 
            <button name="id" value={id} onClick={e => handleRemove(e)} className="remove">❌</button> : ""}
            <Favorites id={id} name={name} img={img} />
            <h2 className="name">{name}</h2>
            <Link to={`/home/${id}`} key={id} className="nodecoration">
            <img src={img} alt="img not fount" width="250px" height="150px"/>
            </Link>
            <h5>Min weight: {weight_min} kg</h5>
            <h5>Max weight: {weight_max} kg</h5>
            <h5>{temperaments? `Temperaments: ${temperaments}` : "No registers from this dog temperament"}</h5>
            <h5>{height_min?  `Min height: ${height_min}` : ""}</h5>
            <h5>{height_max?  `Max height: ${height_max}` : ""}</h5>
            <h5>{life_span?  `Life span: ${life_span}` : ""}</h5>
        </div>
    )
}