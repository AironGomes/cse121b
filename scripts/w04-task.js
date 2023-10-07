/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Airon Gomes",
    photo: "images/image.jpg",
    favoriteFoods: [
        'Pizza',
        'Lasagna',
        'French Fries'
    ],
    hobbies: [
        'Tennis',
        'Nintendo',
        'Movies'
    ],
    placesLived: []
};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Sao Paulo, SP',
        length: '2 years'
    }
);

myProfile.placesLived.push(
    {
        place: 'Santa Barbara DOeste, SP',
        length: '30 years'
    }
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').setAttribute('src', myProfile.photo);
document.querySelector('#photo').setAttribute('alt', myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});


/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});


/* Places Lived DataList */
myProfile.placesLived.forEach(placePosition => {
    let dt = document.createElement('dt');
    let txt1 = document.createTextNode(placePosition.place);
    dt.appendChild(txt1);
    document.querySelector('#places-lived').appendChild(dt);

    let dd = document.createElement('dd');
    let txt2 = document.createTextNode(placePosition.length);
    dd.appendChild(txt2);

    document.querySelector('#places-lived').appendChild(dd);
});

