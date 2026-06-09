import istanbulAirportImage from "../assets/images/istanbul-airport.jpg";
import xplaneSoftwareImage from "../assets/images/xplane-software.png";
import msfsSoftwareImage from "../assets/images/microsoft-flight-simulator.png";
import kaunasAirportImage from "../assets/images/kaunas-airport.jpg";

export const NEWS_STORAGE_KEY = "mxi-design-news-posts";

export const newsData = [
    {
        id: "journal-istanbul-ground",
        title: "Istanbul Ground Texture Notes",
        summary:
            "A short production note on cleaning apron markings, taxiway color balance and night lighting around the Istanbul scenery package.",
        coverImage: istanbulAirportImage,
        category: "Project Log",
        author: "MXI Design",
        publishedAt: "2026-02-12T09:00:00Z",
        readTime: "4 min read",
        tags: ["Istanbul", "Scenery", "Textures"],
        content: `This week was mostly about the ground layer: apron paint, hold-short markings and the small surface details that make the airport feel believable at taxi speed.

The first pass looked too clean inside the simulator, so I pulled the contrast back and added softer wear around the busiest stands. The goal is not to make everything noisy. It is to make the eye believe the surface has been used.

Night lighting also needed a second look. A few blue taxiway lights were reading too strong from cockpit height, especially after rain. That pass is now calmer and sits better with the terminal lighting.`,
    },
    {
        id: "journal-xplane-export",
        title: "What I Check Before an X-Plane Export",
        summary:
            "My quick checklist before a scenery build leaves Blender and goes into the simulator for the first real taxi test.",
        coverImage: xplaneSoftwareImage,
        category: "Workflow",
        author: "MXI Design",
        publishedAt: "2026-02-03T09:00:00Z",
        readTime: "3 min read",
        tags: ["X-Plane", "Workflow", "Export"],
        content: `Every export starts with the same boring checks, and that is exactly why they work. Scale, naming, material count and texture paths all get checked before I even open the simulator.

The taxi test comes after that. I load a default aircraft, start cold at a few different stands and move slowly through the areas that usually hide mistakes: jetways, service roads, tight turns and terminal edges.

If the scene feels right at low speed, it usually survives the rest of the polish pass.`,
    },
    {
        id: "journal-msfs-lighting",
        title: "MSFS Lighting Pass: Keeping It Subtle",
        summary:
            "A behind-the-scenes look at balancing terminal glow, ramp visibility and runway approach mood without turning the scenery into a light show.",
        coverImage: msfsSoftwareImage,
        category: "Behind the Scenes",
        author: "MXI Design",
        publishedAt: "2026-01-24T09:00:00Z",
        readTime: "5 min read",
        tags: ["MSFS", "Lighting", "Testing"],
        content: `Lighting is one of the easiest places to overdo a scenery project. The simulator makes bright lights look exciting in screenshots, but the cockpit view needs restraint.

For this pass I worked from three positions: short final, taxiway centerline and a parked stand. Each one tells a different truth about the same airport.

The best result came from reducing intensity and adding more separation between light sources. Less glow, more structure.`,
    },
    {
        id: "journal-kaunas-blockout",
        title: "Kaunas Blockout to First Preview",
        summary:
            "How the early blockout turned into a usable preview build, and which details moved from nice-to-have into the first polish pass.",
        coverImage: kaunasAirportImage,
        category: "Preview",
        author: "MXI Design",
        publishedAt: "2026-01-11T09:00:00Z",
        readTime: "4 min read",
        tags: ["Kaunas", "Preview", "Modeling"],
        content: `The Kaunas blockout started as pure structure: runway, apron, terminal volume and the main service roads. No decoration, no tiny details, just the airport's shape.

That rough version helped decide where detail actually matters. The terminal front, apron edge and approach-side silhouettes needed more attention than the outer service zones.

The first preview build now has enough detail to judge scale and mood. From here, the work becomes slower and more deliberate.`,
    },
];

export function sortNewsItems(items) {
    return [...items].sort(
        (a, b) =>
            new Date(b.publishedAt || 0).getTime() -
            new Date(a.publishedAt || 0).getTime()
    );
}

export function getNewsById(id, items = []) {
    return items.find((n) => String(n.id) === String(id)) || null;
}

export function formatNewsDate(iso) {
    if (!iso) return "";
    try {
        const d = new Date(iso);
        return d.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    } catch {
        return iso;
    }
}

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function isSafeImageUrl(value) {
    const url = String(value || "").trim();
    if (!url) return false;
    if (url.startsWith("/")) return true;

    try {
        const parsed = new URL(url);
        return parsed.protocol === "http:" || parsed.protocol === "https:";
    } catch {
        return false;
    }
}

function formatPlainBlock(block) {
    const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);
    const isList = lines.length > 0 && lines.every((line) => line.startsWith("- "));

    if (isList) {
        return `<ul>${lines
            .map((line) => `<li>${escapeHtml(line.slice(2))}</li>`)
            .join("")}</ul>`;
    }

    if (lines.length === 1 && lines[0].startsWith("## ")) {
        return `<h3>${escapeHtml(lines[0].slice(3))}</h3>`;
    }

    return `<p>${escapeHtml(block.trim()).replaceAll("\n", "<br />")}</p>`;
}

function parseStructuredContent(content) {
    try {
        const parsed = JSON.parse(content);
        if (parsed?.type === "mxi-news-content" && Array.isArray(parsed.blocks)) {
            return parsed.blocks;
        }
    } catch {
        return null;
    }

    return null;
}

function formatStructuredBlock(block) {
    if (block?.type === "image") {
        if (!isSafeImageUrl(block.url)) return "";

        const url = escapeHtml(String(block.url).trim());
        const alt = escapeHtml(block.alt || "News content image");
        return `<figure class="news-content-image"><img src="${url}" alt="${alt}" loading="lazy" /></figure>`;
    }

    if (block?.type === "text" && String(block.text || "").trim()) {
        return String(block.text)
            .split(/\n\s*\n/)
            .map(formatPlainBlock)
            .join("");
    }

    return "";
}

export function formatNewsContent(content) {
    if (!content) return "";
    const trimmed = String(content).trim();
    if (!trimmed) return "";

    const structuredBlocks = parseStructuredContent(trimmed);
    if (structuredBlocks) {
        return structuredBlocks.map(formatStructuredBlock).join("");
    }

    if (/<\/?(p|h2|h3|ul|ol|li|blockquote|strong|em|a|img|br|code)\b/i.test(trimmed)) {
        return trimmed;
    }

    return trimmed
        .split(/\n\s*\n/)
        .map(formatPlainBlock)
        .join("");
}
