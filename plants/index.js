console.log(`1 пункт: 50 баллов\n2 пункт: 50 баллов\n3 пункт: 25 балла`)


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



// CONTACTS CHOICE
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

function city1 () {
    if (canandaigua.classList.contains('canandaigua')) {
        card1.classList.toggle('block')
        choiceButton.classList.toggle('rotate')
        choiceBlock.classList.toggle('block')
        shadow.classList.add('shadow')
        title.innerHTML = canandaigua.textContent;
    }
}
function city2 () {
    if (newYork.classList.contains('newYork')) {
        card2.classList.toggle('block')
        choiceButton.classList.toggle('rotate')
        choiceBlock.classList.toggle('block')
        shadow.classList.add('shadow')
        title.innerHTML = newYork.textContent;
    }
}
function city3 () {
    if (yonkers.classList.contains('yonkers')) {
        card3.classList.toggle('block')
        choiceButton.classList.toggle('rotate')
        choiceBlock.classList.toggle('block')
        shadow.classList.add('shadow')
        title.innerHTML = yonkers.textContent;
    }
}
function city4 () {
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