
var geocoder;
export var getGeo = () => {
	return new Promise((successFunction, errorFunction) => {
 		 if (navigator.geolocation) {
 		   navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
	  }
	})

};

//Get the latitude and the longitude;
function successFunction(position) {
  var lat = position.coords.latitude;
  var lng = position.coords.longitude;
  return codeLatLng(lat,lng) 
  
}

function errorFunction() {
  alert("Geocoder failed");
}

export function codeLatLng(lat, lng) {
    return fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&sensor=true`)
    
}


