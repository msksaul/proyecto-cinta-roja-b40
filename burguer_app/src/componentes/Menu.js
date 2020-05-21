import React from 'react'
import '../App.css';
import axios from 'axios';
import Navbar from './Navbar'

function Menu() {
    return (
        <div>
        <div>
        <Navbar></Navbar>
        </div>
        <br/>
        <br/>
        <br/><br/><br/><br/><br/>
        <div>
            <div className="products-box">
                <div className="container">
                    <div className="row">
                        <div className="row special-list">
                            <div className="col-lg-3 col-md-6 special-grid best-seller">
                                <div className="products-single fix">
                                    <div className="box-img-hover">
                                        <div className="type-lb">
                                            <p className="sale">Nueva</p>
                                        </div>
                                        <img src="./bg5.jpg" className="img-fluid" alt="Image"/>
                                        <div className="mask-icon">
                                        
                                            <a className="cart" href="#">Agregar a carrito</a>
                                        </div>
                                    </div>
                                    <div className="why-text">
                                        <h4>Hamburguesa sencilla, lechuga, jitomate</h4>
                                        <h5> $7.79</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 special-grid top-featured">
                                <div className="products-single fix">
                                    <div className="box-img-hover">
                                    
                                        <img src="https://d1uz88p17r663j.cloudfront.net/original/8689e8d974203563ddcc9bbff91323c2_MG_CHORIZOBURGER_Main-880x660.png" className="custom-style" alt="1" height="5px"/>
                                        <div className="mask-icon">
                                            
                                            <a className="cart" href="#">Agregar a carrito</a>
                                        </div>
                                    </div>
                                    <div className="why-text">
                                        <h4>Hamburguesa doble con queso, lechuga, jitomate </h4>
                                        <h5> $9.79</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 special-grid top-featured">
                                <div className="products-single fix">
                                    <div className="box-img-hover">
                                    
                                        <img src="hambur.jpg" className="img-fluid" alt="Image"/>
                                        <div className="mask-icon">
                                        
                                            <a className="cart" href="#">Agregar a carrito</a>
                                        </div>
                                    </div>
                                    <div className="why-text">
                                        <h4>Hamburguesa con queso, tocino, pimientos rojos cherry picados </h4>
                                        <h5> $10.79</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 special-grid best-seller">
                                <div className="products-single fix">
                                    <div className="box-img-hover">
                                    
                                        <img src="./images/hambur.jpg" className="imagenes img-fluid" alt="Image"/>
                                        <div className="mask-icon">
                                            <a className="cart" href="#">Agregar a carrito</a>
                                        </div>
                                    </div>
                                    <div className="why-text">
                                        <h4>Portobello crisp-fried relleno con una mezcla de quesos Muenster y Cheddar, lechuga, jitomate </h4>
                                        <h5> $15.79</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Menu;