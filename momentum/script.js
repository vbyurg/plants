// Time
function showTime() {
    const time = document.querySelector('.time');
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showDate()
    showGreeting()
}
setInterval(showTime, 1000);

// Date
const dayRu = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
];

const monthRu = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря'
]

function showDate() {
    const date = document.querySelector('.date');
    const day = new Date();
    const currentDay = day.getDay();
    const currentDate = day.getDate();
    const currentMonth = day.getMonth();
    date.textContent = `${dayRu[currentDay]}, ${currentDate} ${monthRu[currentMonth]}`;

}
// showDate()
// =======================================


// =======================================
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
// showGreeting()

// Set to the localStorage
function setLocalStorage() {
    localStorage.setItem('name', name.value)
}
window.addEventListener('beforeunload', setLocalStorage)

// Get from the localStorage
function getLocalStorage() {
    if (localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
}

window.addEventListener('load', getLocalStorage)
// =======================================


// =======================================
// Slider
