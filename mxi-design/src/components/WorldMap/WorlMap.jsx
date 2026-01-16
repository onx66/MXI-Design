import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./WorldMap.css";
import { sliderData } from "../../data/sliderData";

const createPopupHTML = (item) => `
  <div class="airport-popup">
    <div class="popup-dot"></div>
    <div class="popup-content">
      <div class="popup-title">${item.title}</div>
      <div class="popup-subtitle">${item.title} ${item.subtitle}</div>
      <div class="popup-code">${item.code}</div>
    </div>
  </div>
`;

function WorldMap() {
  const mapContainer = useRef(null);
  const mapInstance = useRef(null);
  const activePopupRef = useRef(null);

  useEffect(() => {
    if (!mapContainer.current || mapInstance.current) return;

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://demotiles.maplibre.org/style.json",
      center: [0, 20],
      zoom: 1,
      minZoom: 2,
      maxZoom: 5,
      pitch: 0,
      bearing: 0,
      renderWorldCopies: false,
    });

    mapInstance.current = map;

    map.on("load", () => {
      const layers = map.getStyle().layers;

      
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

      // Karalar
      if (map.getLayer("countries-fill")) {
        map.setPaintProperty("countries-fill", "fill-color", "#1B3451");
      }

      if (map.getLayer("crimea-fill")) {
        map.setPaintProperty("crimea-fill", "fill-color", "#1B3451");
      }

      // Denizler
      if (map.getLayer("background")) {
        map.setPaintProperty("background", "background-color", "#0A1628");
      }

      //  Marker + Popup
      sliderData.forEach((item) => {
        const popup = new maplibregl.Popup({
          closeButton: false,
          closeOnClick: false,
          offset: [135, 120],
          className: "custom-popup",
        }).setHTML(createPopupHTML(item));

        const el = document.createElement("div");
        el.className = "circle-marker";

        new maplibregl.Marker({ element: el })
          .setLngLat([item.lng, item.lat])
          .addTo(map);

        el.addEventListener("click", () => {
          if (activePopupRef.current) {
            activePopupRef.current.remove();
          }

          popup
            .setLngLat([item.lng, item.lat])
            .addTo(map);

          activePopupRef.current = popup;
        });
      });


      let isRightMouseDown = false;
      let startY = 0;
      let startPitch = 0;

      const canvas = map.getCanvas();

      canvas.addEventListener("contextmenu", (e) => {
        e.preventDefault(); 
      });

      canvas.addEventListener("mousedown", (e) => {
        if (e.button === 2) {
          isRightMouseDown = true;
          startY = e.clientY;
          startPitch = map.getPitch();
        }
      });

      canvas.addEventListener("mousemove", (e) => {
        if (!isRightMouseDown) return;

        const deltaY = e.clientY - startY;

        map.setPitch(
          Math.max(0, Math.min(60, startPitch + deltaY * 0.15))
        );
      });

      canvas.addEventListener("mouseup", () => {
        isRightMouseDown = false;
      });

      canvas.addEventListener("mouseleave", () => {
        isRightMouseDown = false;
      });
    });

    map.on("error", (e) => {
      console.error("MAP ERROR:", e);
    });

    return () => {
      map.remove();
      mapInstance.current = null;
    };
  }, []);

  return <div ref={mapContainer} className="world-map" />;
}

export default WorldMap;
