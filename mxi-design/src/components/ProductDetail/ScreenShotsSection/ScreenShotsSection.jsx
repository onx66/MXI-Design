import { useCallback, useEffect, useMemo, useState } from "react";
import "./ScreenShotsSection.css";

function ScreenShotsSection({ images = [] }) {
    const [activeIndex, setActiveIndex] = useState(null);
    const visibleImages = useMemo(() => images.filter(Boolean), [images]);
    const activeImage = activeIndex !== null ? visibleImages[activeIndex] : null;
    const hasMultipleImages = visibleImages.length > 1;

    const closeLightbox = useCallback(() => {
        setActiveIndex(null);
    }, []);

    const showPreviousImage = useCallback(() => {
        setActiveIndex((currentIndex) => (
            currentIndex === 0 ? visibleImages.length - 1 : currentIndex - 1
        ));
    }, [visibleImages.length]);

    const showNextImage = useCallback(() => {
        setActiveIndex((currentIndex) => (
            currentIndex === visibleImages.length - 1 ? 0 : currentIndex + 1
        ));
    }, [visibleImages.length]);

    useEffect(() => {
        if (activeIndex === null) return;

        const previousOverflow = document.body.style.overflow;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                closeLightbox();
            }

            if (event.key === "ArrowLeft" && visibleImages.length > 1) {
                showPreviousImage();
            }

            if (event.key === "ArrowRight" && visibleImages.length > 1) {
                showNextImage();
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [activeIndex, closeLightbox, showNextImage, showPreviousImage, visibleImages.length]);

    if (visibleImages.length === 0) return null;

    return (
        <section className="screenshots-section">
            <h1>Screenshots</h1>
            <div className="screenshots-grid">
                {visibleImages.map((img, i) => (
                    <button
                        className="screenshot-thumb"
                        key={`${img}-${i}`}
                        type="button"
                        onClick={() => setActiveIndex(i)}
                        aria-label={`Open screenshot ${i + 1}`}
                        data-testid={`screenshot-thumb-${i}`}
                    >
                        <img src={img} alt={`Screenshot ${i + 1}`} />
                    </button>
                ))}
            </div>

            {activeImage && (
                <div
                    className="screenshot-lightbox"
                    onClick={closeLightbox}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Screenshot ${activeIndex + 1}`}
                    data-testid="screenshot-lightbox"
                >
                    <button
                        className="screenshot-lightbox-close"
                        type="button"
                        onClick={closeLightbox}
                        aria-label="Close screenshot"
                    >
                        &times;
                    </button>

                    {hasMultipleImages && (
                        <button
                            className="screenshot-lightbox-nav screenshot-lightbox-prev"
                            type="button"
                            onClick={(event) => {
                                event.stopPropagation();
                                showPreviousImage();
                            }}
                            aria-label="Previous screenshot"
                        >
                            &#8249;
                        </button>
                    )}

                    <img
                        className="screenshot-lightbox-image"
                        src={activeImage}
                        alt={`Screenshot ${activeIndex + 1}`}
                        onClick={(event) => event.stopPropagation()}
                    />

                    {hasMultipleImages && (
                        <button
                            className="screenshot-lightbox-nav screenshot-lightbox-next"
                            type="button"
                            onClick={(event) => {
                                event.stopPropagation();
                                showNextImage();
                            }}
                            aria-label="Next screenshot"
                        >
                            &#8250;
                        </button>
                    )}
                </div>
            )}
        </section>
    );
}

export default ScreenShotsSection;
