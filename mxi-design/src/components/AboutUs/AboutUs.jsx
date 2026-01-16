
import "./AboutUs.css";
import xplane from "../../assets/images/xplane-software.png"
import mfs from "../../assets/images/microsoft-flight-simulator.png"


function AboutUs() {

    return (
        <div className="about-us-section">
            <h1>About Us</h1>
            <div className="about-us-line"></div>
            <div className="about-us-content">
                <div className="about-us-text">
                    <p>MXI Design develops high-quality and realistic
                        airport sceneries for X-Plane and Microsoft Flight
                        Simulator. Founded in 2018, our mission has
                        always been to enhance the flight simulation
                        experience by bringing real-world airports to life
                        with accuracy, detail, and immersion.</p>
                    <div className="microsoft-text">
                        <div className="microsoft-text-logo "> <img src={mfs} alt="" /></div>
                        <div className="microsoft-text-logo"><img src={xplane} alt="" /></div>
                    </div>
                </div>
                <div className="about-us-logo">
                    <div className="about-us-logo-img">
                        <img className="logo" src="https://mxi-design.com/wp-content/uploads/2025/03/mxi_sitelogo.png" />
                    </div>
                    <div className="about-us-logo-text">
                        <div className="about-us-user">
                            <h2>25+</h2>
                            <p>Airports</p>
                        </div>
                        <div className="about-us-user">
                            <h2>2018</h2>
                            <p>Founded</p>
                        </div>
                        <div className="about-us-user">
                            <h2>10K+</h2>
                            <p>Users</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutUs;