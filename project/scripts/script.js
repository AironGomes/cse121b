/* Project: Calendar */

/* Declare and initialize global variables */
let year = 2020; //Free plan only allowed year 2020 - new Date().getFullYear();
const holidaysElement = document.getElementById('calendar');
let holidayList = [];
let selectedMonth = 0;

/* async displayTemples Function */
const displayHolidays = (holidays) => {

    for(let i=1; i<=31; i++) {
        let show = holidays.filter(holiday => holiday.date_day == i)
        if (show.length > 0) {
            let h3 = document.createElement('h3');
            h3.textContent = `Day ${show[0].date_day} (${show[0].week_day}):`;
            holidaysElement.appendChild(h3);
            show.forEach(holiday => {
                let h4 = document.createElement('h4');
                let h5 = document.createElement('h5');
                h4.textContent = `${holiday.name}`;
                h5.textContent = `Location: ${holiday.location}`;
                holidaysElement.appendChild(h4);
                holidaysElement.appendChild(h5);
            });
        }
    };
}

function checkDate(day, ) {
    return age >= 18;
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