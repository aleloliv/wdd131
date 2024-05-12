let firstName = 'Antonia';
let lastName = 'Francesca';

/*function fullName (first, last) {
    return `${frist} ${last}`;
}*/

const fullName = (firstName, lastName) => `${firstName} ${lastName}`;

document.querySelector(`#fullName`).innerHTML = fullName(firstName, lastName);