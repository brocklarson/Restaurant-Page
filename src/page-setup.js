import logo from './images/logo.png';
import logo2 from './images/logo2.png';
import backgroundImg from './images/bg.jpg';
import guyFieriImg from './images/guyfieri.jpg';
import aboutUsBG from './images/aboutusBg.jpg';
import menuBG from './images/menuBg.jpg';
import menuArr from './menu.js';
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

    const order = document.createElement('button');
    order.classList.add('order-button');
    const a = document.createElement('a');
    a.innerText = "Order Online";
    a.href = "https://repasorder.com/home/3e8fc69d-8021-42b1-a8fd-98e0cdfc557b";

    //DOM Structure
    main.appendChild(navbar);
    navbar.appendChild(logoContainer);
    logoContainer.appendChild(logoImg);
    navbar.appendChild(home);
    navbar.appendChild(about);
    navbar.appendChild(menu);
    navbar.appendChild(contact);
    navbar.appendChild(order);
    order.appendChild(a);
}

const homepage = () => {
    const homepage = document.createElement('div');
    homepage.classList.add('homepage-container');

    const background = new Image();
    background.classList.add('homepage-background');
    background.src = backgroundImg;

    const logoContainer = document.createElement('div');
    logoContainer.classList.add('homepage-logo');
    const logoImg = new Image();
    logoImg.src = logo2

    const title = document.createElement('div');
    title.classList.add('homepage-title');
    title.innerText = "Tandoori Oven";

    const stars = document.createElement('div');
    stars.classList.add('stars');
    stars.innerText = "\u22C6\u22C6\u22C6\u22C6\u22C6"

    const subtitle = document.createElement('div');
    subtitle.classList.add('homepage-subtitle');
    curveText();

    function curveText() {
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
        textPath.textContent = "Finest Indian Cuisine";

        subtitle.appendChild(svg);
        svg.appendChild(path);
        svg.appendChild(text);
        text.appendChild(textPath);
    }

    //DOM Structure
    main.appendChild(homepage);
    homepage.appendChild(background);
    homepage.appendChild(logoContainer);
    logoContainer.appendChild(logoImg);
    homepage.appendChild(title);
    homepage.appendChild(stars);
    homepage.appendChild(subtitle);
}

const aboutUs = () => {
    const aboutUs = document.createElement('div');
    aboutUs.classList.add('aboutUs-container');

    const backgroundImg = new Image();
    backgroundImg.classList.add('aboutUs-background')
    backgroundImg.src = aboutUsBG;

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('aboutUs-image-container');

    const guyFieri = new Image();
    guyFieri.src = guyFieriImg

    const aboutUsText = document.createElement('div');
    aboutUsText.classList.add('aboutUs-text');

    const title = document.createElement('h1');
    title.innerText = "About Us"

    const p = document.createElement('p');
    p.innerText = "Whether you're craving the classic, richly spiced chicken tikka masala or seeking more exotic flavors with our bold and aromatic lamb vindaloo, Tandoori Oven welcomes you to enjoy our selection of recipes that have been perfected to indulge and thrill your senses with flavors and aroma.\n\n" +
        "Our menu of exotic spices and luscious sauces grabbed the attention of traveling Food Network guru Guy Fieri to be featured on Diners, Drive-Ins, and Dives. We offer a wide array of chicken, lamb, seafood, vegetarian and vegan options of our delicately spiced curries and masalas along with the rustic grilled flavors from our clay tandoor oven. \n\n" +
        "Since opening our first location in the heart of Cache Valley in 2004, Tandoori Oven quickly became a local favorite offering a warm and inviting atmosphere for family dinners, lunch with co-workers, or a romantic evening with that special someone. In July 2013, by consistently offering fresh, high-quality Indian cuisine, we opened a second location, enchanting the palate of Idaho Falls, ID.\n\n" +
        "We’re grateful and honored to be known as one of the best dining experiences with our award-winning cuisine. We humbly invite you to experience your own passport-free culinary cultural journey of subtle tastes that meld into intensely rich and vibrant flavors with each bite of our traditional Indian cuisine."

    //DOM Structure
    main.appendChild(aboutUs);
    aboutUs.appendChild(backgroundImg);
    aboutUs.appendChild(imageContainer);
    imageContainer.appendChild(guyFieri);
    aboutUs.appendChild(aboutUsText);
    aboutUsText.appendChild(title);
    aboutUsText.appendChild(p);
}

