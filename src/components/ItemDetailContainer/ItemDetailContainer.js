import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css"; 

const ItemDetailContainer = ({ handleRemoveFromCart, setCart, setCartCount }) => {
  const { itemId } = useParams();
  const [products, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProductById(itemId)
      .then((response) => setProduct(response))
      .catch((error) => {
        console.error(error);
        setError("No se pudo cargar el producto.");
      });
  }, [itemId]);


  if (error) {
    return <p className="error">{error}</p>;
  }

  if (!products) {
    return <p className="loading">Cargando producto...</p>;
  }

  return (
    <div className="item-detail-container">
      <ItemDetail 
        name={products.name}
        img={products.img}
        category={products.category}
        descrip={products.descrip}
        price={products.price}
        stock={products.stock}
        onAdd={(quantity) => console.log(`Cantidad agregada: ${quantity}`)}
        handleRemoveFromCart={handleRemoveFromCart}
        setCart={setCart} 
        setCartCount={setCartCount}
      />
    </div>
  );
};

export default ItemDetailContainer;