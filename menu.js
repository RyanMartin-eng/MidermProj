fetch("./data.json")
    .then(response => response.json())
    .then(myFoods => loadMenu(myFoods));

function loadMenu(myFoods) {
    var mainContainerFood = document.getElementById("foods");
    var mainContainerDrinks = document.getElementById("drinks");

    for (let i = 0; i < myFoods.food.length; i++) {
        let title = myFoods.food[i].title;
        let price = myFoods.food[i].price;
        let url = myFoods.food[i].url;
        let description = myFoods.food[i].description;

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

        mainContainerFood.appendChild(card);
    }

    for (let i = 0; i < myFoods.drinks.length; i++) {
        let title = myFoods.drinks[i].title;
        let price = myFoods.drinks[i].price;
        let url = myFoods.drinks[i].url;
        let description = myFoods.drinks[i].description;

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

        mainContainerDrinks.appendChild(card);
    }
}
