import "./ScreenShotsSection.css";

function ScreenShotsSection({ images = [] }) {
    const visibleImages = images.filter(Boolean);

    if (visibleImages.length === 0) return null;

    return (
        <section className="screenshots-section">
            <h1>Screenshots</h1>
            <div className="screenshots-grid">
                {visibleImages.map((img, i) => (
                    <img key={`${img}-${i}`} src={img} alt={`Screenshot ${i + 1}`} />
                ))}
            </div>
        </section>
    );
}

export default ScreenShotsSection;
