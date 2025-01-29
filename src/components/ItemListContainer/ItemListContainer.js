import React, { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css';

const ItemListContainer = ({ greeting, setCartCount }) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const fetchProducts = categoryId ? getProductsByCategory : getProducts;
        fetchProducts(categoryId)
        .then((resp) => setProducts(resp))
        .catch((err) => console.error(err));
    }, [categoryId]);

    const handleAddToCart = (products) => {
        setCart((prevCart) => {

        const existingProducts = prevCart.find(item => item.Id === products.Id);

        if (existingProducts) {
        
        const updatedCart = prevCart.map(item =>
            item.Id === products.Id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
        setCartCount(updatedCart.reduce((total, item) => total + item.quantity, 0)); 
        return updatedCart;
        } else {
        
        const updatedCart = [...prevCart, { ...products, quantity: 1 }];
        setCartCount(updatedCart.reduce((total, item) => total + item.quantity, 0));
        return updatedCart;
    }
    });
};

    const handleRemoveFromCart = (productsId) => {
        setCart((prevCart) => {
    const updatedCart = prevCart.map(item =>
        item.Id === productsId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0); 
        setCartCount(updatedCart.reduce((total, item) => total + item.quantity, 0)); 
        return updatedCart;
    });
};

    return (
    <div>
        <h3 className="title">{greeting}</h3>
        <ItemList
        products ={products}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        />
    </div>
    );
};

export default ItemListContainer;
