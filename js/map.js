export function createMap(geoData) {
    const container = document.getElementById("map-container");
    const svg = d3.select("#world-map");

    const width = container.clientWidth;
    const height = width * 0.5;

    svg.attr("width", width)
       .attr("height", height);

    const projection = d3.geoMercator()
        .scale(width / (2 * Math.PI)) 
        .translate([width / 2, height / 2]); 

    const path = d3.geoPath().projection(projection);

    svg
        .selectAll("path")
        .data(geoData.features)
        .join("path")
        .attr("d", path)
        .attr("stroke", "#000")
        .attr("stroke-width", 0.5)
        .attr("fill", "#ccc");
}
