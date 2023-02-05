console.log(`1 пункт: 30 баллов`)
console.log(`1.1: 20 баллов`)
console.log(`1.2: 10 баллов (выполнено частично)`)
console.log(`1.3: 10 баллов`)
console.log(`2 пункт: 50 баллов`)
console.log(`3 пункт: 25 баллов`)
console.log(`Итого: 115 баллов`)

// Burger menu
const headerBurger = document.querySelector('.header--burger');
const menu = document.querySelector('.menu');
const main = document.querySelector('.main');
// Selectors are added/removed depending on whether the menu button is pressed or not
headerBurger.addEventListener('click', show);

function show() {
    if (headerBurger.classList.contains('active')) {
        headerBurger.classList.toggle('active');
        menu.classList.toggle('show');
        menu.classList.toggle('hide');
        main.style.filter = 'blur(0)';

    } else {
        headerBurger.classList.add('active');
        menu.classList.toggle('show');
        menu.classList.toggle('hide');

        function blur() {
            main.style.filter = 'blur(1px)';
        }
        blur();
    }
}

// just for me
// function show() {
//     if (headerBurger.classList.contains('active')) {
//         headerBurger.classList.remove('active');
//         menu.classList.remove('show');
//         menu.classList.add('hide');
//         main.style.filter = 'blur(0)';

//     } else {
//         headerBurger.classList.add('active');
//         menu.classList.add('show');
//         menu.classList.remove('hide');

//         function blur() {
//             main.style.filter = 'blur(1px)';
//         }
//         blur();
//     }
// }


window.addEventListener('click', function ({
    target
}) {

    const clack = target.closest('.menu') !== null || target.closest('.header--burger') !== null;
    const link = target.closest('.menu--link') !== null;
    // Closing the menu by clicking outside the menu window
    if (!clack) {
        if (headerBurger.classList.contains('active')) {
            headerBurger.classList.remove('active');
            menu.classList.remove('show');
            menu.classList.add('hide');
            main.style.filter = 'blur(0)';
        }
    }

    // Closing the menu by clicking on the links
    if (link) {
        if (headerBurger.classList.contains('active')) {
            headerBurger.classList.remove('active');
            menu.classList.remove('show');
            menu.classList.add('hide');
            main.style.filter = 'blur(0)';
        }
    }
})

// =====================
// =====================
// =====================
// CONTACTS CHOICE
// ======================
const choiceButton = document.querySelector('.select--pointer');
const choiceBlock = document.querySelector('.contacts--choice');
const shadow = document.querySelector('.select--button');
const title = document.querySelector('.select--title');

function handleChoice() {
    if (choiceButton.classList.contains('select--pointer')) {
        choiceButton.classList.toggle('rotate')
        choiceBlock.classList.toggle('block')
        shadow.classList.toggle('shadow')
        card1.classList.remove('block')
        card2.classList.remove('block')
        card3.classList.remove('block')
        card4.classList.remove('block')
    }
    if (!choiceButton.classList.contains('rotate')) {
        title.innerHTML = 'City'
    }
}

choiceButton.addEventListener('click', handleChoice)

// city
const canandaigua = document.querySelector('.canandaigua')
const newYork = document.querySelector('.newYork')
const yonkers = document.querySelector('.yonkers')
const sherril = document.querySelector('.sherril')
const card1 = document.querySelector('.card1')
const card2 = document.querySelector('.card2')
const card3 = document.querySelector('.card3')
const card4 = document.querySelector('.card4')

function city1() {
    if (canandaigua.classList.contains('canandaigua')) {
        card1.classList.toggle('block')
        choiceButton.classList.toggle('rotate')
        choiceBlock.classList.toggle('block')
        shadow.classList.add('shadow')
        title.innerHTML = canandaigua.textContent;
    }
}

function city2() {
    if (newYork.classList.contains('newYork')) {
        card2.classList.toggle('block')
        choiceButton.classList.toggle('rotate')
        choiceBlock.classList.toggle('block')
        shadow.classList.add('shadow')
        title.innerHTML = newYork.textContent;
    }
}

function city3() {
    if (yonkers.classList.contains('yonkers')) {
        card3.classList.toggle('block')
        choiceButton.classList.toggle('rotate')
        choiceBlock.classList.toggle('block')
        shadow.classList.add('shadow')
        title.innerHTML = yonkers.textContent;
    }
}

function city4() {
    if (sherril.classList.contains('sherril')) {
        card4.classList.toggle('block')
        choiceButton.classList.toggle('rotate')
        choiceBlock.classList.toggle('block')
        shadow.classList.add('shadow')
        title.innerHTML = sherril.textContent;
    }
}

canandaigua.addEventListener('click', city1)
newYork.addEventListener('click', city2)
yonkers.addEventListener('click', city3)
sherril.addEventListener('click', city4)

// =====================
// =====================
// =====================

// PRICES
const accButton1 = document.querySelector('.btn1')
const accButton2 = document.querySelector('.btn2')
const accButton3 = document.querySelector('.btn3')

const acc1 = document.querySelector('.acc1')
const acc2 = document.querySelector('.acc2')
const acc3 = document.querySelector('.acc3')


