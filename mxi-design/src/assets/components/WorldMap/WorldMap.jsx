
import "./WorldMap.css"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { sliderData } from "../../SliderData.js";
import L from "leaflet";


const defaultIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});
function WorldMap() {

    // POPUP More Info butonu
    const handleMoreInfo = (point) => {
        alert(`${point.name}`);
    };

    // MAP PIN + THUMBNAIL DATA
    const mapPoints = [
        { id: 1, name: "Karpathos Airport", lat: 35.4214, lng: 27.1460, desc: "Karpathos Airport (IATA: AOK, ICAO: LGKP) is an airport on the island of Karpathos, Greece.", img: sliderData[0].img },
        { id: 2, name: "Kaunas Airport", lat: 54.9639, lng: 24.0848, desc: "Kaunas Airport is the second busiest civil airport in Lithuania after Vilnius Airport.", img: sliderData[1].img },
        { id: 3, name: "Örebro Airport", lat: 59.2237, lng: 15.0380, desc: "Örebro Airport is Sweden's 23rd largest passenger airport and the fourth largest cargo airport.", img: sliderData[2].img },
        { id: 4, name: "Preveza Airport", lat: 38.925553, lng: 20.765022, desc: "Aktion National Airport is an airport serving Preveza and Lefkada in Greece", img: sliderData[3].img },
        { id: 5, name: "İstanbul Airport", lat: 40.8986, lng: 29.3091, desc: "Istanbul Sabiha Gökçen International Airport is the secondary international airport serving Istanbul", img: sliderData[4].img },
    ];


    return (

        <>
            {/* MAP TITLE */}
            <div className="map-text">
                <h1>Explore the World of MXI Design</h1>
            </div>
            {/* WORLD MAP */}
            < div className="world-map-section" >
                <MapContainer
                    center={[20, 20]}
                    zoom={2}
                    minZoom={3}
                    maxZoom={8}
                    style={{ height: "600px", width: "100%" }}
                    maxBounds={[
                        [-80, -180],
                        [80, 180]
                    ]}
                    maxBoundsViscosity={1.0}
                >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    {mapPoints.map(point => (
                        <Marker
                            key={point.id}
                            position={[point.lat, point.lng]}
                            icon={defaultIcon}
                        >
                            <Popup>
                                <div style={{ textAlign: "center", width: "150px" }}>
                                    {/* Thumbnail */}
                                    <img
                                        src={point.img}
                                        style={{
                                            width: "100%",
                                            borderRadius: "8px",
                                            marginBottom: "10px"
                                        }}
                                    />
                                    {/* Title */}
                                    <h4 style={{ margin: "0" }}>{point.name}</h4>
                                    <p style={{ fontSize: "12px", opacity: 0.8 }}>
                                        {point.desc}
                                    </p>
                                    {/* More Info */}
                                    <button
                                        style={{
                                            padding: "3px 12px",
                                            border: "none",
                                            borderRadius: "5px",
                                            background: "#eee5",
                                            color: "white",
                                            cursor: "pointer",
                                            fontSize: "12px",
                                            marginTop: "8px",
                                            backgroundColor: "black"
                                        }}
                                        onClick={() => handleMoreInfo(point)}
                                    >
                                        More Info
                                    </button>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div >
        </>

    )
}

export default WorldMap;