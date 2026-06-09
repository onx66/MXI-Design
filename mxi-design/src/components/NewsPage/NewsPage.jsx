import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useNews } from "../../context/NewsContext";
import { formatNewsDate, sortNewsItems } from "../../data/newsData";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import "./NewsPage.css";

function truncateText(value, maxLength = 150) {
    const text = String(value || "").trim();
    if (text.length <= maxLength) return text;

    const sliced = text.slice(0, maxLength).trimEnd();
    const lastSpace = sliced.lastIndexOf(" ");
    const cleanText = lastSpace > 90 ? sliced.slice(0, lastSpace) : sliced;

    return `${cleanText}...`;
}

function NewsPage({ showAllEntries = false }) {
    const navigate = useNavigate();
    const width = useWindowWidth();
    const [currentPage, setCurrentPage] = useState(0);
    const { newsItems, isLoading, error } = useNews();

    const sorted = useMemo(
        () => sortNewsItems(newsItems),
        [newsItems]
    );

    const featured = showAllEntries ? null : sorted[0];
    const listItems = showAllEntries ? sorted : sorted.slice(1);
    const previewColumns = width <= 640 ? 1 : width <= 1050 ? 2 : 3;
    const previewPageSize = previewColumns * 2;
    const pageCount = showAllEntries
        ? 1
        : Math.max(1, Math.ceil(listItems.length / previewPageSize));
    const hasPagination = !showAllEntries && listItems.length > 0;
    const visibleListItems = showAllEntries
        ? listItems
        : listItems.slice(
            currentPage * previewPageSize,
            currentPage * previewPageSize + previewPageSize
        );

    useEffect(() => {
        setCurrentPage(0);
    }, [previewPageSize, listItems.length, showAllEntries]);

    useEffect(() => {
        setCurrentPage((page) => Math.min(page, pageCount - 1));
    }, [pageCount]);

    const goToDetail = (n) => {
        navigate(`/news/${n.id}`);
    };

    const goToAllNews = () => {
        navigate("/news/all");
    };

    const goToNewsPage = (page) => {
        setCurrentPage(Math.min(Math.max(page, 0), pageCount - 1));
    };

    const renderNewsCard = (n) => (
        <button
            key={n.id}
            className="news-card"
            onClick={() => goToDetail(n)}
            data-testid={`news-card-${n.id}`}
        >
            <div className="news-card-image">
                <img src={n.coverImage} alt={n.title} loading="lazy" />
            </div>
            <div className="news-card-body">
                <h3>{n.title}</h3>
                <p>{truncateText(n.summary, 260)}</p>
            </div>
        </button>
    );

    return (
        <div className="news-page" data-testid="news-page">
            <Header />

            <main className="news-main">
                <section className="news-header" data-testid="news-header">
                    <div className="news-header-glow news-header-glow-1"></div>
                    <div className="news-header-glow news-header-glow-2"></div>

                    <div className="news-header-inner">
                        <span className="section-tag">
                            {showAllEntries ? "MXI Archive" : "MXI Journal"}
                        </span>
                        <h1>
                            {showAllEntries ? (
                                <>
                                    All <span className="gradient-text">journal entries.</span>
                                </>
                            ) : (
                                <>
                                    Notes from the <span className="gradient-text">design desk.</span>
                                </>
                            )}
                        </h1>
                        <div className="news-header-line"></div>
                        <p>
                            {showAllEntries
                                ? "Every project note, release log and behind-the-scenes update in one place."
                                : "Project logs, release notes and behind-the-scenes thoughts from the scenery work I build for flight simulation."}
                        </p>
                    </div>
                </section>

                {isLoading && sorted.length === 0 && (
                    <section className="news-state" data-testid="news-loading-state">
                        <span className="news-spinner"></span>
                        <span>Loading journal entries...</span>
                    </section>
                )}

                {!isLoading && error && sorted.length === 0 && (
                    <section className="news-state news-state-error" data-testid="news-error-state">
                        <i className="fa-solid fa-triangle-exclamation"></i>
                        <span>Journal entries could not be loaded.</span>
                    </section>
                )}

                {!isLoading && !error && sorted.length === 0 && (
                    <section className="news-state" data-testid="news-empty-state">
                        <i className="fa-solid fa-pen-nib"></i>
                        <span>No journal entries have been published yet.</span>
                    </section>
                )}

                {featured && (
                    <section className="news-featured" data-testid="news-featured">
                        <button
                            className="news-featured-card"
                            onClick={() => goToDetail(featured)}
                            data-testid={`news-featured-${featured.id}`}
                        >
                            <div className="news-featured-image">
                                <img src={featured.coverImage} alt={featured.title} />
                                <div className="news-featured-tint"></div>
                                <span className="news-featured-badge">Latest Entry</span>
                            </div>

                            <div className="news-featured-body">
                                <div className="news-meta">
                                    {featured.category && (
                                        <span className="news-meta-cat">{featured.category}</span>
                                    )}
                                    <span className="news-meta-dot"></span>
                                    <span>{formatNewsDate(featured.publishedAt)}</span>
                                    {featured.readTime && (
                                        <>
                                            <span className="news-meta-dot"></span>
                                            <span>{featured.readTime}</span>
                                        </>
                                    )}
                                </div>
                                <h2>{featured.title}</h2>
                                <p>{truncateText(featured.summary)}</p>
                                <span className="news-read-more">
                                    Read the entry
                                    <i className="fa-solid fa-arrow-right"></i>
                                </span>
                            </div>
                        </button>
                    </section>
                )}

                {listItems.length > 0 && (
                    <section
                        className={`news-list-section ${showAllEntries ? "news-list-section-all" : ""}`}
                    >
                        <div className="news-list-toolbar">
                            <div>
                                <span className="news-list-eyebrow">
                                    {showAllEntries ? "Archive" : "More notes"}
                                </span>
                                <h2>{showAllEntries ? "All Entries" : "Recent Entries"}</h2>
                            </div>

                            {!showAllEntries && (
                                <div className="news-list-actions">
                                    <button
                                        type="button"
                                        className="news-view-all"
                                        onClick={goToAllNews}
                                    >
                                        <span>View all entries</span>
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </button>
                                </div>
                            )}
                        </div>

                        {showAllEntries ? (
                            <div className="news-list news-list-all" data-testid="news-list">
                                {visibleListItems.map(renderNewsCard)}
                            </div>
                        ) : (
                            <div className="news-list news-list-preview" data-testid="news-list">
                                {visibleListItems.map(renderNewsCard)}
                            </div>
                        )}

                        {hasPagination && (
                            <div className="news-pagination" aria-label="Recent entries pages">
                                {Array.from({ length: pageCount }, (_, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        className={`news-page-number ${currentPage === index ? "active" : ""}`}
                                        onClick={() => goToNewsPage(index)}
                                        aria-label={`Show page ${index + 1}`}
                                        aria-current={currentPage === index ? "page" : undefined}
                                    >
                                        {index + 1}
                                    </button>
                                ))}

                                <button
                                    type="button"
                                    className="news-page-next"
                                    onClick={() => goToNewsPage(currentPage + 1)}
                                    disabled={currentPage >= pageCount - 1}
                                    aria-label="Next recent entries page"
                                >
                                    <i className="fa-solid fa-chevron-right"></i>
                                </button>
                            </div>
                        )}
                    </section>
                )}
            </main>

            <Footer />
        </div>
    );
}

export default NewsPage;
