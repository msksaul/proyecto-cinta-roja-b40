import React, {useState,useEffect} from 'react';
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import './findecompra.css'
import Navbar from './Navbar'

function FinCompra(props){

    const[menusF,setMenusF]=useState([])
    const[confirm, setConfirm]=useState(false)
    const tag = 'p'
    let m =0.0
    

    const cerrar = () => {
        setConfirm(true)
    }

    useEffect(()=>{
        setConfirm(false)
        axios.get('https://carrito-72ae9.firebaseio.com/carrito.json')
        .then((response)=>{
            const elements = Object.entries(response.data) // convierte objetos en arreglo

            const realData = elements.map((menu)=>{ // convertir arreglo de arreglo a un arreglo de objetos
            const[id,data]=menu; // estoy destructurando el arreglo de adentro
            return {
                id,
                ...data // split object, hago una copia de la data
                }
            })

            setMenusF(realData)
           
        }).catch((error)=>{
            alert(error)
        })
        console.log(menusF)
        
    },[menusF])
    

    //const url="https://g38m1a.ch.files.1drv.com/y4mJd4Y8gq0J5WY95bLdJxeGc-I1X4Ivh-N2R3OlRIQzphQZgu5uH-NvEVPhRKMaOOdlC9Og3227Bcjj-ZSAatPu4jAYwJH2zw7mNtp-qeuE6FA3di2n-HyXCT4HSl0fRp0cXlP-wfpiOEZdzjcfwSIQBmjpY82RJz68AXZSB8nOxzijZGrZai6cfsVZCbCDefKtpXHX-vd6_jZJu7hZB0ULw?width=1920&height=1280&cropmode=none"
    return(
        <div className="side" >
            <Navbar/>
            <div className="cart-box">
                        {menusF.map((menu)=>{
                            {m+=menu.precio}
                        return (
                            <div>
                            <img src={menu.url} className="cart-thumb" alt="" width="30%" height="30%"/>
                            <h6>{menu.nombre}</h6>
                            <tag>{`Cantidad ${menu.count} Precio $ ${menu.precio} SubTotal $${menu.precio*menu.count}`}</tag>

                            </div>
                        )
                        })}
                    {confirm 
                    ?<Redirect to = '/'/>
                    :console.log(7)
                    }
                    <div>
                        <p>{m}</p>
                    </div>
                    <div className="total">
                    <span className="float-left"><strong>Total</strong>:${m}</span>
                        <div>
                        <button onClick={()=>cerrar()}>Finalizar Compra</button>
                        </div>
                    </div>
                
            </div>
        </div>
    )
}
export default FinCompra;