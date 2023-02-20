const nextBtn = document.querySelector(".slide-next");
const prevBtn = document.querySelector(".slide-prev");
const body = document.querySelector("body");

const hour = date.getHours();

// Get current time of day
function getTimeOfDay() {
    if (hours >= 6 && hours <= 11) {
        return 'morning';
    } else if (hours >= 12 && hours <= 17) {
        return 'afternoon';
    } else if (hours >= 18 && hours <= 23) {
        return 'evening';
    } else {
        return 'night';
    }
}

// Get random number
function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set background
function setBg() {
    let timeOfDay = getTimeOfDay();
    let randomNum = getRandomNum(1, 20);
    if (randomNum < 10) randomNum = `0${randomNum}`;

    let link = `https://github.com/vbyurg/momentimIMG/tree/assets/images/${timeOfDay}/${randomNum}.jpg`;
    console.log(link);
    body.style.backgroundImage = `url(${link})`;

}

setBg()