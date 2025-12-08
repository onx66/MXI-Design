
import ButtonContactUs from "../Buttons/ButtonContactUs";
import "./Header.css";


function Header() {
    return (
        <>
            <header>
                <div className="logo">
                    <img src="https://mxi-design.com/wp-content/uploads/2025/03/mxi_sitelogo.png" />
                </div>
                <ul className="menu">
                    <li>Home</li>
                    <li>Products</li>
                    <li>News</li>
                    <li>Partners</li>
                    <li> About Us </li>
                    <li>Contact Us</li>
                </ul>
            </header>
        </>
    )
}

export default Header;