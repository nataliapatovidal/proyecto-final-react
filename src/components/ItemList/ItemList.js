import React from "react";
import { Link } from "react-router-dom";
import "./ItemList.css"

const ItemList = ({ products, onAddToCart, onRemoveFromCart }) => {
    
    return (
        <div className="row">
            {products.map((product) => (
                <div className="col-md-4 mb-3" key={product.id}>
                    <div className="card h-100">
                        <img src={product.img} className="card-img-top" alt={product.name} style={{ objectFit: "contain", height: "200px" }}/>
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text fw-bold">${product.price}</p>
                        
                    <div className="mt-auto d-flex flex-column gap-2">
                    <Link to={`/item/${product.id}`} className="btn btn-success btn-sm">Más info</Link>
                        <button className="btn btn-success btn-sm"onClick={() => onAddToCart (product)}>Agregar al carrito</button>
                        <button className="btn btn-success btn-sm"onClick={() => onRemoveFromCart (product.id)}>Eliminar del carrito</button>
                    </div>
            </div>
            </div>
            </div>
        ))}
    </div>
    );
};

export default ItemList;