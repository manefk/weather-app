
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
  return [lat,lng] 
  
}

function errorFunction() {
  alert("Geocoder failed");
}


function codeLatLng(lat, lng) {
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&sensor=true`)
    
}
export default getGeo;

