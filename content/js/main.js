  require([
      "esri/Map",
      "esri/views/MapView",
      "esri/layers/Layer",
      "esri/renderers/UniqueValueRenderer"
    ], function(Map, MapView, Layer, UniqueValueRenderer) {

    var map = new Map({
      basemap: "dark-gray"
    });

    var view = new MapView({
      container: "viewDiv",
      map: map,
      center: [110.25, -7.5], // longitude, latitude
      zoom: 11
    });

          function addLayer(layerItemPromise, index) {
        return layerItemPromise.then(function(layer){
          map.add(layer, index);
        });
      }

            var covidRender = {
        type: "simple",
        symbol: {
          color: "green",
          type: "simple-fill",
          style: "solid"
        },
        visualVariables: [
          {
            type: "size",
            field: "ODP_PDP",
            minDataValue: 0,
            maxDataValue: 16,
            minSize: "2px",
            maxSize: "25px"
          }
        ]
      };


      // Data Level Persebaran Covid 
      var covidMagelang = Layer.fromPortalItem({
        portalItem: {
          id: "699de22b3c2844628a5b0af860473ced",
          renderer: covidMagelang,
          opacity: .75
        } 
      });

      // Centroid
      var centroidcovidMagelang = Layer.fromPortalItem({
        portalItem: {
          id: "17844d3ae1f54a9497c0167080adf20d"
        }
      });

      // RS Rujukan
      var rsrujukan = Layer.fromPortalItem({
        portalItem: {
          id: "6bfe565f1af44e06b6603f454e405d6b"
        }
      });

      addLayer(covidMagelang, 0)
        .then(addLayer(centroidcovidMagelang, 1))
        .then(addLayer(rsrujukan, 2));

    });
