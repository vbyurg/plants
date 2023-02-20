// Greeting
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');
const date = new Date();
const hours = date.getHours();

function showGreeting() {
    if (hours >= 6 && hours <= 11) {
        greeting.innerHTML = 'Доброе утро,';
    } else if (hours >= 12 && hours <= 17) {
        greeting.innerHTML = 'Добрый день,';
    } else if (hours >= 18 && hours <= 23) {
        greeting.innerHTML = 'Добрый вечер,';
    } else {
        greeting.innerHTML = 'Доброй ночи,';
    }
}

// Set to the localStorage
function setLocalStorage() {
    localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage);

// Get from the localStorage
function getLocalStorage() {
    if (localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
}
window.addEventListener('load', getLocalStorage);