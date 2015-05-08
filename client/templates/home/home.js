Template.home.rendered = function() {
  $(document).ready(function(){
     $('.parallax').parallax();
   });
};


Template.home.helpers({
  jesterMapOptions: function() {
    // Make sure the maps API has loaded
    if (GoogleMaps.loaded()) {
      // Map initialization options
      return {
        center: new google.maps.LatLng(30.230659, -97.999296),
        zoom: 17
      };
    }
  }
});


Template.home.onCreated(function() {
  // We can use the `ready` callback to interact with the map API once the map is ready.
  GoogleMaps.ready('jesterKing', function(map) {
    // Add a marker to the map once it's ready
    var marker = new google.maps.Marker({
      position: map.options.center,
      map: map.instance
    });
  });
});
