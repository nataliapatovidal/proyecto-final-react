import { useState, useEffect } from "react";
import { getProductById } from "../../asyncMock";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css"; // Importamos los estilos

const ItemDetailContainer = () => {
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
      <h2 className="product-name">{products.name}</h2>
      <p className="product-description">{products.descrip}</p>
      <p className="product-price">${products.price}</p>
      <p className="product-stock"><strong>Stock disponible:</strong> {products.stock}</p>
      <img
        src={products.img}
        alt={products.name}
        className="product-image"
      />
    </div>
  );
};

export default ItemDetailContainer;