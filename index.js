fetch("./data.json")
    .then(response => response.json())
    .then(myFoods => loadFoods(myFoods));


function loadFoods(myFoods) {
    var mainContainer = document.getElementById("foods")


    for (let i = 0; i < myFoods.food.length; i++) {
        let title = myFoods.food[i].title;
        let price = myFoods.food[i].price;
        let url = myFoods.food[i].url;
        let description = myFoods.food[i].description;
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