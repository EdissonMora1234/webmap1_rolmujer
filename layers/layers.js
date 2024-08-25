ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-8257220.805874, 512356.182763, -8233588.281783, 523465.293991]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Localidad_Storymap_RolMujer_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoserver.scrd.gov.co/geoserver/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "Investigacion_Cultured_Maps:Localidad_Storymap_RolMujer",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Localidad_Storymap_RolMujer",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Localidad_Storymap_RolMujer_1, 0]);
var lyr_DistritosCreativos_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://geoserver.scrd.gov.co/geoserver/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "Investigacion_Cultured_Maps:DistritosCreativos",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "DistritosCreativos",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_DistritosCreativos_2, 0]);

lyr_OpenStreetMap_0.setVisible(true);lyr_Localidad_Storymap_RolMujer_1.setVisible(true);lyr_DistritosCreativos_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Localidad_Storymap_RolMujer_1,lyr_DistritosCreativos_2];
