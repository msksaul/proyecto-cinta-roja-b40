import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './componentes/Home'
import Menu from './componentes/Menu'
 
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/menu" exact component={Menu} /> 
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  
  document.getElementById('root')
);

