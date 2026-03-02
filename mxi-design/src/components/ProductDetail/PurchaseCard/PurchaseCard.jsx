import "./PurchaseCard.css";

const PurchaseCard = () => {
  return (
    <div className="purchase-card">
      <h3>Purchase</h3>

      <div className="price">
        <span className="current">$23.99</span>
        <span className="currency">AUD</span>
      </div>

      <button className="add-to-cart">
        Add to Cart
      </button>

      <p className="requirement">
        This product requires Microsoft Flight Simulator 2024.
      </p>
    </div>
  );
};

export default PurchaseCard;