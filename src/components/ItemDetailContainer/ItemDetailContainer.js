import { useState, useEffect } from "react";

import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 
    const { itemid } = useParams();

    useEffect(() => {
        if (!itemid) {
            setError("ID del producto no disponible.");
            setLoading(false);
            return;
        }

        setLoading(true);
        setError(null);  
        const docRef = doc(db, "products", itemid);

        getDoc(docRef)
            .then((response) => {
                if (response.exists()) {
                    const data = response.data();
                    const productsAdapted = { id: response.id, ...data };
                    setProduct(productsAdapted);
                } else {
                    setError("Producto no encontrado");  
                }
            })
            .catch((error) => {
                console.error("Error obteniendo producto:", error);
                setError("Hubo un error al cargar el producto");
            })
            .finally(() => {
                setLoading(false);
            });
    }, [itemid]);

    return (
        <div>
            {loading ? (
                <h1 className="text is-size-4">Cargando detalles ...</h1>
            ) : error ? (
                <h1 className="text is-size-4">{error}</h1>  
            ) : (
                <ItemDetail {...product} />
            )}
        </div>
    );
};

export default ItemDetailContainer;
