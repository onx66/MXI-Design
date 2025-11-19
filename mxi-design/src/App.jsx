import { useState } from "react";
import "./App.css";
import { sliderData } from "./assets/SliderData";

export default function App() {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((prev) => (prev + 1) % sliderData.length);
  };

  const prev = () => {
    setActive((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  };

  return (
    <>
      {/* HEADER */}
      <header>
        <div className="logo">
          <img src="https://mxi-design.com/wp-content/uploads/2025/03/mxi_sitelogo.png" />
        </div>
        <ul className="menu">
          <li>Home</li>
          <li>Products</li>
          <li>News</li>
          <li>Partners</li>
          <li>Contact Us</li>
        </ul>
      </header>

      {/* SLIDER */}
      <div className="slider">
        {/* LIST ITEMS */}
        <div className="list">
          {sliderData.map((item, index) => (
            <div
              key={index}
              className={`item ${active === index ? "active" : ""}`}
            >
              <img src={item.img} />
              <div className="content">
                <p>{item.title}</p>
                <h2>{item.subtitle}</h2>
                <p>{item.desc}</p>
                <button>More Info</button>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON ARROWS */}
        <div className="arrows">
          <button onClick={prev}>{"<"}</button>
          <button onClick={next}>{">"}</button>
        </div>

        {/* THUMBNAILS */}
        <div className="thumbnail">
          {sliderData.map((item, index) => (
            <div
              key={index}
              className={`item ${active === index ? "active" : ""}`}
              onClick={() => setActive(index)}
            >
              <img src={item.img} />
              <div className="content">
                {item.title} Airport
              </div>
            </div>
          ))}
        </div>

        {/* VIEW ALL PRODUCTS BUTTON */}
        <div className="view-all-container">
          <button className="view-all-btn">View All Products</button>
        </div>
      </div>
    </>
  );
}
