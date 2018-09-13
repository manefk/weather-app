var geocoder;
var getGeo = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
  }
};

//Get the latitude and the longitude;
function successFunction(position) {
  var lat = position.coords.latitude;
  var lng = position.coords.longitude;
  console.log(lat, lng);
}

function errorFunction() {
  alert("Geocoder failed");
}
/*
function initialize() {
  geocoder = new google.maps.Geocoder();
}*/
export default getGeo;
