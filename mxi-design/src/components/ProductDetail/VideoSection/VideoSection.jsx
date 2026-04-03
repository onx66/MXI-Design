import "./VideoSection.css";

// URL → EMBED çevirici
function getEmbedUrl(url) {
    try {
        const parsedUrl = new URL(url);

        let videoId;

        // youtube.com/watch?v=
        if (parsedUrl.hostname.includes("youtube.com")) {
            videoId = parsedUrl.searchParams.get("v");
        }

        // youtu.be/xxx
        if (parsedUrl.hostname.includes("youtu.be")) {
            videoId = parsedUrl.pathname.slice(1);
        }

        // zaten embed ise direkt kullan
        if (parsedUrl.pathname.includes("/embed/")) {
            return url;
        }

        if (!videoId) return null;

        return `https://www.youtube.com/embed/${videoId}`;
    } catch {
        return null;
    }
}

function VideoSection({ video }) {

    if (!video) return null;

    const embedUrl = getEmbedUrl(video);

    if (!embedUrl) return null;

    return (
        <section className="video-section">
            <h1>Videos</h1>

            <div className="video-wrapper">
                <iframe
                    src={embedUrl}
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