import { Item } from "../Item/Item";
import "./ItemDetail.css";

export const ItemDetail = ({ item }) => {
    return (
        <div className="item-detail">
            <Item {...item} >
                <button className="add-to-cart-button">Agregar al carrito</button>
            </Item>
        </div>
    );
};