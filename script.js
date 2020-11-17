mapboxgl.accessToken =
  "pk.eyJ1IjoiYW1pdGthZGl2YXIiLCJhIjoiY2toZjU2a3MxMTFkYzJwbjEya20zN2k3OSJ9.if34XvpcW5NmfJrw1H7Baw";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

function successLocation(position) {
  console.log(position);
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  setupMap([22.282672400000003, 70.792124]);
}
function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15,
  });

  const nav = new mapboxgl.NavigationControl();

  map.addControl(nav);

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });

  map.addControl(directions, "top-left");
}
