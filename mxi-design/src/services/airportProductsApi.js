const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8001/api"
).replace(/\/$/, "");

const fallbackImageByCode = {
  LTFJ: new URL("../assets/images/sabiha-g\u00f6k\u00e7en-airport.jpg", import.meta.url).href,
  LGKP: new URL("../assets/images/karpothos-airport.jpg", import.meta.url).href,
  EYKA: new URL("../assets/images/kaunas-airport.jpg", import.meta.url).href,
  ESOE: new URL("../assets/images/\u00f6rebro-airport.jpg", import.meta.url).href,
};

const toNumber = (value, fallback = 0) => {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const normalizePricing = (product) => {
  if (product.pricing) {
    return {
      main: {
        amount: toNumber(product.pricing.main?.amount, 0),
        currency: product.pricing.main?.currency || "USD",
      },
      others: Array.isArray(product.pricing.others) ? product.pricing.others : [],
    };
  }

  return {
    main: {
      amount: toNumber(product.pricingMainAmount, 0),
      currency: product.pricingMainCurrency || "USD",
    },
    others: Array.isArray(product.pricingOthers) ? product.pricingOthers : [],
  };
};

const normalizeImages = (product) => {
  return Array.isArray(product.images) ? product.images.filter(Boolean) : [];
};

const normalizePlatforms = (platforms) => {
  if (!Array.isArray(platforms) || platforms.length === 0) {
    return [];
  }

  return [
    ...new Set(
      platforms
        .map((platform) => String(platform).trim().toUpperCase().replace("-", ""))
        .filter((platform) => platform === "MSFS" || platform === "XPLANE")
    ),
  ];
};

export const normalizeAirportProduct = (product, index = 0) => {
  const images = normalizeImages(product);
  const mainImage = product.mainImage || product.main_image || "";
  const fallbackImage = fallbackImageByCode[product.code] || "";
  const img = mainImage || product.img || images[0] || fallbackImage;

  return {
    id: product.id ?? product.code ?? index,
    apiId: product.id ?? null,
    img,
    mainImage,
    images,
    homepageSliderOrder: toNumber(product.homepageSliderOrder || product.homepage_slider_order, 0),
    code: product.code || "",
    title: product.title || "",
    subtitle: product.subtitle || "",
    desc: product.desc || product.description || "",
    welcomeText: product.welcomeText || "",
    lat: toNumber(product.lat, 0),
    lng: toNumber(product.lng, 0),
    color: product.color || "#FFD84D",
    videourl: product.videourl || product.videoUrl || "",
    pricing: normalizePricing(product),
    generalDesc: product.generalDesc || "",
    features: Array.isArray(product.features) ? product.features : [],
    platforms: normalizePlatforms(product.platforms),
  };
};

export async function fetchAirportProducts({ signal } = {}) {
  const response = await fetch(`${API_BASE_URL}/airports`, {
    headers: {
      Accept: "application/json",
    },
    signal,
  });

  if (!response.ok) {
    throw new Error(`Airport products request failed (${response.status})`);
  }

  const data = await response.json();

  if (!Array.isArray(data)) {
    throw new Error("Airport products response must be an array.");
  }

  return data.map(normalizeAirportProduct);
}
