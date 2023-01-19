console.log(`1 пункт: 50 баллов\n2 пункт: 50 баллов\n3 пункт: 25 балла`)


// Burger menu

const headerBurger = document.querySelector('.header--burger');
const menu = document.querySelector('.menu');
const main = document.querySelector('.main');

// Selectors are added/removed depending on whether the menu button is pressed or not
headerBurger.addEventListener('click', show);

function show() {
    if (headerBurger.classList.contains('active')) {
        headerBurger.classList.remove('active');
        menu.classList.remove('show');
        menu.classList.add('hide');
        main.style.filter = 'blur(0)';

    } else {
        headerBurger.classList.add('active');
        menu.classList.add('show');
        menu.classList.remove('hide');
        function blur() {
            main.style.filter = 'blur(1px)';
        }
        blur();
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


