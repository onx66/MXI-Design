import { useState } from "react";
import { sliderData } from "../../data/sliderData.js";
import "./Slider.css";
import MoreInfoButton from "../MoreInfoButton/MoreInfoButton.jsx";
import ViewAllButton from "../ViewAllButton/ViewAllButton.jsx";

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = sliderData.length;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <div className="slider">
      {/* MAIN SLIDES */}
      {/* MAIN SLIDES */}
      <div className="list">
        {sliderData.map((item, index) => {
          const titleParts = item.title?.split(" ") || [];
          return (
            <div
              key={index}
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
                <MoreInfoButton />
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
        {sliderData.map((item, index) => (
          <div
            key={index}
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
