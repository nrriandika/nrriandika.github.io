require([
        "esri/views/MapView",
        "esri/widgets/Legend",
        "esri/WebMap"
      ], function(MapView, Legend, WebMap) {
        var webmap = new WebMap({
          portalItem: {
            // autocasts as new PortalItem()
            id: "e8589154c91545e9bdce0f1d508eee6f"
          }
        });

        var view = new MapView({
          container: "viewDiv",
          map: webmap
        });

        view.when(function() {
          // get the first layer in the collection of operational layers in the WebMap
          // when the resources in the MapView have loaded.
          var featureLayer = webmap.layers.getItemAt(0);

          var legend = new Legend({
            view: view,
            layerInfos: [
              {
                layer: featureLayer,
                title: "Jumlah ODP dan PDP"
              }
            ]
          });

          // Add widget to the bottom right corner of the view
          view.ui.add(legend, "right");
        });

view.when(function() {
          // get the first layer in the collection of operational layers in the WebMap
          // when the resources in the MapView have loaded.
          var featureLayer = webmap.layers.getItemAt(1);
          var featureLayer = webmap.layers.getItemAt(2);

          var legend = new Legend({
            view: view,
            layerInfos: [
              {
                layer: featureLayer,
                title: "Jumlah ODP dan PDP"
              }
            ]
          });

          // Add widget to the bottom right corner of the view
          view.ui.add(legend, "bottom-trailing");
        });

      });