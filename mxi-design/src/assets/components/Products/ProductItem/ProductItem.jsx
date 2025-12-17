import "./ProductItem.css";

function ProductItem({ item }) {
    return (
        <div className="product-card">

            <img
                className="product-image"
                src={item.imageUrl}
                alt={item.title}
            />

            <h2 className="product-title-code">{item.code}</h2>
            <h2 className="product-title">{item.title} {item.subtitle}</h2>
            <p className="for-microsoft">for Microsoft Flight Simulator</p>
            <p className="product-sub">{item.welcomeText}</p>
        </div>
    );
}

export default ProductItem;
