fetch("./data.json")
    .then(response => response.json())
    .then(myDrinks => loadFoods(myDrinks));


function loadFoods(myDrinks) {
    var mainContainer = document.getElementById("drinks")


    for (let i = 0; i < myDrinks.drinks.length; i++) {
        let title = myDrinks.drinks[i].title;
        let price = myDrinks.drinks[i].price;
        let url = myDrinks.drinks[i].url;
        let description = myDrinks.drinks[i].description;
        console.log(title);


        let card = document.createElement("div");
        card.classList.add("card");

        // Populate the card with item details
        card.innerHTML = `
            <h3>${title}</h3>
            <div class="image-container">
                <img src=${url} width="300"/>
            </div>
            <p>${description} ${price}</p>
        `;

        mainContainer.appendChild(card);
    } //end of for


} // end of function