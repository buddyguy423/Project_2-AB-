// Creating map object
var map = L.map("map", {
  center: [37.0902, -95.7129],
  zoom: 16
});

//creating the base layer 

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
	attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
	maxZoom: 16,
	id: "mapbox.streets",
    accessToken: API_KEY
  layers: [lightmap, revenue, profit]
}).addTo(map);

var mapBounds = L.latLngBounds([
                    [25.82, -124.39],
                    [49.38, -66.27]
                ]);
map.fitBounds(mapBounds);


 // Create an overlayMaps object to hold the bikeStations layer
 var overlayMaps = {
  "Profit": Profit
  "Revenue": Revenue
};


// Looping through all the entries from the JSON data
for(var i = 0; i < json.length; i++) {
  // Current object
  var obj = json[i];

  // Adding a new marker for the object
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(obj.latitude,obj.longitude),
      map: map,
    title: obj.title // this works, giving the marker a title with the correct title
  });