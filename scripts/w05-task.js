/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = temple.templeName;
        let img = document.createElement('img');
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', temple.location);

        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
}



/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');

    if (response.ok) {
        const data = await response.json();
        templeList = data;
        displayTemples(templeList);
      }
}

/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
}

/* sortBy Function */
const sortBy = (temples) => {
    reset();
    let filter = document.getElementById('sortBy').value;
    let display = [];

    switch(filter) {
        case 'utah':
            display = temples.filter(element =>
                element.location.includes("Utah"));
            break;
        case 'notutah':
            display = temples.filter(element =>
                !element.location.includes("Utah"));
            break;
        case 'older':
            display = temples.filter(element =>
                new Date(element.dedicated) < new Date("1950, January, 01"));  
            break;
        case 'all':
           display = temples;
            break;
      };
      displayTemples(display);
}


getTemples();

/* Event Listener */
document.querySelector('#sortBy').addEventListener("change", () => { sortBy(templeList) });