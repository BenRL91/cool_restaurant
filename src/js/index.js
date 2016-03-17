// Javascript Entry Point
import $ from "jquery";


$(".tab-container").on("click", "button", function(event){
	$(".tab-container").addClass("hide");
	$(event.currentTarget).parent().removeClass("hide");
});

var map;
      
function initMap() {
  map = new google.maps.Map(document.getElementById("map");
  center: {lat: -34.197047, lng: 18.450762},
  zoom: 13,
});
