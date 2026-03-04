import "./FeatureList.css";

const features = [
  "Real world replica of Istanbul Sabiha Gökçen Airport",
  "Parallax windows for all airport buildings around",
  "Custom CGL covering for the runways",
  "Custom animated Windsock and flags",
  "Custom taxiway signsAmbient sound effects and announcements for the Terminal building and both ATC towers",
  "Dynamic GSX doors in the terminal building can trigger with Boarding/Deboarding",
  "Night light animation for ATC towerHigh resolution PBR textures and modelling",
  "Night light animation for ATC towerHigh resolution PBR textures and modelling",
  "Night light animation for ATC towerHigh resolution PBR textures and modelling",
  "Night light animation for ATC towerHigh resolution PBR textures and modelling",
  "Night light animation for ATC towerHigh resolution PBR textures and modelling",
  "Night light animation for ATC towerHigh resolution PBR textures and modelling",
  "Night light animation for ATC towerHigh resolution PBR textures and modelling",
];

const FeatureList = () => {
  return (
    <div className="feature-section">
      <h1>Key Features</h1>
      <div className="feature-grid">
        {features.map((item, i) => (
          <div key={i} className="feature-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureList;