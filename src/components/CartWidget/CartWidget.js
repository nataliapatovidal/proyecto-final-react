import React, { useContext } from 'react';
import cart from './assets/cart.png'
import './CartWidget.css';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext) 
    
    return (
        <Link to='/cart' className='cart-widget' style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
            <img className='cart-icon btn-success btn-sm' src={cart} alt='cart-widget'/>
            <span>{totalQuantity}</span>  
        </Link>
    );
};

export default CartWidget;

