// Javascript Entry Point
import $ from "jquery";

$(".tab-wrapper > div").on("click", function(event){
	$(".tab-wrapper > div").removeClass("show")
	$(".tab-wrapper > div").addClass("hidden")
	$(event.currentTarget).addClass("show");
});

