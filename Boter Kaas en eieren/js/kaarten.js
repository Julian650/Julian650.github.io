console.log("Javascript is Locked and Loaded");
// Check of Javascript werkt

const memoryBox = document.querySelectorAll(".memory-card");

let flippedCard = false;
let cardOne;
let cardTwo;

for (let i = 0; i < memoryBox.length; i++) {
    const memoryCard = memoryBox[i];
    memoryCard.addEventListener("click", function () {
        cardSelect(memoryCard);
    });
}

function cardSelect(memoryCard) {
    console.log(memoryCard);
    memoryCard.classList.toggle("flip");
    if (flippedCard == false) {
        flippedCard = true;
        cardOne = memoryCard.getAttribute("data-callsign");
    } 
    else {
        flippedCard = false;
        cardTwo = memoryCard.getAttribute("data-callsign");
        if (cardOne === cardTwo) {
            alert("Je hebt er twee goed!")
        }
    }
}