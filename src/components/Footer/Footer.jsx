import './Footer.css';
import whatsapp from '/public/img/whatsapp.png'
import instagram from '/public/img/instagram.png'

export const Footer = () => {
    return (
        <footer>
            <nav>   
                <ul className="footer-list">
                    <li><img src={whatsapp} alt="logo-whatsapp"/></li>
                    <li><img src={instagram} alt="logo-instagram"/></li>
                </ul>
            </nav>
        </footer>
    );
};
