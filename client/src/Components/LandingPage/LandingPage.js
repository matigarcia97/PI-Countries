import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import fondoLanding from "../../img/3.jpg"

export default function Login(){
    return(
        <div>
            <div className='PI-COUNTRIES'>

                <img className="fondo"src={fondoLanding}></img>

                <div className='division-2'>
                    <h1 className='titulo'>PI-COUNTRIES</h1>
                    <Link to="/countries">
                     <button className='boton-ingresar'>Ingresar</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}