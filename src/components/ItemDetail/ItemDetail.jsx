import { Item } from "../Item/Item";
import "./ItemDetail.css";
import { useCart } from "../../context/CartContext";

export const ItemDetail = ({ item }) => {
    const { addItem } = useCart();
    return (
        <div className="item-detail">
            <Item {...item} >
                <button className="add-to-cart-button" onClick={() => addItem(item)}>Agregar al carrito</button>
            </Item>
        </div>
    );
};