import { useEffect, useState } from "react";
import "./Slider.css";
import { Link } from "react-router-dom";

function Slider() {
    const [sliders, setSliders] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        fetch("http://localhost:8080/api/sliders")
            .then(res => res.json())
            .then(data => setSliders(data.slice(0,5)))
            .catch(err => console.error(err));
    }, []);

    if (sliders.length === 0) return null;

    const next = () => {
        setActive((prev) => (prev + 1) % sliders.length);
    };

    const prev = () => {
        setActive((prev) => (prev - 1 + sliders.length) % sliders.length);
    };

    return (
        <div className="slider">
            <div className="list">
                {sliders.map((item, index) => (
                    <div
                        key={item.id}
                        className={`item ${active === index ? "active" : ""}`}
                    >
                        <img src={item.imageUrl} alt={item.title} />
                        <div className="content">
                            <p>{item.title}</p>
                            <h2>Airport</h2>
                            <p>{item.description}</p>
                            <button>More Info</button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="arrows">
                <button onClick={prev}>{"<"}</button>
                <button onClick={next}>{">"}</button>
            </div>

            <div className="thumbnail">
                {sliders.map((item, index) => (
                    <div
                        key={item.id}
                        className={`item ${active === index ? "active" : ""}`}
                        onClick={() => setActive(index)}
                    >
                        <img src={item.imageUrl} alt={item.title} />
                        <div className="content">{item.title}</div>
                    </div>
                ))}
            </div>

            <div className="view-all-container">
                <Link to="/products" className="view-all-btn">
                    View All Products
                </Link>
            </div>
        </div>
    );
}

export default Slider;
