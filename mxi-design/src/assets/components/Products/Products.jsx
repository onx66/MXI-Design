import { useEffect, useState } from "react";
import Headers from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import ProductItem from "./ProductItem/ProductItem.jsx";
import "./Products.css";

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/sliders")
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="products-page-container">
            <Headers className={"products-header"} />

            <div className="products-container">
                {products.map(item => (
                    <ProductItem key={item.id} item={item} />
                ))}
            </div>

            <Footer />
        </div>
    );
}

export default Products;
