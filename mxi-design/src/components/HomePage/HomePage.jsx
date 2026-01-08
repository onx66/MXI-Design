 import AboutUs from "../AboutUs/AboutUs";
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import "./HomePage"



 function HomePage () {

    return(
        <div className="home-page">
            <Header />
            <Slider />
            <AboutUs />
        </div>  
    )
 }
 export default HomePage;