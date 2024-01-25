const screen = document.querySelector(".screen");

const numbers = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator")
const clearBtn = document.querySelectorAll(".clear")
const add = document.querySelectorAll(".add")
const subtract = document.querySelectorAll(".subtract")
const multiply = document.querySelectorAll(".multiply")
const divide = document.querySelectorAll(".divide")
const equals = document.querySelectorAll(".equals");

let operation = false;
let firstNumber = "";
let secondNumber = "";


function numberClick (number) {
    numbers.forEach(number => {
        number.addEventListener("click", function () {
            
            if (operation === false) {
                screen.textContent += this.textContent;
                firstNumber += this.textContent;
                
                //console.log(firstNumber);
                
            } else {
                screen.textContent += this.textContent;
                secondNumber += this.textContent;
                console.log(firstNumber)
                console.log(secondNumber)
                
                console.log(operation)
            }
        })
    })
};

function clearClick () {
    clearBtn.forEach(clear => {
        clear.addEventListener("click", function handleClick(event) {
            screen.textContent = "";
            firstNumber = "";
            secondNumber = "";
            operation = false;
            console.log("Clear clicked", event)
            console.log(firstNumber.textContent);
            console.log(secondNumber);
        })
    })
};

function additionClick () {
    add.forEach(add => {
        add.addEventListener("click", function () {
            screen.textContent += add.textContent; 
            operation = "+"
            console.log("Add clicked", event)
            screen.textContent = firstNumber += operation += secondNumber;
        })
    })
};

function subtractClick () {
    subtract.forEach(subtract => {
        subtract.addEventListener("click", function () {
            screen.textContent += subtract.textContent; 
            operation = "-"
            console.log("Subtract clicked", event)
            screen.textContent = firstNumber += operator += secondNumber;
        })
    })
};

function multiplyClick () {
    multiply.forEach(multiply => {
        multiply.addEventListener("click", function () {
            screen.textContent += multiply.textContent; 
            operation = "x"
            console.log("Multiply clicked", event)
            screen.textContent = firstNumber += operator += secondNumber;
        })
    })
};

function divideClick () {
    divide.forEach(divide => {
        divide.addEventListener("click", function () {
            screen.textContent += divide.textContent; 
            operation = "/"
            console.log("Divide clicked", event)
            screen.textContent = firstNumber += operator += secondNumber;
        })
    })
};

function equalsClicked () {
    equals.forEach(equals => {
        equals.addEventListener("click", function handleClick(event) {
            if (operation === "+") {
                let total = (parseFloat(firstNumber) + parseFloat(secondNumber));
                screen.textContent = total;
                console.log("Equals clicked", event);
            } else if (operation === "-") {
                let total = (parseFloat(firstNumber) - parseFloat(secondNumber));
                screen.textContent = total;
                console.log("Equals clicked", event);
            } else if (operation === "x") {
                let total = (parseFloat(firstNumber) * parseFloat(secondNumber));
                screen.textContent = total;
                console.log("Equals clicked", event);
            } else if (operation === "/") {
                let total = (parseFloat(firstNumber) / parseFloat(secondNumber));
                screen.textContent = total;
                console.log("Equals clicked", event);
            }

                
        })
    })  
};





numberClick();
clearClick();
additionClick();
equalsClicked();
subtractClick();
multiplyClick();
divideClick();


