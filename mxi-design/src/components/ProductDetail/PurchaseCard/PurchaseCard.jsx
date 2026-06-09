import "./PurchaseCard.css";

const STORE_BUTTONS = [
  { key: "orbx", label: "ORBX" },
  { key: "simmarket", label: "Simmarket" },
  { key: "iniBuilds", label: "iniBuilds" },
  { key: "contrail", label: "Contrail" },
];

const getCurrencySymbol = (currency = "USD") => {
  const normalizedCurrency = String(currency).toUpperCase();

  if (normalizedCurrency === "EUR") return "\u20ac";
  if (normalizedCurrency === "GBP") return "\u00a3";

  return "$";
};

const formatPriceAmount = (amount) => {
  const normalizedAmount = typeof amount === "string"
    ? amount.replace(",", ".")
    : amount;
  const numericAmount = Number(normalizedAmount);

  return Number.isFinite(numericAmount) ? numericAmount.toFixed(2) : "0.00";
};

const PurchaseCard = ({ pricing, storeLinks = {} }) => {
  const visibleStoreLinks = STORE_BUTTONS
    .map((item) => ({
      ...item,
      url: String(storeLinks[item.key] || "").trim(),
    }))
    .filter((item) => item.url);

  return (
    <div className="purchase-card">
      <h3>Purchase</h3>

      <div className="price">
        <span className="current">
          {getCurrencySymbol(pricing.main.currency)}
          {formatPriceAmount(pricing.main.amount)}
        </span>
        <span className="currency">{pricing.main.currency}</span>
      </div>

      <p>Sales tax will be calculated at checkout where applicable.</p>

      <div className="price-other">
        {pricing.others.map((price, index) => (
          <span key={index}>
            <span className="current-other">
              {getCurrencySymbol(price.currency)}
              {formatPriceAmount(price.amount)}
            </span>
            <span className="currency-other">{price.currency}</span>
          </span>
        ))}
      </div>

      {visibleStoreLinks.length > 0 && (
        <div className="product-marketing">
          {visibleStoreLinks.map((item) => (
            <a
              key={item.key}
              className="add-to-cart"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
      <p className="requirement">
        Also available on Microsoft Marketplace!
      </p>
    </div>
  );
};

export default PurchaseCard;
