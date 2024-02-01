let removeIntermediary = null;
let copyText = document.querySelector("#copyText");

document.querySelector("#addPokeCards").addEventListener("click", () => {
    if (selectedCardData) {
        console.log(`Adding card: ${selectedCardData.name}`);

        let infoContainer = document.createElement("div");
        infoContainer.classList.add('containerOfInfo');

        let addingCards = document.createElement("p");
        addingCards.textContent = `name: ${selectedCardData.name}`;
        infoContainer.appendChild(addingCards);
        addingCards.classList.add('infoToCopy');

        let addingCards2 = document.createElement("p");
        addingCards2.textContent = `set: ${selectedCardData.set.id}`;
        infoContainer.appendChild(addingCards2);
        addingCards2.classList.add('infoToCopy');

        let addingCards3 = document.createElement("p");
        addingCards3.textContent = `market price: $${selectedCardData.tcgplayer?.prices.holofoil?.market || 'N/A'}`;
        infoContainer.appendChild(addingCards3);
        addingCards3.classList.add('infoToCopy');

        let addingCards4 = document.createElement("p");
        addingCards4.textContent = `low: $${selectedCardData.tcgplayer?.prices.holofoil?.low || 'N/A'}`;
        infoContainer.appendChild(addingCards4);
        addingCards4.classList.add('infoToCopy');

        let addingCards5 = document.createElement("p");
        addingCards5.textContent = `mid: $${selectedCardData.tcgplayer?.prices.holofoil?.mid || 'N/A'}`;
        infoContainer.appendChild(addingCards5);
        addingCards5.classList.add('infoToCopy');

        let addingCards6 = document.createElement("p");
        addingCards6.textContent = `high: $${selectedCardData.tcgplayer?.prices.holofoil?.high || 'N/A'}`;
        infoContainer.appendChild(addingCards6);
        addingCards6.classList.add('infoToCopy');

        document.querySelector("#sellPokeCards").appendChild(infoContainer);

        // removeIntermediary = infoContainer;

        selectedCardBorder.style.border = "solid black 5px";
        // selectedCardBorder.classList.add('pokeFilterClass2');

        infoContainer.addEventListener("click", () => {
            console.log(`remove cards click event triggered`);

            document.querySelectorAll(".containerOfInfo").forEach(info => {
                console.log(`testing container of info`);
                info.style.border = "solid yellowgreen 5px";
            })

            infoContainer.style.border = "solid blue 5px";
            infoContainer.id = "selectedForRemoval"; // unique ID
            removeIntermediary = infoContainer;
            console.log(`remove intermediary: ${JSON.stringify(removeIntermediary)}`);
        })
    } else {
        console.log("No card selected");
    }
});

document.querySelector("#removePokeCards").addEventListener("click", () => {
    console.log(`remove poke cards was clicked`);
    console.log(`remove intermediary in remove button ${removeIntermediary}`);

    // document.querySelector(".containerOfInfo").style.border = "solid yellowgreen 5px";

    document.querySelectorAll(".containerOfInfo").forEach(container => {
        container.style.border = "solid yellowgreen 5px";
    })

    // Find the container with the specific ID and remove it
    const elementToRemove = document.getElementById("selectedForRemoval");
    if (elementToRemove) {
        elementToRemove.remove();
        console.log("Card info removed");
    } else {
        console.log("No card info selected for removal");
    }

    
})

copyText.addEventListener("click", () => {
    console.log(`copy text was clicked`);

    let tempMessage = document.createElement("p");
    tempMessage.textContent = "cards were copied to clipboard";
    document.querySelector("#pokeCardsSell").appendChild(tempMessage);

    setTimeout(() => {
        tempMessage.textContent = "";
    }, 1000)

    let inputElement = document.createElement('input');

    // Initialize an empty string to hold all the info
    let allCopiedInfo = '';

    let copiedInfo = document.querySelectorAll(".infoToCopy").forEach(copied => {
        console.log(`copied info: ${JSON.stringify(copied.textContent)}`);

        //concatinate all copied info
        // allCopiedInfo += copied.textContent + "\n";
        allCopiedInfo += `${copied.textContent} \n`;

        // navigator.clipboard
        // .readText()
        // .then(
        //     (clipText) => (document.querySelector(".editor").innerText += clipText),
        // );


        // //set value of input element to element text
        // //cant get copy to work cleanly...
        // inputElement.setAttribute('value', `${allCopiedInfo} \n`);
        // document.body.appendChild(inputElement);

        // //now we need to copy the input element
        // inputElement.select();

        // document.execCommand("copy");

        // inputElement.parentNode.removeChild(inputElement);
    })

    // Use the Clipboard API to copy the concatenated text to the clipboard
    navigator.clipboard.writeText(allCopiedInfo.trim())
        .then(() => {
            console.log("Text successfully copied to clipboard");
        })
        .catch(err => {
            console.error("Failed to copy text: ", err);
        });


})
