import AboutUsIcon from "../../assets/svg/AboutUsIcon";
import NewspaperIcon from "../../assets/svg/NewspaperIcon";
import PartnersIcon from "../../assets/svg/PartnersIcon";
import ProductsIcon from "../../assets/svg/ProductsIcon";
import ProductsButton from "../ProductsButton/ProductsButton";
import "./Radio.css";


import React from 'react';


const Radio = () => {
  return (

    <div className="radio-menu">
      <a href="#" className="link">
        <span className="link-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width={192} height={192} fill="currentColor" viewBox="0 0 256 256">
            <rect width={256} height={256} fill="none" />
            <path d="M213.3815,109.61945,133.376,36.88436a8,8,0,0,0-10.76339.00036l-79.9945,72.73477A8,8,0,0,0,40,115.53855V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V115.53887A8,8,0,0,0,213.3815,109.61945Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={16} />
          </svg>
        </span>
        <span className="link-title">Home</span>
      </a>
      <a href="#" className="link">
        <span className="link-icon">
         <ProductsIcon />
        </span>
        <span className="link-title">Products</span>
      </a>
      <a href="#" className="link">
        <span className="link-icon">
          <NewspaperIcon size={48} />
        </span>
        <span className="link-title">News</span>
      </a>
      <a href="#" className="link">
        <span className="link-icon">
          <PartnersIcon />
        </span>
        <span className="link-title">Partners</span>
      </a>
      <a href="#" className="link">
        <span className="link-icon">
          <AboutUsIcon />
        </span>
        <span className="link-title">About Us</span>
      </a>
    </div>
  );
}
export default Radio;