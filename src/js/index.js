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
    var allergiesListItem;
    var favoriteListItem;
    var spicyListItem;
    var veganListItem;

    if (app.allergies === 1) {
      allergiesListItem = `<li class="allergies allergic"><a href="#" title="This item may contain shellfish or another item that some people may be allergic to. Please ask your waiter or waitress for assistance."><img src="./images/allergies.png"></a></li>`
    } else {
      allergiesListItem = `<li class="allergies greyed"><a href="#"><img src="./images/allergies.png"></a></li>`
    };

    if (app.favorite === 1) {
      favoriteListItem = `<li class="favorite is-favorite"><a href="#" title="We have been doing this a long time and this item has become one of our favorites."><img src="./images/favorite.png"></a></li>`
    } else {
      favoriteListItem = `<li class="favorite greyed"><a href="#"><img src="./images/favorite.png"></a></li>`
    };

    if (app.spicy === 1) { 
      spicyListItem = `<li class="spicy is-spicy"><a href="#" title="This item is spicy, please handle with care and drink lots of water."><img src="./images/spicy.png"></a></li>`
    } else { 
      spicyListItem = `<li class="spicy greyed"><a href="#"><img src="./images/spicy.png"></a></li>`
    };

    if (app.vegan === 1) {
      veganListItem = `<li class="vegan is-vegan"><a href="#" title="This item contains no meat and has been prepared without the use of animal products."><img src="./images/vegan.png"></a></li>`
    } else {
      veganListItem = `<li class="vegan greyed"><a href="#"><img src="./images/vegan.png"></a></li>`
    };


	var appzHtml = `
	   <div class="menu-items">

       <h4>${app.item}</h4> 
       <h5>$${app.price}</h5>
       <p>${app.description}</p>
        <ul class="picky-eaters">
         ${allergiesListItem}
         ${favoriteListItem}
         ${spicyListItem}
         ${veganListItem}
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
         <li class="allergies"><a href="#" title="This item may contain shellfish or another item that some people may be allergic to. Please ask your waiter or waitress for assistance.">${app.allergies}</a></li>
         <li class="favorite"><a href="#" title="We have been doing this a long time and this item has become one of our favorites.">${app.favorite}</a></li>
         <li class="spicy"><a href="#" title="This item is spicy, please handle with care and drink lots of water.">${app.spicy}</a></li>
         <li class="vegan"><a href="#" title="This item contains no meat and has been prepared without the use of animal products.">${app.vegan}</a></li>
       </ul>
       
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
       <h5>$${app.price}</h5>
       <p>${app.description}</p>
        <ul class="picky-eaters">
         <li class="allergies"><a href="#" title="This item may contain shellfish or another item that some people may be allergic to. Please ask your waiter or waitress for assistance.">${app.allergies}</a></li>
         <li class="favorite"><a href="#" title="We have been doing this a long time and this item has become one of our favorites.">${app.favorite}</a></li>
         <li class="spicy"><a href="#" title="This item is spicy, please handle with care and drink lots of water.">${app.spicy}</a></li>
         <li class="vegan"><a href="#" title="This item contains no meat and has been prepared without the use of animal products.">${app.vegan}</a></li>
       </ul>
      </div>
     </div>`
  	 $('.menu').append(appzHtml);
})
});
