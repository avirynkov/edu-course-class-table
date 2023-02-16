import { getRandomNumber, sayHello } from './utils/random.js';
import { validateData } from './utils/validate.js';
import { BookCollection } from './temp/BookCollection.js';


const form = document.querySelector('#form');
const tbody = document.querySelector('#table-body');
let id = 124;

const bookCollection = new BookCollection();


function addRow(name, age) {
    tbody.innerHTML += `
        <tr>
          <td>${increment()}</td>
          <td>${name}</td>
          <td>${age}</td>
        </tr>
    `
}

function resetForm() {
    form.elements['name'].value = "";
    form.elements['age'].value = "";
}

function increment() {
    id += 1;
    return id;
}


function onSubmit(event) {
    event.preventDefault();
    const name = form.elements['name'].value;
    const age = form.elements['age'].value;

    const isValid = validateData(name, age);

    if (isValid) {
        addRow(name, age);
        resetForm();
    }
}

form.addEventListener('submit', onSubmit);
