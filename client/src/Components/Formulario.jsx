import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import { createDog, getTemperamentos } from "../Actions";

import "../Diseño/Formulario.css"

export default function Formulario(){

    const dispatch = useDispatch()
    const temps = useSelector((state) => state.temps)
    
    const [error, setError] = useState({})

    const [inputs, setInputs] = useState({
        name: "",
        weight_min: "",
        weight_max: "",
        height_min: "",
        height_max: "",
        life_span: "",
        temperaments: [],
        img: "http://imagenes-tiernas.net/wp-content/uploads/2013/02/animales-graciosos-perros-3.jpg"
    })

    useEffect(() => {
        dispatch(getTemperamentos())
    }, [dispatch])

    useEffect(() => {
        setError(validator(inputs))
    }, [inputs])

    function handleChange(e){
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
        setError(validator({
            ...inputs,
            [e.target.name]: e.target.value
        } ))

    }

    function validator(inputs){
        let error = {}
        if(!inputs.name){
            error.name = "Name is required"
        } else if (!inputs.weight_min) {
            error.weight_min = "Min weight is required"
        } else if (!inputs.weight_max) {
            error.weight_max = "Max weight is required"
        } else if (!inputs.height_min) {
            error.height_min = "Min height is required"
        } else if (!inputs.height_max) {
            error.height_max = "Max height is required"
        } else if (!inputs.life_span) {
            error.life_span = "Life span is required"
        } else if (inputs.temperaments.length === 0){
            error.temperaments = "Temperaments are required"
        }
        return error
    }

    const deshabBoton = useMemo(() => {
        if(error.name || error.weight_max || error.weight_min || error.height_max || error.height_min || error.life_span || error.temperaments) return true
        return false
    }, [error])

    function handleSubmit(e){
        e.preventDefault()
        dispatch(createDog(inputs))
        alert(`The new breed ${inputs.name} has been created successfully`)
        setInputs({
            name: "",
            weight_min: "",
            weight_max: "",
            height_min: "",
            height_max: "",
            life_span: "",
            temperaments: [],
            img: "http://imagenes-tiernas.net/wp-content/uploads/2013/02/animales-graciosos-perros-3.jpg"
        })
    }

    function handleSelected(e){
        setInputs({
            ...inputs,
            temperaments: [...inputs.temperaments, e.target.value]
        })
    }
        
    function handleDeleted (e){
        setInputs({
            ...inputs, 
            temperaments: inputs.temperaments.filter(t => t !== e)
        })
    }

    return(
        <div className="fondo">
            <div className="navegation">
                <Link to="/home" className="navegationdos">Home</Link>
            </div>
            
                <label className="label">Name</label>
                
                    <input className="input" type="text" value={inputs.name} name="name" placeholder="Breed's name" autoComplete="off" onChange={e => handleChange(e)} required="true"/>    
                    {error.name && (<p>{error.name}</p>)}
            
                <label className="label">Weight</label>
                
                    <input className="input" type="number" value={inputs.weight_min} name="weight_min" placeholder="Min weight" autoComplete="off" required="true" onChange={e => handleChange(e)} />
                    {error.weight_min && (<p>{error.weight_min}</p>)}
                    <input className="input" type="number" value={inputs.weight_max} name="weight_max" placeholder="Max wight" autoComplete="off" required="true" onChange={e => handleChange(e)} />
                    {error.weight_max && (<p>{error.weight_max}</p>)}
            
                <label className="label">Height</label>
                
                    <input className="input" type="number" value={inputs.height_min} name="height_min" placeholder="Min height" autoComplete="off" required="true" onChange={e => handleChange(e)} />
                    {error.height_min && (<p>{error.height_min}</p>)}
                    <input className="input" type="number" value={inputs.height_max} name="height_max" placeholder="Max height" autoComplete="off" required="true" onChange={e => handleChange(e)} />
                    {error.height_max && (<p>{error.height_max}</p>)}
            
                <label className="label">Life span</label>
                
                    <input className="input" type="number" value={inputs.life_span} name="life_span" placeholder="Life span" autoComplete="off" required="true" onChange={e => handleChange(e)} />
                    {error.life_span && (<p>{error.life_span}</p>)}

                
            <label className="label"> Temperaments </label>
            <div className="temps">
            <select onChange={e => handleSelected(e)} className="input">
            {
                temps?.map(e => {
                    return (
                        
                            <option  value={e.name} key={e.name} >{e.name}</option>
                            
                        
                    )
                })
            }
            </select>
            {
                inputs.temperaments?.map(e => {
                    return (<div className="temp" key={e}>
                        <p>{e}</p>
                        <button className="bot" onClick={() => {handleDeleted(e)}}>❌</button>
                    </div>)
                })
            }
            {error.temperaments && (<p>{error.temperaments}</p>)}
            </div>
            <div>
                <button type="submit" disabled={deshabBoton} onClick={e => handleSubmit(e)} className="boton">CREATE DOG</button>
            </div>
            
        </div>
    )
}