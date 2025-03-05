
import React, { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({  id, name, img, category, descrip, price, stock}) => {
    const [quantityadded, setQuantityAdded]= useState (0)
    const {addItem} = useContext(CartContext);

    const handleAddToCart = (quantity) => {
        setQuantityAdded(quantity)
    

        const item= {
            id, name, price
        }
    
        addItem(item, quantity)
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
                {
                    quantityadded > 0 ?(
                        <Link to='/cart' className= 'Option'><button className="btn btn-success btn-sm" >
                        Terminar compra
                        </button></Link> 
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleAddToCart}/>
                    )
                }
                
            </footer>
        </article>
    )
};

export default ItemDetail;