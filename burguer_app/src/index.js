import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
//import Compra from './componentes/Compra'
import Home from './componentes/Home'
import './hambur/css/aos.css'
import './hambur/css/font-awesome.min.css'
import './hambur/css/tooplate-gymso-style.css'
import FinCompra from './componentes/FinCompra'


 
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/fincompra" exact component={FinCompra}/>
      </Switch>
    </BrowserRouter>,
  </React.StrictMode>,
  
  document.getElementById('root')
);

serviceWorker.unregister();

