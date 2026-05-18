import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useNews } from "../../context/NewsContext";
import { formatNewsDate, sortNewsItems } from "../../data/newsData";
import "./NewsPage.css";

function truncateText(value, maxLength = 150) {
    const text = String(value || "").trim();
    if (text.length <= maxLength) return text;

    const sliced = text.slice(0, maxLength).trimEnd();
    const lastSpace = sliced.lastIndexOf(" ");
    const cleanText = lastSpace > 90 ? sliced.slice(0, lastSpace) : sliced;

    return `${cleanText}...`;
}

function NewsPage() {
    const navigate = useNavigate();
    const { newsItems } = useNews();

    const sorted = useMemo(
        () => sortNewsItems(newsItems),
        [newsItems]
    );

    const featured = sorted[0];
    const rest = sorted.slice(1);

    const goToDetail = (n) => {
        navigate(`/news/${n.id}`);
    };

    return (
        <div className="news-page" data-testid="news-page">
            <Header />

            <main className="news-main">
                <section className="news-header" data-testid="news-header">
                    <div className="news-header-glow news-header-glow-1"></div>
                    <div className="news-header-glow news-header-glow-2"></div>

                    <div className="news-header-inner">
                        <span className="section-tag">MXI Journal</span>
                        <h1>
                            Notes from the <span className="gradient-text">design desk.</span>
                        </h1>
                        <div className="news-header-line"></div>
                        <p>
                            Project logs, release notes and behind-the-scenes thoughts from the
                            scenery work I build for flight simulation.
                        </p>
                    </div>
                </section>

                {sorted.length === 0 && (
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

                {rest.length > 0 && (
                    <section className="news-list" data-testid="news-list">
                        {rest.map((n) => (
                            <button
                                key={n.id}
                                className="news-card"
                                onClick={() => goToDetail(n)}
                                data-testid={`news-card-${n.id}`}
                            >
                                <div className="news-card-image">
                                    <img src={n.coverImage} alt={n.title} loading="lazy" />
                                    {n.category && (
                                        <span className="news-card-cat">{n.category}</span>
                                    )}
                                </div>
                                <div className="news-card-body">
                                    <div className="news-meta news-meta-sm">
                                        <span>{formatNewsDate(n.publishedAt)}</span>
                                        {n.readTime && (
                                            <>
                                                <span className="news-meta-dot"></span>
                                                <span>{n.readTime}</span>
                                            </>
                                        )}
                                    </div>
                                    <h3>{n.title}</h3>
                                    <p>{n.summary}</p>
                                    <span className="news-card-link">
                                        Open entry
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </span>
                                </div>
                            </button>
                        ))}
                    </section>
                )}
            </main>

            <Footer />
        </div>
    );
}

export default NewsPage;
