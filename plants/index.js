console.log(`1 пункт: 24 балла\n2 пункт: 24 балла\n3 пункт: 15 баллов\n4 пункт: 22 балла\nВсего: 75 баллоы`)


// Burger menu

const headerBurger = document.querySelector('.header--burger')
const menu = document.querySelector('.menu');

// Selectors are added/removed depending on whether the menu button is pressed or not
headerBurger.addEventListener('click', show);

function show() {
    if (headerBurger.classList.contains('active')) {
        headerBurger.classList.remove('active');
        menu.classList.remove('show');
    } else {
        headerBurger.classList.add('active');
        menu.classList.add('show');
    }
}


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
        }
    }

    // Closing the menu by clicking on the links
    if (link) {
        if (headerBurger.classList.contains('active')) {
            headerBurger.classList.remove('active');
            menu.classList.remove('show');
        }
    }
})