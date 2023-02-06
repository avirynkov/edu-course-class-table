import { getRandomNumber, sayHello } from './utils/random.js';


const form = document.querySelector('#form');
const tbody = document.querySelector('#table-body');


function addRow(name, age) {
    tbody.innerHTML += `
        <tr>
          <td>${getRandomNumber(100, 1000)}</td>
          <td>${name}</td>
          <td>${age}</td>
        </tr>
    `
}

function resetForm() {
    form.elements['name'].value = "";
    form.elements['age'].value = "";
}


function onSubmit(event) {
    event.preventDefault();
    const name = form.elements['name'].value;
    const age = form.elements['age'].value;

    addRow(name, age);
    resetForm();


}


form.addEventListener('submit', onSubmit);
