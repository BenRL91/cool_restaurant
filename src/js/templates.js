export function appetizerTemplate(appetizerArray){
		appetizerArray.forEach(function(app) {
	var appzHtml = `
	   <div class="menu-items">
       <h4>${app.item}</h4> 
       <h5>$${app.price}</h5>
       <p>${app.description}</p>
        <ul class="picky-eaters">
        ${ListItem}
        ${ListItem}
        ${ListItem}
        ${ListItem}
       </ul>
      </div>
     </div>`
  	 $('.menu').append(appzHtml);
})
};