// Creating map object
var map = L.map("map", {
  center: [37.0902, -95.7129],
  zoom: 16
});

//creating the base layer 

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
	attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
	maxZoom: 16,
	id: "mapbox.light",
  	accessToken: API_KEY
}).addTo(map);

var mapBounds = L.latLngBounds([
                    [25.82, -124.39],
                    [49.38, -66.27]
                ]);
map.fitBounds(mapBounds);