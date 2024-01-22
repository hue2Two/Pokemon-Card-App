let pokeCards = document.querySelector("#pokeCards");
let pokeInput = document.querySelector("#pokeInput");
let search = document.querySelector("#search");
let filterEx = document.querySelector("#exFilter");
let filterLvx = document.querySelector("#lvxFilter");
let filterGx = document.querySelector("#gxFilter");
let addPokeCards = document.querySelector("#addPokeCards");
let sellPokeCards = document.querySelector("#sellPokeCards");
let selectedCardData = null;
let selectedCardBorder = null;
let copyText = document.querySelector("#copyText");

console.log(`grabbing ex filter: ${filterEx}`);
console.log(`grabbing lvx filter: ${filterLvx}`);
console.log(`grabbing lvx filter: ${filterGx}`);
console.log(`grabbing copyText: ${copyText}`);

const searchPokeCards = (userInput) => {
    let query = `name:${userInput}`;
    let url = `https://api.pokemontcg.io/v2/cards?q=${query}`;
    // let url = `https://api.pokemontcg.io/v2/cards?q=${query}&pageSize=9`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        let allCards = data.data;
        console.log(`ALL CARDS 1-1: ${(data)}`);
        console.log(`ALL CARDS 1-2: ${(data.data)}`);
        console.log(`ALL CARDS 1-3: ${JSON.stringify(data)}`)

        // Create a div to contain all card divs
        let cardsContainer = document.createElement("div");
        cardsContainer.classList.add('cardsContainerClass');

        for (let i = 0; i < allCards.length; i++) {
            // Create a div to wrap the image and price
            let cardWrapper = document.createElement("div");
            cardWrapper.classList.add('pokeFilterClass');

            // Create and append the image element
            let cardImg = document.createElement("img");
            cardImg.src = allCards[i].images.small;
            cardWrapper.appendChild(cardImg);

            // Create and append the price element
            let cardPrice = document.createElement("p");
            cardPrice.textContent = "market price: $" + (allCards[i]?.tcgplayer?.prices?.holofoil?.market || 'N/A');

            let cardPrice2 = document.createElement("p");
            cardPrice2.textContent = "low price: $" + (allCards[i]?.tcgplayer?.prices?.holofoil?.low || 'N/A');

            let cardPrice3 = document.createElement("p");
            cardPrice3.textContent = "mid price: $" + (allCards[i]?.tcgplayer?.prices?.holofoil?.mid || 'N/A');

            let cardPrice4 = document.createElement("p");
            cardPrice4.textContent = "high price: $" + (allCards[i]?.tcgplayer?.prices?.holofoil?.high || 'N/A');

            

            cardWrapper.appendChild(cardPrice);
            cardWrapper.appendChild(cardPrice2);
            cardWrapper.appendChild(cardPrice3);
            cardWrapper.appendChild(cardPrice4);

            // Add click event listener to each card
            cardWrapper.addEventListener('click', function() {
                console.log(`card inside was clicked`);

                // Reset borders of all cards to black
                document.querySelectorAll('.pokeFilterClass').forEach(card => {
                    card.style.border = "solid black 5px";
                });

                selectedCardData = allCards[i]; // Store the card data
                selectedCardBorder = cardWrapper;
                cardWrapper.style.border = "solid brown 5px";
            });
            


            // Append the wrapper div to cardsContainer
            cardsContainer.appendChild(cardWrapper);
        }

        pokeCards.appendChild(cardsContainer);
    })
    .catch(error => {
        console.error('Error fetching data: ', error);
    });
};

search.addEventListener("click", () => {
    pokeCards.textContent = "";
    // Reset radio buttons
    document.querySelectorAll('[name="pokeFilter"]').forEach(radio => {
        radio.checked = false;
    });

    let userInput = pokeInput.value;
    searchPokeCards(userInput);
});

filterEx.addEventListener("change", () => {
    pokeCards.textContent = "";
    let userInput = pokeInput.value + "-Ex";
    searchPokeCards(userInput);
});

filterLvx.addEventListener("change", () => {
    pokeCards.textContent = "";
    let userInput = pokeInput.value + "*LV.X";
    searchPokeCards(userInput);
});

filterGx.addEventListener("change", () => {
    pokeCards.textContent = "";
    let userInput = pokeInput.value + "-GX";
    searchPokeCards(userInput);
});

addPokeCards.addEventListener("click", () => {
    if (selectedCardData) {
        console.log(`Adding card: ${selectedCardData.name}`);

        let infoContainer = document.createElement("div");
        infoContainer.classList.add('containerOfInfo');

        let addingCards = document.createElement("p");
        addingCards.textContent = `name: ${selectedCardData.name}`;
        infoContainer.appendChild(addingCards);

        let addingCards2 = document.createElement("p");
        addingCards2.textContent = `set: ${selectedCardData.set.id}`;
        infoContainer.appendChild(addingCards2);

        let addingCards3 = document.createElement("p");
        addingCards3.textContent = `price: ${selectedCardData.tcgplayer?.prices.holofoil?.market || 'N/A'}`;
        infoContainer.appendChild(addingCards3);

        let addingCards4 = document.createElement("p");
        addingCards4.textContent = `low: ${selectedCardData.tcgplayer?.prices.holofoil?.low || 'N/A'}`;
        infoContainer.appendChild(addingCards4);

        let addingCards5 = document.createElement("p");
        addingCards5.textContent = `mid: ${selectedCardData.tcgplayer?.prices.holofoil?.mid || 'N/A'}`;
        infoContainer.appendChild(addingCards5);

        let addingCards6 = document.createElement("p");
        addingCards6.textContent = `price: ${selectedCardData.tcgplayer?.prices.holofoil?.high || 'N/A'}`;
        infoContainer.appendChild(addingCards6);
        // sellPokeCards.appendChild(addingCards);

        sellPokeCards.appendChild(infoContainer);

        selectedCardBorder.style.border = "solid black 5px";
    } else {
        console.log("No card selected");
    }
});


// let addPokeCards = document.querySelector("#addPokeCards");
// let sellPokeCards = document.querySelector("#sellPokeCards");
console.log(`targeting add poke cards bt: ${addPokeCards}`);
console.log(`targeting sell poke cards p: ${sellPokeCards}`);
// sellPokeCards.textContent = "test";

// cardWrapper.addEventListener('click', function() {
//     console.log(`card inside was clicked`);
//     console.log(`card inside info 1-1: ${allCards[i].set.id};`);
//     console.log(`card inside info 1-2: ${allCards[i].tcgplayer?.prices.holofoil?.market || 'N/A'}`);
//     console.log(`card inside info 1-1: ${allCards[i].name};`);

//     cardWrapper.style.border = "solid brown 5px";

//     addPokeCards.addEventListener("click", () => {
        
//         console.log(`add poke cards was clicked`);
        
//         if(cardWrapper.style.border == "solid brown 5px") {
            
//         }
//         let addingCards = document.createElement("p");
//         addingCards.textContent = `set: ${allCards[i].set.id}`;

//         sellPokeCards.appendChild(addingCards);

//         cardWrapper.style.border = "solid black 5px";
//     })
// })
