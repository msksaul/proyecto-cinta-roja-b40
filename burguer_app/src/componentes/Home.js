import React, {useEffect,useState} from 'react'
import '../App.css';
import axios from 'axios';
import Navbar from './Navbar';
import Item from './Item';
import Carrusel from './Carrusel'
import Compra from './Compra'


function Menu() {

    const[menus,setMenus] = useState([])
    const[isOpen,setIsOpen] = useState(false)

    useEffect(()=>{
        axios.get('https://menu-90c38.firebaseio.com/menus.json')
        .then((response)=>{
            const elements = Object.entries(response.data) // convierte objetos en arreglo

            const realData = elements.map((menu)=>{ // convertir arreglo de arreglo a un arreglo de objetos
            const[id,data]=menu; // estoy destructurando el arreglo de adentro
            return {
                id,
                ...data // split object, hago una copia de la data
                }
            })

            setMenus(realData)
            //setTodos(realData)
        }).catch((error)=>{
            alert(error)
        })
    })
    return (
        <div className='App'>
        <Carrusel></Carrusel>
        <div>
        <Navbar></Navbar>
        </div>
        <div>
            <div className="products-box">
                <div className="container">
                    <div className="row">
                        <div id='menu' className="row special-list">

                        {menus.map((menu)=>{
                        return (
                            <Item 
                            nombre={menu.name}
                            file={menu.image}
                            descripcion={menu.description}
                            precio={menu.price}
                            />
                        )
                        })}
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <Compra open={isOpen} close={setIsOpen}/>
        </div>
        
    )
}

export default Menu;