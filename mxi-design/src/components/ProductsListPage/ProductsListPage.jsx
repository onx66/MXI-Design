import { useParams, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./ProductsListPage.css";
import { useProducts } from "../../context/ProductContext";

const getProductPlatforms = (product) => {
    return product.platforms?.length ? product.platforms : ["MSFS", "XPLANE"];
};

const getCategoryPlatform = (category) => {
    if (!category) return null;
    return category.toUpperCase() === "MSFS" ? "MSFS" : "XPLANE";
};

const getPlatformLabel = (platform) => {
    return platform === "XPLANE" ? "X-Plane" : "MSFS";
};

function ProductsListPage() {
    const { category } = useParams();
    const navigate = useNavigate();
    const { products } = useProducts();
    const categoryPlatform = getCategoryPlatform(category);


    const filteredProducts = categoryPlatform
        ? products.filter((product) => getProductPlatforms(product).includes(categoryPlatform))
        : products;

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
                        key={product.id ?? product.code} 
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
                            {getProductPlatforms(product).map((platform) => (
                                <span className="platform" key={platform}>{getPlatformLabel(platform)}</span>
                            ))}
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
