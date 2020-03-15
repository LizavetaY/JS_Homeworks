var menu = document.querySelector('.burgerMenu'),
    button = document.querySelector('.burgerMenuButton'),
    overlay = document.querySelector('.burgerMenuOverlay');

function toggleMenu() {
    menu.classList.toggle('burgerMenu_active');
}

function burgerMenu() {

    button.addEventListener('click', function (event) {
        event.preventDefault();
        toggleMenu();
    });

    function toggleMenu() {
        menu.classList.toggle('burgerMenu_active');
    }
}

burgerMenu();