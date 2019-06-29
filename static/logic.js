// //creating the base layer 

// L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
// 	attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
// 	maxZoom: 16,
// 	id: "mapbox.streets",
//   	accessToken: API_KEY
// }).addTo(map);

D3.json("/geojson")
  .then(function(geojson){
    let Markers = []
    // Loop through data and create markers
    for (var i = 0; i < geojson.length; i++) {
      // Setting the marker radius for the state by passing population into the markerSize function
      Markers.push(
        L.circle(geojson[i].geometry.coordinates, {
          stroke: false,
          fillOpacity: 0.75,
          color: "white",
          fillColor: "white",
          radius: markerSize(geojson[i].properties.Revenues)
        })
      )};

    // Define variables for our base layers
    var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
      attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
      maxZoom: 18,
      id: "mapbox.streets",
      accessToken: API_KEY
    });

    var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
      attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
      maxZoom: 18,
      id: "mapbox.dark",
      accessToken: API_KEY
    });

    // Create a baseMaps object
    var baseMaps = {
      "Street Map": streetmap,
      "Dark Map": darkmap
    };

    var circles = L.layerGroup(Markers);

    // Creating map object
    var map = L.map("map", {
      center: [37.0902, -95.7129],
      zoom: 16,
      layers: [streetmap, circles]
    });

    L.control.layers(baseMaps, {
      collapsed: false
    }).addTo(map);

    var mapBounds = L.latLngBounds([
      [25.82, -124.39],
      [49.38, -66.27]
    ]);

    map.fitBounds(mapBounds)});