import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./AboutUsPage.css";

function AboutUsPage() {
    const navigate = useNavigate();

    const stats = [
        { value: "25+", label: "Airports Delivered" },
        { value: "2018", label: "Founded" },
        { value: "10K+", label: "Active Pilots" },
        { value: "40+", label: "Countries Reached" },
    ];

    const values = [
        {
            icon: "fa-solid fa-bullseye",
            title: "Our Mission",
            text: "To bring real-world airports into the virtual cockpit with uncompromising accuracy — every taxiway, every jet bridge, every photo-real surface, modeled to lift immersion to a level pilots can feel from pushback to touchdown.",
        },
        {
            icon: "fa-solid fa-eye",
            title: "Our Vision",
            text: "To become the most trusted name in flight simulation scenery, defining the global benchmark for realism, performance and craft across X-Plane and Microsoft Flight Simulator platforms.",
        },
        {
            icon: "fa-solid fa-compass-drafting",
            title: "Our Craft",
            text: "We blend aviation passion with technical rigor — using high-resolution aerial data, custom 3D modeling and hand-tuned PBR materials to recreate airports that hold up under any approach, any weather, any frame.",
        },
    ];

    const highlights = [
        {
            icon: "fa-solid fa-plane-departure",
            title: "Real-World Accuracy",
            text: "Surveyed layouts, authentic signage and faithful ground markings — sourced from on-site research and aviation charts.",
        },
        {
            icon: "fa-solid fa-gauge-high",
            title: "Optimized Performance",
            text: "Hand-baked lighting, smart LODs and lean draw calls keep frame rates smooth on a wide range of rigs.",
        },
        {
            icon: "fa-solid fa-layer-group",
            title: "Multi-Platform Support",
            text: "Built natively for both X-Plane and Microsoft Flight Simulator, with consistent quality across every release.",
        },
        {
            icon: "fa-solid fa-headset",
            title: "Pilot-First Support",
            text: "Active updates, responsive customer care and a community that flies with us — release after release.",
        },
    ];

    return (
        <div className="about-page" data-testid="about-page">
            <Header />

            <main className="about-main">
                {/* HERO */}
                <section className="about-hero" data-testid="about-hero">
                    <div className="about-hero-glow about-hero-glow-1"></div>
                    <div className="about-hero-glow about-hero-glow-2"></div>

                    <div className="about-hero-inner">
                        <span className="about-eyebrow" data-testid="about-eyebrow">About MXI Design</span>
                        <h1 className="about-hero-title">
                            Crafting <span className="gradient-text">airports</span> that breathe,
                            <br /> for pilots who care.
                        </h1>
                        <div className="about-hero-line"></div>
                        <p className="about-hero-sub">
                            We&apos;re a small team of aviation enthusiasts, 3D artists and engineers
                            building hyper-detailed airport sceneries for X-Plane and
                            Microsoft Flight Simulator — driven by realism, refined by community.
                        </p>

                        <div className="about-hero-actions">
                            <button
                                className="btn-primary"
                                onClick={() => navigate("/products")}
                                data-testid="about-hero-products-btn"
                            >
                                <span>Explore Our Airports</span>
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                            <button
                                className="btn-ghost"
                                onClick={() => navigate("/contact")}
                                data-testid="about-hero-contact-btn"
                            >
                                <span>Get in Touch</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* STORY */}
                <section className="about-story" data-testid="about-story">
                    <div className="about-story-grid">
                        <div className="about-story-text">
                            <span className="section-tag">Our Story</span>
                            <h2>From a runway sketch to a global hangar.</h2>
                            <p>
                                MXI Design was founded in 2018 by a handful of flight simmers who
                                believed scenery could feel less like a stage and more like a place.
                                A first airport turned into a series, the series turned into a
                                studio — and every release since has been a quiet conversation
                                between real-world charts and virtual concrete.
                            </p>
                            <p>
                                Today, our sceneries are flown daily by pilots across more than
                                40 countries — VATSIM controllers, training schools, content
                                creators and weekend captains. We listen to all of them, and we
                                ship the updates that matter.
                            </p>
                        </div>
                        <div className="about-story-card">
                            <div className="about-story-card-inner">
                                <img
                                    className="about-story-logo"
                                    src="https://mxi-design.com/wp-content/uploads/2025/03/mxi_sitelogo.png"
                                    alt="MXI Design Logo"
                                />
                                <div className="about-story-badge">
                                    <i className="fa-solid fa-plane"></i>
                                    <span>Est. 2018 — Built by simmers, for simmers</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MISSION / VISION / CRAFT */}
                <section className="about-values" data-testid="about-values">
                    <div className="about-section-header">
                        <span className="section-tag">What Drives Us</span>
                        <h2>Mission, Vision &amp; Craft</h2>
                        <div className="about-section-line"></div>
                    </div>

                    <div className="values-grid">
                        {values.map((v, i) => (
                            <div
                                className="value-card"
                                key={v.title}
                                data-testid={`value-card-${i}`}
                                style={{ animationDelay: `${i * 100}ms` }}
                            >
                                <div className="value-icon">
                                    <i className={v.icon}></i>
                                </div>
                                <h3>{v.title}</h3>
                                <p>{v.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* STATS */}
                <section className="about-stats-section" data-testid="about-stats">
                    <div className="about-stats-grid">
                        {stats.map((s, i) => (
                            <div
                                className="about-stat"
                                key={s.label}
                                data-testid={`about-stat-${i}`}
                            >
                                <h3>{s.value}</h3>
                                <p>{s.label}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* HIGHLIGHTS */}
                <section className="about-highlights" data-testid="about-highlights">
                    <div className="about-section-header">
                        <span className="section-tag">Why MXI</span>
                        <h2>The details that make the difference</h2>
                        <div className="about-section-line"></div>
                    </div>

                    <div className="highlights-grid">
                        {highlights.map((h, i) => (
                            <div
                                className="highlight-card"
                                key={h.title}
                                data-testid={`highlight-card-${i}`}
                            >
                                <div className="highlight-icon">
                                    <i className={h.icon}></i>
                                </div>
                                <div className="highlight-body">
                                    <h4>{h.title}</h4>
                                    <p>{h.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="about-cta" data-testid="about-cta">
                    <div className="about-cta-inner">
                        <div className="about-cta-content">
                            <span className="section-tag">Ready for Departure?</span>
                            <h2>
                                Take off from an airport <span className="gradient-text">built like the real one.</span>
                            </h2>
                            <p>
                                Browse our growing library of high-fidelity sceneries, or get in
                                touch — whether you&apos;re a pilot, a developer or a partner, we&apos;d
                                love to hear from you.
                            </p>
                        </div>
                        <div className="about-cta-actions">
                            <button
                                className="btn-primary"
                                onClick={() => navigate("/products")}
                                data-testid="about-cta-products-btn"
                            >
                                <span>View All Products</span>
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                            <button
                                className="btn-ghost"
                                onClick={() => navigate("/contact")}
                                data-testid="about-cta-contact-btn"
                            >
                                <span>Contact Us</span>
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default AboutUsPage;
