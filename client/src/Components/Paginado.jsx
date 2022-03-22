import React from "react";
import "../Diseño/Paginado.css"

export default function Paginado ({perrosxPagina, allDogs, paginado, paginaActual}){
    const pagina = []

    for(let i=1; i<=Math.ceil(allDogs/perrosxPagina); i++){
        pagina.push(i)
    }

    return(
        <nav className="nav">
            <ul className="paginado">
                <button disabled={paginaActual>1?false:true} onClick={() => paginado(1)}>{"<<"}</button>
                <button disabled={paginaActual>1?false:true} onClick={() => paginado(paginaActual-1)}>{"<"}</button>
                {
                    pagina.map(numero => (
                        <li key={numero}>
                            <a onClick={() => paginado(numero)}>{numero}</a>
                        </li>
                    ))
                }
                <button disabled={paginaActual<pagina.length?false:true} onClick={() => paginado(paginaActual+1)} >{">"}</button>
                <button disabled={paginaActual<pagina.length-1?false:true} onClick={() => paginado(pagina.length)}>{">>"}</button>
            </ul>

        </nav>

    )

}