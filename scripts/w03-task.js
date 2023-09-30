/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers)

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function () {
    let subtract1 = Number(document.querySelector('#subtract1').value);
    let subtract2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtract1, subtract2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers)


/* Arrow Function - Multiply Numbers */
let multiply = (number1, number2) => number1 * number2;

let multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers)


/* Open Function Use - Divide Numbers */
let divide = (number1, number2) => number1 / number2;

function divideNumbers() {
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers)


/* Decision Structure */
const currentDateAndTime = new Date();
let currentYear;
currentYear = currentDateAndTime.getFullYear();
document.getElementById("year").innerHTML = currentYear;

/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
/* Output Source Array */
document.querySelector('#array').innerHTML = numbersArray;
/* Output Odds Only Array */
let odds = numbersArray.filter((num) => num % 2 === 1);
document.querySelector('#odds').innerHTML = odds;
/* Output Evens Only Array */
let evens = numbersArray.filter((num) => num % 2 === 0);
document.querySelector('#evens').innerHTML = evens;
/* Output Sum of Org. Array */
let sumOfArray = numbersArray.reduce((sum, number) => sum + number);
document.querySelector('#sumOfArray').innerHTML = sumOfArray;
/* Output Multiplied by 2 Array */
let multiplied = numbersArray.map(number => number * 2);
document.querySelector('#multiplied').innerHTML = multiplied;
/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);
document.querySelector('#sumOfMultiplied').innerHTML = sumOfMultiplied;