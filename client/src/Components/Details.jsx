import React from "react";

export default function ({id, name, img, temperaments, weight_min, weight_max, height_min, height_max, life_span}){

    return(
        <div key={id}>
            <h1>{name}</h1>
            <img src={img} alt="NOT FOUND" width="600px" height="350px"/>
            <p>Temperaments: {temperaments}</p>
            <p>Min weight: {weight_min}</p>
            <p>Max weight: {weight_max}</p>
            <p>Min height: {height_min}</p>
            <p>Max height: {height_max}</p>
            <p>Life span: {life_span}</p>
        </div>
    )
}