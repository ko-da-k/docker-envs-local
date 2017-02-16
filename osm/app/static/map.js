var map = new ol.Map({
    view: new ol.View({
        center: ol.proj.fromLonLat([139.766247, 35.681298]),
        zoom: 15
    }),
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    target: "map"
});

window.onload = function () {
    var tokyo_st = new ol.proj.fromLonLat([139.766247, 35.681298]);
    // 座標情報など各マーカー毎に持つ情報を管理するオブジェクト
    var iconFeature = new ol.Feature({
        geometry: tokyo_st
    });

    // Markerのアイコンなど見た目に関する情報を管理するオブジェクト
    var iconStyle = new ol.style.Style({
        image: new ol.style.Icon(/** @type {olx.style.IconOptions*/({
            anchor: [0.5, 1],
            anchorXUnits: "fraction",
            anchorYUnits: "fraction",
            opacity: 0.75,
            src: "https://openlayers.org/en/v4.0.1/examples/data/icon.png"
        }))
    });
    iconFeature.setStyle(iconStyle);

    // Feature一覧をまとめたもの
    var vectorSource = new ol.source.Vector({
        features: [iconFeature]
    });

    // ol.source.VectorをSourceとして持つレイヤ
    var vectorLayer = new ol.layer.Vector({
        source: vectorSource,
        style: iconStyle
    });

    map.addLayer(vectorLayer);
}