import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig.js";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const { categoryid } = useParams();
    const { cart, setCart } = useContext(CartContext);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const collectionRef = collection(db, "products"); 
                const q = categoryid ? query(collectionRef, where("category", "==", categoryid)) : collectionRef;
                const querySnapshot = await getDocs(q);
                const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
    
        fetchProducts();
    }, [categoryid]);
    

    const handleAddToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                const updatedCart = prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
                return updatedCart;
            } else {
                const updatedCart = [...prevCart, { ...product, quantity: 1 }];
                return updatedCart;
            }
        });
    };

    const handleRemoveFromCart = (productId) => {
        setCart((prevCart) => {
            const updatedCart = prevCart.map(item =>
                item.id === productId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ).filter(item => item.quantity > 0);

            return updatedCart;
        });
    };

    return (
        <div className="ItemListContainer">
            <h3 className="title">{greeting}</h3>
            <ItemList
                products={products}
                onAddToCart={handleAddToCart}
                onRemoveFromCart={handleRemoveFromCart}
            />
        </div>
    );
};

export default ItemListContainer;

