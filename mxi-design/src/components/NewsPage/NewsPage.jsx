import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { newsData, formatNewsDate } from "../../data/newsData";
import "./NewsPage.css";

function NewsPage() {
    const navigate = useNavigate();

    // En yeniden eskiye sırala
    const sorted = useMemo(
        () =>
            [...newsData].sort(
                (a, b) =>
                    new Date(b.publishedAt || 0).getTime() -
                    new Date(a.publishedAt || 0).getTime()
            ),
        []
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
                {/* HEADER / HERO */}
                <section className="news-header" data-testid="news-header">
                    <div className="news-header-glow news-header-glow-1"></div>
                    <div className="news-header-glow news-header-glow-2"></div>

                    <div className="news-header-inner">
                        <span className="section-tag">Aviation News</span>
                        <h1>
                            News from the <span className="gradient-text">flight world.</span>
                        </h1>
                        <div className="news-header-line"></div>
                        <p>
                            Airlines, aircraft, airports, ATC and the flight-sim industry — the
                            stories shaping aviation, curated for the people who actually fly,
                            control and build it.
                        </p>
                    </div>
                </section>

                {/* FEATURED */}
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
                                <span className="news-featured-badge">Featured</span>
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
                                <p>{featured.summary}</p>
                                <span className="news-read-more">
                                    Read the full story
                                    <i className="fa-solid fa-arrow-right"></i>
                                </span>
                            </div>
                        </button>
                    </section>
                )}

                {/* LIST */}
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
                                        Read more
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
