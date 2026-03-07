import { useParams, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./ProductsListPage.css";
import { sliderData } from "../../data/sliderData";

function ProductsListPage() {
    const { category } = useParams();
    const navigate = useNavigate();


    const filteredProducts = category
        ? sliderData
        : sliderData;

    const categoryTitle = category
        ? category.toUpperCase() === 'MSFS'
            ? 'Microsoft Flight Simulator'
            : 'X-Plane Flight Simulator'
        : 'Tüm Ürünler';
    const handleProductClick = (productId) => {
        navigate(`/product-detail/${productId}`);
    };
    return (
        <div className="products-list-page">
            <Header />
            <main className="products-list-content">
                {category && (
                    <div className="products-list-header" data-testid="products-category-header">
                        <h1 className="category-title">{categoryTitle}</h1>
                        <p className="category-subtitle">{filteredProducts.length} products found</p>
                    </div>
                )}
                 {filteredProducts.map((product, index) => (
                    <div 
                        className="products-list-content-card" 
                        key={product.code} 
                        data-testid={`product-card-${product.code}`}
                        onClick={() => handleProductClick(product.id !== undefined ? product.id : index)}
                        style={{ cursor: 'pointer' }}
                    >
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
                        <div className="product-platforms">
                            <span className="platform\">MSFS</span>
                            <span className="platform\">MSFS 2024</span>
                        </div>
                        <div className="product-divider\"></div>
                    </div>
                </div>
                ))}
            </main>
            <Footer />
        </div>
    );
}

export default ProductsListPage;