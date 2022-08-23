import './App.css';
import React from 'react';
import {Route} from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage.js';
import Home from './Components/Home/Home.js'
import Detail from './Components/Detail/Detail.js'
import Formulario from './Components/Formulario/Formulario.js';

function App() {
  return (
   <React.Fragment>

     <Route exact path="/" component={LandingPage}/>
     <Route exact path="/countries" component={Home}/>
     <Route path="/country/detail/" component={Detail}/>
     <Route path="/country/createActivity/" component={Formulario}/>
     
   </React.Fragment>
  );
}

export default App;
