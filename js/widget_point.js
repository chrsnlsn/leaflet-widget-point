(function ($) {

    Drupal.leaflet_widget_point = Drupal.leaflet_widget_point || {};

    Drupal.behaviors.geofield_widget = {
        attach: attach
    };

    function attach(context, settings) {
              
        

        $('.leaflet-widget').once().each(function(i, item) {

            var crosshairIcon = L.icon({
            iconUrl: '/' + settings.leaflet_widget_point_widget.path + '/img/crosshairs.png',
            iconSize:     [200, 200], // size of the icon
            iconAnchor:   [100, 100], // point of the icon which will correspond to marker's location
            });


            var id = $(item).attr('id'),
                options = settings.leaflet_widget_point_widget[id];

            L.Util.extend(options.map, {
                layers: [L.tileLayer(options.map.base_url)],
            });

            var map = L.map(id, options.map);

            crosshair = new L.marker(map.getCenter(), {icon: crosshairIcon, clickable:false});
            crosshair.addTo(map);

            // Move the crosshair to the center of the map when the user pans
            map.on('move', function(e) {
                crosshair.setLatLng(map.getCenter());
            });

            $(item).parents('form').bind('submit', function(e){
                //e.preventDefault();
                var someFeatures = { "type": "FeatureCollection",
                  "features": [{
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [map.getCenter().lng, map.getCenter().lat]
                    }
                }]};
                var obj = [];
                obj._attach = L.DomUtil.get(options.map.widget_point.attach);
                obj._attach.value = JSON.stringify(someFeatures);                
            });
            if(settings.leaflet_widget_point_widget.lat!=""){
              //map.panTo(new L.LatLng(settings.leaflet_widget_point_widget.lat, settings.leaflet_widget_point_widget.lng));
              map.panTo(new L.LatLng(settings.leaflet_widget_point_widget.lat, settings.leaflet_widget_point_widget.lng));
              
            }

            Drupal.leaflet_widget_point[id] = map;

        });
    }

}(jQuery));
