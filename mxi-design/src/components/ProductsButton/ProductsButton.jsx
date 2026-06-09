import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import msfsLogo from "../../assets/images/microsoft-flight-simulator.png";
import xplaneLogo from "../../assets/images/xplane-software.png";
import "./ProductsButton.css";

function ProductsButton({ onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const closeTimeoutRef = useRef(null);
  const navigate = useNavigate();

  const isHoverPointer = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const clearCloseTimeout = useCallback(() => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  }, []);

  const openDropdown = useCallback(() => {
    clearCloseTimeout();
    setIsOpen(true);
  }, [clearCloseTimeout]);

  const closeDropdown = useCallback(() => {
    clearCloseTimeout();
    setIsOpen(false);
  }, [clearCloseTimeout]);

  const scheduleCloseDropdown = useCallback(() => {
    clearCloseTimeout();
    closeTimeoutRef.current = window.setTimeout(() => {
      setIsOpen(false);
      closeTimeoutRef.current = null;
    }, 150);
  }, [clearCloseTimeout]);

  const handleTriggerClick = () => {
    if (isHoverPointer()) {
      openDropdown();
      return;
    }

    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      closeDropdown();
    }
  };

  const handleCategoryClick = (category) => {
    closeDropdown();
    onNavigate?.();
    navigate(`/products/${category.toLowerCase()}`);
  };

  // Dışarı tıklandığında kapat (sadece desktop)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      clearCloseTimeout();
    };
  }, [clearCloseTimeout, closeDropdown]);

  return (
    <div
      className="products-dropdown-container"
      ref={containerRef}
      onMouseEnter={openDropdown}
      onMouseLeave={scheduleCloseDropdown}
      onFocus={openDropdown}
      onBlur={handleBlur}
    >
      <button
        className={`products-dropdown-trigger ${isOpen ? 'active' : ''}`}
        type="button"
        onClick={handleTriggerClick}
        aria-haspopup="true"
        aria-expanded={isOpen}
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
              <img className="option-logo msfs-logo" src={msfsLogo} alt="" aria-hidden="true" />
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
              <img className="option-logo xplane-logo" src={xplaneLogo} alt="" aria-hidden="true" />
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
