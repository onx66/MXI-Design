import AboutUs from "../AboutUs/AboutUs.jsx";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import Slider from "../Slider/Slider.jsx";
import WorldMap from "../WorldMap/WorlMap.jsx";

import "./HomePage.css"



function HomePage() {

    return (
        <div className="home-page">
            <Header />
            <Slider />
            <AboutUs />
            <div className="world-map-section">
                <h1>Explore the World</h1>
                <div className="world-map-line"></div>
                <p>Discover our airports spanning across continents</p>
                <WorldMap />
            </div>

            <Footer />
        </div>
    )
}
export default HomePage;