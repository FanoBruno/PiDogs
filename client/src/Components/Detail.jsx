import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams} from "react-router-dom"
import { getById, removeDetails } from "../Actions";
import Details from "./Details";
import "../Diseño/Detail.css"
import { Link } from "react-router-dom";

export default function Detail(){
    
    const dispatch = useDispatch()
    const details = useSelector((state) => state.details)
    const {id} = useParams()
    
    function handleState(){
        dispatch(removeDetails())
    }

    useEffect(() => {
        dispatch(getById(id))
    }, [dispatch, id])
    
    return(
        details.map(e => {
            if(typeof e.id === "string"){
                if(e.temperaments.length > 1){
                    var temps = e.temperaments.map(e => e.name).toString()
                    return(
                        <div className="detail">
                            <div className="navegation">
                                <Link to="/home" className="navegationdos" onClick={() => handleState()}>Home</Link>
                            </div>
                       <Details 
                    key={e?.id}
                    name={e?.name}
                    img={e?.img}
                    temperaments={temps}
                    weight_min={e?.weight_min}
                    weight_max={e?.weight_max}
                    height_min={e?.height_min}
                    height_max={e?.height_max}
                    life_span={`${e?.life_span} years`}
                    /> 
                    </div>
                    )
                    
                } else {
                    return(
                        <div className="detail">
                            <div className="navegation">
                                <Link to="/home" className="navegationdos" onClick={() => handleState()}>Home</Link>
                            </div>
                        <Details 
                            key={e?.id}
                            name={e?.name}
                            img={e?.img}
                            temperaments={e?.temperaments[0].name}
                            weight_min={e?.weight_min}
                            weight_max={e?.weight_max}
                            height_min={e?.height_min}
                            height_max={e?.height_max}
                            life_span={`${e?.life_span} years`}
                            />
                            </div>
                    )
                }
            }
            return(
                <div className="detail" key={e?.id}>
                    <div className="navegation">
                        <Link to="/home" className="navegationdos" onClick={() => handleState()}>Home</Link>
                     </div>
                <Details 
                    key={e?.id}
                    name={e?.name}
                    img={e?.img}
                    temperaments={e?.temperaments}
                    weight_min={e?.weight_min}
                    weight_max={e?.weight_max}
                    height_min={e?.height_min}
                    height_max={e?.height_max}
                    life_span={`${e?.life_span}`}
                    />
                    </div>
            )
        })
    )
       
}