const menu = () => {
    const menuPage = document.createElement('div');
    menuPage.classList.add('menu-container');

    const menuUpper = document.createElement('div');
    menuUpper.classList.add('menu-upper');

    const backgroundImg = new Image();
    backgroundImg.classList.add('menu-background')
    backgroundImg.src = menuBG;

    const title = document.createElement('h1');
    title.classList.add('menu-title');
    title.innerText = "Our Menu";

    const menuLower = document.createElement('div');
    menuLower.classList.add('menu-lower');

    //Menu Card
    const menuCategories = [...new Set(menuArr.map(item => item.category))];
    menuCategories.forEach(category => {
        createCategory(category);
        menuArr.filter(item => {
            if (item.category === category) createCards(item);
        });
    });

    function createCategory(itemCategory) {
        const category = document.createElement('h1');
        category.classList.add('menu-category');
        category.innerText = itemCategory;
        menuLower.appendChild(category);
    }

    function createCards(item) {
        const menuCard = document.createElement('div');
        menuCard.classList.add('menu-card');

        const cardTitle = document.createElement('div');
        cardTitle.classList.add('card-title');

        const name = document.createElement('p');
        name.classList.add('card-name');
        const price = document.createElement('p');
        price.classList.add('card-price');

        const cardDetails = document.createElement('div');
        cardDetails.classList.add('card-details');
        const description = document.createElement('p');
        description.classList.add('card-description');

        menuLower.appendChild(menuCard);
        menuCard.appendChild(cardTitle);
        cardTitle.appendChild(name);
        cardTitle.appendChild(price);
        menuCard.appendChild(cardDetails);
        cardDetails.appendChild(description);

        name.innerText = item.name;
        price.innerText = `$${item.price}`;
        description.innerText = item.description;
    }

    //DOM Structure
    main.appendChild(menuPage);
    menuPage.appendChild(menuUpper);
    menuUpper.appendChild(backgroundImg);
    menuUpper.appendChild(title);
    menuPage.appendChild(menuLower);
}

const contact = () => {
    const contactUs = document.createElement('div');
    contactUs.classList.add('contactUs-container');

    const subContainer = document.createElement('div');
    subContainer.classList.add('contactUs-subContainer');

    const title = document.createElement('h1');
    title.classList.add('contactUs-title');
    title.innerText = "Contact Us";

    const info = document.createElement('div');
    info.classList.add('contactUs-info');

    const map = document.createElement('div');
    map.classList.add('contactUs-map');

    const p = document.createElement('p');
    p.innerHTML = '<span class="material-icons-outlined">email</span> manager@tandooriovenlogan.com<br>' +
        '<span class="material-icons-outlined">phone</span> (435)750-6836<br><br>' +
        '720 East 1000 North<br>' +
        'Logan, UT 84321';

    const mapScreen = document.createElement('iframe');
    mapScreen.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2976.64551864111!2d-111.81819818431762!3d41.74973828141567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87547dd14da38a23%3A0xc85d2133a5344fdb!2sTandoori%20Oven!5e0!3m2!1sen!2sus!4v1636334695273!5m2!1sen!2sus";

    //DOM Structure
    main.appendChild(contactUs);
    contactUs.appendChild(subContainer);
    subContainer.appendChild(title);
    subContainer.appendChild(info);
    info.appendChild(p);
    subContainer.appendChild(map);
    map.appendChild(mapScreen);
}

export { navbar, homepage, aboutUs, menu, contact };