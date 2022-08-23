import React from "react";
import '../Formulario/Formulario.css';
import { Link } from "react-router-dom";

export default function Formulario() {
  return (
    <div>
      <form>
        <div className="container">
          <Link to="/countries">
            <button className="boton">Volver</button>
          </Link>
          <div className="formato">
           <h1 className="h1">Create activity</h1>

                 <div className="pais">
                    <label className="pais">Paises </label><br></br>
                    <select className="inputName">
                      <option >Seleccionar Paises</option>
                    </select>
                </div>

                <div className="name">
                    <label className="name">Nombre de la Actividad </label><br></br>
                    <input className="inputName" placeholder='Ej: Natacion'></input>
                </div>

                <div className="dificultad"> 
                    <label className="dificultad">Dificultad</label><br></br>
                    <input className="inputName" placeholder='Ej: 5...'></input>
                </div>

                <div className="duracion">
                    <label className="duracion">Duracion </label><br></br>
                    <input className="inputName" placeholder='Ej: 2 meses...'></input>
                </div>

                <div className="temporada">
                    <label className="temporada">Temporada</label><br></br>
                    <input className="inputName" placeholder='Ej: Invierno'></input>
                </div>
                <div className="enviar">
                  <button className="boton-enviar">Enviar</button>
              </div>
                
           </div>

            

        </div>
      </form>
    </div>
    
    
  )
}
