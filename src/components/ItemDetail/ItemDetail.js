
import React from 'react';
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css';
const ItemDetail = ({  name, img, category, descrip, price, stock, onAdd, handleRemoveFromCart, setCart, setCartCount}) => {
    
    const handleAddToCart = (quantity) => {
        setCartCount((prevCount) => prevCount + quantity); 
        console.log(`Se agregó ${quantity} unidades de ${name} al carrito.`);
    };
    
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className='ItemHeader'>{name}</h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info"> Categoria: {category}</p>
                <p className="Info"> Descripcion: {descrip}</p>
                <p className="Info"> Precio: ${price}</p>
            </section>
            <footer className="ItemFooter">
                <ItemCount 
                initial={1} 
                stock={stock} 
                onAdd={handleAddToCart}/>
                <button className="btn btn-success btn-sm" 
                onClick={handleRemoveFromCart}
                disabled={stock === 0}>
                Eliminar del carrito
                </button> 
            </footer>
        </article>
    )
};

export default ItemDetail;