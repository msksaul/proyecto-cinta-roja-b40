import React from 'react';


function Compra(props){
    return (
        <div className={props.open ? 'modal fade show' : 'modal fade'} 
             style={{display:props.open ? 'block' : 'none' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-tittle"><strong>Carrito</strong></h5>
                        <img src={require('./shop.png')} width="10%" height="10%"/>

                        <nav className="navbar navbar-light bg-light">
                            <div className="navbar-brand">
                                <i className="fa fa-shopping-cart fa-lg m-2" aria-hidden="true" />
                                <span className="badge badge-pill badge-info m-2" style={{ width: 50 }}>
                                5
                                </span>
                                Items
                            </div>
                        </nav>

                    </div>
                    <div>
                    <div className="row">
                        <div className="col-md-1">
                        <span style={{ fontSize: 24 }}>
                            {props.carrito.map((combo)=>(
                                <h5>{combo.name}</h5>
                            ))}
                        </span>
                        </div>
                        <div className="col-md-12">
                        <button className="btn btn-secondary">
                            <i className="fa fa-plus-circle" aria-hidden="true" />
                        </button>
                        <button className="btn btn-info m-2">
                            <i className="fa fa-minus-circle" aria-hidden="true" />
                        </button>
                        <button
                            className="btn btn-danger">
                            <i className="fa fa-trash-o" aria-hidden="true" />
                        </button>
                        </div>
                    </div>
                    </div>


                    <div className="modal-body">
                        <div className="row">
                        
                            <div className="col-md-12 col-lg-12 col-sm-12">
                                <form>
                                    
                                    
                                    <button className="btn btn-warning margin-left" >Finalizar Compra</button>
                                    
                                    
                                    <button className="btn btn-success" onClick={()=>props.close(false)}>
                                        <span>Seguir Comprando</span>
                                    </button>
                                    
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Compra


/* function compra(){
    var productsFirebase = [];
    for (let i = 0; index < products.length; i++){
        if (product[i].cart) {
            var product = {
                name: products[i].name,
                price: products[i].price,
                quantity: products[i].quantity,
                total: products[i].total,
            }
            axios.post('firebase', 
                { name,price, quantity, total}).then(() => {
                alert("Se a creado el Todo con exito")
                props.history.push('/') 
                }).catch(() => {
                alert("Hubo un problema al crear el pedido")
                });
        }
    }    
}  */