/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _page_setup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-setup */ "./src/page-setup.js");


function menuItem(name, category, price, description) {
    this.name = name
    this.category = category
    this.price = price
    this.description = description
}
let menuArr = [];

menuArr.push(new menuItem('PANEER TIKKA', 'Tandoori Delights', 12.99, 'Fresh homemade cheese barbecued over the tandoor. Tandoori Dishes served sizzling with sauteed onions, bell peppers, tomatoes and side of rice.'));
menuArr.push(new menuItem('LAMB TIKKA', 'Tandoori Delights', 14.99, 'Tender chunks of lamb marinated in yogurt and spices, barbecued over tandoor. Tandoori Dishes served sizzling with sauteed onions, bell peppers, tomatoes and side of rice.'));
menuArr.push(new menuItem('CHICKEN TIKKA', 'Tandoori Delights', 13.99, 'Boneless chicken breast marinated in yogurt and spices, barbecued over tandoor. Tandoori Dishes served sizzling with sauteed onions, bell peppers, tomatoes and side of rice.'));
menuArr.push(new menuItem('SHRIMP TANDOORI', 'Tandoori Delights', 15.99, 'Jumbo shrimp marinated in yogurt and spices, barbecued over tandoor. Tandoori Dishes served sizzling with sauteed onions, bell peppers, tomatoes and side of rice.'));
menuArr.push(new menuItem('TANDOORI SPECIAL GRILL', 'Tandoori Delights', 18.99, 'Combination of Chicken Tandoori, Chicken Tikka, Lamb Tikka & Shrimp Tandoori. Tandoori Dishes served sizzling with sauteed onions, bell peppers, tomatoes and side of rice.'));
menuArr.push(new menuItem('TANDOORI CHICKEN', 'Tandoori Delights', 12.99, 'Chicken leg quarters marinated in yogurt and spices, barbecued over tandoor. Tandoori Dishes served sizzling with sauteed onions, bell peppers, tomatoes and side of rice.'));
menuArr.push(new menuItem('CHICKEN TIKKA MASALA', 'Chicken Delights', 12.99, 'Boneless chicken barbecued in a clay oven, then cooked with bell peppers, onions tomatoes, cream and spices. Served with rice.'));
menuArr.push(new menuItem('CHICKEN KARAHI', 'Chicken Delights', 12.99, 'Boneless chicken sauteed with onions, bellpeppers and tomatoes in a thick curry souce.'));
menuArr.push(new menuItem('CHICKEN KURMA', 'Chicken Delights', 12.99, 'Boneless chicken cooked with onions, cashews, golden raisins, cream and curry spices. Served with rice.'));
menuArr.push(new menuItem('CHICKEN CURRY', 'Chicken Delights', 11.99, 'Traditional dish cooked with boneless chicken, onions, garlic, ginger, tomatoes and curry spices. Served with rice.'));
menuArr.push(new menuItem('CHICKEN COCONUT KURMA', 'Chicken Delights', 12.99, 'Boneless chicken cooked with onions, tomatoes, cashew nuts, golden raisins, coconut milk and spices. Served with rice.'));
menuArr.push(new menuItem('CHICKEN MUSHROOM', 'Chicken Delights', 12.49, 'Boneless chicken cooked with fresh mushrooms, onions, tomatoes and spices. Served with rice.'));
menuArr.push(new menuItem('BUTTER CHICKEN', 'Chicken Delights', 12.99, 'Boneless tandoori chicken cooked with onions, tomatoes, cream, nuts and spices. Served with rice.'));
menuArr.push(new menuItem('CHICKEN VINDALOO', 'Chicken Delights', 12.49, 'Boneless chicken cooked with tomatoes, onions, potatoes, spices and a touch of vinegar. Served with rice.'));
menuArr.push(new menuItem('CHICKEN SAAG', 'Chicken Delights', 12.99, 'Boneless chicken cooked with spinach, onions, garlic, ginger and cream. Served with rice.'));
menuArr.push(new menuItem('MANGO CHICKEN CURRY', 'Chicken Delights', 12.99, 'Boneless chicken cooked with bell peppers, tomatoes and spices in a mango flavoured sauce.'));
menuArr.push(new menuItem('PINEAPPLE CHICKEN CURRY', 'Chicken Delights', 12.99, 'Boneless chicken barbecued in a clay oven then cooked with potatoes, pineapple, onion garlic and spices.'));
menuArr.push(new menuItem('LAMB CURRY', 'Lamb Delights', 12.99, 'Traditional dish cooked with boneless lamb, onions, garlic, ginger, tomatoes and curry spices.'));
menuArr.push(new menuItem('LAMB KURMA', 'Lamb Delights', 13.99, 'Boneless lamb cooked with onions, cashew nuts, golden raisins, cream and curry spices.'));
menuArr.push(new menuItem('LAMB MUSHROOM', 'Lamb Delights', 13.49, 'Boneless lamb cooked with fresh mushrooms, onions, tomatoes and spices.'));
menuArr.push(new menuItem('LAMB COCONUT KURMA', 'Lamb Delights', 13.99, 'Boneless lamb cooked with coconut milk, onions, tomatoes, cashew nuts, golden raisins and spices.'));
menuArr.push(new menuItem('LAMB VINDALOO', 'Lamb Delights', 13.49, 'Boneless lamb cooked with potatoes, onions, spices and a touch of vinegar.'));
menuArr.push(new menuItem('LAMB SAAG', 'Lamb Delights', 13.99, 'Lamb cooked with spinach, onions, garlic, ginger and a touch of cream.'));
menuArr.push(new menuItem('ROGAN JOSH', 'Lamb Delights', 13.49, 'Lamb cooked with onions, ginger, garlic, cashew nuts, yogurt and spices.'));
menuArr.push(new menuItem('LAMB KARAHI', 'Lamb Delights', 13.99, 'Boneless Lumb sauteed with onions, bellpeppers and tomatoes in a thick curry souce.'));
menuArr.push(new menuItem('LAMB TIKKA MASALA', 'Lamb Delights', 13.99, 'Boneless lamb barbecued in a clay oven then cooked with onions, bell peppers, tomatoes, cream and spices.'));
menuArr.push(new menuItem('NAAN', 'Indian Bread', 2.09, 'Tear drop shaped bread baked in a clay overn.'));
menuArr.push(new menuItem('TANDOORI ROTI', 'Indian Bread', 1.99, 'Round shaped whole wheat bread baked in a clay overn.'));
menuArr.push(new menuItem('GARLIC NAAN', 'Indian Bread', 2.79, 'Tear drop shaped white bread, baked in a clay oven with a touch of garlic.'));
menuArr.push(new menuItem('GARLIC ROTI', 'Indian Bread', 2.79, 'Tear drop shaped white bread, baked in a clay oven with a touch of garlic.'));
menuArr.push(new menuItem('GINGER GARLIC NAAN', 'Indian Bread', 2.99, 'Tear drop shaped white bread, baked in a clay oven with a touch of ginger and garlic.'));
menuArr.push(new menuItem('GINGER GARLIC ROTI', 'Indian Bread', 2.99, 'Tear drop shaped white bread, baked in a clay oven with a touch of ginger and garlic.'));
menuArr.push(new menuItem('SWEET NAAN', 'Indian Bread', 4.49, 'Indian bread stuffed with a mixture of coconut, raisins and cashew nuts baked in a clay overn.'));
menuArr.push(new menuItem('ALOO NAAN', 'Indian Bread', 3.79, 'Multi-layered whole wheat bread, stuffed with mashed potatoes.'));
menuArr.push(new menuItem('ONION NAAN', 'Indian Bread', 3.79, 'Indian bread stuffed with seasoned onions and baked in tandoor.'));
menuArr.push(new menuItem('PANEER NAAN', 'Indian Bread', 4.49, 'Multi-layered whole wheat bread, stuffed with cheese.'));
menuArr.push(new menuItem('TANDOORI SPECIAL BASKET', 'Indian Bread', 9.49, '2 naan, 1 garlic naan & your choice of 1 stuffed naan. (Extra $.50 for Paneer naan OR Sweet naan)'));
menuArr.push(new menuItem('MANGO LASSI', 'Beverages', 3.99, 'Refreshing yogurt drink blended with fresh mangoes and homemade yogurt.'));
menuArr.push(new menuItem('STRAWBERRY LASSI', 'Beverages', 3.99, 'Refreshing yogurt drink blended with fresh strawberries and homemade yogurt.'));
menuArr.push(new menuItem('SWEET LASSI', 'Beverages', 3.79, 'Refreshing yogurt drink blended with rose water and homemade yogurt.'));
menuArr.push(new menuItem('INDIAN COFFEE', 'Beverages', 2.59, 'Special coffee from India boiled with milk and spices.'));
menuArr.push(new menuItem('MANGO JUICE', 'Beverages', 2.99, 'Homemade Juice made from fresh mangoes.'));
menuArr.push(new menuItem('PINEAPPLE JUICE', 'Beverages', 2.59, 'Homemade Juice made from fresh pineapples.'));
menuArr.push(new menuItem('SOFT DRINKS', 'Beverages', 2.79, 'Pepsi products (Free refills)'));
menuArr.push(new menuItem('INDIAN CHAI', 'Beverages', 2.59, 'Special tea from India boiled with milk and spices'));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuArr);

