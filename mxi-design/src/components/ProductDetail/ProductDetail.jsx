import { useParams } from "react-router-dom";

import "./ProductDetail.css";
import PurchaseCard from "./PurchaseCard/PurchaseCard.jsx";
import FeatureList from "./FeatureList/FeatureList.jsx";
import Header from "../Header/Header.jsx";
import ScreenShotsSection from "./ScreenShotsSection/ScreenShotsSection.jsx";
import VideoSection from "./VideoSection/VideoSection.jsx";
import Footer from "../Footer/Footer.jsx";
import { useProducts } from "../../context/ProductContext.jsx";

const getProductPlatforms = (product) => {
  return product.platforms?.length ? product.platforms : ["MSFS2020", "MSFS2024"];
};

const getSimulatorLabels = (product) => {
  const platforms = getProductPlatforms(product);
  const labels = platforms.map((platform) => {
    if (platform === "MSFS2020") return "MSFS2020";
    if (platform === "MSFS2024") return "MSFS 2024";
    return "X-Plane";
  });

  return [...new Set(labels)];
};

function ProductDetail() {
  const { id } = useParams();
  const { getProductByRouteId, isLoading } = useProducts();
  const product = getProductByRouteId(id);

  if (!product) {
    return (
      <section className="product-detail">
        <Header />
        <div className="detail-container">
          <p className="description">{isLoading ? "Loading product..." : "Product not found."}</p>
        </div>
        <Footer />
      </section>
    );
  }

  return (
    <section className="product-detail">
      <Header />
      <div className="hero">
        <img src={product.img} alt={product.title} className="hero-bg" />
        <div className="hero-overlay"></div>
        <div className="hero-content">

          <div className={`airport-code code-${product.code}`}>
            {product.code}
          </div>
          <h1>
            {product.title} {product.subtitle}
          </h1>
        </div>
      </div>
      <div className="detail-container">
        <div className="left">
       
          <p className="description">{product.desc}</p>
          <FeatureList features={product.features} />
        </div>
        <div className="right">
          <PurchaseCard pricing={product.pricing} storeLinks={product.storeLinks} />
        </div>
      </div>
      <div className="screen-shots-container">
        <ScreenShotsSection images={product.images || []} />
      </div>
      <div className="screen-shots-container">
        <VideoSection video={product.videourl} />
      </div>
      <div className="compatibility">
        <h1>Compatibility</h1>
        <div className="general">
          <h2>General</h2>
          <p>{product.generalDesc}</p>
        </div>
        <div className="support-simulation">
          <h2>Supported Simulators </h2>
          <p>This product is compatible with the following simulators:</p>
          <div className="support-simulation-platform">
            {getSimulatorLabels(product).map((label) => (
              <span className="mfs-desc" key={label}>{label}</span>
            ))}
          </div>
        </div>
        <div className="operating-system">
          <h2>Supported Operating Systems</h2>
          <p>This product is compatible with the following operatin systems:</p>
          <div className="operating-system-platform">
            <span className="os-desc">
              <i className="fa-brands fa-windows"></i>
              Windows
            </span>
          </div>
        </div>
        {/* Location Map Section */}
        <div className="location-section">
          <h2>Location</h2>
          <p className="location-subtitle">{product.title} {product.subtitle} - {product.code}</p>
          <div className="map-container" data-testid="google-map">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d50000!2d${product.lng}!3d${product.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2str!4v1234567890`}
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '16px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${product.title} Location Map`}
            />
          </div>
          <div className="coordinates-info">
            <div className="coord-item">
              <span className="coord-label">Latitude</span>
              <span className="coord-value">{product.lat}°</span>
            </div>
            <div className="coord-item">
              <span className="coord-label">Longitude</span>
              <span className="coord-value">{product.lng}°</span>
            </div>
            <div className="coord-item">
              <span className="coord-label">ICAO Code</span>
              <span className="coord-value">{product.code}</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default ProductDetail;
