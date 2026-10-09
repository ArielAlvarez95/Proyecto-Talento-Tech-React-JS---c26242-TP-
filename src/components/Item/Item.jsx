import "./Item.css"

export const Item = ({ nombre, descripcion, precio, float, img, children }) => {
    return (
        <article className="product-card">
            <img src={img} />   
            <h3>{nombre}</h3>
            <p>{descripcion}</p> 
            <p>Float: {float}</p>
            <p>Precio: $ {precio}</p>        
            {children}
        </article>
    );
};