import { useState, useRef, useEffect } from "react";
import ContactUsButton from "../ContactUsButton/ContactUsButton";
import ProductsButton from "../ProductsButton/ProductsButton";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { useSearch } from "../../context/SearchContext";
import { sliderData } from "../../data/sliderData";
import "./Header.css";

function Header() {
    const width = useWindowWidth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { searchQuery, setSearchQuery, isSearchFocused, setIsSearchFocused } = useSearch();
    const searchRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev); // safer
    };

    const handleSearch = (e) => {
        e.preventDefault();


    };
    // Arama sonuçlarını filtrele
    const searchResults = searchQuery.trim().length > 0
        ? sliderData.filter((product) => {
            const query = searchQuery.toLowerCase();
            return (
                product.title.toLowerCase().includes(query) ||
                product.subtitle.toLowerCase().includes(query) ||
                product.code.toLowerCase().includes(query)
            );
        })
        : [];

    // Dışarı tıklandığında dropdown'ı kapat
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsSearchFocused(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [setIsSearchFocused]);

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
                {/* Search Input with Dropdown */}
                <div className="search-container" ref={searchRef}>
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
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onFocus={() => setIsSearchFocused(true)}
                                data-testid="search-input"
                            />
                            {searchQuery && (
                                <button
                                    type="button"
                                    className="search-clear-btn"
                                    onClick={() => setSearchQuery("")}
                                    data-testid="search-clear-btn"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 6L6 18M6 6l12 12" />
                                    </svg>
                                </button>
                            )}
                        </div>
                    </form>
                    {/* Search Results Dropdown */}
                    {isSearchFocused && searchQuery.trim().length > 0 && (
                        <div className="search-dropdown" data-testid="search-dropdown">
                            {searchResults.length > 0 ? (
                                <>
                                    <div className="search-dropdown-header">
                                        <span>{searchResults.length} sonuç bulundu</span>
                                    </div>
                                    <ul className="search-results-list">
                                        {searchResults.map((product) => (
                                            <li
                                                key={product.code}
                                                className="search-result-item"
                                                data-testid={`search-result-${product.code}`}
                                                onClick={() => {
                                                    setIsSearchFocused(false);
                                                    // İleride tıklama ile detay sayfasına yönlendirme eklenebilir
                                                }}
                                            >
                                                <img
                                                    src={product.img}
                                                    alt={product.title}
                                                    className="search-result-img"
                                                />
                                                <div className="search-result-info\">
                                                    <span className="search-result-code">{product.code}</span>
                                                    <span className="search-result-title">{product.title}</span>
                                                    <span className="search-result-subtitle">{product.subtitle}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                <div className="search-no-results" data-testid="search-no-results">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.35-4.35"></path>
                                        <path d="M8 8l6 6M14 8l-6 6" />
                                    </svg>
                                    <span>\"{searchQuery}\" için sonuç bulunamadı</span>
                                </div>
                            )}
                        </div>
                    )}
                </div>

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
