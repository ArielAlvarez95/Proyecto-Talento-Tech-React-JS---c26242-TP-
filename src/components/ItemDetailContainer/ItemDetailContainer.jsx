import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
    const { id } = useParams();
    const [itemDetail, setItemDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setItemDetail(null);
        setError(null);

        fetch("/data/productos.json")
            .then((res) => res.json())
            .then((data) => {
                const item = data.find((product) => String(product.id) === id);
                if (item) {
                    setItemDetail(item);
                    return;
                }
                throw new Error("Producto no encontrado");
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

        if (loading)  return <h2>Cargando...</h2>;
        if (error)  return <p>{error}</p>; 
        if (!itemDetail) return <p>Producto no encontrado</p>; 

        return (

        <section>
            <h1>Detalles del Producto</h1>
            <div className="item-detail-container">
                <ItemDetail item={itemDetail} />
            </div>
        </section>
        );
    };