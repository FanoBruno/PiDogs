import React from "react";
import "../Diseño/Paginado.css"

export default function Paginado ({perrosxPagina, allDogs, paginado}){
    const pagina = []

    for(let i=1; i<=Math.ceil(allDogs/perrosxPagina); i++){
        pagina.push(i)
    }

    return(
        <nav className="nav">
            <ul className="paginado">
                {
                    pagina.map(numero => (
                        <li key={numero}>
                            <a onClick={() => paginado(numero)}>{numero}</a>
                        </li>
                    ))
                }
            </ul>

        </nav>

    )

}