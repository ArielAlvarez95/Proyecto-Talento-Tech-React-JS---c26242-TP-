import { createContext } from "react";  
import { useContext, useState, } from "react"; 
import { useNavigate } from "react-router-dom";

const CartContext = createContext();

export const useCart = () => {
    const navigate = useNavigate();
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart de usarse dentro de un CartProvider");
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const isInCart = (item) => {
        const inCart = cart.some((element) => element.id === item.id);
        return inCart;
    };

    const addItem = (item) => {
        if (isInCart(item)) {
            alert("El producto ya se encuentra en el carrito");
            return;
        }

        setCart([...cart, item]);
        alert("Producto agregado al carrito");
    };

    const removeItem = (id) => {
        const updatedCart = cart.filter((element) => element.id !== id);
        setCart(updatedCart);
        alert("Producto eliminado del carrito");
    }

    const clearCart = () => {
        setCart([]);
    }

    const getTotalItems = () => {
        return cart.length;
    }

    const getTotal = () => {
        return cart.reduce((total, element) => total + element.price, 0);
    }

    const checkout = () => {
        alert("Compra realizada con éxito");
        clearCart();
        navigate("/");
    }

    return <CartContext.Provider value={{cart, isInCart, addItem, removeItem, clearCart, getTotalItems, getTotal, checkout }}>{children}</CartContext.Provider>
};