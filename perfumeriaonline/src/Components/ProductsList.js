import React,{useState,useEffect} from "react";
import ProductItem from './ProductItem';
import {getAllPerfumes} from "../Services/ProductosServices";
import spinner from "../assets/images/spinner.gif";

function ProductsList(){
    const [listadoProductos,setListadoProductos]=useState([])
    const [response,setResponse]=useState({})
    const [loading,setLoading] = useState(true)
    //const [buscar,setBuscar] = useState('ipod')

    //componentDidMount
    useEffect(
        ()=>{
            const request = async ()=>{                
                try{
                    setLoading(true);
                    //const response = await getAllPerfumes(buscar)
                    const response = await getAllPerfumes();
                    console.log('response',response);
                    setListadoProductos(response.data.results);
                    setResponse(response.data);
                    setLoading(false);
                }catch(e){
                    console.log(e);
                    setLoading(false);
                }
                
            };
            request();
        },
        []
        //[buscar]
    )
    // const filtrar=()=>{
    //     setBuscar('motorola')
    // }
    // const reset=()=>{
    //     setBuscar('ipod')
    // }

    if(loading){
        return(
            <div>
                Cargando ...
                <img src={spinner}></img>
            </div>
        )
        
    }else{
        return(
            <div>
                <h2>Cantidad de productos {response?.paging?.total}</h2>
                {/* <button onClick={filtrar}>Filtrar</button>
                <button onClick={reset}>Reset</button> */}
                {listadoProductos.map(listadoProducto=><ProductItem nombre={listadoProducto.title} precio={listadoProducto.price} id={listadoProducto.id} thumbnail={listadoProducto.thumbnail}  />)}               
                
            </div>
        )
    }
    
}

export default ProductsList