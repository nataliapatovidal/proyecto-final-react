import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div className="CartContainer">
                <h1>No hay items en el carrito</h1>
                <Link to="/" className="CartButton">Productos</Link>
            </div>
        )
    }

    return (
        <div className="CartContainer">
            <h1 className="CartHeader">Carrito de Compras</h1>
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <div className="CartTotal">
                <h2>Total: ${total}</h2>
                <div className="CartButtons">
                    <button onClick={() => clearCart()} className="CartButton">Limpiar carrito</button>
                    <Link to="/checkout" className="CartButton">Comprar</Link>
                </div>
            </div>
        </div>
    )
}

export default Cart;
