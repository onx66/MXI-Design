import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./ProductsListPage.css";
import { sliderData } from "../../data/sliderData";

function ProductsListPage() {
    return (
        <div className="products-list-page">
            <Header />
            <main className="products-list-content">
                {sliderData.map((product) => (
                    <div className="products-list-content-card" key={product.id}>
                        <div className="product-image">
                            <img src={product.img} alt={product.title} />
                        </div>
                        <div className="product-content">
                            <span className="product-code">
                                {product.code}
                            </span>
                            <h2 className="product-title">
                                {product.title}
                            </h2>
                            <p className="product-description">
                                {product.desc}
                            </p>
                            <div class="product-platforms">
                                <span class="platform">MSFS</span>
                                <span class="platform">MSFS 2024</span>
                            </div>
                            <div className="product-divider"></div>
                        </div>
                    </div>
                ))}
            </main>
            <Footer />
        </div>
    );
}

export default ProductsListPage;