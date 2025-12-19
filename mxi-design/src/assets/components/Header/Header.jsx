
import ButtonContactUs from "../Buttons/ButtonContactUs";
import "./Header.css";
import { Link } from "react-router-dom";


function Header({ className }) {
    return (
        <>

            <header className={className}>
                <div className="logo">
                    <img src="https://mxi-design.com/wp-content/uploads/2025/03/mxi_sitelogo.png" />
                </div>

                <ul className="menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/partners">Partners</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact"><ButtonContactUs /></Link></li>
                </ul>
            </header>
        </>
    )
}

export default Header;