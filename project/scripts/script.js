/* Project: Calendar */

/* Declare and initialize global variables */
let year = 2020; //Free plan only allowed year 2020 - new Date().getFullYear();
const holidaysElement = document.getElementById('calendar');
let holidayList = [];
let selectedMonth = 0;

/* async displayTemples Function */
const displayHolidays = (holidays) => {
    holidays.forEach(holiday => {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = holiday.name;

        article.appendChild(h3);
        holidaysElement.appendChild(article);
    });
}



/* async getMonth Function using fetch()*/
const getMonth = async () => {
    reset();
    let month = document.getElementById('sortBy').value;


    const response = await fetch(`https://holidays.abstractapi.com/v1/?api_key=5cadc35d1cd04f78b465a440c4b157e7&country=US&year=${year}&month=${month}`);

    if (response.ok) {
        const data = await response.json();
        holidayList = data;
        displayHolidays(holidayList);
      }
}

/* reset Function */
const reset = () => {
    holidaysElement.innerHTML = '';
}

/* Event Listener */
document.querySelector('#sortBy').addEventListener("change", () => { getMonth() });