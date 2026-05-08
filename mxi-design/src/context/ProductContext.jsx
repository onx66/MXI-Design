import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { fetchAirportProducts } from "../services/airportProductsApi.js";

const ProductContext = createContext(null);

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const refreshProducts = useCallback(
    async ({ signal, showLoading = false, clearOnError = false } = {}) => {
      if (showLoading) {
        setIsLoading(true);
      }
      try {
        const apiProducts = await fetchAirportProducts({ signal });
        setProducts(apiProducts);
        setError(null);
      } catch (err) {
        if (err.name === "AbortError") return;
        if (clearOnError) {
          setProducts([]);
        }
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

    refreshProducts({
      signal: controller.signal,
      showLoading: true,
      clearOnError: true,
    });

    return () => controller.abort();
  }, [refreshProducts]);

  useEffect(() => {
    const refreshOnFocus = () => {
      refreshProducts();
    };

    const refreshWhenVisible = () => {
      if (document.visibilityState === "visible") {
        refreshProducts();
      }
    };

    window.addEventListener("focus", refreshOnFocus);
    document.addEventListener("visibilitychange", refreshWhenVisible);

    return () => {
      window.removeEventListener("focus", refreshOnFocus);
      document.removeEventListener("visibilitychange", refreshWhenVisible);
    };
  }, [refreshProducts]);

  const getProductByRouteId = useCallback(
    (routeId) => {
      if (products.length === 0) return null;

      const value = String(routeId ?? "");
      if (!value) return products[0];

      const product = products.find(
        (item) =>
          String(item.id) === value ||
          String(item.apiId) === value ||
          item.code?.toLowerCase() === value.toLowerCase()
      );

      if (product) return product;

      if (/^\d+$/.test(value)) {
        return products[Number(value)] || products[0];
      }

      return null;
    },
    [products]
  );

  const value = useMemo(
    () => ({
      products,
      isLoading,
      error,
      refreshProducts,
      getProductByRouteId,
    }),
    [products, isLoading, error, refreshProducts, getProductByRouteId]
  );

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useProducts() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
}
