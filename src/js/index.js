// Javascript Entry Point
import $ from "jquery";


$(".tab-container").on("click", "button", function(event){
	$(".tab-container").addClass("hide");
	$(event.currentTarget).parent().removeClass("hide");
});



var request = $.ajax({
	url: 'https://json-data.herokuapp.com/restaurant/menu/1'
});

var special = $.ajax({
  url: 'https://json-data.herokuapp.com/restaurant/special/1'
});

console.log(special);

request.then(function(response){
	var appz = response.appetizers;
	appz.forEach(function(app) {
	var appzHtml = `
	   <div class="menu-items">

       <h4>${app.item}</h4> 
       <h5>$${app.price}</h5>
       <p>${app.description}</p>

       <ul class="picky-eaters">
         <li>${app.allergies}</li>
         <li>${app.favorite}</li>
         <li>${app.spicy}</li>
         <li>${app.vegan}</li>
       </ul>

      </div>
  	 </div>`
  	 $('.menu').append(appzHtml);
})
});

request.then(function(response){
	var appz = response.entrees;
	appz.forEach(function(app) {
	var appzHtml = `
	   <div class="menu-items">

       <h4>${app.item}</h4> 
       <h5>$${app.price}</h5>
       <p>${app.description}</p>

       <ul class="picky-eaters">
         <li>${app.allergies}</li>
         <li>${app.favorite}</li>
         <li>${app.spicy}</li>
         <li>${app.vegan}</li>
       </ul>

      </div>
  	 </div>`
  	 $('.menu').append(appzHtml);
})
});

request.then(function(response){
	var appz = response.sides;
	appz.forEach(function(app) {
	var appzHtml = `
	   <div class="menu-items">

       <h4>${app.item}</h4> 
       <h5>$${app.price}</h5>
       <p>${app.description}</p>

       <ul class="picky-eaters">
         <li>${app.allergies}</li>
         <li>${app.favorite}</li>
         <li>${app.spicy}</li>
         <li>${app.vegan}</li>
       </ul>

      </div>
  	 </div>`
  	 $('.menu').append(appzHtml);
})
});