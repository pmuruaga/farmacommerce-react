import React, {useState, useEffect} from "react";
import {
    useParams
} from "react-router-dom";
import { getDescripcionPerfume, getProductoById } from "../Services/ProductosServices";
import spinner from "../assets/images/spinner.gif";

function ProductDetailsPage(){    
    const {id} = useParams();
    console.log("Id Producto: ",id);

    const [producto, setProducto] = useState({});
    const [descripcion, setDescripcion] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(
        ()=>{
            const request = async ()=>{
                
                try{
                    setLoading(true);
                    const response = await getProductoById(id);
                    console.log('response',response);
                    setProducto(response.data);

                    const responseDescripcion = await getDescripcionPerfume(id);
                    setDescripcion(responseDescripcion.data);
                    console.log('responseDesc',responseDescripcion.data);
                    setLoading(false);
                }catch(e){
                    console.log(e);
                    setLoading(false);
                }
                
            };
            request();
        },
        [id]
    );

    if(loading){
        return(
            <>
                <div className="main-container-full">                
                    <img src={spinner}></img>
                </div>
            </>
        );
    }
    else{
        return(
            <>
                <div className="main-container-full">                                    

                    <div id="productos">
                        <article className="producto-item producto-detail">
                            
                            <div className="image-wrap">
                                <img src={producto.pictures[0]?.url}></img>  
                                <img src={producto.pictures[1]?.url}></img>    
                            </div>
                            
                            <h1 className="subheader">{producto.title}</h1>                        
                            <p className="descripcion">{descripcion.plain_text}</p>
                            <p className="precio">${producto.price}</p>

                            <button className="btn btn-success">Comprar</button>
                            <div className="clearfix"></div>
                        </article>
                    </div>

                </div>
            </>
        );
    }
}

export default ProductDetailsPage;