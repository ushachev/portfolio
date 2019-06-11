export let initMap = function() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: { lat: 52.966373, lng: 36.068053 },
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_TOP
    },
    streetViewControlOptions: {
      position: google.maps.ControlPosition.LEFT_TOP
    },
    scaleControl: false,
    mapTypeControl: false,
    fullscreenControl: false
  });
};
