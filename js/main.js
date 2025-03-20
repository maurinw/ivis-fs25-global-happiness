import { createMap } from './map.js';

let geoData = {};

d3.json("data/world-geojson.json").then((geo) => {
  geoData = geo;
  createMap(geoData);
});
