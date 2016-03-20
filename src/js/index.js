// Javascript Entry Point
import $ from "jquery";

// Enables the tab toggling in the STORY MENU RESERVATION section //
$(".tab-container").on("click", "button", function(event){
	$(".tab-container").addClass("hide");
	$(event.currentTarget).parent().removeClass("hide");
});
// Pulls the blog post API into the javascript and //
// adds it to the blog post HTML section
var newsRequest = $.ajax('https://json-data.herokuapp.com/restaurant/news/1');
newsRequest.then(function(newsData){
  $(".blog").append(`
                    ${newsData.title} ${newsData.date_published}
                    <br>
                    ${newsData.post}
    `);
});
// Pulls the special API into the javascript
var special = $.ajax({
  url: 'https://json-data.herokuapp.com/restaurant/special/1'
});
// Pulls the menu API into the javascript
var request = $.ajax({
  url: 'https://json-data.herokuapp.com/restaurant/menu/1'
});
// Puts the data drawn from the APIs into workable form //
request.then(function(response){
appItemTemplate(response.appetizers);
entreeItemTemplate(response.entrees);
// Puts the data drawn from the special API into the special section //
      special.then(function(specResponse) {
        response["entrees"].forEach(function(entree){
// Checks the id of the menu item againse the special API //
  if (entree.id === specResponse.menu_item_id) {
        var specHtml = `<span><b>Today's Special</b></span>
        <br>       
        <img src="./images/sea-scallops-yum.jpg">
        <br>
        <span>${entree.item}</span>
        <span>${entree.price}</span>
        <br>
        <span>${entree.description}</span>`
        $('.specials').append( specHtml );
       }
    });
  });
sideItemTemplate(response.sides);
});
// Creates the HTML for an Array of menu items passed to it //
function appItemTemplate(menuItemArray){
    menuItemArray.forEach(function(menuItem) {
    var title
    var allergiesListItem;
    var favoriteListItem;
    var spicyListItem;
    var veganListItem;
    if (menuItem.allergies === 1) {
      allergiesListItem = `<li class="allergies allergic"><a href="#" title="This item may contain shellfish or another item that some people may be allergic to. Please ask your waiter or waitress for assistance."><img src="./images/allergies.png"></a></li>`
    } else {
      allergiesListItem = `<li class="allergies greyed"><a href="#"><img src="./images/allergies.png"></a></li>`
    };

    if (menuItem.favorite === 1) {
      favoriteListItem = `<li class="favorite is-favorite"><a href="#" title="We have been doing this a long time and this item has become one of our favorites."><img src="./images/favorite.png"></a></li>`
    } else {
      favoriteListItem = `<li class="favorite greyed"><a href="#"><img src="./images/favorite.png"></a></li>`
    };

    if (menuItem.spicy === 1) { 
      spicyListItem = `<li class="spicy is-spicy"><a href="#" title="This item is spicy, please handle with care and drink lots of water."><img src="./images/spicy.png"></a></li>`
    } else { 
      spicyListItem = `<li class="spicy greyed"><a href="#"><img src="./images/spicy.png"></a></li>`
    };

    if (menuItem.vegan === 1) {
      veganListItem = `<li class="vegan is-vegan"><a href="#" title="This item contains no meat and has been prepared without the use of animal products."><img src="./images/vegan.png"></a></li>`
    } else {
      veganListItem = `<li class="vegan greyed"><a href="#"><img src="./images/vegan.png"></a></li>`
    };
    if (menuItem === menuItemArray[0]){title = "<h4>Appetizers</h4>"}
    else {title = "" }
  var menuItemHtml = `
    ${title}
     <div class="menu-items">
       <div class="menulineup">
         <h4>${menuItem.item}</h4> 
         <h5>$${menuItem.price}</h5>
       </div>
       <div class="menulineup"><p>${menuItem.description}</p>
        <ul class="picky-eaters">
         ${allergiesListItem}
         ${favoriteListItem}
         ${spicyListItem}
         ${veganListItem}
        </ul>
       </div>
     </div>`
    $('.menu').append(menuItemHtml);
  })
};

