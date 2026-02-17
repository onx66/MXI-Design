import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductsButton.css";

function ProductsButton() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setIsOpen(false);
    navigate(`/products/${category.toLowerCase()}`);
  };

  // Dışarı tıklandığında kapat (sadece desktop)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="products-dropdown-container" ref={containerRef}>
      <button
        className={`products-dropdown-trigger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        data-testid="products-btn"
      >
        <span className="products-dropdown-text">Products</span>
        <svg
          className={`products-dropdown-arrow ${isOpen ? 'rotated' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div className={`products-dropdown-menu ${isOpen ? 'open' : ''}`} data-testid="products-dropdown">
        <div className="products-dropdown-header">
          <span>Select a Simulator</span>
        </div>
        <div className="products-dropdown-options">
          <button
            className="products-dropdown-option"
            onClick={() => handleCategoryClick('MSFS')}
            data-testid="products-msfs-btn"
          >
            <div className="option-icon msfs-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="option-content">
              <span className="option-title">MSFS</span>
              <span className="option-subtitle">Microsoft Flight Simulator</span>
            </div>
          </button>
          <button
            className="products-dropdown-option"
            onClick={() => handleCategoryClick('XPLANE')}
            data-testid="products-xplane-btn"
          >
            <div className="option-icon xplane-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 2L11 13" />
                <path d="M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </div>
            <div className="option-content">
              <span className="option-title">X-Plane</span>
              <span className="option-subtitle">X-Plane Flight Simulator</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductsButton;