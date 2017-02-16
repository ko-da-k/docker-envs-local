//leaflet OSM map
// create a map in the "map_elemnt" div,
// set the view to a given place and zoom
var map = L.map('map_elemnt');
map.setView([35.40, 139.50], 11);

// add an OpenStreetMap tile layer
var tileLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

window.onload = function () {
    // add a marker in the given location,
    // attach some popup content to it and open the popup
    var mapMarker1 = L.marker([35.40, 139.50])
                     .addTo(map)
                     .bindPopup('CSS3 popup. <br> ここはどこでしょうか？');
    var mapMarker2 = L.marker([35.50, 140.00])
                     .addTo(map)
                     .bindPopup('CSS3 popup. <br> ここはどこでしょうか？');

    // add layers
    var baseLayers = {
        "OpenStreetMap": tileLayer
    };
    var overlays = {
        "Marker1": mapMarker1
    };
    L.control.layers(baseLayers, overlays).addTo(map);

    // add control scale 
    L.control.scale().addTo(map);

    $.getJSON("/static/data/geodata.json", function(data) {
        var geojson = L.geoJson(data, {
            onEachFeature: onEachFeature
        });
        geojson.addTo(map);
    });
}

map.on("click", function(e) {
    console.log("Clicked Point:" + e.latlng.lng + " " + e.latlng.lat);
});

function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent)
    }
}