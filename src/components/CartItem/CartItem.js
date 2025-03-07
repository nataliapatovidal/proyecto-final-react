import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ id, name, price, quantity, img }) => {
    const { removeItem } = useContext(CartContext);

    const handleRemove = () => {
        removeItem(id);
    };
    console.log('Datos de CartItem:', { id, name, price, quantity, img });

    return (
        <div className="container py-4">
            <div className="card shadow-sm mx-auto my-4" style={{ maxWidth: "800px" }}>
                <div className="row no-gutters">

                    <div className="col-md-3 d-flex justify-content-center align-items-center py-3">
                        <img src={img} alt={name} className="card-img" style={{ width: '100%', height: 'auto' }} />
                    </div>

                    
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                {name}
                            </h5>
                            <p className="card-text">Precio: ${price}</p>
                            <p className="card-text">Cantidad: {quantity}</p>
                            <p className="card-text font-weight-bold">Subtotal: ${price * quantity}</p>
                        </div>
                    </div>

                    
                    <div className="col-md-3 d-flex justify-content-center align-items-center py-3">
                        <button
                            onClick={handleRemove}
                            className="ItemFooter button"
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;


