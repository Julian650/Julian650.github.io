console.log("Javascript is Locked and Loaded")
// Check of Javascript werkt

const memoryBox = document.querySelectorAll(".memory-card")

for (let i = 0; i < memoryBox.length; i++) {
    const memoryCard = memoryBox[i];
    memoryCard.addEventListener("click", function () {
        console.log("Click")
        cardSelect(memoryCard)
    })
}

function cardSelect(memoryCard) {
    console.log(memoryCard)
}