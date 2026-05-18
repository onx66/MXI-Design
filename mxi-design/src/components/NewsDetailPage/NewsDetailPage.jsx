import { useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useNews } from "../../context/NewsContext";
import { formatNewsContent, formatNewsDate, sortNewsItems } from "../../data/newsData";
import "./NewsDetailPage.css";

function NewsDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { newsItems, getNewsById } = useNews();

    const item = useMemo(() => getNewsById(id), [getNewsById, id]);

    const related = useMemo(() => {
        if (!item) return [];
        return sortNewsItems(newsItems)
            .filter((n) => String(n.id) !== String(item.id))
            .slice(0, 3);
    }, [item, newsItems]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [id]);

    if (!item) {
        return (
            <div className="news-detail-page">
                <Header />
                <main className="news-detail-main">
                    <div className="news-detail-state" data-testid="news-detail-notfound">
                        <i className="fa-solid fa-pen-nib"></i>
                        <h2>Post not found</h2>
                        <p>The journal entry you are looking for is not available.</p>
                        <button
                            className="btn-primary"
                            onClick={() => navigate("/news")}
                            data-testid="news-detail-back-btn"
                        >
                            <i className="fa-solid fa-arrow-left"></i>
                            <span>Back to Journal</span>
                        </button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="news-detail-page" data-testid="news-detail-page">
            <Header />

            <main className="news-detail-main">
                <section className="news-detail-hero" data-testid="news-detail-hero">
                    <div className="news-detail-hero-bg">
                        <img src={item.coverImage} alt={item.title} />
                        <div className="news-detail-hero-tint"></div>
                    </div>

                    <div className="news-detail-hero-inner">
                        <button
                            className="news-detail-back"
                            onClick={() => navigate("/news")}
                            data-testid="news-detail-back-link"
                        >
                            <i className="fa-solid fa-arrow-left"></i>
                            <span>All Entries</span>
                        </button>

                        <div className="news-detail-meta">
                            {item.category && (
                                <span className="news-detail-cat">{item.category}</span>
                            )}
                            <span className="news-detail-dot"></span>
                            <span>{formatNewsDate(item.publishedAt)}</span>
                            {item.readTime && (
                                <>
                                    <span className="news-detail-dot"></span>
                                    <span>{item.readTime}</span>
                                </>
                            )}
                        </div>

                        <h1 className="news-detail-title">{item.title}</h1>
                        <p className="news-detail-summary">{item.summary}</p>

                        {item.author && (
                            <div className="news-detail-author">
                                <div className="news-detail-author-avatar">
                                    <i className="fa-solid fa-user-pen"></i>
                                </div>
                                <div>
                                    <span className="news-detail-author-name">{item.author}</span>
                                    <span className="news-detail-author-role">MXI Design Journal</span>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                <article className="news-detail-article">
                    <div
                        className="news-detail-content"
                        data-testid="news-detail-content"
                        dangerouslySetInnerHTML={{ __html: formatNewsContent(item.content) }}
                    />

                    {item.tags && item.tags.length > 0 && (
                        <div className="news-detail-tags" data-testid="news-detail-tags">
                            <i className="fa-solid fa-tag"></i>
                            {item.tags.map((t) => (
                                <span key={t} className="news-detail-tag">
                                    #{t}
                                </span>
                            ))}
                        </div>
                    )}

                    <div className="news-detail-share">
                        <span>Share:</span>
                        <a
                            href={`https://x.com/intent/tweet?text=${encodeURIComponent(
                                item.title
                            )}&url=${encodeURIComponent(window.location.href)}`}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Share on X"
                        >
                            <i className="fa-brands fa-x-twitter"></i>
                        </a>
                        <a
                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                                window.location.href
                            )}`}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Share on LinkedIn"
                        >
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                        <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                                window.location.href
                            )}`}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Share on Facebook"
                        >
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <button
                            className="news-detail-share-copy"
                            onClick={() => {
                                navigator.clipboard?.writeText(window.location.href);
                            }}
                            aria-label="Copy link"
                            data-testid="news-detail-copy-link"
                        >
                            <i className="fa-solid fa-link"></i>
                        </button>
                    </div>
                </article>

                {related.length > 0 && (
                    <section className="news-detail-related" data-testid="news-detail-related">
                        <div className="news-detail-related-header">
                            <span className="section-tag">Keep Reading</span>
                            <h2>More journal notes</h2>
                            <div className="news-detail-related-line"></div>
                        </div>

                        <div className="news-detail-related-grid">
                            {related.map((n) => (
                                <button
                                    key={n.id}
                                    className="news-detail-related-card"
                                    onClick={() => navigate(`/news/${n.id}`)}
                                    data-testid={`news-related-${n.id}`}
                                >
                                    <div className="news-detail-related-image">
                                        <img src={n.coverImage} alt={n.title} loading="lazy" />
                                    </div>
                                    <div className="news-detail-related-body">
                                        {n.category && (
                                            <span className="news-detail-related-cat">
                                                {n.category}
                                            </span>
                                        )}
                                        <h4>{n.title}</h4>
                                        <span className="news-detail-related-date">
                                            {formatNewsDate(n.publishedAt)}
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </section>
                )}
            </main>

            <Footer />
        </div>
    );
}

export default NewsDetailPage;
