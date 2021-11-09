// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center at the San Francisco airport and zoom level.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Coordinates for each point to be used in the polyline
let line = [
    [37.6213, -122.3790],
    [30.1944, -97.67],
    [38.6268, -90.2124],
    [43.6835, -79.6149]
];

// Create polyline using the line coordinates and make the line red
L.polyline(line, {
    color: "blue",
    opacity: .5,
    dashArray: "4"

}).addTo(map);

// get data from cities.js
// let cityData = cities

// // Loop thru the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: city.population/100000
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
// });



// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);