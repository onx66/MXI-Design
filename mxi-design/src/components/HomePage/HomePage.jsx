import AboutUs from "../AboutUs/AboutUs";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import "./HomePage"



function HomePage() {

    return (
        <div className="home-page">
            <Header />
            <Slider />
            <AboutUs />
            <Footer />
        </div>
    )
}
export default HomePage;