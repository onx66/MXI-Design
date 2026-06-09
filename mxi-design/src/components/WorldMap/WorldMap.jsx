import { useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./WorldMap.css";
import { useProducts } from "../../context/ProductContext";

const DEFAULT_ACCENT = "#FFD84D";

const escapeHTML = (value) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const getAccentColor = (value) => {
  const color = String(value ?? "").trim();
  return /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(color) ? color : DEFAULT_ACCENT;
};

const toFiniteNumber = (value) => {
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
};

const hasValidCoordinates = (lat, lng) =>
  lat !== null &&
  lng !== null &&
  lat >= -90 &&
  lat <= 90 &&
  lng >= -180 &&
  lng <= 180 &&
  !(lat === 0 && lng === 0);

const createPopupHTML = (item) => {
  const subtitle = item.subtitle || "";

  return `
    <div class="airport-popup" style="--popup-accent: ${getAccentColor(item.color)}" role="button" tabindex="0" aria-label="Open ${escapeHTML(item.title || item.code || "product")} detail">
      <div class="popup-dot"></div>
      <div class="popup-content">
        <div class="popup-title">${escapeHTML(item.title || item.code || "MXI Design")}</div>
        ${subtitle ? `<div class="popup-subtitle">${escapeHTML(subtitle)}</div>` : ""}
        <div class="popup-code">${escapeHTML(item.code || "AIRPORT")}</div>
      </div>
    </div>
  `;
};

const applyMapStyle = (map) => {
  const layers = map.getStyle()?.layers || [];

  layers.forEach((layer) => {
    const id = layer.id;
    if (
      id.includes("label") ||
      id.includes("place") ||
      id.includes("name") ||
      id.includes("boundary") ||
      id.includes("admin") ||
      id.includes("road") ||
      id.includes("transit") ||
      id.includes("line") ||
      id.includes("grid")
    ) {
      map.setLayoutProperty(id, "visibility", "none");
    }
  });

  if (map.getLayer("countries-fill")) {
    map.setPaintProperty("countries-fill", "fill-color", "#1B3451");
  }

  if (map.getLayer("crimea-fill")) {
    map.setPaintProperty("crimea-fill", "fill-color", "#1B3451");
  }

  if (map.getLayer("background")) {
    map.setPaintProperty("background", "background-color", "#0A1628");
  }
};

const bindPitchControls = (map) => {
  let isRightMouseDown = false;
  let startY = 0;
  let startPitch = 0;
  const canvas = map.getCanvas();

  const preventContextMenu = (e) => e.preventDefault();
  const handleMouseDown = (e) => {
    if (e.button === 2) {
      isRightMouseDown = true;
      startY = e.clientY;
      startPitch = map.getPitch();
    }
  };
  const handleMouseMove = (e) => {
    if (!isRightMouseDown) return;

    const deltaY = e.clientY - startY;
    map.setPitch(Math.max(0, Math.min(60, startPitch + deltaY * 0.15)));
  };
  const stopPitchDrag = () => {
    isRightMouseDown = false;
  };

  canvas.addEventListener("contextmenu", preventContextMenu);
  canvas.addEventListener("mousedown", handleMouseDown);
  canvas.addEventListener("mousemove", handleMouseMove);
  canvas.addEventListener("mouseup", stopPitchDrag);
  canvas.addEventListener("mouseleave", stopPitchDrag);

  return () => {
    canvas.removeEventListener("contextmenu", preventContextMenu);
    canvas.removeEventListener("mousedown", handleMouseDown);
    canvas.removeEventListener("mousemove", handleMouseMove);
    canvas.removeEventListener("mouseup", stopPitchDrag);
    canvas.removeEventListener("mouseleave", stopPitchDrag);
  };
};

function WorldMap() {
  const { products, isLoading, error } = useProducts();
  const navigate = useNavigate();
  const mapContainer = useRef(null);
  const mapInstance = useRef(null);
  const activePopupRef = useRef(null);
  const markersRef = useRef([]);

  const productLocations = useMemo(() => {
    return products
      .map((product) => {
        const lat = toFiniteNumber(product.lat);
        const lng = toFiniteNumber(product.lng);

        return {
          ...product,
          lat,
          lng,
          color: getAccentColor(product.color),
        };
      })
      .filter((product) => hasValidCoordinates(product.lat, product.lng));
  }, [products]);

  useEffect(() => {
    if (!mapContainer.current || mapInstance.current) return undefined;

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://demotiles.maplibre.org/style.json",
      center: [0, 20],
      zoom: 1.4,
      minZoom: 1.2,
      maxZoom: 10,
      pitch: 0,
      bearing: 0,
      renderWorldCopies: false,
    });

    mapInstance.current = map;
    let removePitchControls = () => {};

    map.on("load", () => {
      applyMapStyle(map);
      removePitchControls = bindPitchControls(map);
    });

    map.on("error", (e) => {
      console.error("MAP ERROR:", e);
    });

    return () => {
      removePitchControls();
      map.remove();
      mapInstance.current = null;
      activePopupRef.current = null;
      markersRef.current = [];
    };
  }, []);

  useEffect(() => {
    const map = mapInstance.current;
    if (!map) return undefined;

    const clearMarkers = () => {
      markersRef.current.forEach((marker) => marker.remove());
      markersRef.current = [];

      if (activePopupRef.current) {
        activePopupRef.current.remove();
        activePopupRef.current = null;
      }
    };

    const renderProductMarkers = () => {
      clearMarkers();

      if (productLocations.length === 0) return;

      const bounds = new maplibregl.LngLatBounds();

      productLocations.forEach((item) => {
        const coordinates = [item.lng, item.lat];
        const markerElement = document.createElement("button");
        markerElement.type = "button";
        markerElement.className = "circle-marker";
        markerElement.style.setProperty("--marker-color", item.color);
        markerElement.style.setProperty("--marker-shadow-color", `${item.color}59`);
        markerElement.setAttribute(
          "aria-label",
          `${item.code || item.title || "Airport"} location`
        );

        const marker = new maplibregl.Marker({ element: markerElement })
          .setLngLat(coordinates)
          .addTo(map);

        markerElement.addEventListener("click", () => {
          if (activePopupRef.current) {
            activePopupRef.current.remove();
          }

          const popup = new maplibregl.Popup({
            closeButton: false,
            closeOnClick: false,
            offset: [135, 120],
            className: "custom-popup",
          })
            .setHTML(createPopupHTML(item))
            .setLngLat(coordinates)
            .addTo(map);

          const popupCard = popup.getElement().querySelector(".airport-popup");
          const goToProductDetail = () => {
            navigate(`/product-detail/${encodeURIComponent(String(item.id))}`);
          };

          popupCard?.addEventListener("click", goToProductDetail);
          popupCard?.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              goToProductDetail();
            }
          });

          activePopupRef.current = popup;
          map.easeTo({ center: coordinates, duration: 500 });
        });

        markersRef.current.push(marker);
        bounds.extend(coordinates);
      });

      if (productLocations.length === 1) {
        map.easeTo({
          center: [productLocations[0].lng, productLocations[0].lat],
          zoom: Math.max(map.getZoom(), 3),
          duration: 900,
        });
        return;
      }

      map.fitBounds(bounds, {
        padding: 90,
        maxZoom: 5,
        duration: 900,
      });
    };

    if (map.loaded()) {
      renderProductMarkers();
    } else {
      map.once("load", renderProductMarkers);
    }

    return () => {
      map.off("load", renderProductMarkers);
      clearMarkers();
    };
  }, [navigate, productLocations]);

  const statusText = isLoading
    ? "Loading airport locations..."
    : error
      ? "Airport locations could not be loaded."
      : productLocations.length === 0
        ? "Add Latitude and Longitude in the admin panel to show products here."
        : "";

  return (
    <div className="world-map-shell">
      <div ref={mapContainer} className="world-map" />
      <div
        className="map-pitch-guide"
        role="note"
        aria-label="Right-click and drag down to tilt the map into 3D view"
      >
        <div className="map-pitch-guide-visual" aria-hidden="true">
          <span className="map-pitch-mouse">
            <span className="map-pitch-mouse-button"></span>
          </span>
          <span className="map-pitch-drag-arrow"></span>
        </div>
        <div className="map-pitch-guide-copy">
          <strong>3D View</strong>
          <span>Right-click + drag down</span>
        </div>
      </div>
      {statusText && (
        <div className={`world-map-status${error ? " is-error" : ""}`}>
          {statusText}
        </div>
      )}
    </div>
  );
}

export default WorldMap;
