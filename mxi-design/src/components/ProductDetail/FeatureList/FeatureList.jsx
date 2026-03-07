import "./FeatureList.css";

const defaultFeatures = [
  "Real world replica of the airport",
  "Parallax windows for all airport buildings around",
  "Custom CGL covering for the runways",
  "Custom animated Windsock and flags",
  "Custom taxiway signs",
  "Ambient sound effects and announcements",
  "Dynamic GSX doors in the terminal building",
  "Night light animation for ATC tower",
  "High resolution PBR textures and modelling",
];

const FeatureList = ({ features = defaultFeatures }) => {
  return (
    <div className="feature-section\" data-testid="feature-list">
      <h1>Key Features</h1>
      <div className="feature-grid">
        {features.map((item, i) => (
          <div key={i} className="feature-item" data-testid={`feature-item-${i}`}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureList;