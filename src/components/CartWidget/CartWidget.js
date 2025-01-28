import React from 'react';
import cart from './assets/cart.png'
import './CartWidget.css';

const CartWidget = ({ cartCount }) => {
    return (
    <div className="cart-widget">
        <img src={cart} alt="Carrito de compras" className="cart-icon" />
        <div className="cart-details">
            <span className="cart-count">{cartCount}</span>
        </div>
    </div>
    );
};

    export default CartWidget;