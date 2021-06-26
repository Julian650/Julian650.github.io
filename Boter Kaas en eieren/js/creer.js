console.log("Geladen")

const emptyArray = [];

const numbers = [12, 24, 36];

console.log(numbers[0])

const memoryNumbers = document.querySelectorAll(".dropdown-content")

for (let i = 0; i < memoryNumbers.length; i++) {
    const SelectNumber = memoryNumbers[i];
    SelectNumber.addEventListener("click", function () {
      console.log("Click")  
      ChosenNumber(SelectNumber)
    })
}

function ChosenNumber(SelectNumber) {
    console.log(SelectNumber)
}
