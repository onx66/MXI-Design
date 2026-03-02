import "./ScreenShotsSection.css";
import { sliderData } from "../../../data/sliderData.js";

function ScreenShotsSection() {

    

    

    return (
        <section className="screenshots-section">
            <h2>Screenshots</h2>

            <div className="screenshots-grid">
                {sliderData.map((img, i) => (
                    <img key={i} src={img.img} />
                ))}
            </div>
        </section>
    );
}

export default ScreenShotsSection;