import "./PurchaseCard.css";

const PurchaseCard = () => {
  return (
    <div className="purchase-card">
      <h3>Purchase</h3>
      <div className="price">
        <span className="current">$16.49</span>
        <span className="currency">USD</span>
      </div>
      <p>Sales tax will be calculated at checkout where applicable.</p>
      <div className="price-other">
        <span className="current-other">€20.99</span>
        <span className="currency-other">EUR</span>
        <span className="current-other">$23.00</span>
        <span className="currency-other">AUD</span>
        <span className="current-other">£12.20</span>
        <span className="currency-other">GBP</span>
      </div>
      <div className="product-marketing">
        <button className="add-to-cart">
          ORBX
        </button>
        <button className="add-to-cart">
          Simmarket
        </button>
        <button className="add-to-cart">
          iniBuilds
        </button>
        <button className="add-to-cart">
          Contrail
        </button>
      </div>
      <p className="requirement">
        This product requires Microsoft Flight Simulator 2024 to function.
      </p>
    </div>
  );
};

export default PurchaseCard;