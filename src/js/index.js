// Javascript Entry Point
import $ from "jquery";

$(".tab-wrapper").on("click", function(event){
	$(".tab-wrapper > div").removeClass("show")
	$(event.currentTarget).addClass("show");
});