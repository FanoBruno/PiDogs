import React from "react";
import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { filterAlf, filterDb, getPerritos, getTemperamentos, filterTemp, filterSize, deleteDog } from "../Actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";

import "../Diseño/Home.css"


export default function Home (){

    const dispatch = useDispatch()
    const allDogs = useSelector((state) => state.dogs)
    const allTemps = useSelector((state) => state.temps)
    
    
    // Paginado
    const [paginaActual, setPaginaActual] = useState(1)
    const [perrosxPagina, setPerrosxPagina] = useState(8)
    const indexUltimo = paginaActual * perrosxPagina
    const indexPrimero = indexUltimo - perrosxPagina
    const perrosEnPagina = allDogs?.slice(indexPrimero, indexUltimo)
    const paginado = (pagina) => {
        setPaginaActual(pagina)
    }

    //Filtro de orden alfabeticamente
    const [alfabeticamente, setAlfabeticamente] = useState("")

    
    useEffect(() => {
        dispatch(getPerritos())
        dispatch(getTemperamentos())     
        dispatch(filterDb())
    },[dispatch])

    //Setear todos los perros de nuevo
    function handleClick(e){
        e.preventDefault();
        dispatch(getPerritos());
    }
    
    // Filtro creados-api-all
    function handleCreados (e){
        e.preventDefault();
        dispatch(filterDb(e.target.value))
        setPaginaActual(1)
    }

    function handleTemp (e){
        e.preventDefault();
        dispatch(filterTemp(e.target.value))
        setPaginaActual(1)
    }

    // Filtro A-Z/Z-A
    function handleAlf (e) {
        e.preventDefault();
        dispatch(filterAlf(e.target.value))
        setPaginaActual(1)
        setAlfabeticamente(`Ordenado ${e.target.value}`)
    }

    function handleTamaño (e) {
        e.preventDefault()
        dispatch(filterSize(e.target.value))
        setPaginaActual(1)
    }

    function handleRemove(e){
        e.preventDefault()
        dispatch(deleteDog({id: e.target.value}))
        dispatch(getPerritos())
    }

    return (
        <div className="home">
            <Link to="/dog" className="crearPerro" >Creat new dog</Link>
            <Link to="/favorites"  className="crearPerro">Favourites</Link>
            <h1>PUPPYS FAN CLUB</h1>
            <SearchBar className="search"/>
            
            
            <div className="filtros">
                <select onChange={e => handleAlf(e)}>
                    <option selected>Ordering</option>
                    <option value="a-z">A-Z</option>
                    <option value="z-a">Z-A</option>
                </select>
                <select onChange={e => handleCreados(e)} >
                    <option value="all">All</option>
                    <option value="created">Created</option>
                    <option value="api">Already created</option>
                </select>
                <select onChange={e => handleTamaño(e)}>
                    <option value="all">All</option>
                    <option value="verys">Very small</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Big</option>
                    <option value="veryl">Very big</option>
                </select>
                <select onChange={e => handleTemp(e)}>
                    <option value="allT">Temperaments</option>
                    
                    {
                        allTemps?.map(t => {
                            return (
                                <option key={t.id} value={t.name}>{t.name}</option>

                            )
                        })
                    }
                    
                </select>
                
                </div>
                <button className="busqueda" onClick={e => {handleClick(e)}}>
                    Reload the dogs
                </button>
                

                
                



            <div className="Cartas">
            {
                perrosEnPagina?.map(d => {   
                    if(typeof d.id === "string"){
                        if(d.temperaments.length > 1){
                            var temps = d.temperaments.map(d => d.name).toString()
                            return (
                                    <Card  name={d.name} weight_min={d.weight_min} weight_max={d.weight_max} temperaments={temps} img={d.img} key={d.id} id={d.id} handleRemove={handleRemove}/>
                                 )
                        } else {
                            return (
                                <Card  name={d.name} weight_min={d.weight_min} weight_max={d.weight_max} temperaments={d.temperaments[0]?.name} key={d.id} img={d.img} id={d.id} handleRemove={handleRemove}/>                           
                                )
                            }
                        }                
                        return (
                                <Card  name={d.name} weight_min={d.weight_min} weight_max={d.weight_max} temperaments={d.temperaments} key={d.id} img={d.img} id={d.id} handleRemove={handleRemove}/>                            
                    )    
                })
            }                
            </div>

            <Paginado
                perrosxPagina={perrosxPagina}
                allDogs={allDogs?.length}
                paginado={paginado}
                paginaActual={paginaActual}
                />
        </div>
    )
}