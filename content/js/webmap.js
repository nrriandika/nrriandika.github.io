require([ "esri/views/MapView", 
          "esri/WebMap",
          "esri/widgets/Legend"

          ], function(MapView, WebMap, Legend) {
        /************************************************************
         * Creates a new WebMap instance. A WebMap must reference
         * a PortalItem ID that represents a WebMap saved to
         * arcgis.com or an on-premise portal.
         *
         * To load a WebMap from an on-premise portal, set the portal
         * url with esriConfig.portalUrl.
         ************************************************************/
              var legend = new Legend({
  view: view,
  layerInfos: [{
    layer: featureLayer,
    title: "Legend"
  }]
});

view.ui.add(legend, "bottom-right");

        var webmap = new WebMap({
          portalItem: {
            // autocasts as new PortalItem()
            id: "e8589154c91545e9bdce0f1d508eee6f"
          }
        });

        /************************************************************
         * Set the WebMap instance to the map property in a MapView.
         ************************************************************/
        var view = new MapView({
          map: webmap,
          container: "viewDiv"
        });



      });