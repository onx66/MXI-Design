import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { getNewsById, newsData, sortNewsItems } from "../data/newsData";
import { fetchNewsItems } from "../services/newsService";

const NewsContext = createContext(null);

export function NewsProvider({ children }) {
    const [newsItems, setNewsItems] = useState(newsData);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const refreshNews = useCallback(
        async ({ signal, showLoading = false } = {}) => {
            if (showLoading) {
                setIsLoading(true);
            }

            try {
                const apiNews = await fetchNewsItems({ signal });
                setNewsItems(apiNews);
                setError(null);
            } catch (err) {
                if (err.name === "AbortError") return;
                setNewsItems(newsData);
                setError(err);
            } finally {
                if (showLoading && !signal?.aborted) {
                    setIsLoading(false);
                }
            }
        },
        []
    );

    useEffect(() => {
        const controller = new AbortController();

        refreshNews({
            signal: controller.signal,
            showLoading: true,
        });

        return () => controller.abort();
    }, [refreshNews]);

    useEffect(() => {
        const refreshOnFocus = () => {
            refreshNews();
        };

        const refreshWhenVisible = () => {
            if (document.visibilityState === "visible") {
                refreshNews();
            }
        };

        window.addEventListener("focus", refreshOnFocus);
        document.addEventListener("visibilitychange", refreshWhenVisible);

        return () => {
            window.removeEventListener("focus", refreshOnFocus);
            document.removeEventListener("visibilitychange", refreshWhenVisible);
        };
    }, [refreshNews]);

    const findNewsById = useCallback(
        (id) => getNewsById(id, newsItems),
        [newsItems]
    );

    const value = useMemo(
        () => ({
            newsItems: sortNewsItems(newsItems),
            isLoading,
            error,
            refreshNews,
            getNewsById: findNewsById,
        }),
        [newsItems, isLoading, error, refreshNews, findNewsById]
    );

    return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useNews() {
    const context = useContext(NewsContext);
    if (!context) {
        throw new Error("useNews must be used within a NewsProvider");
    }
    return context;
}
