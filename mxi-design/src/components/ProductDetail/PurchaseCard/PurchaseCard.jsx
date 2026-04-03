import "./PurchaseCard.css"



const PurchaseCard = ({ pricing }) => {
  return (
    <div className="purchase-card">
      <h3>Purchase</h3>

      <div className="price">
        <span className="current">${pricing.main.amount}</span>
        <span className="currency">{pricing.main.currency}</span>
      </div>

      <p>Sales tax will be calculated at checkout where applicable.</p>

      <div className="price-other">
        {pricing.others.map((price, index) => (
          <span key={index}>
            <span className="current-other">
              {price.currency === "EUR" ? "€" :
                price.currency === "GBP" ? "£" : "$"}
              {price.amount}
            </span>
            <span className="currency-other">{price.currency}</span>
          </span>
        ))}
      </div>

      <div className="product-marketing">
        <button className="add-to-cart">ORBX</button>
        <button className="add-to-cart">Simmarket</button>
        <button className="add-to-cart">iniBuilds</button>
        <button className="add-to-cart">Contrail</button>
      </div>

      <p className="requirement">
        This product requires Microsoft Flight Simulator 2024 to function.
      </p>
    </div>
  );
};

export default PurchaseCard;