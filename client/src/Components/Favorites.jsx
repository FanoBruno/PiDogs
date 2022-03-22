import React from "react";
import {useDispatch} from "react-redux"
import { addFavorite } from "../Actions";
import "../Diseño/Card.css"

export default function Favorites({id, name, img}) {
   var dispatch = useDispatch()

    function handleClick(){
        dispatch(addFavorite({id, name, img}))
    }

    return (
        <div>
        <button className="fav" onClick={() => handleClick()}>⭐</button>
        </div>
    )
}



