import { navbar, homepage, aboutUs, menu } from './page-setup.js';

const load = (() => {
    navbar();
    // homepage();
    menu();
    const main = document.getElementById('content');
    const navbarButtons = document.querySelectorAll('.navbar-button');

    for (let i = 0; i < navbarButtons.length; i++) {
        navbarButtons[i].addEventListener('click', changePage);
    }

    function changePage(event) {
        const buttonID = event.target.textContent;
        clearPage();

        if (buttonID === "Home") homepage();
        else if (buttonID === "About Us") aboutUs();
        else if (buttonID === "Menu") menu();
        else homepage();
    }

    function clearPage() {
        const children = main.children;
        Array.from(children).forEach(child => {
            if (child.className !== "navbar") main.removeChild(child)
        });
    }

})();