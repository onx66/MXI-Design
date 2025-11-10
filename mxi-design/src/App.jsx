import { useEffect, useRef } from "react";
import "./App.css";

export default function App() {
  const carouselRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const listRef = useRef(null);
  const thumbnailRef = useRef(null);

  useEffect(() => {
    const nextDom = nextRef.current;
    const prevDom = prevRef.current;
    const carouselDom = carouselRef.current;
    const listItemDom = listRef.current;
    const thumbnailDom = thumbnailRef.current;

    let timeRunning = 2000;
    let timeAutoNext = 4000;
    let runTimeOut;
    let runAutoRun = setTimeout(() => nextDom.click(), timeAutoNext);

    function showSlider(type) {
      const itemSlider = listItemDom.querySelectorAll(".item");
      const itemThumbnail = thumbnailDom.querySelectorAll(".item");

      if (type === "next") {
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add("next");
      } else {
        const last = itemSlider.length - 1;
        listItemDom.prepend(itemSlider[last]);
        thumbnailDom.prepend(itemThumbnail[last]);
        carouselDom.classList.add("prev");
      }

      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove("next");
        carouselDom.classList.remove("prev");
      }, timeRunning);

      clearTimeout(runAutoRun);
      runAutoRun = setTimeout(() => nextDom.click(), timeAutoNext);
    }

    nextDom.onclick = () => showSlider("next");
    prevDom.onclick = () => showSlider("prev");
  }, []);

  return (
    <>
    
      {/* header */}

      <header>
        <nav>
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">News</a>
          <a href="#">Partners</a>
          <a href="#">Contact Us</a>
        </nav>
        <img src="https://mxi-design.com/wp-content/uploads/2025/03/mxi_sitelogo.png"/>
      </header>

      {/* carousel */}

      <div className="carousel" ref={carouselRef}>
        <div className="list" ref={listRef}>
          {["aslan", "fil", "leopar", "zürafa"].map((animal) => (
            <div className="item" key={animal}>
              <img src={`/${animal}.jpg`} alt={animal} />
              <div className="content">
                <div className="author">ONUR</div>
                <div className="title">DESIGN SLIDER</div>
                <div className="topic">MAPS</div>
                <div className="des">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </div>
                <div className="buttons">
                  <button>SEE MORE</button>
                  <button>SUBSCRIBE</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* thumbnails */}

        <div className="thumbnail" ref={thumbnailRef}>
          {["aslan", "fil", "leopar", "zürafa"].map((animal) => (
            <div className="item" key={animal}>
              <img src={`/${animal}.jpg`} alt={animal} />
              <div className="content">
                <div className="title">Name Slider</div>
                <div className="des">Description</div>
              </div>
            </div>
          ))}
        </div>

        {/* arrows */}

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
