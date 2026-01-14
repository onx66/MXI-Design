

import ContactUsButton from "../ContactUsButton/ContactUsButton";
import ProductsButton from "../ProductsButton/ProductsButton";
import Radio from "../Radio/Radio";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import "./Header.css";

function Header() {
    const width = useWindowWidth();

    return (
        <header>
            <div className="header-container">
                <img
                    className="logo"
                    src="https://mxi-design.com/wp-content/uploads/2025/03/mxi_sitelogo.png"
                />

                {width < 620 ? (
                    <Radio />
                ) : (
                    <ul className="menu">
                        <li>Home</li>
                        <li><ProductsButton /></li>
                        <li>News</li>
                        <li>Partners</li>
                        <li>About Us</li>
                    </ul>
                )}
            </div>

            <div className="contact-us-button">
                <ContactUsButton />
            </div>
        </header>
    );
}

export default Header;
