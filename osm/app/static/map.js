var map = new ol.Map({
    view: new ol.View({
        center: ol.proj.fromLonLat([139.766247, 35.681298]),
        zoom: 10
    }),
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    target: "map"
});

window.onload = function() {
    var tokyo_st = new ol.geom.Point([139.766247, 35.681298]);

    var iconFeature = new ol.Feature({
        geometry: tokyo_st,
    });

    var iconStyle = new ol.style.Style();
    iconFeature.setStyle(iconStyle);

    var vectorSource = new ol.source.Vector({
        features: [iconFeature]
    });

    var vectorLayer = new ol.layer.Vector({
        source: vectorSource
    });
}