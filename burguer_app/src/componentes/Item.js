import React from 'react';

function Item(props){
    return (
        <div className="col-lg-3 col-md-6 special-grid best-seller">
            <div className="products-single fix">
                <div className="box-img-hover">
                    <div className="type-lb">
                        <p className="sale">{props.nombre}</p>
                    </div>
                    <img src={props.file} className="img-fluid" alt="Image"/>
                    <div className="mask-icon">
                        <a className="cart" href="/compra">Agregar a carrito</a>
                    </div>
                </div>
                <div className="why-text">
                    <h4>{props.descripcion}</h4>
                    <h5>${props.precio}</h5>
                </div>
            </div>
        </div>


    )
}

export default Item;