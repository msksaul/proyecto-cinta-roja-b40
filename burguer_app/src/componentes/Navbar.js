import React from 'react';


function Navbar() {
    return(
        <div className="navbar">
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    <div>
                        <a className="navbar-brand" href="index.html">Cinta Roja Burger</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-lg-auto">
                            <li className="nav-item">
                                <a href="#home" className="nav-link smoothScroll">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a href="./menu" className="nav-link smoothScroll">Ordena</a>
                            </li>
                            <li className="nav-item">
                                <a href="#className" className="nav-link smoothScroll">Carrito</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

 }

 export default Navbar;