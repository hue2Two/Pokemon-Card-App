let pokeCards = document.querySelector("#pokeCards");
let pokeInput = document.querySelector("#pokeInput");
let search = document.querySelector("#search");
let filterEx = document.querySelector("#exFilter");
let filterLvx = document.querySelector("#lvxFilter");
let filterGx = document.querySelector("#gxFilter");

console.log(`grabbing ex filter: ${filterEx}`);
console.log(`grabbing lvx filter: ${filterLvx}`);
console.log(`grabbing lvx filter: ${filterGx}`);

search.addEventListener("click", () => {
    pokeCards.textContent = "";
    // Reset radio buttons
    document.querySelectorAll('[name="pokeFilter"]').forEach(radio => {
        radio.checked = false;
    });

    console.log("SEARCH WAS CLICKED");

    let userInput = pokeInput.value;
    console.log(`USER INPUT: ${userInput}`);

    let searchPokeCards = () => {
        let query = `name:${userInput}`;
        let url = `https://api.pokemontcg.io/v2/cards?q=${(query)}&pageSize=15`;

        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(`Needed Search Results: ${JSON.stringify(data.data[0].images.small)}`);

            console.log(`ALL RESULTS: ${JSON.stringify(data)}`);

            console.log(`POSSIBLE RESULTS: ${JSON.stringify(data.data[1].images.small)}`);

            let allCards = data.data;
            console.log(`ALL CARDS:${allCards}`);
            console.log(`ALL CARDS LENGTH: ${allCards.length}`)

            for(let i = 0; i < allCards.length; i++) {
                console.log(`LOOPING CARDS: ${JSON.stringify(allCards[i].images.small)}`);

                let cardImg = document.createElement("img");
                cardImg.src = allCards[i].images.small;
                pokeCards.appendChild(cardImg);
            }

            // let card1Img = document.createElement("img");
            // card1Img.src = data.data[0].images.small;
            // pokeCards.appendChild(card1Img);
    })
    .catch(error => {
        console.error('Error fetching data: ', error);
    });
    }

    searchPokeCards()
})

filterEx.addEventListener("change", () => {
    console.log("ex filter changed");

    // pokeCards.textContent = "test";
    pokeCards.textContent = "";
    let userInput = pokeInput.value + "-Ex";
    console.log(`checking input for ex filter: ${userInput}`);

    let searchPokeCards = () => {
        let query = `name:${userInput}`;
        let url = `https://api.pokemontcg.io/v2/cards?q=${(query)}&pageSize=15`;

        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(`Needed Search Results: ${JSON.stringify(data.data[0].images.small)}`);

            console.log(`ALL EX RESULTS: ${JSON.stringify(data)}`);

            console.log(`POSSIBLE RESULTS: ${JSON.stringify(data.data[1].images.small)}`);

            let allCards = data.data;
            console.log(`ALL CARDS:${allCards}`);
            console.log(`ALL CARDS LENGTH: ${allCards.length}`)

            for(let i = 0; i < allCards.length; i++) {
                console.log(`LOOPING CARDS: ${JSON.stringify(allCards[i].images.small)}`);

                let cardImg = document.createElement("img");
                cardImg.src = allCards[i].images.small;
                pokeCards.appendChild(cardImg);
            }

            // let card1Img = document.createElement("img");
            // card1Img.src = data.data[0].images.small;
            // pokeCards.appendChild(card1Img);
    })
    .catch(error => {
        console.error('Error fetching data: ', error);
    });
    }

    searchPokeCards();
})

filterLvx.addEventListener("change", () => {
    console.log(`lvx filter changed`);
    pokeCards.textContent = "";
    let userInput = pokeInput.value + "*LV.X";

    let searchPokeCards = () => {
        let query = `name:${userInput}`;
        let url = `https://api.pokemontcg.io/v2/cards?q=${(query)}&pageSize=15`;

        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(`FETCHING LVX P1-1: ${data}`);
            console.log(`FETCHING LVX P1-2: ${JSON.stringify(data)}`);

            console.log(`POSSIBLE RESULTS: ${JSON.stringify(data.data[1].images.small)}`);

            let allCards = data.data;
            console.log(`ALL CARDS:${allCards}`);
            console.log(`ALL CARDS LENGTH: ${allCards.length}`);

            for(let i = 0; i < allCards.length; i++) {
                console.log(`LOOPING CARDS: ${JSON.stringify(allCards[i].images.small)}`);

                let cardImg = document.createElement("img");
                cardImg.src = allCards[i].images.small;
                pokeCards.appendChild(cardImg);
            }
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
        });
    }

    searchPokeCards();
})

filterGx.addEventListener("change", () => {
    console.log(`gx filter changed`);
    pokeCards.textContent = "";
    let userInput = pokeInput.value + "-GX";

    let searchPokeCards = () => {
        let query = `name:${userInput}`;
        let url = `https://api.pokemontcg.io/v2/cards?q=${(query)}&pageSize=15`;

        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(`FETCHING GX P1-1: ${data}`);
            console.log(`FETCHING GX P1-2: ${JSON.stringify(data)}`);

            console.log(`POSSIBLE RESULTS: ${JSON.stringify(data.data[1].images.small)}`);

            let allCards = data.data;
            console.log(`ALL CARDS:${allCards}`);
            console.log(`ALL CARDS LENGTH: ${allCards.length}`);

            // Create a div to contain all card divs
            let cardsContainer = document.createElement("div");
            cardsContainer.classList.add('cardsContainerClass');

            for(let i = 0; i < allCards.length; i++) {
                console.log(`LOOPING CARDS: ${JSON.stringify(allCards[i].images.small)}`);

                // Create a div to wrap the image and price
                let cardWrapper = document.createElement("div");
                cardWrapper.classList.add('pokeFilterClass');

                // Create and append the image element
                let cardImg = document.createElement("img");
                cardImg.src = allCards[i].images.small;
                cardWrapper.appendChild(cardImg);

                // Create and append the price element
                let cardPrice = document.createElement("p");
                cardPrice.textContent = "market price: $" + data.data[i].tcgplayer?.prices.holofoil.market;
                cardWrapper.appendChild(cardPrice);

                // Append the wrapper div to pokeCards
                // pokeCards.appendChild(cardWrapper);

                cardsContainer.appendChild(cardWrapper);

                console.log(`FETCHING PRICES 1-1: ${JSON.stringify(data.data[i].tcgplayer)}`);

                // console.log(`FETCHING PRICES 1-2: ${JSON.stringify(data.data[i].tcgplayer.prices)}`);

                console.log(`FETCHING PRICES 1-2: ${JSON.stringify(data.data[i].tcgplayer?.prices.holofoil.market)}`);

            }

            pokeCards.appendChild(cardsContainer);
        }
        )
        .catch(error => {
            console.error('Error fetching data: ', error);
        });
    }

    searchPokeCards();
})