export function appetizerTemplate(appetizerArray){
		appetizerArray.forEach(function(app) {

    var allergiesListItem;
    var favoriteListItem;
    var spicyListItem;
    var veganListItem;

    if (app.allergies === 1) {
      allergiesListItem = `<li class="allergies allergic"><a href="#" title="This item may contain shellfish or another item that some people may be allergic to. Please ask your waiter or waitress for assistance.">${app.allergies}</a></li>`
    } else {
      allergiesListItem = `<li class="allergies greyed"><a href="#">${app.allergies}</a></li>`
    };

    if (app.favorite === 1) {
      favoriteListItem = `<li class="favorite is-favorite"><a href="#" title="We have been doing this a long time and this item has become one of our favorites.">${app.favorite}</a></li>`
    } else {
      favoriteListItem = `<li class="favorite greyed"><a href="#">${app.favorite}</a></li>`
    };

    if (app.spicy === 1) { 
      spicyListItem = `<li class="spicy is-spicy"><a href="#" title="This item is spicy, please handle with care and drink lots of water.">${app.spicy}</a></li>`
    } else { 
      spicyListItem = `<li class="spicy grayed"><a href="#">${app.spicy}</a></li>`
    };

    if (app.vegan === 1) {
      veganListItem = `<li class="vegan is-vegan"><a href="#" title="This item contains no meat and has been prepared without the use of animal products.">${app.vegan}</a></li>`
    } else {
      veganListItem = `<li class="vegan grayed"><a href="#">${app.vegan}</a></li>`
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
};