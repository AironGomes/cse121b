/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Airon Gomes';
let currentYear = 2023;
let profilePicture = 'images/image.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('#profile');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
let arrayFoods = ['pizza', 'hamburguer', 'lasagna'];

foodElement.innerHTML = arrayFoods;

let favFoods = 'fruits';
arrayFoods.push(favFoods);
foodElement.innerHTML += `<br>${arrayFoods}`;

arrayFoods.shift()
foodElement.innerHTML += `<br>${arrayFoods}`;

arrayFoods.pop()
foodElement.innerHTML += `<br>${arrayFoods}`;