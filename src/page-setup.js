import logo from './images/logo.png';
import backgroundImg from './images/bg.jpg';
const main = document.getElementById('content');

const navbar = () => {
    const navbar = document.createElement('div');
    navbar.classList.add('navbar');


    const logoContainer = document.createElement('div');
    logoContainer.classList.add('logo-container');
    const logoImg = new Image();
    logoImg.src = logo

    const home = document.createElement('button');
    const about = document.createElement('button');
    const menu = document.createElement('button');
    const contact = document.createElement('button');
    home.innerText = "Home";
    about.innerText = "About Us";
    menu.innerText = "Menu";
    contact.innerText = "Contact";

    const fillerDiv1 = document.createElement('div');
    const fillerDiv2 = document.createElement('div');
    fillerDiv1.classList.add('filler-div');
    fillerDiv2.classList.add('filler-div');

    main.appendChild(navbar);
    navbar.appendChild(logoContainer);
    logoContainer.appendChild(logoImg);
    navbar.appendChild(fillerDiv1);
    navbar.appendChild(home);
    navbar.appendChild(about);
    navbar.appendChild(menu);
    navbar.appendChild(contact);
    navbar.appendChild(fillerDiv2);
}

const homepage = () => {
    const homepage = document.createElement('div');
    homepage.classList.add('homepage-container');
    main.appendChild(homepage);

    const background = new Image();
    background.classList.add('homepage-background');
    background.src = backgroundImg;
    homepage.appendChild(background);

    const title = document.createElement('div');
    title.classList.add('homepage-title');
    title.innerText = "Tandoori Oven";
    homepage.appendChild(title);

    const stars = document.createElement('div');
    stars.classList.add('stars');
    stars.innerText = "\u22C6\u22C6\u22C6\u22C6\u22C6"
    homepage.appendChild(stars);

    const subtitle = document.createElement('div');
    subtitle.classList.add('homepage-subtitle');
    subtitle.style.width = "500px";
    subtitle.style.height = "max-content";
    homepage.appendChild(subtitle);

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('width', '500');
    svg.setAttribute('height', 'max-content');
    svg.setAttribute('viewbox', '0 0 500 500');
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");

    const path = document.createElementNS("http://www.w3.org/2000/svg", 'path');
    path.setAttribute('d', 'M 0 0 C 166 100 333 100 500 0');
    path.setAttribute("id", "curve");

    const text = document.createElementNS("http://www.w3.org/2000/svg", 'text');
    text.setAttribute('width', '500');

    const textPath = document.createElementNS("http://www.w3.org/2000/svg", 'textPath');
    textPath.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#curve");
    textPath.setAttribute("startOffset", "50%");
    textPath.textContent = "Authentic Indian Cuisine";

    subtitle.appendChild(svg);
    svg.appendChild(path);
    svg.appendChild(text);
    text.appendChild(textPath);

}


export { navbar, homepage };