// ---------- Mock data (yalnızca placeholder — Spring Boot bağlanınca otomatik devre dışı) ----------
// Aviation / uçuş dünyası haberleri — kategoriler: Airlines, Aircraft, Airports, ATC, Industry, FlightSim
export const mockNews = [
    {
        id: "1",
        slug: "airbus-a350-1000-delivery-milestone",
        title: "Airbus A350-1000 Hits Major Delivery Milestone",
        summary:
            "Airbus delivers its 100th A350-1000 to a launch customer in the Gulf, cementing the type as the long-haul workhorse of the next decade.",
        coverImage:
            "https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1600&q=75",
        category: "Aircraft",
        author: "Aviation Desk",
        publishedAt: "2026-01-18T08:00:00Z",
        readTime: "5 min read",
        tags: ["Airbus", "A350", "Long-haul"],
        content: `
            <p>Airbus has handed over the <strong>100th A350-1000</strong> to a Gulf-based launch customer, a milestone that comes faster than industry analysts predicted only three years ago. The widebody is now active with sixteen operators on six continents.</p>
            <h3>Why It Matters</h3>
            <ul>
                <li>Lower trip costs than the 777-300ER on equivalent routes</li>
                <li>25% fuel-burn reduction vs. previous-generation widebodies</li>
                <li>Quieter cabin, longer range, smaller carbon footprint</li>
            </ul>
            <p>Airbus expects backlog deliveries to stretch into the early 2030s, with combi and freighter variants entering service later this decade.</p>
            <blockquote>“The A350 has redefined long-haul economics for a generation.” — Senior Industry Analyst</blockquote>
        `,
    },
    {
        id: "2",
        slug: "msfs-2024-world-update-istanbul",
        title: "MSFS 2024 World Update: Türkiye &amp; Istanbul",
        summary:
            "Microsoft Flight Simulator&apos;s latest free world update brings hand-curated POIs, photogrammetry over Istanbul and improved Bosphorus coastline geometry.",
        coverImage:
            "https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&w=1600&q=75",
        category: "FlightSim",
        author: "Sim Desk",
        publishedAt: "2026-01-12T11:30:00Z",
        readTime: "4 min read",
        tags: ["MSFS", "World Update", "Türkiye"],
        content: `
            <p>Microsoft Flight Simulator 2024&apos;s latest free world update lands on January 12, focused on Türkiye and the Istanbul metropolitan area. The package includes hand-modeled landmarks, sharper photogrammetry over the historic peninsula and a redrawn Bosphorus coastline.</p>
            <h3>Highlights</h3>
            <ul>
                <li>Hagia Sophia, Blue Mosque and Galata Tower hand-modeled</li>
                <li>Photogrammetry over Sultanahmet, Beşiktaş and Kadıköy</li>
                <li>Five new bush trips across Anatolia</li>
                <li>Improved water masking around the Bosphorus and Marmara Sea</li>
            </ul>
            <p>The update is free for all MSFS 2024 owners and downloads automatically through the in-game content manager.</p>
        `,
    },
    {
        id: "3",
        slug: "vatsim-cross-the-pond-2026",
        title: "VATSIM “Cross the Pond” 2026 Dates Announced",
        summary:
            "The world&apos;s largest online flying event returns this spring, with full ATC coverage across the North Atlantic for 12 hours.",
        coverImage:
            "https://images.unsplash.com/photo-1569629743817-70d8db6c323b?auto=format&fit=crop&w=1600&q=75",
        category: "ATC",
        author: "Community Desk",
        publishedAt: "2026-01-09T09:15:00Z",
        readTime: "3 min read",
        tags: ["VATSIM", "Events", "NAT"],
        content: `
            <p>VATSIM has confirmed the dates for its flagship transatlantic event: <strong>Cross the Pond 2026</strong> will run on April 25 with full ATC coverage from gate to gate across the North Atlantic Track System.</p>
            <p>The event regularly draws over 3,000 pilots and 600 controllers in a single afternoon, making it the busiest virtual airspace day of the year.</p>
            <h3>How to Take Part</h3>
            <ul>
                <li>Sign up via the VATSIM Cross the Pond portal opens February 1</li>
                <li>Slot assignments published two weeks before the event</li>
                <li>Required: current VATSIM membership and a compatible client</li>
            </ul>
        `,
    },
    {
        id: "4",
        slug: "boeing-737-max-10-certification-update",
        title: "Boeing 737 MAX 10 Certification Update",
        summary:
            "The FAA outlines the final hurdles before the largest member of the MAX family enters commercial service.",
        coverImage:
            "https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=1600&q=75",
        category: "Aircraft",
        author: "Regulatory Desk",
        publishedAt: "2025-12-29T14:00:00Z",
        readTime: "6 min read",
        tags: ["Boeing", "FAA", "737 MAX"],
        content: `
            <p>The FAA has published its latest update on the Boeing 737 MAX 10 certification roadmap, narrowing the remaining items to engine-anti-ice software validation and final crew-alerting compliance.</p>
            <p>If the timeline holds, the type could enter commercial service in late 2026 with multiple US and European launch customers.</p>
        `,
    },
    {
        id: "5",
        slug: "istanbul-airport-third-runway-operational",
        title: "Istanbul Airport: Third Runway Now Operational",
        summary:
            "LTFM&apos;s third independent runway opens, lifting peak-hour capacity by 30% and reshaping European arrival flows.",
        coverImage:
            "https://images.unsplash.com/photo-1532883716268-eaee23a72f1f?auto=format&fit=crop&w=1600&q=75",
        category: "Airports",
        author: "Infrastructure Desk",
        publishedAt: "2025-12-18T07:45:00Z",
        readTime: "4 min read",
        tags: ["LTFM", "Istanbul", "Runways"],
        content: `
            <p>Istanbul Airport (LTFM) has commissioned its third independent parallel runway, lifting peak-hour movement capacity by roughly 30% and easing pressure on Europe&apos;s busiest arrival flows.</p>
            <p>The new runway, 17R/35L, is fully ILS-equipped and supports CAT III B approaches from day one.</p>
        `,
    },
    {
        id: "6",
        slug: "emirates-launches-premium-economy-on-a380",
        title: "Emirates Rolls Out Premium Economy on the A380",
        summary:
            "The Gulf carrier completes its A380 cabin refresh, becoming one of the first global super-jumbo operators with a true premium-economy product.",
        coverImage:
            "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=1600&q=75",
        category: "Airlines",
        author: "Cabin Desk",
        publishedAt: "2025-12-04T10:00:00Z",
        readTime: "3 min read",
        tags: ["Emirates", "A380", "Cabin"],
        content: `
            <p>Emirates has completed the rollout of its premium-economy cabin across the A380 fleet, capping a multi-year retrofit that adds a brand-new product between business and economy.</p>
            <p>Industry observers expect competing super-jumbo operators to follow suit within twelve months.</p>
        `,
    },
    {
        id: "7",
        slug: "sustainable-aviation-fuel-european-mandate",
        title: "EU SAF Mandate: What Changes in 2026",
        summary:
            "Europe&apos;s Sustainable Aviation Fuel mandate steps up this year. Here&apos;s what airlines, airports and passengers should expect.",
        coverImage:
            "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=75",
        category: "Industry",
        author: "Policy Desk",
        publishedAt: "2025-11-21T16:00:00Z",
        readTime: "7 min read",
        tags: ["SAF", "EU", "Sustainability"],
        content: `
            <p>The EU&apos;s Sustainable Aviation Fuel (SAF) mandate steps up its blending requirements in 2026, with implications for airline costs, airport supply chains and ultimately ticket prices.</p>
            <h3>What Changes</h3>
            <ul>
                <li>Minimum SAF blending raised across EU departure airports</li>
                <li>Suppliers must register and report quarterly</li>
                <li>Penalties for non-compliance tighten</li>
            </ul>
            <p>Analysts expect airlines to absorb part of the cost while passing a portion to passengers as a small per-ticket levy.</p>
        `,
    },
    {
        id: "8",
        slug: "x-plane-12-helicopter-flight-model-overhaul",
        title: "X-Plane 12 Gets Helicopter Flight Model Overhaul",
        summary:
            "Laminar Research previews a deep rewrite of the helicopter flight model, with improved rotor dynamics and ground-effect behaviour.",
        coverImage:
            "https://images.unsplash.com/photo-1559627755-42df3a3a36a8?auto=format&fit=crop&w=1600&q=75",
        category: "FlightSim",
        author: "Sim Desk",
        publishedAt: "2025-11-08T13:30:00Z",
        readTime: "5 min read",
        tags: ["X-Plane", "Helicopters"],
        content: `
            <p>Laminar Research has previewed a substantial rewrite of X-Plane 12&apos;s helicopter flight model, with new rotor dynamics, improved ground-effect handling and more realistic autorotation behaviour.</p>
            <p>The update is slated to land in a free patch later this quarter.</p>
        `,
    },
];