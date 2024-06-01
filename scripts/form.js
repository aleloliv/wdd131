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

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      avgRating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      avgRating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      avgRating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      avgRating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      avgRating: 5.0
    }
  ];

  document.addEventListener('DOMContentLoaded', function () {
    const productSelect = document.getElementById('product-name');

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
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

document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelector('.rating');
    const labels = stars.querySelectorAll('label');

    labels.forEach(label => {
        label.addEventListener('mouseover', function () {
            stars.classList.add('hover');
            labels.forEach(l => l.classList.remove('hovered'));
            this.classList.add('hovered');
            let nextSibling = this.nextElementSibling;
            while (nextSibling) {
                nextSibling.classList.add('hovered');
                nextSibling = nextSibling.nextElementSibling;
            }
        });

        label.addEventListener('mouseout', function () {
            stars.classList.remove('hover');
            labels.forEach(label => label.classList.remove('hovered'));
        });
    });
});

