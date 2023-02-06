import { getRandomNumber, sayHello } from './utils/random.js';


const form = document.querySelector('#form');
const tbody = document.querySelector('#table-body');
let id = 124;


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


function validateData(name, age) {
    if (!name) {
        alert('Name is required!');
        return false;
    }

    if (!age) {
        alert('Age is required!');
        return false;
    }

    if (age < 18) {
        alert('Age must be >18!');
        return false;
    }

    if (age > 120) {
        alert('Are you serious?');
        return false;
    }

    return true;
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
