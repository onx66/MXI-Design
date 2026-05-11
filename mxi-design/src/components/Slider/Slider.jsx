import { useEffect, useState } from "react";
import "./Slider.css";
import MoreInfoButton from "../MoreInfoButton/MoreInfoButton.jsx";
import { useProducts } from "../../context/ProductContext.jsx";


function Slider() {
  const { products } = useProducts();
  const configuredSliderProducts = products
    .filter((product) => product.homepageSliderOrder >= 1 && product.homepageSliderOrder <= 4)
    .sort((a, b) => a.homepageSliderOrder - b.homepageSliderOrder);
  const sliderProducts = configuredSliderProducts.length > 0
    ? configuredSliderProducts.slice(0, 4)
    : products.slice(0, 4);
  const [activeIndex, setActiveIndex] = useState(0);
  const total = sliderProducts.length;

  useEffect(() => {
    if (activeIndex >= total) {
      setActiveIndex(0);
    }
  }, [activeIndex, total]);


  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };


  if (total === 0) return null;

  return (
    <div className="slider">
      {/* MAIN SLIDES */}
      {/* MAIN SLIDES */}
      <div className="list">
        {sliderProducts.map((item, index) => {
          const titleParts = item.title?.split(" ") || [];
          return (
            <div
              key={item.id ?? item.code ?? index}
              className={`item ${index === activeIndex ? "active" : ""}`}
            >
              <img src={item.img} alt={item.title} />

              <div className="content">
                {titleParts.length >= 3 ? (
                  <>
                    <h1>{titleParts[0]}</h1>
                    <h1>
                      {titleParts.slice(1).join(" ")}{" "}
                      <span className="subtitle">{item.subtitle}</span>
                    </h1>
                  </>
                ) : (
                  <h1>
                    {item.title}{" "}
                    <span className="subtitle">{item.subtitle}</span>
                  </h1>
                )}

                <p>{item.desc}</p>
                <MoreInfoButton productId={item.id ?? index} />
              </div>
            </div>
          );
        })}
      </div>
      {/* ARROWS */}
      <div className="arrows">
        <button onClick={prevSlide}>&lt;</button>
        <button onClick={nextSlide}>&gt;</button>
      </div>

      {/* THUMBNAILS */}
      <div className="thumbnail">
        {sliderProducts.map((item, index) => (
          <div
            key={item.id ?? item.code ?? index}
            className={`item ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <img src={item.img} alt={item.title} />
            <div className="content">
              <div className="content-airport-name">
                {(() => {
                  const words = item.title.split(" ");
                  return (
                    <h2>
                      <span className="title-top">{words[0]}</span>
                      <span className="title-bottom">
                        {words.slice(1).join(" ")}
                      </span>
                    </h2>
                  );
                })()}
                <p>{item.subtitle}</p>
              </div>

              <div className="content-airport-code">{item.code}</div>
            </div>
          </div>
        ))}
      </div>

      {/* VIEW ALL */}
      <div className="view-all-container">

      </div>
    </div>
  );
}

export default Slider;
