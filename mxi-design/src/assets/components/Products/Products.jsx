

import "./Products.css";
import Headers from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx"
import ProductItem from "./ProductItem/ProductItem.jsx";
import { sliderData } from "../../SliderData.js";

function Products() {
    return (

        <div className="products-page-container">
            <Headers className="products-header" />

            <div className="products-container">
                {sliderData.map((item, index) => (
                    <ProductItem key={index} item={item} />
                ))}
            </div>

            <Footer className="products-footer" />
        </div>

    );
}

export default Products;
