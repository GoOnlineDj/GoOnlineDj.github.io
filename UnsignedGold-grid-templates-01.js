const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const newDog = document.querySelector(".new-dog");

async function addNewDog() {
    const promise = await fetch(DOG_URL);
    const processedResponse = await promise.json();

    function pet() {
        const img = document.createElement("img");
        img.src = processedResponse.message;
        img.alt = "cute pet dog";
        newDog.appendChild(img);
    }

    pet();
    console.log(processedResponse);
}

document.querySelector(".new-dog-button").addEventListener("click", addNewDog);