//import "./styles.css";
//import * as L from "leaftlet";

// initialize the map
const map = leaflet.map("map").setView([51.505,-0.09],13);

leaflet.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}", {
    maxZoom: 19, 
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


