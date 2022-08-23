import React from "react";
import '../NavBar/NavBar.css';

import SearchBar from "../SearchBar/SearchBar.js";
import Filter from "../Filter/Filter.js"

export default function NavBar() {
  return (
    <div className="NavBar">

      COMPONENTE NavBar (Search-Filter)
      
      <SearchBar/>
        
      <Filter/>
    
    </div>
  )
}
