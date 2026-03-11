import { useParams } from "react-router-dom";

import { sliderData } from "../../data/sliderData.js";
import "./ProductDetail.css";
import PurchaseCard from "./PurchaseCard/PurchaseCard.jsx";
import FeatureList from "./FeatureList/FeatureList.jsx";
import Header from "../Header/Header.jsx";
import ScreenShotsSection from "./ScreenShotsSection/ScreenShotsSection.jsx";
import VideoSection from "./VideoSection/VideoSection.jsx";
import Footer from "../Footer/Footer.jsx";
import mfs from "../../assets/images/microsoft-flight-simulator.png"


function ProductDetail() {
  const { id } = useParams();
  const productIndex = parseInt(id) || 0;
  const product = sliderData[productIndex] || sliderData[0];
  return (
    <section className="product-detail">
      <Header />
      <div className="hero">
        <img src={product.img} alt={product.title} className="hero-bg" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <img
            className="product-detail-logo"
            src="https://mxi-design.com/wp-content/uploads/2025/03/mxi_sitelogo.png"
            alt="MXI Design Logo"
            data-testid="header-logo"
          />
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
          <div className="discount-banner">
            This product is discounted by <strong>40%</strong> with the
            OrbX End of Year Sale 2025 (40%).
          </div>
          <p className="description">{product.desc}</p>
          <FeatureList features={product.features} />
        </div>
        <div className="right">
          <PurchaseCard />
        </div>
      </div>
      <div className="screen-shots-container">
        <ScreenShotsSection />
      </div>
      <div className="screen-shots-container">
        <VideoSection />
      </div>
      <div className="compatibility">
        <h1>Compatibility</h1>
        <div className="general">
          <h2>General</h2>
          <p>The download size of this product is 1.31 GB. It uses 3.44 GB when installed.</p>
        </div>
        <div className="support-simulation">
          <h2>Supported Simulators </h2>
          <p>This product is compatible with the following simulators:</p>
          <div className="support-simulation-platform">
            <img src={mfs} alt="" />
            <img src={mfs} alt="" />
          </div>
        </div>
        <div className="operating-system">
          <h2>Supported Operating Systems</h2>
          <p>This product is compatible with the following operatin systems:</p>
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