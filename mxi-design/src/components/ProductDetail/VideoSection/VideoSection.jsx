import "./VideoSection.css";

function VideoSection() {
    return (
        <section className="video-section">
            <h1>Videos</h1>

            <div className="video-wrapper">
                <iframe
                    src="https://www.youtube.com/embed/UPQUECGO4EA?start=2"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    );
}

export default VideoSection;