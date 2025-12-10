
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";
import Slider from "../Slider/Slider.jsx";
import WorldMap from "../WorldMap/WorldMap.jsx";
import "./Home.css";

function Home() {
    return (
        <>
            <Header />
            <Slider />
            <WorldMap />
            <Footer />
        </>
    );
}

export default Home;