/***/ }),

/***/ "./src/page-setup.js":
/*!***************************!*\
  !*** ./src/page-setup.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navbar": () => (/* binding */ navbar),
/* harmony export */   "homepage": () => (/* binding */ homepage),
/* harmony export */   "aboutUs": () => (/* binding */ aboutUs),
/* harmony export */   "menu": () => (/* binding */ menu),
/* harmony export */   "contact": () => (/* binding */ contact)
/* harmony export */ });
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/logo.png */ "./src/images/logo.png");
/* harmony import */ var _images_logo2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/logo2.png */ "./src/images/logo2.png");
/* harmony import */ var _images_bg_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/bg.jpg */ "./src/images/bg.jpg");
/* harmony import */ var _images_guyfieri_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/guyfieri.jpg */ "./src/images/guyfieri.jpg");
/* harmony import */ var _images_aboutusBg_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/aboutusBg.jpg */ "./src/images/aboutusBg.jpg");
/* harmony import */ var _images_menuBg_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/menuBg.jpg */ "./src/images/menuBg.jpg");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");







const main = document.getElementById('content');

const navbar = () => {
    const navbar = document.createElement('div');
    navbar.classList.add('navbar');

    const logoContainer = document.createElement('div');
    logoContainer.classList.add('logo-container');
    const logoImg = new Image();
    logoImg.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_0__

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
    background.src = _images_bg_jpg__WEBPACK_IMPORTED_MODULE_2__;

    const logoContainer = document.createElement('div');
    logoContainer.classList.add('homepage-logo');
    const logoImg = new Image();
    logoImg.src = _images_logo2_png__WEBPACK_IMPORTED_MODULE_1__

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
    backgroundImg.src = _images_aboutusBg_jpg__WEBPACK_IMPORTED_MODULE_4__;

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('aboutUs-image-container');

    const guyFieri = new Image();
    guyFieri.src = _images_guyfieri_jpg__WEBPACK_IMPORTED_MODULE_3__

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
    backgroundImg.src = _images_menuBg_jpg__WEBPACK_IMPORTED_MODULE_5__;

    const title = document.createElement('h1');
    title.classList.add('menu-title');
    title.innerText = "Our Menu";

    const menuLower = document.createElement('div');
    menuLower.classList.add('menu-lower');

    //Menu Card
    const menuCategories = [...new Set(_menu_js__WEBPACK_IMPORTED_MODULE_6__["default"].map(item => item.category))];
    menuCategories.forEach(category => {
        createCategory(category);
        _menu_js__WEBPACK_IMPORTED_MODULE_6__["default"].filter(item => {
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



/***/ }),

/***/ "./src/images/aboutusBg.jpg":
/*!**********************************!*\
  !*** ./src/images/aboutusBg.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cb108b76742fe36f0220.jpg";

/***/ }),

/***/ "./src/images/bg.jpg":
/*!***************************!*\
  !*** ./src/images/bg.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "af3dec9321df50da6015.jpg";

/***/ }),

/***/ "./src/images/guyfieri.jpg":
/*!*********************************!*\
  !*** ./src/images/guyfieri.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2e6184d1b93ad094eda6.jpg";

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6ee4e5ebe65f92c47dbb.png";

/***/ }),

/***/ "./src/images/logo2.png":
/*!******************************!*\
  !*** ./src/images/logo2.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2235466ccb29ff24a7e5.png";

/***/ }),

/***/ "./src/images/menuBg.jpg":
/*!*******************************!*\
  !*** ./src/images/menuBg.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "637aaeae1a3a81330fd2.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-setup.js */ "./src/page-setup.js");


