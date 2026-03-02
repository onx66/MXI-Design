import "./FeatureList.css";

const features = [
  "Real world replica",
  "High resolution PBR textures",
  "Interior modelling",
  "Custom jetways",
  "Custom taxiway signs",
  "Animated apron vehicles",
  "Night light animation for ATC tower",
];

const FeatureList = () => {
  return (
    <div className="feature-section">
      <h2>Key Features</h2>

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