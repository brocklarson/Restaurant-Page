import logo from './images/logo.png';
import logo2 from './images/logo2.png';
import backgroundImg from './images/bg.jpg';
import guyFieriImg from './images/guyfieri.jpg';
import aboutUsBG from './images/aboutusBg.jpg';
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
    home.classList.add('navbar-button');
    about.classList.add('navbar-button');
    menu.classList.add('navbar-button');
    contact.classList.add('navbar-button');

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

    const logoContainer = document.createElement('div');
    logoContainer.classList.add('homepage-logo');
    const logoImg = new Image();
    logoImg.src = logo2
    homepage.appendChild(logoContainer);
    logoContainer.appendChild(logoImg);

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

const aboutUs = () => {
    const aboutUs = document.createElement('div');
    aboutUs.classList.add('aboutUs-container');
    main.appendChild(aboutUs);

    const backgroundImg = new Image();
    backgroundImg.classList.add('aboutUs-background')
    backgroundImg.src = aboutUsBG;
    aboutUs.appendChild(backgroundImg);

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('aboutUs-image-container');
    aboutUs.appendChild(imageContainer);

    const guyFieri = new Image();
    guyFieri.src = guyFieriImg
    imageContainer.appendChild(guyFieri);

    const aboutUsText = document.createElement('div');
    aboutUsText.classList.add('aboutUs-text');
    aboutUs.appendChild(aboutUsText);

    const title = document.createElement('h1');
    aboutUsText.appendChild(title);
    title.innerText = "About Us"

    const p = document.createElement('p');
    aboutUsText.appendChild(p);
    p.innerText = "Whether you're craving the classic, richly spiced chicken tikka masala or seeking more exotic flavors with our bold and aromatic lamb vindaloo, Tandoori Oven welcomes you to enjoy our selection of recipes that have been perfected to indulge and thrill your senses with flavors and aroma.\n\n" +
        "Our menu of exotic spices and luscious sauces grabbed the attention of traveling Food Network guru Guy Fieri to be featured on Diners, Drive-Ins, and Dives. We offer a wide array of chicken, lamb, seafood, vegetarian and vegan options of our delicately spiced curries and masalas along with the rustic grilled flavors from our clay tandoor oven. \n\n" +
        "Since opening our first location in the heart of Cache Valley in 2004, Tandoori Oven quickly became a local favorite offering a warm and inviting atmosphere for family dinners, lunch with co-workers, or a romantic evening with that special someone. In July 2013, by consistently offering fresh, high-quality Indian cuisine, we opened a second location, enchanting the palate of Idaho Falls, ID.\n\n" +
        "We’re grateful and honored to be known as one of the best dining experiences with our award-winning cuisine. We humbly invite you to experience your own passport-free culinary cultural journey of subtle tastes that meld into intensely rich and vibrant flavors with each bite of our traditional Indian cuisine."
}

export { navbar, homepage, aboutUs };