function entreeItemTemplate(menuItemArray){
    menuItemArray.forEach(function(menuItem) {
    var title
    var allergiesListItem;
    var favoriteListItem;
    var spicyListItem;
    var veganListItem;
    if (menuItem.allergies === 1) {
      allergiesListItem = `<li class="allergies allergic"><a href="#" title="This item may contain shellfish or another item that some people may be allergic to. Please ask your waiter or waitress for assistance."><img src="./images/allergies.png"></a></li>`
    } else {
      allergiesListItem = `<li class="allergies greyed"><a href="#"><img src="./images/allergies.png"></a></li>`
    };

    if (menuItem.favorite === 1) {
      favoriteListItem = `<li class="favorite is-favorite"><a href="#" title="We have been doing this a long time and this item has become one of our favorites."><img src="./images/favorite.png"></a></li>`
    } else {
      favoriteListItem = `<li class="favorite greyed"><a href="#"><img src="./images/favorite.png"></a></li>`
    };

    if (menuItem.spicy === 1) { 
      spicyListItem = `<li class="spicy is-spicy"><a href="#" title="This item is spicy, please handle with care and drink lots of water."><img src="./images/spicy.png"></a></li>`
    } else { 
      spicyListItem = `<li class="spicy greyed"><a href="#"><img src="./images/spicy.png"></a></li>`
    };

    if (menuItem.vegan === 1) {
      veganListItem = `<li class="vegan is-vegan"><a href="#" title="This item contains no meat and has been prepared without the use of animal products."><img src="./images/vegan.png"></a></li>`
    } else {
      veganListItem = `<li class="vegan greyed"><a href="#"><img src="./images/vegan.png"></a></li>`
    };
    if (menuItem === menuItemArray[0]){title = "<h4>Entrees</h4>"}
    else {title = "" }
  var menuItemHtml = `
    ${title}
     <div class="menu-items">
      <div class="menulineup">
       <h4>${menuItem.item}</h4> 
       <h5>$${menuItem.price}</h5>
      </div>
      <div class="menulineup">
       <p>${menuItem.description}</p>
        <ul class="picky-eaters">
         ${allergiesListItem}
         ${favoriteListItem}
         ${spicyListItem}
         ${veganListItem}
       </ul>
      </div>
     </div>`
    $('.menu').append(menuItemHtml);
  })
};

function sideItemTemplate(menuItemArray){
    menuItemArray.forEach(function(menuItem) {
    var title
    var allergiesListItem;
    var favoriteListItem;
    var spicyListItem;
    var veganListItem;
    if (menuItem.allergies === 1) {
      allergiesListItem = `<li class="allergies allergic"><a href="#" title="This item may contain shellfish or another item that some people may be allergic to. Please ask your waiter or waitress for assistance."><img src="./images/allergies.png"></a></li>`
    } else {
      allergiesListItem = `<li class="allergies greyed"><a href="#"><img src="./images/allergies.png"></a></li>`
    };

    if (menuItem.favorite === 1) {
      favoriteListItem = `<li class="favorite is-favorite"><a href="#" title="We have been doing this a long time and this item has become one of our favorites."><img src="./images/favorite.png"></a></li>`
    } else {
      favoriteListItem = `<li class="favorite greyed"><a href="#"><img src="./images/favorite.png"></a></li>`
    };

    if (menuItem.spicy === 1) { 
      spicyListItem = `<li class="spicy is-spicy"><a href="#" title="This item is spicy, please handle with care and drink lots of water."><img src="./images/spicy.png"></a></li>`
    } else { 
      spicyListItem = `<li class="spicy greyed"><a href="#"><img src="./images/spicy.png"></a></li>`
    };

    if (menuItem.vegan === 1) {
      veganListItem = `<li class="vegan is-vegan"><a href="#" title="This item contains no meat and has been prepared without the use of animal products."><img src="./images/vegan.png"></a></li>`
    } else {
      veganListItem = `<li class="vegan greyed"><a href="#"><img src="./images/vegan.png"></a></li>`
    };
    if (menuItem === menuItemArray[0]){title = "<h4>Sides</h4>"}
    else {title = "" }
  var menuItemHtml = `
    ${title}
     <div class="menu-items">
     <div class="menulineup">
       <h4>${menuItem.item}</h4> 
       <h5>$${menuItem.price}</h5>
      </div>
      <div class="menulineup">
       <p>${menuItem.description}</p>
        <ul class="picky-eaters">
         ${allergiesListItem}
         ${favoriteListItem}
         ${spicyListItem}
         ${veganListItem}
       </ul>
      </div>
     </div>`
    $('.menu').append(menuItemHtml);
  })
};

// Appetizers Entrees Sides