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
    main.appendChild(homepage);

    const background = new Image();
    background.classList.add('homepage-background');
    background.src = _images_bg_jpg__WEBPACK_IMPORTED_MODULE_2__;
    homepage.appendChild(background);

    const logoContainer = document.createElement('div');
    logoContainer.classList.add('homepage-logo');
    const logoImg = new Image();
    logoImg.src = _images_logo2_png__WEBPACK_IMPORTED_MODULE_1__
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

    //svg path allows for curved text
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

const aboutUs = () => {
    const aboutUs = document.createElement('div');
    aboutUs.classList.add('aboutUs-container');
    main.appendChild(aboutUs);

    const backgroundImg = new Image();
    backgroundImg.classList.add('aboutUs-background')
    backgroundImg.src = _images_aboutusBg_jpg__WEBPACK_IMPORTED_MODULE_4__;
    aboutUs.appendChild(backgroundImg);

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('aboutUs-image-container');
    aboutUs.appendChild(imageContainer);

    const guyFieri = new Image();
    guyFieri.src = _images_guyfieri_jpg__WEBPACK_IMPORTED_MODULE_3__
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

const menu = () => {
    const menuPage = document.createElement('div');
    menuPage.classList.add('menu-container');
    main.appendChild(menuPage);

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
        menuLower.appendChild(category);
        category.innerText = itemCategory;
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

    menuPage.appendChild(menuUpper);
    menuUpper.appendChild(backgroundImg);
    menuUpper.appendChild(title);
    menuPage.appendChild(menuLower);
}

const contact = () => {
    const contactUs = document.createElement('div');
    contactUs.classList.add('contactUs-container');
    main.appendChild(contactUs);

    const subContainer = document.createElement('div');
    subContainer.classList.add('contactUs-subContainer');
    contactUs.appendChild(subContainer);

    const title = document.createElement('h1');
    title.classList.add('contactUs-title');
    title.innerText = "Contact Us";
    subContainer.appendChild(title);

    const info = document.createElement('div');
    info.classList.add('contactUs-info');
    subContainer.appendChild(info);

    const map = document.createElement('div');
    map.classList.add('contactUs-map');
    subContainer.appendChild(map);

    const p = document.createElement('p');
    p.innerHTML = '<span class="material-icons-outlined">email</span> manager@tandooriovenlogan.com<br>' +
        '<span class="material-icons-outlined">phone</span> (435)750-6836<br><br>' +
        '720 East 1000 North<br>' +
        'Logan, UT 84321';
    info.appendChild(p);

    const mapScreen = document.createElement('iframe');
    mapScreen.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2976.64551864111!2d-111.81819818431762!3d41.74973828141567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87547dd14da38a23%3A0xc85d2133a5344fdb!2sTandoori%20Oven!5e0!3m2!1sen!2sus!4v1636334695273!5m2!1sen!2sus";
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
    (0,_page_setup_js__WEBPACK_IMPORTED_MODULE_0__.navbar)();
    (0,_page_setup_js__WEBPACK_IMPORTED_MODULE_0__.homepage)();
    const main = document.getElementById('content');
    const navbarButtons = document.querySelectorAll('.navbar-button');
    const header = document.querySelector('.navbar');

    window.onscroll = () => {
        if (window.scrollY > 100) {
            header.classList.add('navbar-black');
        } else {
            header.classList.remove('navbar-black');
        }
    };

    for (let i = 0; i < navbarButtons.length; i++) {
        navbarButtons[i].addEventListener('click', changePage);
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
        const children = main.children;
        Array.from(children).forEach(child => {
            if (child.className !== "navbar") main.removeChild(child)
        });
    }

})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RGU7QUFDRTtBQUNLO0FBQ0k7QUFDRDtBQUNOO0FBQ1Q7QUFDaEM7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNkNBQUk7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUIsMkNBQWE7QUFDbEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDhDQUFLO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0Isa0RBQVM7QUFDakM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGlEQUFXO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLCtDQUFNOztBQUU5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHVDQUF1QyxvREFBVztBQUNsRDtBQUNBO0FBQ0EsUUFBUSx1REFBYztBQUN0QjtBQUNBLFNBQVM7QUFDVCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsV0FBVztBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsUEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7OztBQ2YyRTs7QUFFM0U7QUFDQSxJQUFJLHNEQUFNO0FBQ1YsSUFBSSx3REFBUTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiwwQkFBMEI7QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLHdEQUFRO0FBQ3pDLDBDQUEwQyx1REFBTztBQUNqRCxzQ0FBc0Msb0RBQUk7QUFDMUMseUNBQXlDLHVEQUFPO0FBQ2hELGFBQWEsd0RBQVE7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUEsQ0FBQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2Utc2V0dXAuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtZW51IH0gZnJvbSBcIi4vcGFnZS1zZXR1cFwiO1xuXG5mdW5jdGlvbiBtZW51SXRlbShuYW1lLCBjYXRlZ29yeSwgcHJpY2UsIGRlc2NyaXB0aW9uKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIHRoaXMuY2F0ZWdvcnkgPSBjYXRlZ29yeVxuICAgIHRoaXMucHJpY2UgPSBwcmljZVxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxufVxubGV0IG1lbnVBcnIgPSBbXTtcblxubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnUEFORUVSIFRJS0tBJywgJ1RhbmRvb3JpIERlbGlnaHRzJywgMTIuOTksICdGcmVzaCBob21lbWFkZSBjaGVlc2UgYmFyYmVjdWVkIG92ZXIgdGhlIHRhbmRvb3IuIFRhbmRvb3JpIERpc2hlcyBzZXJ2ZWQgc2l6emxpbmcgd2l0aCBzYXV0ZWVkIG9uaW9ucywgYmVsbCBwZXBwZXJzLCB0b21hdG9lcyBhbmQgc2lkZSBvZiByaWNlLicpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ0xBTUIgVElLS0EnLCAnVGFuZG9vcmkgRGVsaWdodHMnLCAxNC45OSwgJ1RlbmRlciBjaHVua3Mgb2YgbGFtYiBtYXJpbmF0ZWQgaW4geW9ndXJ0IGFuZCBzcGljZXMsIGJhcmJlY3VlZCBvdmVyIHRhbmRvb3IuIFRhbmRvb3JpIERpc2hlcyBzZXJ2ZWQgc2l6emxpbmcgd2l0aCBzYXV0ZWVkIG9uaW9ucywgYmVsbCBwZXBwZXJzLCB0b21hdG9lcyBhbmQgc2lkZSBvZiByaWNlLicpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ0NISUNLRU4gVElLS0EnLCAnVGFuZG9vcmkgRGVsaWdodHMnLCAxMy45OSwgJ0JvbmVsZXNzIGNoaWNrZW4gYnJlYXN0IG1hcmluYXRlZCBpbiB5b2d1cnQgYW5kIHNwaWNlcywgYmFyYmVjdWVkIG92ZXIgdGFuZG9vci4gVGFuZG9vcmkgRGlzaGVzIHNlcnZlZCBzaXp6bGluZyB3aXRoIHNhdXRlZWQgb25pb25zLCBiZWxsIHBlcHBlcnMsIHRvbWF0b2VzIGFuZCBzaWRlIG9mIHJpY2UuJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnU0hSSU1QIFRBTkRPT1JJJywgJ1RhbmRvb3JpIERlbGlnaHRzJywgMTUuOTksICdKdW1ibyBzaHJpbXAgbWFyaW5hdGVkIGluIHlvZ3VydCBhbmQgc3BpY2VzLCBiYXJiZWN1ZWQgb3ZlciB0YW5kb29yLiBUYW5kb29yaSBEaXNoZXMgc2VydmVkIHNpenpsaW5nIHdpdGggc2F1dGVlZCBvbmlvbnMsIGJlbGwgcGVwcGVycywgdG9tYXRvZXMgYW5kIHNpZGUgb2YgcmljZS4nKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdUQU5ET09SSSBTUEVDSUFMIEdSSUxMJywgJ1RhbmRvb3JpIERlbGlnaHRzJywgMTguOTksICdDb21iaW5hdGlvbiBvZiBDaGlja2VuIFRhbmRvb3JpLCBDaGlja2VuIFRpa2thLCBMYW1iIFRpa2thICYgU2hyaW1wIFRhbmRvb3JpLiBUYW5kb29yaSBEaXNoZXMgc2VydmVkIHNpenpsaW5nIHdpdGggc2F1dGVlZCBvbmlvbnMsIGJlbGwgcGVwcGVycywgdG9tYXRvZXMgYW5kIHNpZGUgb2YgcmljZS4nKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdUQU5ET09SSSBDSElDS0VOJywgJ1RhbmRvb3JpIERlbGlnaHRzJywgMTIuOTksICdDaGlja2VuIGxlZyBxdWFydGVycyBtYXJpbmF0ZWQgaW4geW9ndXJ0IGFuZCBzcGljZXMsIGJhcmJlY3VlZCBvdmVyIHRhbmRvb3IuIFRhbmRvb3JpIERpc2hlcyBzZXJ2ZWQgc2l6emxpbmcgd2l0aCBzYXV0ZWVkIG9uaW9ucywgYmVsbCBwZXBwZXJzLCB0b21hdG9lcyBhbmQgc2lkZSBvZiByaWNlLicpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ0NISUNLRU4gVElLS0EgTUFTQUxBJywgJ0NoaWNrZW4gRGVsaWdodHMnLCAxMi45OSwgJ0JvbmVsZXNzIGNoaWNrZW4gYmFyYmVjdWVkIGluIGEgY2xheSBvdmVuLCB0aGVuIGNvb2tlZCB3aXRoIGJlbGwgcGVwcGVycywgb25pb25zIHRvbWF0b2VzLCBjcmVhbSBhbmQgc3BpY2VzLiBTZXJ2ZWQgd2l0aCByaWNlLicpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ0NISUNLRU4gS0FSQUhJJywgJ0NoaWNrZW4gRGVsaWdodHMnLCAxMi45OSwgJ0JvbmVsZXNzIGNoaWNrZW4gc2F1dGVlZCB3aXRoIG9uaW9ucywgYmVsbHBlcHBlcnMgYW5kIHRvbWF0b2VzIGluIGEgdGhpY2sgY3Vycnkgc291Y2UuJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnQ0hJQ0tFTiBLVVJNQScsICdDaGlja2VuIERlbGlnaHRzJywgMTIuOTksICdCb25lbGVzcyBjaGlja2VuIGNvb2tlZCB3aXRoIG9uaW9ucywgY2FzaGV3cywgZ29sZGVuIHJhaXNpbnMsIGNyZWFtIGFuZCBjdXJyeSBzcGljZXMuIFNlcnZlZCB3aXRoIHJpY2UuJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnQ0hJQ0tFTiBDVVJSWScsICdDaGlja2VuIERlbGlnaHRzJywgMTEuOTksICdUcmFkaXRpb25hbCBkaXNoIGNvb2tlZCB3aXRoIGJvbmVsZXNzIGNoaWNrZW4sIG9uaW9ucywgZ2FybGljLCBnaW5nZXIsIHRvbWF0b2VzIGFuZCBjdXJyeSBzcGljZXMuIFNlcnZlZCB3aXRoIHJpY2UuJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnQ0hJQ0tFTiBDT0NPTlVUIEtVUk1BJywgJ0NoaWNrZW4gRGVsaWdodHMnLCAxMi45OSwgJ0JvbmVsZXNzIGNoaWNrZW4gY29va2VkIHdpdGggb25pb25zLCB0b21hdG9lcywgY2FzaGV3IG51dHMsIGdvbGRlbiByYWlzaW5zLCBjb2NvbnV0IG1pbGsgYW5kIHNwaWNlcy4gU2VydmVkIHdpdGggcmljZS4nKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdDSElDS0VOIE1VU0hST09NJywgJ0NoaWNrZW4gRGVsaWdodHMnLCAxMi40OSwgJ0JvbmVsZXNzIGNoaWNrZW4gY29va2VkIHdpdGggZnJlc2ggbXVzaHJvb21zLCBvbmlvbnMsIHRvbWF0b2VzIGFuZCBzcGljZXMuIFNlcnZlZCB3aXRoIHJpY2UuJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnQlVUVEVSIENISUNLRU4nLCAnQ2hpY2tlbiBEZWxpZ2h0cycsIDEyLjk5LCAnQm9uZWxlc3MgdGFuZG9vcmkgY2hpY2tlbiBjb29rZWQgd2l0aCBvbmlvbnMsIHRvbWF0b2VzLCBjcmVhbSwgbnV0cyBhbmQgc3BpY2VzLiBTZXJ2ZWQgd2l0aCByaWNlLicpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ0NISUNLRU4gVklOREFMT08nLCAnQ2hpY2tlbiBEZWxpZ2h0cycsIDEyLjQ5LCAnQm9uZWxlc3MgY2hpY2tlbiBjb29rZWQgd2l0aCB0b21hdG9lcywgb25pb25zLCBwb3RhdG9lcywgc3BpY2VzIGFuZCBhIHRvdWNoIG9mIHZpbmVnYXIuIFNlcnZlZCB3aXRoIHJpY2UuJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnQ0hJQ0tFTiBTQUFHJywgJ0NoaWNrZW4gRGVsaWdodHMnLCAxMi45OSwgJ0JvbmVsZXNzIGNoaWNrZW4gY29va2VkIHdpdGggc3BpbmFjaCwgb25pb25zLCBnYXJsaWMsIGdpbmdlciBhbmQgY3JlYW0uIFNlcnZlZCB3aXRoIHJpY2UuJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnTUFOR08gQ0hJQ0tFTiBDVVJSWScsICdDaGlja2VuIERlbGlnaHRzJywgMTIuOTksICdCb25lbGVzcyBjaGlja2VuIGNvb2tlZCB3aXRoIGJlbGwgcGVwcGVycywgdG9tYXRvZXMgYW5kIHNwaWNlcyBpbiBhIG1hbmdvIGZsYXZvdXJlZCBzYXVjZS4nKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdQSU5FQVBQTEUgQ0hJQ0tFTiBDVVJSWScsICdDaGlja2VuIERlbGlnaHRzJywgMTIuOTksICdCb25lbGVzcyBjaGlja2VuIGJhcmJlY3VlZCBpbiBhIGNsYXkgb3ZlbiB0aGVuIGNvb2tlZCB3aXRoIHBvdGF0b2VzLCBwaW5lYXBwbGUsIG9uaW9uIGdhcmxpYyBhbmQgc3BpY2VzLicpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ0xBTUIgQ1VSUlknLCAnTGFtYiBEZWxpZ2h0cycsIDEyLjk5LCAnVHJhZGl0aW9uYWwgZGlzaCBjb29rZWQgd2l0aCBib25lbGVzcyBsYW1iLCBvbmlvbnMsIGdhcmxpYywgZ2luZ2VyLCB0b21hdG9lcyBhbmQgY3Vycnkgc3BpY2VzLicpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ0xBTUIgS1VSTUEnLCAnTGFtYiBEZWxpZ2h0cycsIDEzLjk5LCAnQm9uZWxlc3MgbGFtYiBjb29rZWQgd2l0aCBvbmlvbnMsIGNhc2hldyBudXRzLCBnb2xkZW4gcmFpc2lucywgY3JlYW0gYW5kIGN1cnJ5IHNwaWNlcy4nKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdMQU1CIE1VU0hST09NJywgJ0xhbWIgRGVsaWdodHMnLCAxMy40OSwgJ0JvbmVsZXNzIGxhbWIgY29va2VkIHdpdGggZnJlc2ggbXVzaHJvb21zLCBvbmlvbnMsIHRvbWF0b2VzIGFuZCBzcGljZXMuJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnTEFNQiBDT0NPTlVUIEtVUk1BJywgJ0xhbWIgRGVsaWdodHMnLCAxMy45OSwgJ0JvbmVsZXNzIGxhbWIgY29va2VkIHdpdGggY29jb251dCBtaWxrLCBvbmlvbnMsIHRvbWF0b2VzLCBjYXNoZXcgbnV0cywgZ29sZGVuIHJhaXNpbnMgYW5kIHNwaWNlcy4nKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdMQU1CIFZJTkRBTE9PJywgJ0xhbWIgRGVsaWdodHMnLCAxMy40OSwgJ0JvbmVsZXNzIGxhbWIgY29va2VkIHdpdGggcG90YXRvZXMsIG9uaW9ucywgc3BpY2VzIGFuZCBhIHRvdWNoIG9mIHZpbmVnYXIuJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnTEFNQiBTQUFHJywgJ0xhbWIgRGVsaWdodHMnLCAxMy45OSwgJ0xhbWIgY29va2VkIHdpdGggc3BpbmFjaCwgb25pb25zLCBnYXJsaWMsIGdpbmdlciBhbmQgYSB0b3VjaCBvZiBjcmVhbS4nKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdST0dBTiBKT1NIJywgJ0xhbWIgRGVsaWdodHMnLCAxMy40OSwgJ0xhbWIgY29va2VkIHdpdGggb25pb25zLCBnaW5nZXIsIGdhcmxpYywgY2FzaGV3IG51dHMsIHlvZ3VydCBhbmQgc3BpY2VzLicpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ0xBTUIgS0FSQUhJJywgJ0xhbWIgRGVsaWdodHMnLCAxMy45OSwgJ0JvbmVsZXNzIEx1bWIgc2F1dGVlZCB3aXRoIG9uaW9ucywgYmVsbHBlcHBlcnMgYW5kIHRvbWF0b2VzIGluIGEgdGhpY2sgY3Vycnkgc291Y2UuJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnTEFNQiBUSUtLQSBNQVNBTEEnLCAnTGFtYiBEZWxpZ2h0cycsIDEzLjk5LCAnQm9uZWxlc3MgbGFtYiBiYXJiZWN1ZWQgaW4gYSBjbGF5IG92ZW4gdGhlbiBjb29rZWQgd2l0aCBvbmlvbnMsIGJlbGwgcGVwcGVycywgdG9tYXRvZXMsIGNyZWFtIGFuZCBzcGljZXMuJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnTkFBTicsICdJbmRpYW4gQnJlYWQnLCAyLjA5LCAnVGVhciBkcm9wIHNoYXBlZCBicmVhZCBiYWtlZCBpbiBhIGNsYXkgb3Zlcm4uJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnVEFORE9PUkkgUk9USScsICdJbmRpYW4gQnJlYWQnLCAxLjk5LCAnUm91bmQgc2hhcGVkIHdob2xlIHdoZWF0IGJyZWFkIGJha2VkIGluIGEgY2xheSBvdmVybi4nKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdHQVJMSUMgTkFBTicsICdJbmRpYW4gQnJlYWQnLCAyLjc5LCAnVGVhciBkcm9wIHNoYXBlZCB3aGl0ZSBicmVhZCwgYmFrZWQgaW4gYSBjbGF5IG92ZW4gd2l0aCBhIHRvdWNoIG9mIGdhcmxpYy4nKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdHQVJMSUMgUk9USScsICdJbmRpYW4gQnJlYWQnLCAyLjc5LCAnVGVhciBkcm9wIHNoYXBlZCB3aGl0ZSBicmVhZCwgYmFrZWQgaW4gYSBjbGF5IG92ZW4gd2l0aCBhIHRvdWNoIG9mIGdhcmxpYy4nKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdHSU5HRVIgR0FSTElDIE5BQU4nLCAnSW5kaWFuIEJyZWFkJywgMi45OSwgJ1RlYXIgZHJvcCBzaGFwZWQgd2hpdGUgYnJlYWQsIGJha2VkIGluIGEgY2xheSBvdmVuIHdpdGggYSB0b3VjaCBvZiBnaW5nZXIgYW5kIGdhcmxpYy4nKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdHSU5HRVIgR0FSTElDIFJPVEknLCAnSW5kaWFuIEJyZWFkJywgMi45OSwgJ1RlYXIgZHJvcCBzaGFwZWQgd2hpdGUgYnJlYWQsIGJha2VkIGluIGEgY2xheSBvdmVuIHdpdGggYSB0b3VjaCBvZiBnaW5nZXIgYW5kIGdhcmxpYy4nKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdTV0VFVCBOQUFOJywgJ0luZGlhbiBCcmVhZCcsIDQuNDksICdJbmRpYW4gYnJlYWQgc3R1ZmZlZCB3aXRoIGEgbWl4dHVyZSBvZiBjb2NvbnV0LCByYWlzaW5zIGFuZCBjYXNoZXcgbnV0cyBiYWtlZCBpbiBhIGNsYXkgb3Zlcm4uJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnQUxPTyBOQUFOJywgJ0luZGlhbiBCcmVhZCcsIDMuNzksICdNdWx0aS1sYXllcmVkIHdob2xlIHdoZWF0IGJyZWFkLCBzdHVmZmVkIHdpdGggbWFzaGVkIHBvdGF0b2VzLicpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ09OSU9OIE5BQU4nLCAnSW5kaWFuIEJyZWFkJywgMy43OSwgJ0luZGlhbiBicmVhZCBzdHVmZmVkIHdpdGggc2Vhc29uZWQgb25pb25zIGFuZCBiYWtlZCBpbiB0YW5kb29yLicpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ1BBTkVFUiBOQUFOJywgJ0luZGlhbiBCcmVhZCcsIDQuNDksICdNdWx0aS1sYXllcmVkIHdob2xlIHdoZWF0IGJyZWFkLCBzdHVmZmVkIHdpdGggY2hlZXNlLicpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ1RBTkRPT1JJIFNQRUNJQUwgQkFTS0VUJywgJ0luZGlhbiBCcmVhZCcsIDkuNDksICcyIG5hYW4sIDEgZ2FybGljIG5hYW4gJiB5b3VyIGNob2ljZSBvZiAxIHN0dWZmZWQgbmFhbi4gKEV4dHJhICQuNTAgZm9yIFBhbmVlciBuYWFuIE9SIFN3ZWV0IG5hYW4pJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnTUFOR08gTEFTU0knLCAnQmV2ZXJhZ2VzJywgMy45OSwgJ1JlZnJlc2hpbmcgeW9ndXJ0IGRyaW5rIGJsZW5kZWQgd2l0aCBmcmVzaCBtYW5nb2VzIGFuZCBob21lbWFkZSB5b2d1cnQuJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnU1RSQVdCRVJSWSBMQVNTSScsICdCZXZlcmFnZXMnLCAzLjk5LCAnUmVmcmVzaGluZyB5b2d1cnQgZHJpbmsgYmxlbmRlZCB3aXRoIGZyZXNoIHN0cmF3YmVycmllcyBhbmQgaG9tZW1hZGUgeW9ndXJ0LicpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ1NXRUVUIExBU1NJJywgJ0JldmVyYWdlcycsIDMuNzksICdSZWZyZXNoaW5nIHlvZ3VydCBkcmluayBibGVuZGVkIHdpdGggcm9zZSB3YXRlciBhbmQgaG9tZW1hZGUgeW9ndXJ0LicpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ0lORElBTiBDT0ZGRUUnLCAnQmV2ZXJhZ2VzJywgMi41OSwgJ1NwZWNpYWwgY29mZmVlIGZyb20gSW5kaWEgYm9pbGVkIHdpdGggbWlsayBhbmQgc3BpY2VzLicpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ01BTkdPIEpVSUNFJywgJ0JldmVyYWdlcycsIDIuOTksICdIb21lbWFkZSBKdWljZSBtYWRlIGZyb20gZnJlc2ggbWFuZ29lcy4nKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdQSU5FQVBQTEUgSlVJQ0UnLCAnQmV2ZXJhZ2VzJywgMi41OSwgJ0hvbWVtYWRlIEp1aWNlIG1hZGUgZnJvbSBmcmVzaCBwaW5lYXBwbGVzLicpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ1NPRlQgRFJJTktTJywgJ0JldmVyYWdlcycsIDIuNzksICdQZXBzaSBwcm9kdWN0cyAoRnJlZSByZWZpbGxzKScpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ0lORElBTiBDSEFJJywgJ0JldmVyYWdlcycsIDIuNTksICdTcGVjaWFsIHRlYSBmcm9tIEluZGlhIGJvaWxlZCB3aXRoIG1pbGsgYW5kIHNwaWNlcycpKTtcblxuZXhwb3J0IGRlZmF1bHQgbWVudUFycjsiLCJpbXBvcnQgbG9nbyBmcm9tICcuL2ltYWdlcy9sb2dvLnBuZyc7XG5pbXBvcnQgbG9nbzIgZnJvbSAnLi9pbWFnZXMvbG9nbzIucG5nJztcbmltcG9ydCBiYWNrZ3JvdW5kSW1nIGZyb20gJy4vaW1hZ2VzL2JnLmpwZyc7XG5pbXBvcnQgZ3V5RmllcmlJbWcgZnJvbSAnLi9pbWFnZXMvZ3V5ZmllcmkuanBnJztcbmltcG9ydCBhYm91dFVzQkcgZnJvbSAnLi9pbWFnZXMvYWJvdXR1c0JnLmpwZyc7XG5pbXBvcnQgbWVudUJHIGZyb20gJy4vaW1hZ2VzL21lbnVCZy5qcGcnO1xuaW1wb3J0IG1lbnVBcnIgZnJvbSAnLi9tZW51LmpzJztcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5jb25zdCBuYXZiYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2YmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoJ25hdmJhcicpO1xuXG5cbiAgICBjb25zdCBsb2dvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG9nb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsb2dvLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGxvZ29JbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBsb2dvSW1nLnNyYyA9IGxvZ29cblxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKCduYXZiYXItYnV0dG9uJyk7XG4gICAgYWJvdXQuY2xhc3NMaXN0LmFkZCgnbmF2YmFyLWJ1dHRvbicpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbmF2YmFyLWJ1dHRvbicpO1xuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnbmF2YmFyLWJ1dHRvbicpO1xuICAgIGhvbWUuaW5uZXJUZXh0ID0gXCJIb21lXCI7XG4gICAgYWJvdXQuaW5uZXJUZXh0ID0gXCJBYm91dCBVc1wiO1xuICAgIG1lbnUuaW5uZXJUZXh0ID0gXCJNZW51XCI7XG4gICAgY29udGFjdC5pbm5lclRleHQgPSBcIkNvbnRhY3RcIjtcblxuICAgIGNvbnN0IG9yZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgb3JkZXIuY2xhc3NMaXN0LmFkZCgnb3JkZXItYnV0dG9uJyk7XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhLmlubmVyVGV4dCA9IFwiT3JkZXIgT25saW5lXCI7XG4gICAgYS5ocmVmID0gXCJodHRwczovL3JlcGFzb3JkZXIuY29tL2hvbWUvM2U4ZmM2OWQtODAyMS00MmIxLWE4ZmQtOThlMGNkZmM1NTdiXCI7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKG5hdmJhcik7XG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKGxvZ29Db250YWluZXIpO1xuICAgIGxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQobG9nb0ltZyk7XG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKGhvbWUpO1xuICAgIG5hdmJhci5hcHBlbmRDaGlsZChhYm91dCk7XG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKG1lbnUpO1xuICAgIG5hdmJhci5hcHBlbmRDaGlsZChjb250YWN0KTtcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQob3JkZXIpO1xuICAgIG9yZGVyLmFwcGVuZENoaWxkKGEpO1xufVxuXG5jb25zdCBob21lcGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBob21lcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWVwYWdlLmNsYXNzTGlzdC5hZGQoJ2hvbWVwYWdlLWNvbnRhaW5lcicpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoaG9tZXBhZ2UpO1xuXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpO1xuICAgIGJhY2tncm91bmQuY2xhc3NMaXN0LmFkZCgnaG9tZXBhZ2UtYmFja2dyb3VuZCcpO1xuICAgIGJhY2tncm91bmQuc3JjID0gYmFja2dyb3VuZEltZztcbiAgICBob21lcGFnZS5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kKTtcblxuICAgIGNvbnN0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2dvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvbWVwYWdlLWxvZ28nKTtcbiAgICBjb25zdCBsb2dvSW1nID0gbmV3IEltYWdlKCk7XG4gICAgbG9nb0ltZy5zcmMgPSBsb2dvMlxuICAgIGhvbWVwYWdlLmFwcGVuZENoaWxkKGxvZ29Db250YWluZXIpO1xuICAgIGxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQobG9nb0ltZyk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2hvbWVwYWdlLXRpdGxlJyk7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gXCJUYW5kb29yaSBPdmVuXCI7XG4gICAgaG9tZXBhZ2UuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3Qgc3RhcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdGFycy5jbGFzc0xpc3QuYWRkKCdzdGFycycpO1xuICAgIHN0YXJzLmlubmVyVGV4dCA9IFwiXFx1MjJDNlxcdTIyQzZcXHUyMkM2XFx1MjJDNlxcdTIyQzZcIlxuICAgIGhvbWVwYWdlLmFwcGVuZENoaWxkKHN0YXJzKTtcblxuICAgIGNvbnN0IHN1YnRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3VidGl0bGUuY2xhc3NMaXN0LmFkZCgnaG9tZXBhZ2Utc3VidGl0bGUnKTtcbiAgICBob21lcGFnZS5hcHBlbmRDaGlsZChzdWJ0aXRsZSk7XG5cbiAgICAvL3N2ZyBwYXRoIGFsbG93cyBmb3IgY3VydmVkIHRleHRcbiAgICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInN2Z1wiKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsICc1MDAnKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnbWF4LWNvbnRlbnQnKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKCd2aWV3Ym94JywgJzAgMCA1MDAgNTAwJyk7XG4gICAgc3ZnLnNldEF0dHJpYnV0ZU5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC94bWxucy9cIiwgXCJ4bWxuczp4bGlua1wiLCBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIik7XG5cbiAgICBjb25zdCBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgJ3BhdGgnKTtcbiAgICBwYXRoLnNldEF0dHJpYnV0ZSgnZCcsICdNIDAgMCBDIDE2NiAxMDAgMzMzIDEwMCA1MDAgMCcpO1xuICAgIHBhdGguc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjdXJ2ZVwiKTtcblxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCAndGV4dCcpO1xuICAgIHRleHQuc2V0QXR0cmlidXRlKCd3aWR0aCcsICc1MDAnKTtcblxuICAgIGNvbnN0IHRleHRQYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgJ3RleHRQYXRoJyk7XG4gICAgdGV4dFBhdGguc2V0QXR0cmlidXRlTlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsIFwieGxpbms6aHJlZlwiLCBcIiNjdXJ2ZVwiKTtcbiAgICB0ZXh0UGF0aC5zZXRBdHRyaWJ1dGUoXCJzdGFydE9mZnNldFwiLCBcIjUwJVwiKTtcbiAgICB0ZXh0UGF0aC50ZXh0Q29udGVudCA9IFwiRmluZXN0IEluZGlhbiBDdWlzaW5lXCI7XG5cbiAgICBzdWJ0aXRsZS5hcHBlbmRDaGlsZChzdmcpO1xuICAgIHN2Zy5hcHBlbmRDaGlsZChwYXRoKTtcbiAgICBzdmcuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgdGV4dC5hcHBlbmRDaGlsZCh0ZXh0UGF0aCk7XG59XG5cbmNvbnN0IGFib3V0VXMgPSAoKSA9PiB7XG4gICAgY29uc3QgYWJvdXRVcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFib3V0VXMuY2xhc3NMaXN0LmFkZCgnYWJvdXRVcy1jb250YWluZXInKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGFib3V0VXMpO1xuXG4gICAgY29uc3QgYmFja2dyb3VuZEltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGJhY2tncm91bmRJbWcuY2xhc3NMaXN0LmFkZCgnYWJvdXRVcy1iYWNrZ3JvdW5kJylcbiAgICBiYWNrZ3JvdW5kSW1nLnNyYyA9IGFib3V0VXNCRztcbiAgICBhYm91dFVzLmFwcGVuZENoaWxkKGJhY2tncm91bmRJbWcpO1xuXG4gICAgY29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbWFnZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhYm91dFVzLWltYWdlLWNvbnRhaW5lcicpO1xuICAgIGFib3V0VXMuYXBwZW5kQ2hpbGQoaW1hZ2VDb250YWluZXIpO1xuXG4gICAgY29uc3QgZ3V5RmllcmkgPSBuZXcgSW1hZ2UoKTtcbiAgICBndXlGaWVyaS5zcmMgPSBndXlGaWVyaUltZ1xuICAgIGltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGd1eUZpZXJpKTtcblxuICAgIGNvbnN0IGFib3V0VXNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWJvdXRVc1RleHQuY2xhc3NMaXN0LmFkZCgnYWJvdXRVcy10ZXh0Jyk7XG4gICAgYWJvdXRVcy5hcHBlbmRDaGlsZChhYm91dFVzVGV4dCk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgYWJvdXRVc1RleHQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IFwiQWJvdXQgVXNcIlxuXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhYm91dFVzVGV4dC5hcHBlbmRDaGlsZChwKTtcbiAgICBwLmlubmVyVGV4dCA9IFwiV2hldGhlciB5b3UncmUgY3JhdmluZyB0aGUgY2xhc3NpYywgcmljaGx5IHNwaWNlZCBjaGlja2VuIHRpa2thIG1hc2FsYSBvciBzZWVraW5nIG1vcmUgZXhvdGljIGZsYXZvcnMgd2l0aCBvdXIgYm9sZCBhbmQgYXJvbWF0aWMgbGFtYiB2aW5kYWxvbywgVGFuZG9vcmkgT3ZlbiB3ZWxjb21lcyB5b3UgdG8gZW5qb3kgb3VyIHNlbGVjdGlvbiBvZiByZWNpcGVzIHRoYXQgaGF2ZSBiZWVuIHBlcmZlY3RlZCB0byBpbmR1bGdlIGFuZCB0aHJpbGwgeW91ciBzZW5zZXMgd2l0aCBmbGF2b3JzIGFuZCBhcm9tYS5cXG5cXG5cIiArXG4gICAgICAgIFwiT3VyIG1lbnUgb2YgZXhvdGljIHNwaWNlcyBhbmQgbHVzY2lvdXMgc2F1Y2VzIGdyYWJiZWQgdGhlIGF0dGVudGlvbiBvZiB0cmF2ZWxpbmcgRm9vZCBOZXR3b3JrIGd1cnUgR3V5IEZpZXJpIHRvIGJlIGZlYXR1cmVkIG9uIERpbmVycywgRHJpdmUtSW5zLCBhbmQgRGl2ZXMuIFdlIG9mZmVyIGEgd2lkZSBhcnJheSBvZiBjaGlja2VuLCBsYW1iLCBzZWFmb29kLCB2ZWdldGFyaWFuIGFuZCB2ZWdhbiBvcHRpb25zIG9mIG91ciBkZWxpY2F0ZWx5IHNwaWNlZCBjdXJyaWVzIGFuZCBtYXNhbGFzIGFsb25nIHdpdGggdGhlIHJ1c3RpYyBncmlsbGVkIGZsYXZvcnMgZnJvbSBvdXIgY2xheSB0YW5kb29yIG92ZW4uIFxcblxcblwiICtcbiAgICAgICAgXCJTaW5jZSBvcGVuaW5nIG91ciBmaXJzdCBsb2NhdGlvbiBpbiB0aGUgaGVhcnQgb2YgQ2FjaGUgVmFsbGV5IGluIDIwMDQsIFRhbmRvb3JpIE92ZW4gcXVpY2tseSBiZWNhbWUgYSBsb2NhbCBmYXZvcml0ZSBvZmZlcmluZyBhIHdhcm0gYW5kIGludml0aW5nIGF0bW9zcGhlcmUgZm9yIGZhbWlseSBkaW5uZXJzLCBsdW5jaCB3aXRoIGNvLXdvcmtlcnMsIG9yIGEgcm9tYW50aWMgZXZlbmluZyB3aXRoIHRoYXQgc3BlY2lhbCBzb21lb25lLiBJbiBKdWx5IDIwMTMsIGJ5IGNvbnNpc3RlbnRseSBvZmZlcmluZyBmcmVzaCwgaGlnaC1xdWFsaXR5IEluZGlhbiBjdWlzaW5lLCB3ZSBvcGVuZWQgYSBzZWNvbmQgbG9jYXRpb24sIGVuY2hhbnRpbmcgdGhlIHBhbGF0ZSBvZiBJZGFobyBGYWxscywgSUQuXFxuXFxuXCIgK1xuICAgICAgICBcIldl4oCZcmUgZ3JhdGVmdWwgYW5kIGhvbm9yZWQgdG8gYmUga25vd24gYXMgb25lIG9mIHRoZSBiZXN0IGRpbmluZyBleHBlcmllbmNlcyB3aXRoIG91ciBhd2FyZC13aW5uaW5nIGN1aXNpbmUuIFdlIGh1bWJseSBpbnZpdGUgeW91IHRvIGV4cGVyaWVuY2UgeW91ciBvd24gcGFzc3BvcnQtZnJlZSBjdWxpbmFyeSBjdWx0dXJhbCBqb3VybmV5IG9mIHN1YnRsZSB0YXN0ZXMgdGhhdCBtZWxkIGludG8gaW50ZW5zZWx5IHJpY2ggYW5kIHZpYnJhbnQgZmxhdm9ycyB3aXRoIGVhY2ggYml0ZSBvZiBvdXIgdHJhZGl0aW9uYWwgSW5kaWFuIGN1aXNpbmUuXCJcbn1cblxuY29uc3QgbWVudSA9ICgpID0+IHtcbiAgICBjb25zdCBtZW51UGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVQYWdlLmNsYXNzTGlzdC5hZGQoJ21lbnUtY29udGFpbmVyJyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtZW51UGFnZSk7XG5cbiAgICBjb25zdCBtZW51VXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51VXBwZXIuY2xhc3NMaXN0LmFkZCgnbWVudS11cHBlcicpO1xuXG4gICAgY29uc3QgYmFja2dyb3VuZEltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGJhY2tncm91bmRJbWcuY2xhc3NMaXN0LmFkZCgnbWVudS1iYWNrZ3JvdW5kJylcbiAgICBiYWNrZ3JvdW5kSW1nLnNyYyA9IG1lbnVCRztcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51LXRpdGxlJyk7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gXCJPdXIgTWVudVwiO1xuXG4gICAgY29uc3QgbWVudUxvd2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUxvd2VyLmNsYXNzTGlzdC5hZGQoJ21lbnUtbG93ZXInKTtcblxuICAgIC8vTWVudSBDYXJkXG4gICAgY29uc3QgbWVudUNhdGVnb3JpZXMgPSBbLi4ubmV3IFNldChtZW51QXJyLm1hcChpdGVtID0+IGl0ZW0uY2F0ZWdvcnkpKV07XG4gICAgbWVudUNhdGVnb3JpZXMuZm9yRWFjaChjYXRlZ29yeSA9PiB7XG4gICAgICAgIGNyZWF0ZUNhdGVnb3J5KGNhdGVnb3J5KTtcbiAgICAgICAgbWVudUFyci5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5jYXRlZ29yeSA9PT0gY2F0ZWdvcnkpIGNyZWF0ZUNhcmRzKGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNhdGVnb3J5KGl0ZW1DYXRlZ29yeSkge1xuICAgICAgICBjb25zdCBjYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoJ21lbnUtY2F0ZWdvcnknKTtcbiAgICAgICAgbWVudUxvd2VyLmFwcGVuZENoaWxkKGNhdGVnb3J5KTtcbiAgICAgICAgY2F0ZWdvcnkuaW5uZXJUZXh0ID0gaXRlbUNhdGVnb3J5O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNhcmRzKGl0ZW0pIHtcbiAgICAgICAgY29uc3QgbWVudUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWVudUNhcmQuY2xhc3NMaXN0LmFkZCgnbWVudS1jYXJkJyk7XG5cbiAgICAgICAgY29uc3QgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNhcmRUaXRsZS5jbGFzc0xpc3QuYWRkKCdjYXJkLXRpdGxlJyk7XG5cbiAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbmFtZS5jbGFzc0xpc3QuYWRkKCdjYXJkLW5hbWUnKTtcbiAgICAgICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHByaWNlLmNsYXNzTGlzdC5hZGQoJ2NhcmQtcHJpY2UnKTtcblxuICAgICAgICBjb25zdCBjYXJkRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkRGV0YWlscy5jbGFzc0xpc3QuYWRkKCdjYXJkLWRldGFpbHMnKTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2NhcmQtZGVzY3JpcHRpb24nKTtcblxuICAgICAgICBtZW51TG93ZXIuYXBwZW5kQ2hpbGQobWVudUNhcmQpO1xuICAgICAgICBtZW51Q2FyZC5hcHBlbmRDaGlsZChjYXJkVGl0bGUpO1xuICAgICAgICBjYXJkVGl0bGUuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgICAgIGNhcmRUaXRsZS5hcHBlbmRDaGlsZChwcmljZSk7XG4gICAgICAgIG1lbnVDYXJkLmFwcGVuZENoaWxkKGNhcmREZXRhaWxzKTtcbiAgICAgICAgY2FyZERldGFpbHMuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgICAgIG5hbWUuaW5uZXJUZXh0ID0gaXRlbS5uYW1lO1xuICAgICAgICBwcmljZS5pbm5lclRleHQgPSBgJCR7aXRlbS5wcmljZX1gO1xuICAgICAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSBpdGVtLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIG1lbnVQYWdlLmFwcGVuZENoaWxkKG1lbnVVcHBlcik7XG4gICAgbWVudVVwcGVyLmFwcGVuZENoaWxkKGJhY2tncm91bmRJbWcpO1xuICAgIG1lbnVVcHBlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgbWVudVBhZ2UuYXBwZW5kQ2hpbGQobWVudUxvd2VyKTtcbn1cblxuY29uc3QgY29udGFjdCA9ICgpID0+IHtcbiAgICBjb25zdCBjb250YWN0VXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0VXMuY2xhc3NMaXN0LmFkZCgnY29udGFjdFVzLWNvbnRhaW5lcicpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGFjdFVzKTtcblxuICAgIGNvbnN0IHN1YkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN1YkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWN0VXMtc3ViQ29udGFpbmVyJyk7XG4gICAgY29udGFjdFVzLmFwcGVuZENoaWxkKHN1YkNvbnRhaW5lcik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnY29udGFjdFVzLXRpdGxlJyk7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gXCJDb250YWN0IFVzXCI7XG4gICAgc3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpbmZvLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RVcy1pbmZvJyk7XG4gICAgc3ViQ29udGFpbmVyLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgY29uc3QgbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFwLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RVcy1tYXAnKTtcbiAgICBzdWJDb250YWluZXIuYXBwZW5kQ2hpbGQobWFwKTtcblxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcC5pbm5lckhUTUwgPSAnPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1pY29ucy1vdXRsaW5lZFwiPmVtYWlsPC9zcGFuPiBtYW5hZ2VyQHRhbmRvb3Jpb3ZlbmxvZ2FuLmNvbTxicj4nICtcbiAgICAgICAgJzxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnMtb3V0bGluZWRcIj5waG9uZTwvc3Bhbj4gKDQzNSk3NTAtNjgzNjxicj48YnI+JyArXG4gICAgICAgICc3MjAgRWFzdCAxMDAwIE5vcnRoPGJyPicgK1xuICAgICAgICAnTG9nYW4sIFVUIDg0MzIxJztcbiAgICBpbmZvLmFwcGVuZENoaWxkKHApO1xuXG4gICAgY29uc3QgbWFwU2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgbWFwU2NyZWVuLnNyYyA9IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMjk3Ni42NDU1MTg2NDExMSEyZC0xMTEuODE4MTk4MTg0MzE3NjIhM2Q0MS43NDk3MzgyODE0MTU2NyEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4ODc1NDdkZDE0ZGEzOGEyMyUzQTB4Yzg1ZDIxMzNhNTM0NGZkYiEyc1RhbmRvb3JpJTIwT3ZlbiE1ZTAhM20yITFzZW4hMnN1cyE0djE2MzYzMzQ2OTUyNzMhNW0yITFzZW4hMnN1c1wiO1xuICAgIG1hcC5hcHBlbmRDaGlsZChtYXBTY3JlZW4pO1xuXG59XG5cbmV4cG9ydCB7IG5hdmJhciwgaG9tZXBhZ2UsIGFib3V0VXMsIG1lbnUsIGNvbnRhY3QgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgeyBuYXZiYXIsIGhvbWVwYWdlLCBhYm91dFVzLCBtZW51LCBjb250YWN0IH0gZnJvbSAnLi9wYWdlLXNldHVwLmpzJztcblxuY29uc3QgbG9hZCA9ICgoKSA9PiB7XG4gICAgbmF2YmFyKCk7XG4gICAgaG9tZXBhZ2UoKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCBuYXZiYXJCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdmJhci1idXR0b24nKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2YmFyJyk7XG5cbiAgICB3aW5kb3cub25zY3JvbGwgPSAoKSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDEwMCkge1xuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ25hdmJhci1ibGFjaycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ25hdmJhci1ibGFjaycpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2YmFyQnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBuYXZiYXJCdXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlUGFnZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hhbmdlUGFnZShldmVudCkge1xuICAgICAgICBjb25zdCBidXR0b25JRCA9IGV2ZW50LnRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgICAgY2xlYXJQYWdlKCk7XG5cbiAgICAgICAgaWYgKGJ1dHRvbklEID09PSBcIkhvbWVcIikgaG9tZXBhZ2UoKTtcbiAgICAgICAgZWxzZSBpZiAoYnV0dG9uSUQgPT09IFwiQWJvdXQgVXNcIikgYWJvdXRVcygpO1xuICAgICAgICBlbHNlIGlmIChidXR0b25JRCA9PT0gXCJNZW51XCIpIG1lbnUoKTtcbiAgICAgICAgZWxzZSBpZiAoYnV0dG9uSUQgPT09IFwiQ29udGFjdFwiKSBjb250YWN0KCk7XG4gICAgICAgIGVsc2UgaG9tZXBhZ2UoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhclBhZ2UoKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gbWFpbi5jaGlsZHJlbjtcbiAgICAgICAgQXJyYXkuZnJvbShjaGlsZHJlbikuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICBpZiAoY2hpbGQuY2xhc3NOYW1lICE9PSBcIm5hdmJhclwiKSBtYWluLnJlbW92ZUNoaWxkKGNoaWxkKVxuICAgICAgICB9KTtcbiAgICB9XG5cbn0pKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9