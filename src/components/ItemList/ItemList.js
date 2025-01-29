import React from "react";
import { Link } from "react-router-dom";
import "./ItemList.css"

const ItemList = ({ products, onAddToCart, onRemoveFromCart }) => {
    //GENERAL INICIO//
    return (
        <div className="row">
            {products.map((products) => (
                <div className="col-md-4 mb-3" key={products.id}>
                    <div className="card h-100">
                        <img src={products.img} className="card-img-top" alt={products.name} style={{ objectFit: "contain", height: "200px" }}/>
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{products.name}</h5>
                        <p className="card-text fw-bold">${products.price}</p>
                        
                    <div className="mt-auto d-flex flex-column gap-2">
                        <Link to={`/item/${products.Id}`} className="btn btn-success btn-sm">Más info</Link>
                        <button className="btn btn-success btn-sm"onClick={() => onAddToCart (products)}>Agregar al carrito</button>
                        <button className="btn btn-success btn-sm"onClick={() => onRemoveFromCart (products.Id)}>Eliminar del carrito</button>
                    </div>
            </div>
            </div>
            </div>
        ))}
    </div>
    );
};

export default ItemList;