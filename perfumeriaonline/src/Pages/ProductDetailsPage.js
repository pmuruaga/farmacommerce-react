import React, {useState, useEffect} from "react";
import {
    useParams
} from "react-router-dom";
import { getProductoById } from "../Services/ProductosServices";

function ProductDetailsPage(){    
    const {id} = useParams();
    console.log("Id Producto: ",id);

    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(
        ()=>{
            const request = async ()=>{
                
                try{
                    setLoading(true);
                    const response = await getProductoById(id);
                    console.log('response',response);
                    setProducto(response.data);
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
                <div className="main-container">                
                    Cargando...
                </div>
            </>
        );
    }
    else{
        return(
            <>
                <div className="main-container">                
                    Estoy en el Details
                    <div>
                        <p>{producto.title}</p>
                        <p>{producto.price}</p>
                    </div>
                </div>
            </>
        );
    }
}

export default ProductDetailsPage;