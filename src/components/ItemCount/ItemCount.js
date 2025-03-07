import { useState } from 'react' 
import "./ItemCount.css";

const ItemCount = ({stock, initial, onAdd, onRemove})=> {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const handleRemove = () => {
        if (quantity > 0) {
            onRemove(quantity);
            setQuantity(0); // Opcionalmente restablecer la cantidad a cero
        }
    };

    return (
        <div className="Counter mt-auto d-flex flex-column gap-3">
            <div className="Controls d-flex justify-content-between align-items-center">
                <button className="btn custom-btn" onClick={decrement}>-</button>
                <h4 className="Number">{quantity}</h4>
                <button className="btn custom-btn" onClick={increment}>+</button>
            </div>
            <div className="mt-3 d-flex flex-column gap-2">
                <button className="btn custom-btn" onClick={() => onAdd(quantity)} disabled={!stock}>
                Agregar al carrito
                </button>
                <button className="btn custom-btn" onClick={handleRemove} disabled={quantity === 0}>
                    Eliminar del carrito
                </button>
            </div>
        </div>
        );
    };
    
    export default ItemCount;