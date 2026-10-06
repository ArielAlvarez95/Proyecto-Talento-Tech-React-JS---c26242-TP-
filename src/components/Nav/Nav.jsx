import { Link } from 'react-router-dom'
import './Nav.css';  

export const Nav = () => {
    return (
    <nav>
        <ul>
            <li>
                <Link to="/">Inicio</Link>
            </li>
            <li>
                <Link to="/cart">Carrito</Link>
            </li>
        </ul>
    </nav>
    );
}