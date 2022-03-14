import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../Actions";
import "../Diseño/SearchBar.css"

export default function SearchBar(){
    
    const dispatch = useDispatch()
    const [buscado, setBuscado] = useState("")

    function handleBuscado(e){
        e.preventDefault();
        setBuscado(e.target.value)
    } 

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getByName(buscado))
        setBuscado("")
    }
    
    return(
        <div className="search">
            <input value={buscado} placeholder="Search by breed" type="text" onChange={e => {handleBuscado(e)}}/>
            <button type="submit" onClick={e => {handleSubmit(e)}}>Search</button>
        </div>
    )
}