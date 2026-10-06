import { Link } from "react-router-dom";
import './Header.css';
import { Nav } from "../Nav/Nav";
import knife from '../../assets/knife.png'

export const Header = () => {
  return (
    <header>
        <div className="logo-header">
            <Link to="/">
                <img src={knife} alt="logo-knife"/>
            </Link>
        </div>
        <Nav />
    </header>
  );
};
