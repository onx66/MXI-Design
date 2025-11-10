// App.jsx
import { useEffect, useRef } from "react";
import "./App.css";

export default function App() {
  const carouselRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const listRef = useRef(null);
  const thumbnailRef = useRef(null);

  useEffect(() => {
    const nextDom  = nextRef.current;
    const prevDom  = prevRef.current;
    const carousel = carouselRef.current;
    const listDom  = listRef.current;
    const thumbDom = thumbnailRef.current;

    const timeRunning = 350;

    /* --------------  H E L P E R  -------------- */
    const showSlider = (type) => {
      const items       = [...listDom.querySelectorAll(".item")];
      const thumbItems  = [...thumbDom.querySelectorAll(".item")];

      if (type === "next") {
        listDom.appendChild(items[0]);
        thumbDom.appendChild(thumbItems[0]);
        carousel.classList.remove("prev");
        carousel.classList.add("next");
      } else if (type === "prev") {
        listDom.prepend(items[items.length - 1]);
        thumbDom.prepend(thumbItems[thumbItems.length - 1]);
        carousel.classList.remove("next");
        carousel.classList.add("prev");
      } else {
       
        const currentFirst = items[0];
        
        const diff =
          type -
          items.findIndex((it) => it.dataset.key === currentFirst.dataset.key);

        for (let i = 0; i < Math.abs(diff); i++) {
          if (diff > 0) {
            listDom.appendChild(listDom.querySelector(".item"));
            thumbDom.appendChild(thumbDom.querySelector(".item"));
          } else {
            listDom.prepend(listDom.querySelectorAll(".item").item(-1));
            thumbDom.prepend(thumbDom.querySelectorAll(".item").item(-1));
          }
        }
        carousel.classList.remove("next", "prev");
      }

      
      setTimeout(() => carousel.classList.remove("next", "prev"), timeRunning);
    };

    /* --------------  E V E N T S  -------------- */

    nextDom.onclick = () => showSlider("next");
    prevDom.onclick = () => showSlider("prev");

   
    thumbDom.querySelectorAll(".item").forEach((el, idx) => {
      el.onclick = () => showSlider(idx);
    });
  }, []);

  /* --------------  R E N D E R  -------------- */

  const animals = ["aslan", "fil", "leopar", "zürafa"];

  return (
    <>
      <header>
        <nav>
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">News</a>
          <a href="#">Partners</a>
          <a href="#">Contact Us</a>
        </nav>
        <img
          src="https://mxi-design.com/wp-content/uploads/2025/03/mxi_sitelogo.png"
          alt="logo"
        />
      </header>
      <div className="carousel" ref={carouselRef}>
        <div className="list" ref={listRef}>
          {animals.map((animal) => (
            <div className="item" key={animal} data-key={animal}>
              <img src={`/${animal}.jpg`} alt={animal} />
              <div className="content">
                <div className="author">LGKP</div>
                <div className="title">KARPOTHOS</div>
                <div className="topic">AIRPORT</div>
                <div className="des">
                  Karpathos Airport (IATA: AOK, ICAO: LGKP) is an airport on the island of Karpathos, Greece. The airport is situated on the southeastern part of Karpathos island, about 14 km away from the capital, Pigadia. The Karpathos Airport is one of the smallest international airports in Greece, but it is very important for the island because this is the primary connection between Karpathos and other Greek islands, and of course several countries of Europe.
                </div>
                <div className="buttons">
                  <button>SEE MORE</button>
                  <button>SUBSCRIBE</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="thumbnail" ref={thumbnailRef}>
          {animals.map((animal) => (
            <div className="item" key={animal} data-key={animal}>
              <img src={`/${animal}.jpg`} alt={animal} />
              <div className="content">
                <div className="title">Name Slider</div>
                <div className="des">Description</div>
              </div>
            </div>
          ))}
        </div>
        <div className="arrows">
          <button id="prev" ref={prevRef}>
            {"<"}
          </button>
          <button id="next" ref={nextRef}>
            {">"}
          </button>
        </div>
        <div className="time"></div>
      </div>
    </>
  );
}