function price1() {
    if (!accButton1.classList.contains('rotate')) {
        accButton1.classList.add('rotate');
        acc1.classList.add('block');
        accButton2.classList.remove('rotate');
        acc2.classList.remove('block');
        accButton3.classList.remove('rotate');
        acc3.classList.remove('block');
    } else {
        accButton1.classList.remove('rotate');
        acc1.classList.remove('block');
    }
}

function price2() {
    if (!accButton2.classList.contains('rotate')) {
        accButton2.classList.add('rotate');
        acc2.classList.add('block');
        accButton1.classList.remove('rotate');
        acc1.classList.remove('block');
        accButton3.classList.remove('rotate');
        acc3.classList.remove('block');
    } else {
        accButton2.classList.remove('rotate');
        acc2.classList.remove('block');
    }
}

function price3() {
    if (!accButton3.classList.contains('rotate')) {
        accButton3.classList.add('rotate');
        acc3.classList.add('block');
        accButton2.classList.remove('rotate');
        acc2.classList.remove('block');
        accButton1.classList.remove('rotate');
        acc1.classList.remove('block');
    } else {
        accButton3.classList.remove('rotate');
        acc3.classList.remove('block');
    }
}

accButton1.addEventListener('click', price1);
accButton2.addEventListener('click', price2);
accButton3.addEventListener('click', price3);



// =====================
// =====================
// =====================
// Services
// =====================
// v.3.0
const buttons = document.querySelectorAll('.service--btn');
const blocks = document.querySelectorAll('.project--item');
let activeButtons = [];

buttons.forEach(button => {
    button.addEventListener('click', event => {
        const button = event.target;
        const service = button.dataset.service;
        const active = button.classList.contains('active_services');

        if (active) {
            button.classList.remove('active_services');
            activeButtons = activeButtons.filter(item => item !== service);
        } else {
            if (activeButtons.length === 2) return;
            button.classList.add('active_services');
            activeButtons.push(service);
        }

        blocks.forEach(item => {
            if (activeButtons.includes(item.dataset.service)) {
                item.classList.remove('blur_services');
            } else if (!activeButtons.includes(item.dataset.service)) {
                item.classList.add('blur_services');
            }
        });
    });
});

// Version 2.0
// // Buttons
// const gardenBtn = document.querySelector('#garden')
// const lawnBtn = document.querySelector('#lawn')
// const plantingBtn = document.querySelector('#planting')
// // Blocks
// const gardenBlock = document.querySelectorAll('.garden')
// const lawnBlock = document.querySelectorAll('.lawn')
// const plantingBlock = document.querySelectorAll('.planting')

// function garden() {
//     const active = gardenBtn.classList.contains('active_services');

//     if (active) {
//         gardenBtn.classList.remove('active_services');
//         lawnBlock.forEach(a => a.classList.remove('blur_services'))
//         plantingBlock.forEach(a => a.classList.remove('blur_services'))
//         gardenBlock.forEach(a => a.classList.remove('blur_services'))

//     } else {
//         gardenBtn.classList.add('active_services');
//         lawnBlock.forEach(a => a.classList.add('blur_services'))
//         plantingBlock.forEach(a => a.classList.add('blur_services'))
//         gardenBlock.forEach(a => a.classList.remove('blur_services'))
//     }
// }

// function lawn() {
//     const active = lawnBtn.classList.contains('active_services');

//     if (active) {
//         lawnBtn.classList.remove('active_services');
//         gardenBlock.forEach(a => a.classList.remove('blur_services'))
//         plantingBlock.forEach(a => a.classList.remove('blur_services'))
//         lawnBlock.forEach(a => a.classList.remove('blur_services'))

//     } else {
//         lawnBtn.classList.add('active_services');
//         gardenBlock.forEach(a => a.classList.add('blur_services'))
//         plantingBlock.forEach(a => a.classList.add('blur_services'))
//         lawnBlock.forEach(a => a.classList.remove('blur_services'))
//     }
// }

// function planting() {
//     const active = plantingBtn.classList.contains('active_services');

//     if (active) {
//         plantingBtn.classList.remove('active_services');
//         gardenBlock.forEach(a => a.classList.remove('blur_services'))
//         lawnBlock.forEach(a => a.classList.remove('blur_services'))
//         plantingBlock.forEach(a => a.classList.remove('blur_services'))
//     } else {
//         plantingBtn.classList.add('active_services');
//         gardenBlock.forEach(a => a.classList.add('blur_services'))
//         lawnBlock.forEach(a => a.classList.add('blur_services'))
//         plantingBlock.forEach(a => a.classList.remove('blur_services'))

//     }
// }

// gardenBtn.addEventListener('click', garden)
// lawnBtn.addEventListener('click', lawn)
// plantingBtn.addEventListener('click', planting)


// Version 1.0
// const serviceButtons = document.querySelectorAll('.service--btn');
// const serviceImages = document.querySelectorAll('.project--item');

// let activeBtn = [];

// serviceButtons.forEach(element => {
//     element.addEventListener('click', function () {
//         const active = this.classList.contains('active_services');


//         if (!active && activeBtn.length == 2) return;

//         if (active) {
//             this.classList.remove('active_services');
//             activeBtn = activeBtn.filter(btn => btn !== this)


//         } else {
//             this.classList.add('active_services');
//             activeBtn.push(this)
//         }
//     })
// })
// =====================
// =====================
// ====================