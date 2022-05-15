import {Link} from 'react-router-dom';

const styles = {
    img:{
        width:'100px',
        backgroundColor:"red"
    }
};

function ProductItem(props){
    console.log("Props",props);
    const {nombre,precio,descripcion,children,id,thumbnail} = props;
    
    return(
        <>        
            <div id="item-detalle-container">
                <div className="producto-item">
                    <div className="image-wrap">
                        <img src={thumbnail} style={styles.img}></img>                        
                    </div>
                    <div className="detalle-item">
                        <h2>{nombre}</h2>
                        <p>$ {precio}</p>                    
                        <p>{descripcion || ''}</p>               
                        {children}
                        <Link to={'/detalle/'+id}>Ver Detalle</Link>                                        
                        <div className="clearfix"></div>
                        <button className="btn btn-success">Comprar</button>
                    </div>                    
                </div>
            </div>
        </>
    );
}

export default ProductItem;