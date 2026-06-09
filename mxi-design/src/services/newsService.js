const API_BASE_URL = "/api";

export function normalizeNewsItem(item = {}) {
  return {
    id: item.id,
    title: item.title || "",
    summary: item.summary || "",
    content: item.content || "",
    coverImage: item.coverImage || item.cover_image || "",
    category: item.category || "Project Log",
    author: item.author || "MXI Design",
    publishedAt: item.publishedAt || item.published_at || new Date().toISOString(),
    readTime: item.readTime || item.read_time || "",
    tags: Array.isArray(item.tags)
      ? item.tags.map((tag) => String(tag).trim()).filter(Boolean)
      : [],
  };
}

export async function fetchNewsItems({ signal } = {}) {
  const response = await fetch(`${API_BASE_URL}/news`, {
    headers: {
      Accept: "application/json",
    },
    signal,
  });

  if (!response.ok) {
    throw new Error(`News request failed (${response.status})`);
  }

  const data = await response.json();

  if (!Array.isArray(data)) {
    throw new Error("News response must be an array.");
  }

  return data.map(normalizeNewsItem);
}
