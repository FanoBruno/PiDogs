import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../Actions";
import "../Diseño/Favorite.css"
import { Link } from "react-router-dom";


export default function Favorite(){
    const dispatch = useDispatch()
    const stateFavorites = useSelector((state) => state.favorites)
    

    function handleDelete(e){
        dispatch(removeFavorite(e.id))
        alert("Breed eliminated")
    }
    
    

    return(
        <div className="fondoFav">
            <div className="navegation">
                <Link to="/home" className="navegationdos">Home</Link>
            </div>

        
        <h1>HERE ARE YOUR FAVOURITES DOGS</h1>
        {   
            stateFavorites?.map(e => {
                return(
                    <div key={e.id} >
                    <h2>{e.name}</h2>
                    <img src={e.img} alt="not found" width="250px" height="150px"/>
                    <div>
                    <button onClick={() => {handleDelete(e)}}>ELIMINATE FROM FAVOURITES</button>
                    </div>

                    </div>

                )
            })
        }
        </div>
    )            
}