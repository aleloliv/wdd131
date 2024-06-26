const mainnav = document.querySelector('.navigation')
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

function addLeadingZero(number) 
{
  return number < 10 ? '0' + number : number;
}
  
let formattedDate = addLeadingZero(oLastModif.getMonth() + 1) + '/' +
                    addLeadingZero(oLastModif.getDate()) + '/' +
                    oLastModif.getFullYear() + ' ' +
                    addLeadingZero(oLastModif.getHours()) + ':' +
                    addLeadingZero(oLastModif.getMinutes()) + ':' +
                    addLeadingZero(oLastModif.getSeconds());

lastModified.textContent = "Last Modification: " + formattedDate;

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


document.addEventListener('DOMContentLoaded', function() {
    const currentOption = document.querySelector('#currentoption');
    const navLinks = document.querySelectorAll('.navigation ul li a');
    const temples = document.querySelectorAll('.figures figure');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const selectedOption = event.target.textContent;
            currentOption.textContent = selectedOption;

            temples.forEach(temple => {
                temple.style.display = 'none';
            });

            if (selectedOption === 'Home') {
                temples.forEach(temple => {
                    temple.style.display = 'block';
                });
            } else {
                temples.forEach(temple => {
                    if (temple.classList.contains(selectedOption)) {
                        temple.style.display = 'block';
                    }
                });
            }
            
            let numColumns = Math.ceil(templesToShow.length / 3);
            document.documentElement.style.setProperty('--num-columns', numColumns);
        });
    });
});

