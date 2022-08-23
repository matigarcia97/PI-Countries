import React from "react";
import './Paginado.css';

export default function Paginado({PaisesPorPagina, allCountries, paginado}){

  const pageNumbers =[]

  for (let i = 1; i <= Math.ceil(allCountries/PaisesPorPagina); i++) {
    pageNumbers.push(i)
    
  }
  return(
    <nav>
      <div>
        <div>
          <ul>
            {pageNumbers?.map((number) => (
              <button key={number} onClick={() => paginado(number)}> {number} </button>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

