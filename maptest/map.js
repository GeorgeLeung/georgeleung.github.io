$(function () {

 //    function initMap() {
// 
//         var location = new google.maps.LatLng(50.0875726, 14.4189987);
// 
//         var mapCanvas = document.getElementById('map');
//         var mapOptions = {
//             center: location,
//             zoom: 16,
//             panControl: false,
//             mapTypeId: google.maps.MapTypeId.ROADMAP
//         }
//         var map = new google.maps.Map(mapCanvas, mapOptions);
// 
//     }

	   var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 9,
          center: {lat: 33.4, lng: -86.7}
        });


        // Load GeoJSON.
        // map.data.loadGeoJson('https://storage.googleapis.com/maps-devrel/google.json');
  map.data.loadGeoJson('http://georgeleung.github.io/maptest/map.geojson');
  map.data.loadGeoJson('http://georgeleung.github.io/maptest/dent.geojson');

        // Add some style.
        map.data.setStyle(function(feature) {
          return /** @type {google.maps.Data.StyleOptions} */({
            fillColor: feature.getProperty('color'),
            strokeWeight: 1
          });
        });

   // Set mouseover event for each feature.
        map.data.addListener('mouseover', function(event) {
          document.getElementById('info-box').innerHTML = 'Population: '+
              event.feature.getProperty('B01003_001E')+ '<br />' + 'Income : $' + event.feature.getProperty('B19301_001E');
        });
      }
    google.maps.event.addDomListener(window, 'load', initMap);
});