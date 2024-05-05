// loops.js
myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };
const foodsElements = document.querySelector('#favorite-foods');
const placesElements = document.querySelector('#places-lived');

function generateListMarkup(list, templateCallback) {
    const htmlList = list.map(templateCallback);
    return htmlList.join("");
  }

  function foodElementToString(food) {
    return `<li>${food}</li>`;
}

function placeElementToString(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

foodsElement.innerHTML = generateListMarkup(myInfo.favoriteFoods, foodElementToString);
placesElement.innerHTML = generateListMarkup(myInfo.placesLived, placeElementToString);