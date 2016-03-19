// Javascript Entry Point
import $ from "jquery";


$(".tab-container").on("click", "button", function(event){
	$(".tab-container").addClass("hide");
	$(event.currentTarget).parent().removeClass("hide");
});

var newsRequest = $.ajax('https://json-data.herokuapp.com/restaurant/news/1');
newsRequest.then(function(newsData){
  // console.log(newsData)
  $(".blog").append(`
                    ${newsData.title} ${newsData.date_published}
                    <br>
                    ${newsData.post}
    `)
})

var request = $.ajax({
  url: 'https://json-data.herokuapp.com/restaurant/menu/1'
});

var special = $.ajax({
  url: 'https://json-data.herokuapp.com/restaurant/special/1'
});







request.then(function(response){
	var appz = response.appetizers;
	appz.forEach(function(app) {
	var appzHtml = `
	   <div class="menu-items">

       <h4>${app.item}</h4> 
       <ul class="picky-eaters">
         <li>${app.allergies}</li>
         <li>${app.favorite}</li>
         <li>${app.spicy}</li>
         <li>${app.vegan}</li>
       </ul>

       <p>${app.description}</p>
       <h5>$${app.price}</h5>
       
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
       <ul class="picky-eaters">
         <li>${app.allergies}</li>
         <li>${app.favorite}</li>
         <li>${app.spicy}</li>
         <li>${app.vegan}</li>
       </ul>

       <p>${app.description}</p>
       <h5>$${app.price}</h5>
       
      </div>
     </div>`
  	 $('.menu').append(appzHtml);

  special.then(function(specResponse) {
if (app.id === specResponse.menu_item_id) {
    var specHtml = `<span><b>Today's Special</b></span>
    <br>       
    <img src="./images/sea-scallops-yum.jpg">
    <br>
    <span>${app.item}</span>
    <span>${app.price}</span>
    <br>
    <span>${app.description}</span>`
    $('.specials').append( specHtml );

}



});
})
});

request.then(function(response){
	var appz = response.sides;
	appz.forEach(function(app) {
	var appzHtml = `
	   <div class="menu-items">

       <h4>${app.item}</h4> 
       <ul class="picky-eaters">
         <li>${app.allergies}</li>
         <li>${app.favorite}</li>
         <li>${app.spicy}</li>
         <li>${app.vegan}</li>
       </ul>

       <p>${app.description}</p>
       <h5>$${app.price}</h5>
       
      </div>
     </div>`
  	 $('.menu').append(appzHtml);
})
});