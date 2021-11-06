import { navbar, homepage, aboutUs, menu } from './page-setup.js';

const load = (() => {
    navbar();
    homepage();
    const main = document.getElementById('content');
    const navbarButtons = document.querySelectorAll('.navbar-button');
    const header = document.querySelector('.navbar');

    window.onscroll = () => {
        if (window.scrollY > 100) {
            header.classList.add('navbar-scroll');
        } else {
            header.classList.remove('navbar-scroll');
        }
    };

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