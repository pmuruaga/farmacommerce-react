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
            <div className='item-detalle-container'>
                <img src={thumbnail} style={styles.img}></img>
                <p>{nombre}</p>
                <p>{precio}</p>
                <p>{descripcion || ''}</p>               
                    {children}
                <button>Comprar</button>
                <Link to={'/detalle/'+id}>Ver Detalle</Link>

            </div>
        </>
    );
}

export default ProductItem;