const load = (() => {
    init();
    const navbarButtons = document.querySelectorAll('.navbar-button');
    const header = document.querySelector('.navbar');

    for (let i = 0; i < navbarButtons.length; i++) {
        navbarButtons[i].addEventListener('click', changePage);
    }

    function init() {
        (0,_page_setup_js__WEBPACK_IMPORTED_MODULE_0__.navbar)();
        (0,_page_setup_js__WEBPACK_IMPORTED_MODULE_0__.homepage)();

        window.onscroll = () => {
            if (window.scrollY > 100) {
                header.classList.add('navbar-black');
            } else {
                header.classList.remove('navbar-black');
            }
        };
    }

    function changePage(event) {
        const buttonID = event.target.textContent;
        clearPage();

        if (buttonID === "Home") (0,_page_setup_js__WEBPACK_IMPORTED_MODULE_0__.homepage)();
        else if (buttonID === "About Us") (0,_page_setup_js__WEBPACK_IMPORTED_MODULE_0__.aboutUs)();
        else if (buttonID === "Menu") (0,_page_setup_js__WEBPACK_IMPORTED_MODULE_0__.menu)();
        else if (buttonID === "Contact") (0,_page_setup_js__WEBPACK_IMPORTED_MODULE_0__.contact)();
        else (0,_page_setup_js__WEBPACK_IMPORTED_MODULE_0__.homepage)();
    }

    function clearPage() {
        const main = document.getElementById('content');
        const children = main.children;
        Array.from(children).forEach(child => {
            if (child.className !== "navbar") main.removeChild(child)
        });
    }

})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RGU7QUFDRTtBQUNLO0FBQ0k7QUFDRDtBQUNOO0FBQ1Q7QUFDaEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw2Q0FBSTs7QUFFdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBYTs7QUFFbEM7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDhDQUFLOztBQUV2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0Isa0RBQVM7O0FBRWpDO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsaURBQVc7O0FBRTlCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLCtDQUFNOztBQUU5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHVDQUF1QyxvREFBVztBQUNsRDtBQUNBO0FBQ0EsUUFBUSx1REFBYztBQUN0QjtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsV0FBVztBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxUEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7OztBQ2YyRTs7QUFFM0U7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDBCQUEwQjtBQUM5QztBQUNBOztBQUVBO0FBQ0EsUUFBUSxzREFBTTtBQUNkLFFBQVEsd0RBQVE7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLHdEQUFRO0FBQ3pDLDBDQUEwQyx1REFBTztBQUNqRCxzQ0FBc0Msb0RBQUk7QUFDMUMseUNBQXlDLHVEQUFPO0FBQ2hELGFBQWEsd0RBQVE7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQSxDQUFDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZS1zZXR1cC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1lbnUgfSBmcm9tIFwiLi9wYWdlLXNldHVwXCI7XG5cbmZ1bmN0aW9uIG1lbnVJdGVtKG5hbWUsIGNhdGVnb3J5LCBwcmljZSwgZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdGhpcy5jYXRlZ29yeSA9IGNhdGVnb3J5XG4gICAgdGhpcy5wcmljZSA9IHByaWNlXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG59XG5sZXQgbWVudUFyciA9IFtdO1xuXG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdQQU5FRVIgVElLS0EnLCAnVGFuZG9vcmkgRGVsaWdodHMnLCAxMi45OSwgJ0ZyZXNoIGhvbWVtYWRlIGNoZWVzZSBiYXJiZWN1ZWQgb3ZlciB0aGUgdGFuZG9vci4gVGFuZG9vcmkgRGlzaGVzIHNlcnZlZCBzaXp6bGluZyB3aXRoIHNhdXRlZWQgb25pb25zLCBiZWxsIHBlcHBlcnMsIHRvbWF0b2VzIGFuZCBzaWRlIG9mIHJpY2UuJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnTEFNQiBUSUtLQScsICdUYW5kb29yaSBEZWxpZ2h0cycsIDE0Ljk5LCAnVGVuZGVyIGNodW5rcyBvZiBsYW1iIG1hcmluYXRlZCBpbiB5b2d1cnQgYW5kIHNwaWNlcywgYmFyYmVjdWVkIG92ZXIgdGFuZG9vci4gVGFuZG9vcmkgRGlzaGVzIHNlcnZlZCBzaXp6bGluZyB3aXRoIHNhdXRlZWQgb25pb25zLCBiZWxsIHBlcHBlcnMsIHRvbWF0b2VzIGFuZCBzaWRlIG9mIHJpY2UuJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnQ0hJQ0tFTiBUSUtLQScsICdUYW5kb29yaSBEZWxpZ2h0cycsIDEzLjk5LCAnQm9uZWxlc3MgY2hpY2tlbiBicmVhc3QgbWFyaW5hdGVkIGluIHlvZ3VydCBhbmQgc3BpY2VzLCBiYXJiZWN1ZWQgb3ZlciB0YW5kb29yLiBUYW5kb29yaSBEaXNoZXMgc2VydmVkIHNpenpsaW5nIHdpdGggc2F1dGVlZCBvbmlvbnMsIGJlbGwgcGVwcGVycywgdG9tYXRvZXMgYW5kIHNpZGUgb2YgcmljZS4nKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdTSFJJTVAgVEFORE9PUkknLCAnVGFuZG9vcmkgRGVsaWdodHMnLCAxNS45OSwgJ0p1bWJvIHNocmltcCBtYXJpbmF0ZWQgaW4geW9ndXJ0IGFuZCBzcGljZXMsIGJhcmJlY3VlZCBvdmVyIHRhbmRvb3IuIFRhbmRvb3JpIERpc2hlcyBzZXJ2ZWQgc2l6emxpbmcgd2l0aCBzYXV0ZWVkIG9uaW9ucywgYmVsbCBwZXBwZXJzLCB0b21hdG9lcyBhbmQgc2lkZSBvZiByaWNlLicpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ1RBTkRPT1JJIFNQRUNJQUwgR1JJTEwnLCAnVGFuZG9vcmkgRGVsaWdodHMnLCAxOC45OSwgJ0NvbWJpbmF0aW9uIG9mIENoaWNrZW4gVGFuZG9vcmksIENoaWNrZW4gVGlra2EsIExhbWIgVGlra2EgJiBTaHJpbXAgVGFuZG9vcmkuIFRhbmRvb3JpIERpc2hlcyBzZXJ2ZWQgc2l6emxpbmcgd2l0aCBzYXV0ZWVkIG9uaW9ucywgYmVsbCBwZXBwZXJzLCB0b21hdG9lcyBhbmQgc2lkZSBvZiByaWNlLicpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ1RBTkRPT1JJIENISUNLRU4nLCAnVGFuZG9vcmkgRGVsaWdodHMnLCAxMi45OSwgJ0NoaWNrZW4gbGVnIHF1YXJ0ZXJzIG1hcmluYXRlZCBpbiB5b2d1cnQgYW5kIHNwaWNlcywgYmFyYmVjdWVkIG92ZXIgdGFuZG9vci4gVGFuZG9vcmkgRGlzaGVzIHNlcnZlZCBzaXp6bGluZyB3aXRoIHNhdXRlZWQgb25pb25zLCBiZWxsIHBlcHBlcnMsIHRvbWF0b2VzIGFuZCBzaWRlIG9mIHJpY2UuJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnQ0hJQ0tFTiBUSUtLQSBNQVNBTEEnLCAnQ2hpY2tlbiBEZWxpZ2h0cycsIDEyLjk5LCAnQm9uZWxlc3MgY2hpY2tlbiBiYXJiZWN1ZWQgaW4gYSBjbGF5IG92ZW4sIHRoZW4gY29va2VkIHdpdGggYmVsbCBwZXBwZXJzLCBvbmlvbnMgdG9tYXRvZXMsIGNyZWFtIGFuZCBzcGljZXMuIFNlcnZlZCB3aXRoIHJpY2UuJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnQ0hJQ0tFTiBLQVJBSEknLCAnQ2hpY2tlbiBEZWxpZ2h0cycsIDEyLjk5LCAnQm9uZWxlc3MgY2hpY2tlbiBzYXV0ZWVkIHdpdGggb25pb25zLCBiZWxscGVwcGVycyBhbmQgdG9tYXRvZXMgaW4gYSB0aGljayBjdXJyeSBzb3VjZS4nKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdDSElDS0VOIEtVUk1BJywgJ0NoaWNrZW4gRGVsaWdodHMnLCAxMi45OSwgJ0JvbmVsZXNzIGNoaWNrZW4gY29va2VkIHdpdGggb25pb25zLCBjYXNoZXdzLCBnb2xkZW4gcmFpc2lucywgY3JlYW0gYW5kIGN1cnJ5IHNwaWNlcy4gU2VydmVkIHdpdGggcmljZS4nKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdDSElDS0VOIENVUlJZJywgJ0NoaWNrZW4gRGVsaWdodHMnLCAxMS45OSwgJ1RyYWRpdGlvbmFsIGRpc2ggY29va2VkIHdpdGggYm9uZWxlc3MgY2hpY2tlbiwgb25pb25zLCBnYXJsaWMsIGdpbmdlciwgdG9tYXRvZXMgYW5kIGN1cnJ5IHNwaWNlcy4gU2VydmVkIHdpdGggcmljZS4nKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdDSElDS0VOIENPQ09OVVQgS1VSTUEnLCAnQ2hpY2tlbiBEZWxpZ2h0cycsIDEyLjk5LCAnQm9uZWxlc3MgY2hpY2tlbiBjb29rZWQgd2l0aCBvbmlvbnMsIHRvbWF0b2VzLCBjYXNoZXcgbnV0cywgZ29sZGVuIHJhaXNpbnMsIGNvY29udXQgbWlsayBhbmQgc3BpY2VzLiBTZXJ2ZWQgd2l0aCByaWNlLicpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ0NISUNLRU4gTVVTSFJPT00nLCAnQ2hpY2tlbiBEZWxpZ2h0cycsIDEyLjQ5LCAnQm9uZWxlc3MgY2hpY2tlbiBjb29rZWQgd2l0aCBmcmVzaCBtdXNocm9vbXMsIG9uaW9ucywgdG9tYXRvZXMgYW5kIHNwaWNlcy4gU2VydmVkIHdpdGggcmljZS4nKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdCVVRURVIgQ0hJQ0tFTicsICdDaGlja2VuIERlbGlnaHRzJywgMTIuOTksICdCb25lbGVzcyB0YW5kb29yaSBjaGlja2VuIGNvb2tlZCB3aXRoIG9uaW9ucywgdG9tYXRvZXMsIGNyZWFtLCBudXRzIGFuZCBzcGljZXMuIFNlcnZlZCB3aXRoIHJpY2UuJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnQ0hJQ0tFTiBWSU5EQUxPTycsICdDaGlja2VuIERlbGlnaHRzJywgMTIuNDksICdCb25lbGVzcyBjaGlja2VuIGNvb2tlZCB3aXRoIHRvbWF0b2VzLCBvbmlvbnMsIHBvdGF0b2VzLCBzcGljZXMgYW5kIGEgdG91Y2ggb2YgdmluZWdhci4gU2VydmVkIHdpdGggcmljZS4nKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdDSElDS0VOIFNBQUcnLCAnQ2hpY2tlbiBEZWxpZ2h0cycsIDEyLjk5LCAnQm9uZWxlc3MgY2hpY2tlbiBjb29rZWQgd2l0aCBzcGluYWNoLCBvbmlvbnMsIGdhcmxpYywgZ2luZ2VyIGFuZCBjcmVhbS4gU2VydmVkIHdpdGggcmljZS4nKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdNQU5HTyBDSElDS0VOIENVUlJZJywgJ0NoaWNrZW4gRGVsaWdodHMnLCAxMi45OSwgJ0JvbmVsZXNzIGNoaWNrZW4gY29va2VkIHdpdGggYmVsbCBwZXBwZXJzLCB0b21hdG9lcyBhbmQgc3BpY2VzIGluIGEgbWFuZ28gZmxhdm91cmVkIHNhdWNlLicpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ1BJTkVBUFBMRSBDSElDS0VOIENVUlJZJywgJ0NoaWNrZW4gRGVsaWdodHMnLCAxMi45OSwgJ0JvbmVsZXNzIGNoaWNrZW4gYmFyYmVjdWVkIGluIGEgY2xheSBvdmVuIHRoZW4gY29va2VkIHdpdGggcG90YXRvZXMsIHBpbmVhcHBsZSwgb25pb24gZ2FybGljIGFuZCBzcGljZXMuJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnTEFNQiBDVVJSWScsICdMYW1iIERlbGlnaHRzJywgMTIuOTksICdUcmFkaXRpb25hbCBkaXNoIGNvb2tlZCB3aXRoIGJvbmVsZXNzIGxhbWIsIG9uaW9ucywgZ2FybGljLCBnaW5nZXIsIHRvbWF0b2VzIGFuZCBjdXJyeSBzcGljZXMuJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnTEFNQiBLVVJNQScsICdMYW1iIERlbGlnaHRzJywgMTMuOTksICdCb25lbGVzcyBsYW1iIGNvb2tlZCB3aXRoIG9uaW9ucywgY2FzaGV3IG51dHMsIGdvbGRlbiByYWlzaW5zLCBjcmVhbSBhbmQgY3Vycnkgc3BpY2VzLicpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ0xBTUIgTVVTSFJPT00nLCAnTGFtYiBEZWxpZ2h0cycsIDEzLjQ5LCAnQm9uZWxlc3MgbGFtYiBjb29rZWQgd2l0aCBmcmVzaCBtdXNocm9vbXMsIG9uaW9ucywgdG9tYXRvZXMgYW5kIHNwaWNlcy4nKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdMQU1CIENPQ09OVVQgS1VSTUEnLCAnTGFtYiBEZWxpZ2h0cycsIDEzLjk5LCAnQm9uZWxlc3MgbGFtYiBjb29rZWQgd2l0aCBjb2NvbnV0IG1pbGssIG9uaW9ucywgdG9tYXRvZXMsIGNhc2hldyBudXRzLCBnb2xkZW4gcmFpc2lucyBhbmQgc3BpY2VzLicpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ0xBTUIgVklOREFMT08nLCAnTGFtYiBEZWxpZ2h0cycsIDEzLjQ5LCAnQm9uZWxlc3MgbGFtYiBjb29rZWQgd2l0aCBwb3RhdG9lcywgb25pb25zLCBzcGljZXMgYW5kIGEgdG91Y2ggb2YgdmluZWdhci4nKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdMQU1CIFNBQUcnLCAnTGFtYiBEZWxpZ2h0cycsIDEzLjk5LCAnTGFtYiBjb29rZWQgd2l0aCBzcGluYWNoLCBvbmlvbnMsIGdhcmxpYywgZ2luZ2VyIGFuZCBhIHRvdWNoIG9mIGNyZWFtLicpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ1JPR0FOIEpPU0gnLCAnTGFtYiBEZWxpZ2h0cycsIDEzLjQ5LCAnTGFtYiBjb29rZWQgd2l0aCBvbmlvbnMsIGdpbmdlciwgZ2FybGljLCBjYXNoZXcgbnV0cywgeW9ndXJ0IGFuZCBzcGljZXMuJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnTEFNQiBLQVJBSEknLCAnTGFtYiBEZWxpZ2h0cycsIDEzLjk5LCAnQm9uZWxlc3MgTHVtYiBzYXV0ZWVkIHdpdGggb25pb25zLCBiZWxscGVwcGVycyBhbmQgdG9tYXRvZXMgaW4gYSB0aGljayBjdXJyeSBzb3VjZS4nKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdMQU1CIFRJS0tBIE1BU0FMQScsICdMYW1iIERlbGlnaHRzJywgMTMuOTksICdCb25lbGVzcyBsYW1iIGJhcmJlY3VlZCBpbiBhIGNsYXkgb3ZlbiB0aGVuIGNvb2tlZCB3aXRoIG9uaW9ucywgYmVsbCBwZXBwZXJzLCB0b21hdG9lcywgY3JlYW0gYW5kIHNwaWNlcy4nKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdOQUFOJywgJ0luZGlhbiBCcmVhZCcsIDIuMDksICdUZWFyIGRyb3Agc2hhcGVkIGJyZWFkIGJha2VkIGluIGEgY2xheSBvdmVybi4nKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdUQU5ET09SSSBST1RJJywgJ0luZGlhbiBCcmVhZCcsIDEuOTksICdSb3VuZCBzaGFwZWQgd2hvbGUgd2hlYXQgYnJlYWQgYmFrZWQgaW4gYSBjbGF5IG92ZXJuLicpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ0dBUkxJQyBOQUFOJywgJ0luZGlhbiBCcmVhZCcsIDIuNzksICdUZWFyIGRyb3Agc2hhcGVkIHdoaXRlIGJyZWFkLCBiYWtlZCBpbiBhIGNsYXkgb3ZlbiB3aXRoIGEgdG91Y2ggb2YgZ2FybGljLicpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ0dBUkxJQyBST1RJJywgJ0luZGlhbiBCcmVhZCcsIDIuNzksICdUZWFyIGRyb3Agc2hhcGVkIHdoaXRlIGJyZWFkLCBiYWtlZCBpbiBhIGNsYXkgb3ZlbiB3aXRoIGEgdG91Y2ggb2YgZ2FybGljLicpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ0dJTkdFUiBHQVJMSUMgTkFBTicsICdJbmRpYW4gQnJlYWQnLCAyLjk5LCAnVGVhciBkcm9wIHNoYXBlZCB3aGl0ZSBicmVhZCwgYmFrZWQgaW4gYSBjbGF5IG92ZW4gd2l0aCBhIHRvdWNoIG9mIGdpbmdlciBhbmQgZ2FybGljLicpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ0dJTkdFUiBHQVJMSUMgUk9USScsICdJbmRpYW4gQnJlYWQnLCAyLjk5LCAnVGVhciBkcm9wIHNoYXBlZCB3aGl0ZSBicmVhZCwgYmFrZWQgaW4gYSBjbGF5IG92ZW4gd2l0aCBhIHRvdWNoIG9mIGdpbmdlciBhbmQgZ2FybGljLicpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ1NXRUVUIE5BQU4nLCAnSW5kaWFuIEJyZWFkJywgNC40OSwgJ0luZGlhbiBicmVhZCBzdHVmZmVkIHdpdGggYSBtaXh0dXJlIG9mIGNvY29udXQsIHJhaXNpbnMgYW5kIGNhc2hldyBudXRzIGJha2VkIGluIGEgY2xheSBvdmVybi4nKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdBTE9PIE5BQU4nLCAnSW5kaWFuIEJyZWFkJywgMy43OSwgJ011bHRpLWxheWVyZWQgd2hvbGUgd2hlYXQgYnJlYWQsIHN0dWZmZWQgd2l0aCBtYXNoZWQgcG90YXRvZXMuJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnT05JT04gTkFBTicsICdJbmRpYW4gQnJlYWQnLCAzLjc5LCAnSW5kaWFuIGJyZWFkIHN0dWZmZWQgd2l0aCBzZWFzb25lZCBvbmlvbnMgYW5kIGJha2VkIGluIHRhbmRvb3IuJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnUEFORUVSIE5BQU4nLCAnSW5kaWFuIEJyZWFkJywgNC40OSwgJ011bHRpLWxheWVyZWQgd2hvbGUgd2hlYXQgYnJlYWQsIHN0dWZmZWQgd2l0aCBjaGVlc2UuJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnVEFORE9PUkkgU1BFQ0lBTCBCQVNLRVQnLCAnSW5kaWFuIEJyZWFkJywgOS40OSwgJzIgbmFhbiwgMSBnYXJsaWMgbmFhbiAmIHlvdXIgY2hvaWNlIG9mIDEgc3R1ZmZlZCBuYWFuLiAoRXh0cmEgJC41MCBmb3IgUGFuZWVyIG5hYW4gT1IgU3dlZXQgbmFhbiknKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdNQU5HTyBMQVNTSScsICdCZXZlcmFnZXMnLCAzLjk5LCAnUmVmcmVzaGluZyB5b2d1cnQgZHJpbmsgYmxlbmRlZCB3aXRoIGZyZXNoIG1hbmdvZXMgYW5kIGhvbWVtYWRlIHlvZ3VydC4nKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdTVFJBV0JFUlJZIExBU1NJJywgJ0JldmVyYWdlcycsIDMuOTksICdSZWZyZXNoaW5nIHlvZ3VydCBkcmluayBibGVuZGVkIHdpdGggZnJlc2ggc3RyYXdiZXJyaWVzIGFuZCBob21lbWFkZSB5b2d1cnQuJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnU1dFRVQgTEFTU0knLCAnQmV2ZXJhZ2VzJywgMy43OSwgJ1JlZnJlc2hpbmcgeW9ndXJ0IGRyaW5rIGJsZW5kZWQgd2l0aCByb3NlIHdhdGVyIGFuZCBob21lbWFkZSB5b2d1cnQuJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnSU5ESUFOIENPRkZFRScsICdCZXZlcmFnZXMnLCAyLjU5LCAnU3BlY2lhbCBjb2ZmZWUgZnJvbSBJbmRpYSBib2lsZWQgd2l0aCBtaWxrIGFuZCBzcGljZXMuJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnTUFOR08gSlVJQ0UnLCAnQmV2ZXJhZ2VzJywgMi45OSwgJ0hvbWVtYWRlIEp1aWNlIG1hZGUgZnJvbSBmcmVzaCBtYW5nb2VzLicpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ1BJTkVBUFBMRSBKVUlDRScsICdCZXZlcmFnZXMnLCAyLjU5LCAnSG9tZW1hZGUgSnVpY2UgbWFkZSBmcm9tIGZyZXNoIHBpbmVhcHBsZXMuJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnU09GVCBEUklOS1MnLCAnQmV2ZXJhZ2VzJywgMi43OSwgJ1BlcHNpIHByb2R1Y3RzIChGcmVlIHJlZmlsbHMpJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnSU5ESUFOIENIQUknLCAnQmV2ZXJhZ2VzJywgMi41OSwgJ1NwZWNpYWwgdGVhIGZyb20gSW5kaWEgYm9pbGVkIHdpdGggbWlsayBhbmQgc3BpY2VzJykpO1xuXG5leHBvcnQgZGVmYXVsdCBtZW51QXJyOyIsImltcG9ydCBsb2dvIGZyb20gJy4vaW1hZ2VzL2xvZ28ucG5nJztcbmltcG9ydCBsb2dvMiBmcm9tICcuL2ltYWdlcy9sb2dvMi5wbmcnO1xuaW1wb3J0IGJhY2tncm91bmRJbWcgZnJvbSAnLi9pbWFnZXMvYmcuanBnJztcbmltcG9ydCBndXlGaWVyaUltZyBmcm9tICcuL2ltYWdlcy9ndXlmaWVyaS5qcGcnO1xuaW1wb3J0IGFib3V0VXNCRyBmcm9tICcuL2ltYWdlcy9hYm91dHVzQmcuanBnJztcbmltcG9ydCBtZW51QkcgZnJvbSAnLi9pbWFnZXMvbWVudUJnLmpwZyc7XG5pbXBvcnQgbWVudUFyciBmcm9tICcuL21lbnUuanMnO1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmNvbnN0IG5hdmJhciA9ICgpID0+IHtcbiAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZCgnbmF2YmFyJyk7XG5cbiAgICBjb25zdCBsb2dvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG9nb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsb2dvLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGxvZ29JbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBsb2dvSW1nLnNyYyA9IGxvZ29cblxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKCduYXZiYXItYnV0dG9uJyk7XG4gICAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnbmF2YmFyLWJ1dHRvbicpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbmF2YmFyLWJ1dHRvbicpO1xuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnbmF2YmFyLWJ1dHRvbicpO1xuICAgIGhvbWUuaW5uZXJUZXh0ID0gXCJIb21lXCI7XG4gICAgYWJvdXQuaW5uZXJUZXh0ID0gXCJBYm91dCBVc1wiO1xuICAgIG1lbnUuaW5uZXJUZXh0ID0gXCJNZW51XCI7XG4gICAgY29udGFjdC5pbm5lclRleHQgPSBcIkNvbnRhY3RcIjtcblxuICAgIGNvbnN0IG9yZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgb3JkZXIuY2xhc3NMaXN0LmFkZCgnb3JkZXItYnV0dG9uJyk7XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhLmlubmVyVGV4dCA9IFwiT3JkZXIgT25saW5lXCI7XG4gICAgYS5ocmVmID0gXCJodHRwczovL3JlcGFzb3JkZXIuY29tL2hvbWUvM2U4ZmM2OWQtODAyMS00MmIxLWE4ZmQtOThlMGNkZmM1NTdiXCI7XG5cbiAgICAvL0RPTSBTdHJ1Y3R1cmVcbiAgICBtYWluLmFwcGVuZENoaWxkKG5hdmJhcik7XG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKGxvZ29Db250YWluZXIpO1xuICAgIGxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQobG9nb0ltZyk7XG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKGhvbWUpO1xuICAgIG5hdmJhci5hcHBlbmRDaGlsZChhYm91dCk7XG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKG1lbnUpO1xuICAgIG5hdmJhci5hcHBlbmRDaGlsZChjb250YWN0KTtcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQob3JkZXIpO1xuICAgIG9yZGVyLmFwcGVuZENoaWxkKGEpO1xufVxuXG5jb25zdCBob21lcGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBob21lcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWVwYWdlLmNsYXNzTGlzdC5hZGQoJ2hvbWVwYWdlLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpO1xuICAgIGJhY2tncm91bmQuY2xhc3NMaXN0LmFkZCgnaG9tZXBhZ2UtYmFja2dyb3VuZCcpO1xuICAgIGJhY2tncm91bmQuc3JjID0gYmFja2dyb3VuZEltZztcblxuICAgIGNvbnN0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2dvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvbWVwYWdlLWxvZ28nKTtcbiAgICBjb25zdCBsb2dvSW1nID0gbmV3IEltYWdlKCk7XG4gICAgbG9nb0ltZy5zcmMgPSBsb2dvMlxuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdob21lcGFnZS10aXRsZScpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IFwiVGFuZG9vcmkgT3ZlblwiO1xuXG4gICAgY29uc3Qgc3RhcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdGFycy5jbGFzc0xpc3QuYWRkKCdzdGFycycpO1xuICAgIHN0YXJzLmlubmVyVGV4dCA9IFwiXFx1MjJDNlxcdTIyQzZcXHUyMkM2XFx1MjJDNlxcdTIyQzZcIlxuXG4gICAgY29uc3Qgc3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdWJ0aXRsZS5jbGFzc0xpc3QuYWRkKCdob21lcGFnZS1zdWJ0aXRsZScpO1xuICAgIGN1cnZlVGV4dCgpO1xuXG4gICAgZnVuY3Rpb24gY3VydmVUZXh0KCkge1xuICAgICAgICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInN2Z1wiKTtcbiAgICAgICAgc3ZnLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCAnNTAwJyk7XG4gICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICdtYXgtY29udGVudCcpO1xuICAgICAgICBzdmcuc2V0QXR0cmlidXRlKCd2aWV3Ym94JywgJzAgMCA1MDAgNTAwJyk7XG4gICAgICAgIHN2Zy5zZXRBdHRyaWJ1dGVOUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAveG1sbnMvXCIsIFwieG1sbnM6eGxpbmtcIiwgXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIpO1xuXG4gICAgICAgIGNvbnN0IHBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCAncGF0aCcpO1xuICAgICAgICBwYXRoLnNldEF0dHJpYnV0ZSgnZCcsICdNIDAgMCBDIDE2NiAxMDAgMzMzIDEwMCA1MDAgMCcpO1xuICAgICAgICBwYXRoLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY3VydmVcIik7XG5cbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsICd0ZXh0Jyk7XG4gICAgICAgIHRleHQuc2V0QXR0cmlidXRlKCd3aWR0aCcsICc1MDAnKTtcblxuICAgICAgICBjb25zdCB0ZXh0UGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsICd0ZXh0UGF0aCcpO1xuICAgICAgICB0ZXh0UGF0aC5zZXRBdHRyaWJ1dGVOUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiwgXCJ4bGluazpocmVmXCIsIFwiI2N1cnZlXCIpO1xuICAgICAgICB0ZXh0UGF0aC5zZXRBdHRyaWJ1dGUoXCJzdGFydE9mZnNldFwiLCBcIjUwJVwiKTtcbiAgICAgICAgdGV4dFBhdGgudGV4dENvbnRlbnQgPSBcIkZpbmVzdCBJbmRpYW4gQ3Vpc2luZVwiO1xuXG4gICAgICAgIHN1YnRpdGxlLmFwcGVuZENoaWxkKHN2Zyk7XG4gICAgICAgIHN2Zy5hcHBlbmRDaGlsZChwYXRoKTtcbiAgICAgICAgc3ZnLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICB0ZXh0LmFwcGVuZENoaWxkKHRleHRQYXRoKTtcbiAgICB9XG5cbiAgICAvL0RPTSBTdHJ1Y3R1cmVcbiAgICBtYWluLmFwcGVuZENoaWxkKGhvbWVwYWdlKTtcbiAgICBob21lcGFnZS5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kKTtcbiAgICBob21lcGFnZS5hcHBlbmRDaGlsZChsb2dvQ29udGFpbmVyKTtcbiAgICBsb2dvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ29JbWcpO1xuICAgIGhvbWVwYWdlLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBob21lcGFnZS5hcHBlbmRDaGlsZChzdGFycyk7XG4gICAgaG9tZXBhZ2UuYXBwZW5kQ2hpbGQoc3VidGl0bGUpO1xufVxuXG5jb25zdCBhYm91dFVzID0gKCkgPT4ge1xuICAgIGNvbnN0IGFib3V0VXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dFVzLmNsYXNzTGlzdC5hZGQoJ2Fib3V0VXMtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBiYWNrZ3JvdW5kSW1nID0gbmV3IEltYWdlKCk7XG4gICAgYmFja2dyb3VuZEltZy5jbGFzc0xpc3QuYWRkKCdhYm91dFVzLWJhY2tncm91bmQnKVxuICAgIGJhY2tncm91bmRJbWcuc3JjID0gYWJvdXRVc0JHO1xuXG4gICAgY29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhYm91dFVzLWltYWdlLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgZ3V5RmllcmkgPSBuZXcgSW1hZ2UoKTtcbiAgICBndXlGaWVyaS5zcmMgPSBndXlGaWVyaUltZ1xuXG4gICAgY29uc3QgYWJvdXRVc1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dFVzVGV4dC5jbGFzc0xpc3QuYWRkKCdhYm91dFVzLXRleHQnKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS5pbm5lclRleHQgPSBcIkFib3V0IFVzXCJcblxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcC5pbm5lclRleHQgPSBcIldoZXRoZXIgeW91J3JlIGNyYXZpbmcgdGhlIGNsYXNzaWMsIHJpY2hseSBzcGljZWQgY2hpY2tlbiB0aWtrYSBtYXNhbGEgb3Igc2Vla2luZyBtb3JlIGV4b3RpYyBmbGF2b3JzIHdpdGggb3VyIGJvbGQgYW5kIGFyb21hdGljIGxhbWIgdmluZGFsb28sIFRhbmRvb3JpIE92ZW4gd2VsY29tZXMgeW91IHRvIGVuam95IG91ciBzZWxlY3Rpb24gb2YgcmVjaXBlcyB0aGF0IGhhdmUgYmVlbiBwZXJmZWN0ZWQgdG8gaW5kdWxnZSBhbmQgdGhyaWxsIHlvdXIgc2Vuc2VzIHdpdGggZmxhdm9ycyBhbmQgYXJvbWEuXFxuXFxuXCIgK1xuICAgICAgICBcIk91ciBtZW51IG9mIGV4b3RpYyBzcGljZXMgYW5kIGx1c2Npb3VzIHNhdWNlcyBncmFiYmVkIHRoZSBhdHRlbnRpb24gb2YgdHJhdmVsaW5nIEZvb2QgTmV0d29yayBndXJ1IEd1eSBGaWVyaSB0byBiZSBmZWF0dXJlZCBvbiBEaW5lcnMsIERyaXZlLUlucywgYW5kIERpdmVzLiBXZSBvZmZlciBhIHdpZGUgYXJyYXkgb2YgY2hpY2tlbiwgbGFtYiwgc2VhZm9vZCwgdmVnZXRhcmlhbiBhbmQgdmVnYW4gb3B0aW9ucyBvZiBvdXIgZGVsaWNhdGVseSBzcGljZWQgY3VycmllcyBhbmQgbWFzYWxhcyBhbG9uZyB3aXRoIHRoZSBydXN0aWMgZ3JpbGxlZCBmbGF2b3JzIGZyb20gb3VyIGNsYXkgdGFuZG9vciBvdmVuLiBcXG5cXG5cIiArXG4gICAgICAgIFwiU2luY2Ugb3BlbmluZyBvdXIgZmlyc3QgbG9jYXRpb24gaW4gdGhlIGhlYXJ0IG9mIENhY2hlIFZhbGxleSBpbiAyMDA0LCBUYW5kb29yaSBPdmVuIHF1aWNrbHkgYmVjYW1lIGEgbG9jYWwgZmF2b3JpdGUgb2ZmZXJpbmcgYSB3YXJtIGFuZCBpbnZpdGluZyBhdG1vc3BoZXJlIGZvciBmYW1pbHkgZGlubmVycywgbHVuY2ggd2l0aCBjby13b3JrZXJzLCBvciBhIHJvbWFudGljIGV2ZW5pbmcgd2l0aCB0aGF0IHNwZWNpYWwgc29tZW9uZS4gSW4gSnVseSAyMDEzLCBieSBjb25zaXN0ZW50bHkgb2ZmZXJpbmcgZnJlc2gsIGhpZ2gtcXVhbGl0eSBJbmRpYW4gY3Vpc2luZSwgd2Ugb3BlbmVkIGEgc2Vjb25kIGxvY2F0aW9uLCBlbmNoYW50aW5nIHRoZSBwYWxhdGUgb2YgSWRhaG8gRmFsbHMsIElELlxcblxcblwiICtcbiAgICAgICAgXCJXZeKAmXJlIGdyYXRlZnVsIGFuZCBob25vcmVkIHRvIGJlIGtub3duIGFzIG9uZSBvZiB0aGUgYmVzdCBkaW5pbmcgZXhwZXJpZW5jZXMgd2l0aCBvdXIgYXdhcmQtd2lubmluZyBjdWlzaW5lLiBXZSBodW1ibHkgaW52aXRlIHlvdSB0byBleHBlcmllbmNlIHlvdXIgb3duIHBhc3Nwb3J0LWZyZWUgY3VsaW5hcnkgY3VsdHVyYWwgam91cm5leSBvZiBzdWJ0bGUgdGFzdGVzIHRoYXQgbWVsZCBpbnRvIGludGVuc2VseSByaWNoIGFuZCB2aWJyYW50IGZsYXZvcnMgd2l0aCBlYWNoIGJpdGUgb2Ygb3VyIHRyYWRpdGlvbmFsIEluZGlhbiBjdWlzaW5lLlwiXG5cbiAgICAvL0RPTSBTdHJ1Y3R1cmVcbiAgICBtYWluLmFwcGVuZENoaWxkKGFib3V0VXMpO1xuICAgIGFib3V0VXMuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZEltZyk7XG4gICAgYWJvdXRVcy5hcHBlbmRDaGlsZChpbWFnZUNvbnRhaW5lcik7XG4gICAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoZ3V5RmllcmkpO1xuICAgIGFib3V0VXMuYXBwZW5kQ2hpbGQoYWJvdXRVc1RleHQpO1xuICAgIGFib3V0VXNUZXh0LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBhYm91dFVzVGV4dC5hcHBlbmRDaGlsZChwKTtcbn1cblxuY29uc3QgbWVudSA9ICgpID0+IHtcbiAgICBjb25zdCBtZW51UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVQYWdlLmNsYXNzTGlzdC5hZGQoJ21lbnUtY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBtZW51VXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51VXBwZXIuY2xhc3NMaXN0LmFkZCgnbWVudS11cHBlcicpO1xuXG4gICAgY29uc3QgYmFja2dyb3VuZEltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGJhY2tncm91bmRJbWcuY2xhc3NMaXN0LmFkZCgnbWVudS1iYWNrZ3JvdW5kJylcbiAgICBiYWNrZ3JvdW5kSW1nLnNyYyA9IG1lbnVCRztcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51LXRpdGxlJyk7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gXCJPdXIgTWVudVwiO1xuXG4gICAgY29uc3QgbWVudUxvd2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUxvd2VyLmNsYXNzTGlzdC5hZGQoJ21lbnUtbG93ZXInKTtcblxuICAgIC8vTWVudSBDYXJkXG4gICAgY29uc3QgbWVudUNhdGVnb3JpZXMgPSBbLi4ubmV3IFNldChtZW51QXJyLm1hcChpdGVtID0+IGl0ZW0uY2F0ZWdvcnkpKV07XG4gICAgbWVudUNhdGVnb3JpZXMuZm9yRWFjaChjYXRlZ29yeSA9PiB7XG4gICAgICAgIGNyZWF0ZUNhdGVnb3J5KGNhdGVnb3J5KTtcbiAgICAgICAgbWVudUFyci5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5jYXRlZ29yeSA9PT0gY2F0ZWdvcnkpIGNyZWF0ZUNhcmRzKGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNhdGVnb3J5KGl0ZW1DYXRlZ29yeSkge1xuICAgICAgICBjb25zdCBjYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoJ21lbnUtY2F0ZWdvcnknKTtcbiAgICAgICAgY2F0ZWdvcnkuaW5uZXJUZXh0ID0gaXRlbUNhdGVnb3J5O1xuICAgICAgICBtZW51TG93ZXIuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNhcmRzKGl0ZW0pIHtcbiAgICAgICAgY29uc3QgbWVudUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVudUNhcmQuY2xhc3NMaXN0LmFkZCgnbWVudS1jYXJkJyk7XG5cbiAgICAgICAgY29uc3QgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcmRUaXRsZS5jbGFzc0xpc3QuYWRkKCdjYXJkLXRpdGxlJyk7XG5cbiAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbmFtZS5jbGFzc0xpc3QuYWRkKCdjYXJkLW5hbWUnKTtcbiAgICAgICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHByaWNlLmNsYXNzTGlzdC5hZGQoJ2NhcmQtcHJpY2UnKTtcblxuICAgICAgICBjb25zdCBjYXJkRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkRGV0YWlscy5jbGFzc0xpc3QuYWRkKCdjYXJkLWRldGFpbHMnKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2NhcmQtZGVzY3JpcHRpb24nKTtcblxuICAgICAgICBtZW51TG93ZXIuYXBwZW5kQ2hpbGQobWVudUNhcmQpO1xuICAgICAgICBtZW51Q2FyZC5hcHBlbmRDaGlsZChjYXJkVGl0bGUpO1xuICAgICAgICBjYXJkVGl0bGUuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgICAgIGNhcmRUaXRsZS5hcHBlbmRDaGlsZChwcmljZSk7XG4gICAgICAgIG1lbnVDYXJkLmFwcGVuZENoaWxkKGNhcmREZXRhaWxzKTtcbiAgICAgICAgY2FyZERldGFpbHMuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgICAgIG5hbWUuaW5uZXJUZXh0ID0gaXRlbS5uYW1lO1xuICAgICAgICBwcmljZS5pbm5lclRleHQgPSBgJCR7aXRlbS5wcmljZX1gO1xuICAgICAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBpdGVtLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIC8vRE9NIFN0cnVjdHVyZVxuICAgIG1haW4uYXBwZW5kQ2hpbGQobWVudVBhZ2UpO1xuICAgIG1lbnVQYWdlLmFwcGVuZENoaWxkKG1lbnVVcHBlcik7XG4gICAgbWVudVVwcGVyLmFwcGVuZENoaWxkKGJhY2tncm91bmRJbWcpO1xuICAgIG1lbnVVcHBlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQobWVudUxvd2VyKTtcbn1cblxuY29uc3QgY29udGFjdCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWN0VXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0VXMuY2xhc3NMaXN0LmFkZCgnY29udGFjdFVzLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3Qgc3ViQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3ViQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RVcy1zdWJDb250YWluZXInKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdjb250YWN0VXMtdGl0bGUnKTtcbiAgICB0aXRsZS5pbm5lclRleHQgPSBcIkNvbnRhY3QgVXNcIjtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RVcy1pbmZvJyk7XG5cbiAgICBjb25zdCBtYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYXAuY2xhc3NMaXN0LmFkZCgnY29udGFjdFVzLW1hcCcpO1xuXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zLW91dGxpbmVkXCI+ZW1haWw8L3NwYW4+IG1hbmFnZXJAdGFuZG9vcmlvdmVubG9nYW4uY29tPGJyPicgK1xuICAgICAgICAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiPnBob25lPC9zcGFuPiAoNDM1KTc1MC02ODM2PGJyPjxicj4nICtcbiAgICAgICAgJzcyMCBFYXN0IDEwMDAgTm9ydGg8YnI+JyArXG4gICAgICAgICdMb2dhbiwgVVQgODQzMjEnO1xuXG4gICAgY29uc3QgbWFwU2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgbWFwU2NyZWVuLnNyYyA9IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMjk3Ni42NDU1MTg2NDExMSEyZC0xMTEuODE4MTk4MTg0MzE3NjIhM2Q0MS43NDk3MzgyODE0MTU2NyEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4ODc1NDdkZDE0ZGEzOGEyMyUzQTB4Yzg1ZDIxMzNhNTM0NGZkYiEyc1RhbmRvb3JpJTIwT3ZlbiE1ZTAhM20yITFzZW4hMnN1cyE0djE2MzYzMzQ2OTUyNzMhNW0yITFzZW4hMnN1c1wiO1xuXG4gICAgLy9ET00gU3RydWN0dXJlXG4gICAgbWFpbi5hcHBlbmRDaGlsZChjb250YWN0VXMpO1xuICAgIGNvbnRhY3RVcy5hcHBlbmRDaGlsZChzdWJDb250YWluZXIpO1xuICAgIHN1YkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgc3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuICAgIGluZm8uYXBwZW5kQ2hpbGQocCk7XG4gICAgc3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKG1hcCk7XG4gICAgbWFwLmFwcGVuZENoaWxkKG1hcFNjcmVlbik7XG59XG5cbmV4cG9ydCB7IG5hdmJhciwgaG9tZXBhZ2UsIGFib3V0VXMsIG1lbnUsIGNvbnRhY3QgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgeyBuYXZiYXIsIGhvbWVwYWdlLCBhYm91dFVzLCBtZW51LCBjb250YWN0IH0gZnJvbSAnLi9wYWdlLXNldHVwLmpzJztcblxuY29uc3QgbG9hZCA9ICgoKSA9PiB7XG4gICAgaW5pdCgpO1xuICAgIGNvbnN0IG5hdmJhckJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2YmFyLWJ1dHRvbicpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZiYXInKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2YmFyQnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBuYXZiYXJCdXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlUGFnZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgbmF2YmFyKCk7XG4gICAgICAgIGhvbWVwYWdlKCk7XG5cbiAgICAgICAgd2luZG93Lm9uc2Nyb2xsID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMTAwKSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ25hdmJhci1ibGFjaycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnbmF2YmFyLWJsYWNrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hhbmdlUGFnZShldmVudCkge1xuICAgICAgICBjb25zdCBidXR0b25JRCA9IGV2ZW50LnRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgICAgY2xlYXJQYWdlKCk7XG5cbiAgICAgICAgaWYgKGJ1dHRvbklEID09PSBcIkhvbWVcIikgaG9tZXBhZ2UoKTtcbiAgICAgICAgZWxzZSBpZiAoYnV0dG9uSUQgPT09IFwiQWJvdXQgVXNcIikgYWJvdXRVcygpO1xuICAgICAgICBlbHNlIGlmIChidXR0b25JRCA9PT0gXCJNZW51XCIpIG1lbnUoKTtcbiAgICAgICAgZWxzZSBpZiAoYnV0dG9uSUQgPT09IFwiQ29udGFjdFwiKSBjb250YWN0KCk7XG4gICAgICAgIGVsc2UgaG9tZXBhZ2UoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhclBhZ2UoKSB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IG1haW4uY2hpbGRyZW47XG4gICAgICAgIEFycmF5LmZyb20oY2hpbGRyZW4pLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgaWYgKGNoaWxkLmNsYXNzTmFtZSAhPT0gXCJuYXZiYXJcIikgbWFpbi5yZW1vdmVDaGlsZChjaGlsZClcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==