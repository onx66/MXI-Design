import { useState } from "react";
import ContactUsButton from "../ContactUsButton/ContactUsButton";
import ProductsButton from "../ProductsButton/ProductsButton";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import "./Header.css";

function Header() {
    const width = useWindowWidth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState(""); // FIXED

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev); // safer
    };

    const handleSearch = (e) => {
        e.preventDefault();

        if (!searchQuery.trim()) return;

        console.log("Searching for:", searchQuery);
    };

    return (
        <header data-testid="main-header">
            <div className="header-left">
                <img
                    className="logo"
                    src="https://mxi-design.com/wp-content/uploads/2025/03/mxi_sitelogo.png"
                    alt="MXI Design Logo"
                    data-testid="header-logo"
                />
            </div>

            {width >= 768 && (
                <nav className="header-nav" data-testid="desktop-nav">
                    <ul className="menu">
                        <li data-testid="menu-home">Home</li>
                        <li data-testid="menu-products">
                            <ProductsButton />
                        </li>
                        <li data-testid="menu-news">News</li>
                        <li data-testid="menu-partners">Partners</li>
                        <li data-testid="menu-about">About Us</li>
                    </ul>
                </nav>
            )}

            <div className="header-right">
                <form
                    className="search-form"
                    onSubmit={handleSearch}
                    data-testid="search-form"
                >
                    <div className="search-input-wrapper">
                        <svg
                            className="search-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.35-4.35"></path>
                        </svg>

                        <input
                            type="text"
                            className="search-input"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            data-testid="search-input"
                        />
                    </div>
                </form>

                {width > 768 && (
                    <div
                        className="contact-us-button"
                        data-testid="contact-btn-desktop"
                    >
                        <ContactUsButton />
                    </div>
                )}

                {width <= 768 && (
                    <button
                        className={`hamburger-btn ${isMenuOpen ? "open" : ""}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                        data-testid="hamburger-btn"
                    >
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>
                )}
            </div>

            {width <= 768 && (
                <nav
                    className={`mobile-nav ${isMenuOpen ? "open" : ""}`}
                    data-testid="mobile-nav"
                >
                    <ul className="mobile-menu">
                        <li data-testid="mobile-menu-home">Home</li>
                        <li data-testid="mobile-menu-products">
                            <ProductsButton />
                        </li>
                        <li data-testid="mobile-menu-news">News</li>
                        <li data-testid="mobile-menu-partners">Partners</li>
                        <li data-testid="mobile-menu-about">About Us</li>
                    </ul>

                    <div
                        className="mobile-contact-btn"
                        data-testid="contact-btn-mobile"
                    >
                        <ContactUsButton />
                    </div>
                </nav>
            )}
        </header>
    );
}

export default Header;
