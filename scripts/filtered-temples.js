const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.textContent = today.getFullYear();

let oLastModif = new Date(document.lastModified);
const lastModified = document.querySelector("#lastModified");

function addLeadingZero(number) {
    return number < 10 ? '0' + number : number;
}

let formattedDate = addLeadingZero(oLastModif.getMonth() + 1) + '/' +
    addLeadingZero(oLastModif.getDate()) + '/' +
    oLastModif.getFullYear() + ' ' +
    addLeadingZero(oLastModif.getHours()) + ':' +
    addLeadingZero(oLastModif.getMinutes()) + ':' +
    addLeadingZero(oLastModif.getSeconds());

lastModified.textContent = "Last Modification: " + formattedDate;

document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.navigation ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const selectedOption = event.target.getAttribute('data-option');
            displayTempleCards(selectedOption);
        });
    });

    displayTempleCards('home');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005-08-07",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888-05-21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015-06-07",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020-05-02",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974-11-19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986-01-10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983-12-02",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "São Paulo Brazil",
        location: "São Paulo, Brazil",
        dedicated: "1978-10-30",
        area: 59246,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/940f3e201364433a3d5d3dc14b0cacee38d41d1d/full/320%2C/0/default"
    },
    {
        templeName: "Brasília Brazil",
        location: "Brasília, Brazil",
        dedicated: "2023-09-17",
        area: 25000,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/95f3f3abdd4811ed920ceeeeac1e15db91037802/full/320%2C/0/default"
    },
    {
        templeName: "Campinas Brazil",
        location: "Campinas, Brazil",
        dedicated: "2002-05-17",
        area: 48100,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/c9a81a6f86750d7d9ade3499d3df52e2f7f726a7/full/320%2C/0/default"
    }
];

function displayTempleCards(option) {
    const container = document.getElementById('temple-figures');
    container.innerHTML = '';

    let filteredTemples = temples;

    switch (option) {
        case 'old':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated) < new Date('1999-01-01'));
            break;
        case 'new':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated) >= new Date('2000-01-01'));
            break;
        case 'large':
            filteredTemples = temples.filter(temple => temple.area >= 10000);
            break;
        case 'small':
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        case 'home':
        default:
            filteredTemples = temples;
            break;
    }

    filteredTemples.forEach(temple => {
        const templeCard = document.createElement('div');
        templeCard.className = 'temple-card';

        templeCard.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Area: ${temple.area} sq ft</p>
            <p class="space"> </p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;

        container.appendChild(templeCard);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    displayTempleCards('home');
});

document.addEventListener('DOMContentLoaded', function() {
    const currentOption = document.querySelector('#currentoption');
    const navLinks = document.querySelectorAll('.navigation ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const selectedOption = event.target.textContent;
            currentOption.textContent = selectedOption;
        });
    });
});
