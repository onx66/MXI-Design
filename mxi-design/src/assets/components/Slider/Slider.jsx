import { sliderData } from "../../SliderData";
import { useState } from "react";
import "./Slider.css";
import { Link } from "react-router-dom";


function Slider() {
    const [active, setActive] = useState(0);
    const next = () => {
        setActive((prev) => (prev + 1) % sliderData.length);
    };

    const prev = () => {
        setActive((prev) => (prev - 1 + sliderData.length) % sliderData.length);
    };

    return (
        <>
            {/* SLIDER */}
            <div className="slider">
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

                {/* ARROWS */}
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
                            <div className="content">{item.title} Airport</div>
                        </div>
                    ))}
                </div>

                {/* VIEW ALL BUTTON */}
                <div className="view-all-container">
                    <button className="view-all-btn"> <Link to="/products"> View All Products</Link>  </button>
                </div>
            </div>
        </>
    )
}

export default Slider;