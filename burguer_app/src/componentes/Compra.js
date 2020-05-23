import React, {useState,useEffect} from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom';

function Compra(props){

    const [count,setCount] = useState(1);
    if(count===0){setCount(1)}

    const [confirm,setConfirm]=useState(false);

    const onSub = () => {
            console.log(1)
            setConfirm(true)
            //return <Redirect to = '/fincompra'/>
     }

    const [nombre,setNombre]=useState(props.carrito.name)
    const [precio,setPrecio]=useState(props.carrito.price)
    const [url,setUrl]=useState(props.carrito.image)

    useEffect(()=>{
            const realCombo = props.carrito.reduce(
                (obj, item) => Object.assign(obj, { ['name']: item.name ,
                                                    ['price']:item.price,
                                                    ['image']:item.image,}), {});
            console.log(realCombo.name)
            setNombre(realCombo.name)
            setPrecio(realCombo.price)
            setUrl(realCombo.image)

    },[props.carrito])// con esto voy a capturar los cambios que Home envia a modal

    const createCombo = ()=>{
    
        axios.post('https://carrito-72ae9.firebaseio.com/carrito.json',
        {count,nombre,precio,url}).then(()=>{ // naming es6, en lugar de user:user
          //alert('Se ha creado el todo con exito')
          //clear()
        }).catch(()=>{
          alert('Hubo un problema de red, intente de nuevo')
        })
      } 
    
    return (        
        <div className={props.open ? 'modal fade show' : 'modal fade'} 
             style={{display:props.open ? 'block' : 'none' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-tittle"><strong>Carrito</strong></h5>
                        <img src={require('./shop.png')} width="10%" height="10%" alt=''/>

                        <nav className="navbar navbar-light bg-light">
                            <div className="navbar-brand">
                                <i className="fa fa-shopping-cart fa-lg m-2" aria-hidden="true" />
                                <span className="badge badge-pill badge-info m-2" style={{ width: 50 }}>
                                {count}
                                </span>
                                Items
                            </div>
                        </nav>

                    </div>
                    <div>
                        <div className="modal-header">
                        
                            {props.carrito.map((combo)=>(
                                <div className='row'>
                                    <span style={{ fontSize: 24 }} className='badge m-2 badge-primary'>
                                    <div className="col-md-2">
                                        <h5>{combo.name} -> ${combo.price}</h5>
                                        
                                    </div>
                                    </span>
                                <div className='col-md-12'>
                                <img src={combo.image} className="img-fluid rounded" alt="" width="50%" height="50%"/>
                                </div>
                                </div>
                    
                            ))}
                            
                        
                        </div>
                    <div className="row">
                        <div className="col-md-5">
                        <button onClick={()=>setCount(count+1)} className="btn btn-secondary">
                            <i className="fa fa-plus-circle" aria-hidden="true" />
                        </button>
                        <button onClick={()=>setCount(count-1)} className="btn btn-info m-2">
                            <i className="fa fa-minus-circle" aria-hidden="true" />
                        </button>
                        <button
                            onClick={()=>{props.close(false); setCount(1)}}
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
                                    
                                    {
                                        confirm
                                        ?
                                        <div>   
                                        <Redirect to ="/fincompra"/>
                                        </div> 
                            
                                        :console.log(2)

                                    }
                                    <button const path = '/fincompra' onClick={()=>{onSub();props.close(false);createCombo()}} className="btn btn-warning margin-left" >Finalizar Compra</button>
                                    
                                    
                                    <button className="btn btn-success" onClick={()=>{props.close(false);
                                                                                        createCombo()
                                                                                        setCount(0)}}>
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
export default Compra;
