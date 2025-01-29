import React from "react";
import { Link } from "react-router-dom";
import "./Item.css"; 

const Item = ({ Id, name, img, price, stock }) => {
    return (
    <article className="card-item">
    <header className="card-header">
        <h2 className="item-header">{name}</h2>
    </header>
    <picture>
        <img src={img} alt={name} className="item-img" />
    </picture>
    <section className="card-body">
        <p className="info">
            <strong>Precio:</strong> ${price}
        </p>
        <p className="info">
            <strong>Stock disponible:</strong> {stock}
        </p>
    </section>
    
    </article>
    );
};

export default Item;