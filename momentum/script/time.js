// Time
function showTime() {
    const time = document.querySelector('.time');
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showDate();
    showGreeting();
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