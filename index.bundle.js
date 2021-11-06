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
/* harmony export */   "menu": () => (/* binding */ menu)
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
    menuCard.appendChild(cardTitle);
    cardTitle.appendChild(name);
    cardTitle.appendChild(price);
    menuCard.appendChild(cardDetails);
    cardDetails.appendChild(description);
    //  

    menuPage.appendChild(menuUpper);
    menuUpper.appendChild(backgroundImg);
    menuUpper.appendChild(title);
    menuPage.appendChild(menuLower);

    console.log(_menu_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
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
    // homepage();
    (0,_page_setup_js__WEBPACK_IMPORTED_MODULE_0__.menu)();
    const main = document.getElementById('content');
    const navbarButtons = document.querySelectorAll('.navbar-button');

    for (let i = 0; i < navbarButtons.length; i++) {
        navbarButtons[i].addEventListener('click', changePage);
    }

    function changePage(event) {
        const buttonID = event.target.textContent;
        clearPage();

        if (buttonID === "Home") (0,_page_setup_js__WEBPACK_IMPORTED_MODULE_0__.homepage)();
        else if (buttonID === "About Us") (0,_page_setup_js__WEBPACK_IMPORTED_MODULE_0__.aboutUs)();
        else if (buttonID === "Menu") (0,_page_setup_js__WEBPACK_IMPORTED_MODULE_0__.menu)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBLG9CQUFvQiwwQkFBMEI7QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLHdEQUFRO0FBQ3pDLDBDQUEwQyx1REFBTztBQUNqRCxzQ0FBc0Msb0RBQUk7QUFDMUMsYUFBYSx3REFBUTtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQSxDQUFDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZS1zZXR1cC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1lbnUgfSBmcm9tIFwiLi9wYWdlLXNldHVwXCI7XG5cbmZ1bmN0aW9uIG1lbnVJdGVtKG5hbWUsIGNhdGVnb3J5LCBwcmljZSwgZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdGhpcy5jYXRlZ29yeSA9IGNhdGVnb3J5XG4gICAgdGhpcy5wcmljZSA9IHByaWNlXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG59XG5sZXQgbWVudUFyciA9IFtdO1xuXG5cbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ1BBTkVFUiBUSUtLQScsICdUYW5kb29yaSBEZWxpZ2h0cycsIDEyLjk5LCAnRnJlc2ggaG9tZW1hZGUgY2hlZXNlIGJhcmJlY3VlZCBvdmVyIHRoZSB0YW5kb29yLiBUYW5kb29yaSBEaXNoZXMgc2VydmVkIHNpenpsaW5nIHdpdGggc2F1dGVlZCBvbmlvbnMsIGJlbGwgcGVwcGVycywgdG9tYXRvZXMgYW5kIHNpZGUgb2YgcmljZS4nKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdMQU1CIFRJS0tBJywgJ1RhbmRvb3JpIERlbGlnaHRzJywgMTQuOTksICdUZW5kZXIgY2h1bmtzIG9mIGxhbWIgbWFyaW5hdGVkIGluIHlvZ3VydCBhbmQgc3BpY2VzLCBiYXJiZWN1ZWQgb3ZlciB0YW5kb29yLiBUYW5kb29yaSBEaXNoZXMgc2VydmVkIHNpenpsaW5nIHdpdGggc2F1dGVlZCBvbmlvbnMsIGJlbGwgcGVwcGVycywgdG9tYXRvZXMgYW5kIHNpZGUgb2YgcmljZS4nKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdDSElDS0VOIFRJS0tBJywgJ1RhbmRvb3JpIERlbGlnaHRzJywgMTMuOTksICdCb25lbGVzcyBjaGlja2VuIGJyZWFzdCBtYXJpbmF0ZWQgaW4geW9ndXJ0IGFuZCBzcGljZXMsIGJhcmJlY3VlZCBvdmVyIHRhbmRvb3IuIFRhbmRvb3JpIERpc2hlcyBzZXJ2ZWQgc2l6emxpbmcgd2l0aCBzYXV0ZWVkIG9uaW9ucywgYmVsbCBwZXBwZXJzLCB0b21hdG9lcyBhbmQgc2lkZSBvZiByaWNlLicpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ1NIUklNUCBUQU5ET09SSScsICdUYW5kb29yaSBEZWxpZ2h0cycsIDE1Ljk5LCAnSnVtYm8gc2hyaW1wIG1hcmluYXRlZCBpbiB5b2d1cnQgYW5kIHNwaWNlcywgYmFyYmVjdWVkIG92ZXIgdGFuZG9vci4gVGFuZG9vcmkgRGlzaGVzIHNlcnZlZCBzaXp6bGluZyB3aXRoIHNhdXRlZWQgb25pb25zLCBiZWxsIHBlcHBlcnMsIHRvbWF0b2VzIGFuZCBzaWRlIG9mIHJpY2UuJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnVEFORE9PUkkgU1BFQ0lBTCBHUklMTCcsICdUYW5kb29yaSBEZWxpZ2h0cycsIDE4Ljk5LCAnQ29tYmluYXRpb24gb2YgQ2hpY2tlbiBUYW5kb29yaSwgQ2hpY2tlbiBUaWtrYSwgTGFtYiBUaWtrYSAmIFNocmltcCBUYW5kb29yaS4gVGFuZG9vcmkgRGlzaGVzIHNlcnZlZCBzaXp6bGluZyB3aXRoIHNhdXRlZWQgb25pb25zLCBiZWxsIHBlcHBlcnMsIHRvbWF0b2VzIGFuZCBzaWRlIG9mIHJpY2UuJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnVEFORE9PUkkgQ0hJQ0tFTicsICdUYW5kb29yaSBEZWxpZ2h0cycsIDEyLjk5LCAnQ2hpY2tlbiBsZWcgcXVhcnRlcnMgbWFyaW5hdGVkIGluIHlvZ3VydCBhbmQgc3BpY2VzLCBiYXJiZWN1ZWQgb3ZlciB0YW5kb29yLiBUYW5kb29yaSBEaXNoZXMgc2VydmVkIHNpenpsaW5nIHdpdGggc2F1dGVlZCBvbmlvbnMsIGJlbGwgcGVwcGVycywgdG9tYXRvZXMgYW5kIHNpZGUgb2YgcmljZS4nKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdDSElDS0VOIFRJS0tBIE1BU0FMQScsICdDaGlja2VuIERlbGlnaHRzJywgMTIuOTksICdCb25lbGVzcyBjaGlja2VuIGJhcmJlY3VlZCBpbiBhIGNsYXkgb3ZlbiwgdGhlbiBjb29rZWQgd2l0aCBiZWxsIHBlcHBlcnMsIG9uaW9ucyB0b21hdG9lcywgY3JlYW0gYW5kIHNwaWNlcy4gU2VydmVkIHdpdGggcmljZS4nKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdDSElDS0VOIEtBUkFISScsICdDaGlja2VuIERlbGlnaHRzJywgMTIuOTksICdCb25lbGVzcyBjaGlja2VuIHNhdXRlZWQgd2l0aCBvbmlvbnMsIGJlbGxwZXBwZXJzIGFuZCB0b21hdG9lcyBpbiBhIHRoaWNrIGN1cnJ5IHNvdWNlLicpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ0NISUNLRU4gS1VSTUEnLCAnQ2hpY2tlbiBEZWxpZ2h0cycsIDEyLjk5LCAnQm9uZWxlc3MgY2hpY2tlbiBjb29rZWQgd2l0aCBvbmlvbnMsIGNhc2hld3MsIGdvbGRlbiByYWlzaW5zLCBjcmVhbSBhbmQgY3Vycnkgc3BpY2VzLiBTZXJ2ZWQgd2l0aCByaWNlLicpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ0NISUNLRU4gQ1VSUlknLCAnQ2hpY2tlbiBEZWxpZ2h0cycsIDExLjk5LCAnVHJhZGl0aW9uYWwgZGlzaCBjb29rZWQgd2l0aCBib25lbGVzcyBjaGlja2VuLCBvbmlvbnMsIGdhcmxpYywgZ2luZ2VyLCB0b21hdG9lcyBhbmQgY3Vycnkgc3BpY2VzLiBTZXJ2ZWQgd2l0aCByaWNlLicpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ0NISUNLRU4gQ09DT05VVCBLVVJNQScsICdDaGlja2VuIERlbGlnaHRzJywgMTIuOTksICdCb25lbGVzcyBjaGlja2VuIGNvb2tlZCB3aXRoIG9uaW9ucywgdG9tYXRvZXMsIGNhc2hldyBudXRzLCBnb2xkZW4gcmFpc2lucywgY29jb251dCBtaWxrIGFuZCBzcGljZXMuIFNlcnZlZCB3aXRoIHJpY2UuJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnQ0hJQ0tFTiBNVVNIUk9PTScsICdDaGlja2VuIERlbGlnaHRzJywgMTIuNDksICdCb25lbGVzcyBjaGlja2VuIGNvb2tlZCB3aXRoIGZyZXNoIG11c2hyb29tcywgb25pb25zLCB0b21hdG9lcyBhbmQgc3BpY2VzLiBTZXJ2ZWQgd2l0aCByaWNlLicpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ0JVVFRFUiBDSElDS0VOJywgJ0NoaWNrZW4gRGVsaWdodHMnLCAxMi45OSwgJ0JvbmVsZXNzIHRhbmRvb3JpIGNoaWNrZW4gY29va2VkIHdpdGggb25pb25zLCB0b21hdG9lcywgY3JlYW0sIG51dHMgYW5kIHNwaWNlcy4gU2VydmVkIHdpdGggcmljZS4nKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdDSElDS0VOIFZJTkRBTE9PJywgJ0NoaWNrZW4gRGVsaWdodHMnLCAxMi40OSwgJ0JvbmVsZXNzIGNoaWNrZW4gY29va2VkIHdpdGggdG9tYXRvZXMsIG9uaW9ucywgcG90YXRvZXMsIHNwaWNlcyBhbmQgYSB0b3VjaCBvZiB2aW5lZ2FyLiBTZXJ2ZWQgd2l0aCByaWNlLicpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ0NISUNLRU4gU0FBRycsICdDaGlja2VuIERlbGlnaHRzJywgMTIuOTksICdCb25lbGVzcyBjaGlja2VuIGNvb2tlZCB3aXRoIHNwaW5hY2gsIG9uaW9ucywgZ2FybGljLCBnaW5nZXIgYW5kIGNyZWFtLiBTZXJ2ZWQgd2l0aCByaWNlLicpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ01BTkdPIENISUNLRU4gQ1VSUlknLCAnQ2hpY2tlbiBEZWxpZ2h0cycsIDEyLjk5LCAnQm9uZWxlc3MgY2hpY2tlbiBjb29rZWQgd2l0aCBiZWxsIHBlcHBlcnMsIHRvbWF0b2VzIGFuZCBzcGljZXMgaW4gYSBtYW5nbyBmbGF2b3VyZWQgc2F1Y2UuJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnUElORUFQUExFIENISUNLRU4gQ1VSUlknLCAnQ2hpY2tlbiBEZWxpZ2h0cycsIDEyLjk5LCAnQm9uZWxlc3MgY2hpY2tlbiBiYXJiZWN1ZWQgaW4gYSBjbGF5IG92ZW4gdGhlbiBjb29rZWQgd2l0aCBwb3RhdG9lcywgcGluZWFwcGxlLCBvbmlvbiBnYXJsaWMgYW5kIHNwaWNlcy4nKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdMQU1CIENVUlJZJywgJ0xhbWIgRGVsaWdodHMnLCAxMi45OSwgJ1RyYWRpdGlvbmFsIGRpc2ggY29va2VkIHdpdGggYm9uZWxlc3MgbGFtYiwgb25pb25zLCBnYXJsaWMsIGdpbmdlciwgdG9tYXRvZXMgYW5kIGN1cnJ5IHNwaWNlcy4nKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdMQU1CIEtVUk1BJywgJ0xhbWIgRGVsaWdodHMnLCAxMy45OSwgJ0JvbmVsZXNzIGxhbWIgY29va2VkIHdpdGggb25pb25zLCBjYXNoZXcgbnV0cywgZ29sZGVuIHJhaXNpbnMsIGNyZWFtIGFuZCBjdXJyeSBzcGljZXMuJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnTEFNQiBNVVNIUk9PTScsICdMYW1iIERlbGlnaHRzJywgMTMuNDksICdCb25lbGVzcyBsYW1iIGNvb2tlZCB3aXRoIGZyZXNoIG11c2hyb29tcywgb25pb25zLCB0b21hdG9lcyBhbmQgc3BpY2VzLicpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ0xBTUIgQ09DT05VVCBLVVJNQScsICdMYW1iIERlbGlnaHRzJywgMTMuOTksICdCb25lbGVzcyBsYW1iIGNvb2tlZCB3aXRoIGNvY29udXQgbWlsaywgb25pb25zLCB0b21hdG9lcywgY2FzaGV3IG51dHMsIGdvbGRlbiByYWlzaW5zIGFuZCBzcGljZXMuJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnTEFNQiBWSU5EQUxPTycsICdMYW1iIERlbGlnaHRzJywgMTMuNDksICdCb25lbGVzcyBsYW1iIGNvb2tlZCB3aXRoIHBvdGF0b2VzLCBvbmlvbnMsIHNwaWNlcyBhbmQgYSB0b3VjaCBvZiB2aW5lZ2FyLicpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ0xBTUIgU0FBRycsICdMYW1iIERlbGlnaHRzJywgMTMuOTksICdMYW1iIGNvb2tlZCB3aXRoIHNwaW5hY2gsIG9uaW9ucywgZ2FybGljLCBnaW5nZXIgYW5kIGEgdG91Y2ggb2YgY3JlYW0uJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnUk9HQU4gSk9TSCcsICdMYW1iIERlbGlnaHRzJywgMTMuNDksICdMYW1iIGNvb2tlZCB3aXRoIG9uaW9ucywgZ2luZ2VyLCBnYXJsaWMsIGNhc2hldyBudXRzLCB5b2d1cnQgYW5kIHNwaWNlcy4nKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdMQU1CIEtBUkFISScsICdMYW1iIERlbGlnaHRzJywgMTMuOTksICdCb25lbGVzcyBMdW1iIHNhdXRlZWQgd2l0aCBvbmlvbnMsIGJlbGxwZXBwZXJzIGFuZCB0b21hdG9lcyBpbiBhIHRoaWNrIGN1cnJ5IHNvdWNlLicpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ0xBTUIgVElLS0EgTUFTQUxBJywgJ0xhbWIgRGVsaWdodHMnLCAxMy45OSwgJ0JvbmVsZXNzIGxhbWIgYmFyYmVjdWVkIGluIGEgY2xheSBvdmVuIHRoZW4gY29va2VkIHdpdGggb25pb25zLCBiZWxsIHBlcHBlcnMsIHRvbWF0b2VzLCBjcmVhbSBhbmQgc3BpY2VzLicpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ05BQU4nLCAnSW5kaWFuIEJyZWFkJywgMi4wOSwgJ1RlYXIgZHJvcCBzaGFwZWQgYnJlYWQgYmFrZWQgaW4gYSBjbGF5IG92ZXJuLicpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ1RBTkRPT1JJIFJPVEknLCAnSW5kaWFuIEJyZWFkJywgMS45OSwgJ1JvdW5kIHNoYXBlZCB3aG9sZSB3aGVhdCBicmVhZCBiYWtlZCBpbiBhIGNsYXkgb3Zlcm4uJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnR0FSTElDIE5BQU4nLCAnSW5kaWFuIEJyZWFkJywgMi43OSwgJ1RlYXIgZHJvcCBzaGFwZWQgd2hpdGUgYnJlYWQsIGJha2VkIGluIGEgY2xheSBvdmVuIHdpdGggYSB0b3VjaCBvZiBnYXJsaWMuJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnR0FSTElDIFJPVEknLCAnSW5kaWFuIEJyZWFkJywgMi43OSwgJ1RlYXIgZHJvcCBzaGFwZWQgd2hpdGUgYnJlYWQsIGJha2VkIGluIGEgY2xheSBvdmVuIHdpdGggYSB0b3VjaCBvZiBnYXJsaWMuJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnR0lOR0VSIEdBUkxJQyBOQUFOJywgJ0luZGlhbiBCcmVhZCcsIDIuOTksICdUZWFyIGRyb3Agc2hhcGVkIHdoaXRlIGJyZWFkLCBiYWtlZCBpbiBhIGNsYXkgb3ZlbiB3aXRoIGEgdG91Y2ggb2YgZ2luZ2VyIGFuZCBnYXJsaWMuJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnR0lOR0VSIEdBUkxJQyBST1RJJywgJ0luZGlhbiBCcmVhZCcsIDIuOTksICdUZWFyIGRyb3Agc2hhcGVkIHdoaXRlIGJyZWFkLCBiYWtlZCBpbiBhIGNsYXkgb3ZlbiB3aXRoIGEgdG91Y2ggb2YgZ2luZ2VyIGFuZCBnYXJsaWMuJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnU1dFRVQgTkFBTicsICdJbmRpYW4gQnJlYWQnLCA0LjQ5LCAnSW5kaWFuIGJyZWFkIHN0dWZmZWQgd2l0aCBhIG1peHR1cmUgb2YgY29jb251dCwgcmFpc2lucyBhbmQgY2FzaGV3IG51dHMgYmFrZWQgaW4gYSBjbGF5IG92ZXJuLicpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ0FMT08gTkFBTicsICdJbmRpYW4gQnJlYWQnLCAzLjc5LCAnTXVsdGktbGF5ZXJlZCB3aG9sZSB3aGVhdCBicmVhZCwgc3R1ZmZlZCB3aXRoIG1hc2hlZCBwb3RhdG9lcy4nKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdPTklPTiBOQUFOJywgJ0luZGlhbiBCcmVhZCcsIDMuNzksICdJbmRpYW4gYnJlYWQgc3R1ZmZlZCB3aXRoIHNlYXNvbmVkIG9uaW9ucyBhbmQgYmFrZWQgaW4gdGFuZG9vci4nKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdQQU5FRVIgTkFBTicsICdJbmRpYW4gQnJlYWQnLCA0LjQ5LCAnTXVsdGktbGF5ZXJlZCB3aG9sZSB3aGVhdCBicmVhZCwgc3R1ZmZlZCB3aXRoIGNoZWVzZS4nKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdUQU5ET09SSSBTUEVDSUFMIEJBU0tFVCcsICdJbmRpYW4gQnJlYWQnLCA5LjQ5LCAnMiBuYWFuLCAxIGdhcmxpYyBuYWFuICYgeW91ciBjaG9pY2Ugb2YgMSBzdHVmZmVkIG5hYW4uIChFeHRyYSAkLjUwIGZvciBQYW5lZXIgbmFhbiBPUiBTd2VldCBuYWFuKScpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ01BTkdPIExBU1NJJywgJ0JldmVyYWdlcycsIDMuOTksICdSZWZyZXNoaW5nIHlvZ3VydCBkcmluayBibGVuZGVkIHdpdGggZnJlc2ggbWFuZ29lcyBhbmQgaG9tZW1hZGUgeW9ndXJ0LicpKTtcbm1lbnVBcnIucHVzaChuZXcgbWVudUl0ZW0oJ1NUUkFXQkVSUlkgTEFTU0knLCAnQmV2ZXJhZ2VzJywgMy45OSwgJ1JlZnJlc2hpbmcgeW9ndXJ0IGRyaW5rIGJsZW5kZWQgd2l0aCBmcmVzaCBzdHJhd2JlcnJpZXMgYW5kIGhvbWVtYWRlIHlvZ3VydC4nKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdTV0VFVCBMQVNTSScsICdCZXZlcmFnZXMnLCAzLjc5LCAnUmVmcmVzaGluZyB5b2d1cnQgZHJpbmsgYmxlbmRlZCB3aXRoIHJvc2Ugd2F0ZXIgYW5kIGhvbWVtYWRlIHlvZ3VydC4nKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdJTkRJQU4gQ09GRkVFJywgJ0JldmVyYWdlcycsIDIuNTksICdTcGVjaWFsIGNvZmZlZSBmcm9tIEluZGlhIGJvaWxlZCB3aXRoIG1pbGsgYW5kIHNwaWNlcy4nKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdNQU5HTyBKVUlDRScsICdCZXZlcmFnZXMnLCAyLjk5LCAnSG9tZW1hZGUgSnVpY2UgbWFkZSBmcm9tIGZyZXNoIG1hbmdvZXMuJykpO1xubWVudUFyci5wdXNoKG5ldyBtZW51SXRlbSgnUElORUFQUExFIEpVSUNFJywgJ0JldmVyYWdlcycsIDIuNTksICdIb21lbWFkZSBKdWljZSBtYWRlIGZyb20gZnJlc2ggcGluZWFwcGxlcy4nKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdTT0ZUIERSSU5LUycsICdCZXZlcmFnZXMnLCAyLjc5LCAnUGVwc2kgcHJvZHVjdHMgKEZyZWUgcmVmaWxscyknKSk7XG5tZW51QXJyLnB1c2gobmV3IG1lbnVJdGVtKCdJTkRJQU4gQ0hBSScsICdCZXZlcmFnZXMnLCAyLjU5LCAnU3BlY2lhbCB0ZWEgZnJvbSBJbmRpYSBib2lsZWQgd2l0aCBtaWxrIGFuZCBzcGljZXMnKSk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBtZW51QXJyOyIsImltcG9ydCBsb2dvIGZyb20gJy4vaW1hZ2VzL2xvZ28ucG5nJztcbmltcG9ydCBsb2dvMiBmcm9tICcuL2ltYWdlcy9sb2dvMi5wbmcnO1xuaW1wb3J0IGJhY2tncm91bmRJbWcgZnJvbSAnLi9pbWFnZXMvYmcuanBnJztcbmltcG9ydCBndXlGaWVyaUltZyBmcm9tICcuL2ltYWdlcy9ndXlmaWVyaS5qcGcnO1xuaW1wb3J0IGFib3V0VXNCRyBmcm9tICcuL2ltYWdlcy9hYm91dHVzQmcuanBnJztcbmltcG9ydCBtZW51QkcgZnJvbSAnLi9pbWFnZXMvbWVudUJnLmpwZyc7XG5pbXBvcnQgbWVudUFyciBmcm9tICcuL21lbnUuanMnO1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmNvbnN0IG5hdmJhciA9ICgpID0+IHtcbiAgICBjb25zdCBuYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuYXZiYXIuY2xhc3NMaXN0LmFkZCgnbmF2YmFyJyk7XG5cblxuICAgIGNvbnN0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2dvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xvZ28tY29udGFpbmVyJyk7XG4gICAgY29uc3QgbG9nb0ltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGxvZ29JbWcuc3JjID0gbG9nb1xuXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ25hdmJhci1idXR0b24nKTtcbiAgICBhYm91dC5jbGFzc0xpc3QuYWRkKCduYXZiYXItYnV0dG9uJyk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCduYXZiYXItYnV0dG9uJyk7XG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCduYXZiYXItYnV0dG9uJyk7XG4gICAgaG9tZS5pbm5lclRleHQgPSBcIkhvbWVcIjtcbiAgICBhYm91dC5pbm5lclRleHQgPSBcIkFib3V0IFVzXCI7XG4gICAgbWVudS5pbm5lclRleHQgPSBcIk1lbnVcIjtcbiAgICBjb250YWN0LmlubmVyVGV4dCA9IFwiQ29udGFjdFwiO1xuXG4gICAgY29uc3Qgb3JkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBvcmRlci5jbGFzc0xpc3QuYWRkKCdvcmRlci1idXR0b24nKTtcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGEuaW5uZXJUZXh0ID0gXCJPcmRlciBPbmxpbmVcIjtcbiAgICBhLmhyZWYgPSBcImh0dHBzOi8vcmVwYXNvcmRlci5jb20vaG9tZS8zZThmYzY5ZC04MDIxLTQyYjEtYThmZC05OGUwY2RmYzU1N2JcIjtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQobmF2YmFyKTtcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQobG9nb0NvbnRhaW5lcik7XG4gICAgbG9nb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvSW1nKTtcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQoaG9tZSk7XG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKGFib3V0KTtcbiAgICBuYXZiYXIuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgbmF2YmFyLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuICAgIG5hdmJhci5hcHBlbmRDaGlsZChvcmRlcik7XG4gICAgb3JkZXIuYXBwZW5kQ2hpbGQoYSk7XG59XG5cbmNvbnN0IGhvbWVwYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGhvbWVwYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG9tZXBhZ2UuY2xhc3NMaXN0LmFkZCgnaG9tZXBhZ2UtY29udGFpbmVyJyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChob21lcGFnZSk7XG5cbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XG4gICAgYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCdob21lcGFnZS1iYWNrZ3JvdW5kJyk7XG4gICAgYmFja2dyb3VuZC5zcmMgPSBiYWNrZ3JvdW5kSW1nO1xuICAgIGhvbWVwYWdlLmFwcGVuZENoaWxkKGJhY2tncm91bmQpO1xuXG4gICAgY29uc3QgbG9nb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvZ29Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG9tZXBhZ2UtbG9nbycpO1xuICAgIGNvbnN0IGxvZ29JbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBsb2dvSW1nLnNyYyA9IGxvZ28yXG4gICAgaG9tZXBhZ2UuYXBwZW5kQ2hpbGQobG9nb0NvbnRhaW5lcik7XG4gICAgbG9nb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvSW1nKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgnaG9tZXBhZ2UtdGl0bGUnKTtcbiAgICB0aXRsZS5pbm5lclRleHQgPSBcIlRhbmRvb3JpIE92ZW5cIjtcbiAgICBob21lcGFnZS5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBzdGFycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN0YXJzLmNsYXNzTGlzdC5hZGQoJ3N0YXJzJyk7XG4gICAgc3RhcnMuaW5uZXJUZXh0ID0gXCJcXHUyMkM2XFx1MjJDNlxcdTIyQzZcXHUyMkM2XFx1MjJDNlwiXG4gICAgaG9tZXBhZ2UuYXBwZW5kQ2hpbGQoc3RhcnMpO1xuXG4gICAgY29uc3Qgc3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdWJ0aXRsZS5jbGFzc0xpc3QuYWRkKCdob21lcGFnZS1zdWJ0aXRsZScpO1xuICAgIGhvbWVwYWdlLmFwcGVuZENoaWxkKHN1YnRpdGxlKTtcblxuICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpO1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzUwMCcpO1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICdtYXgtY29udGVudCcpO1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdib3gnLCAnMCAwIDUwMCA1MDAnKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlTlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3htbG5zL1wiLCBcInhtbG5zOnhsaW5rXCIsIFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiKTtcblxuICAgIGNvbnN0IHBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCAncGF0aCcpO1xuICAgIHBhdGguc2V0QXR0cmlidXRlKCdkJywgJ00gMCAwIEMgMTY2IDEwMCAzMzMgMTAwIDUwMCAwJyk7XG4gICAgcGF0aC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImN1cnZlXCIpO1xuXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsICd0ZXh0Jyk7XG4gICAgdGV4dC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzUwMCcpO1xuXG4gICAgY29uc3QgdGV4dFBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCAndGV4dFBhdGgnKTtcbiAgICB0ZXh0UGF0aC5zZXRBdHRyaWJ1dGVOUyhcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiwgXCJ4bGluazpocmVmXCIsIFwiI2N1cnZlXCIpO1xuICAgIHRleHRQYXRoLnNldEF0dHJpYnV0ZShcInN0YXJ0T2Zmc2V0XCIsIFwiNTAlXCIpO1xuICAgIHRleHRQYXRoLnRleHRDb250ZW50ID0gXCJGaW5lc3QgSW5kaWFuIEN1aXNpbmVcIjtcblxuICAgIHN1YnRpdGxlLmFwcGVuZENoaWxkKHN2Zyk7XG4gICAgc3ZnLmFwcGVuZENoaWxkKHBhdGgpO1xuICAgIHN2Zy5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICB0ZXh0LmFwcGVuZENoaWxkKHRleHRQYXRoKTtcbn1cblxuY29uc3QgYWJvdXRVcyA9ICgpID0+IHtcbiAgICBjb25zdCBhYm91dFVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWJvdXRVcy5jbGFzc0xpc3QuYWRkKCdhYm91dFVzLWNvbnRhaW5lcicpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoYWJvdXRVcyk7XG5cbiAgICBjb25zdCBiYWNrZ3JvdW5kSW1nID0gbmV3IEltYWdlKCk7XG4gICAgYmFja2dyb3VuZEltZy5jbGFzc0xpc3QuYWRkKCdhYm91dFVzLWJhY2tncm91bmQnKVxuICAgIGJhY2tncm91bmRJbWcuc3JjID0gYWJvdXRVc0JHO1xuICAgIGFib3V0VXMuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZEltZyk7XG5cbiAgICBjb25zdCBpbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Fib3V0VXMtaW1hZ2UtY29udGFpbmVyJyk7XG4gICAgYWJvdXRVcy5hcHBlbmRDaGlsZChpbWFnZUNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBndXlGaWVyaSA9IG5ldyBJbWFnZSgpO1xuICAgIGd1eUZpZXJpLnNyYyA9IGd1eUZpZXJpSW1nXG4gICAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoZ3V5RmllcmkpO1xuXG4gICAgY29uc3QgYWJvdXRVc1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhYm91dFVzVGV4dC5jbGFzc0xpc3QuYWRkKCdhYm91dFVzLXRleHQnKTtcbiAgICBhYm91dFVzLmFwcGVuZENoaWxkKGFib3V0VXNUZXh0KTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBhYm91dFVzVGV4dC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gXCJBYm91dCBVc1wiXG5cbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGFib3V0VXNUZXh0LmFwcGVuZENoaWxkKHApO1xuICAgIHAuaW5uZXJUZXh0ID0gXCJXaGV0aGVyIHlvdSdyZSBjcmF2aW5nIHRoZSBjbGFzc2ljLCByaWNobHkgc3BpY2VkIGNoaWNrZW4gdGlra2EgbWFzYWxhIG9yIHNlZWtpbmcgbW9yZSBleG90aWMgZmxhdm9ycyB3aXRoIG91ciBib2xkIGFuZCBhcm9tYXRpYyBsYW1iIHZpbmRhbG9vLCBUYW5kb29yaSBPdmVuIHdlbGNvbWVzIHlvdSB0byBlbmpveSBvdXIgc2VsZWN0aW9uIG9mIHJlY2lwZXMgdGhhdCBoYXZlIGJlZW4gcGVyZmVjdGVkIHRvIGluZHVsZ2UgYW5kIHRocmlsbCB5b3VyIHNlbnNlcyB3aXRoIGZsYXZvcnMgYW5kIGFyb21hLlxcblxcblwiICtcbiAgICAgICAgXCJPdXIgbWVudSBvZiBleG90aWMgc3BpY2VzIGFuZCBsdXNjaW91cyBzYXVjZXMgZ3JhYmJlZCB0aGUgYXR0ZW50aW9uIG9mIHRyYXZlbGluZyBGb29kIE5ldHdvcmsgZ3VydSBHdXkgRmllcmkgdG8gYmUgZmVhdHVyZWQgb24gRGluZXJzLCBEcml2ZS1JbnMsIGFuZCBEaXZlcy4gV2Ugb2ZmZXIgYSB3aWRlIGFycmF5IG9mIGNoaWNrZW4sIGxhbWIsIHNlYWZvb2QsIHZlZ2V0YXJpYW4gYW5kIHZlZ2FuIG9wdGlvbnMgb2Ygb3VyIGRlbGljYXRlbHkgc3BpY2VkIGN1cnJpZXMgYW5kIG1hc2FsYXMgYWxvbmcgd2l0aCB0aGUgcnVzdGljIGdyaWxsZWQgZmxhdm9ycyBmcm9tIG91ciBjbGF5IHRhbmRvb3Igb3Zlbi4gXFxuXFxuXCIgK1xuICAgICAgICBcIlNpbmNlIG9wZW5pbmcgb3VyIGZpcnN0IGxvY2F0aW9uIGluIHRoZSBoZWFydCBvZiBDYWNoZSBWYWxsZXkgaW4gMjAwNCwgVGFuZG9vcmkgT3ZlbiBxdWlja2x5IGJlY2FtZSBhIGxvY2FsIGZhdm9yaXRlIG9mZmVyaW5nIGEgd2FybSBhbmQgaW52aXRpbmcgYXRtb3NwaGVyZSBmb3IgZmFtaWx5IGRpbm5lcnMsIGx1bmNoIHdpdGggY28td29ya2Vycywgb3IgYSByb21hbnRpYyBldmVuaW5nIHdpdGggdGhhdCBzcGVjaWFsIHNvbWVvbmUuIEluIEp1bHkgMjAxMywgYnkgY29uc2lzdGVudGx5IG9mZmVyaW5nIGZyZXNoLCBoaWdoLXF1YWxpdHkgSW5kaWFuIGN1aXNpbmUsIHdlIG9wZW5lZCBhIHNlY29uZCBsb2NhdGlvbiwgZW5jaGFudGluZyB0aGUgcGFsYXRlIG9mIElkYWhvIEZhbGxzLCBJRC5cXG5cXG5cIiArXG4gICAgICAgIFwiV2XigJlyZSBncmF0ZWZ1bCBhbmQgaG9ub3JlZCB0byBiZSBrbm93biBhcyBvbmUgb2YgdGhlIGJlc3QgZGluaW5nIGV4cGVyaWVuY2VzIHdpdGggb3VyIGF3YXJkLXdpbm5pbmcgY3Vpc2luZS4gV2UgaHVtYmx5IGludml0ZSB5b3UgdG8gZXhwZXJpZW5jZSB5b3VyIG93biBwYXNzcG9ydC1mcmVlIGN1bGluYXJ5IGN1bHR1cmFsIGpvdXJuZXkgb2Ygc3VidGxlIHRhc3RlcyB0aGF0IG1lbGQgaW50byBpbnRlbnNlbHkgcmljaCBhbmQgdmlicmFudCBmbGF2b3JzIHdpdGggZWFjaCBiaXRlIG9mIG91ciB0cmFkaXRpb25hbCBJbmRpYW4gY3Vpc2luZS5cIlxufVxuXG5jb25zdCBtZW51ID0gKCkgPT4ge1xuICAgIGNvbnN0IG1lbnVQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudVBhZ2UuY2xhc3NMaXN0LmFkZCgnbWVudS1jb250YWluZXInKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1lbnVQYWdlKTtcblxuICAgIGNvbnN0IG1lbnVVcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVVcHBlci5jbGFzc0xpc3QuYWRkKCdtZW51LXVwcGVyJyk7XG5cbiAgICBjb25zdCBiYWNrZ3JvdW5kSW1nID0gbmV3IEltYWdlKCk7XG4gICAgYmFja2dyb3VuZEltZy5jbGFzc0xpc3QuYWRkKCdtZW51LWJhY2tncm91bmQnKVxuICAgIGJhY2tncm91bmRJbWcuc3JjID0gbWVudUJHO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ21lbnUtdGl0bGUnKTtcbiAgICB0aXRsZS5pbm5lclRleHQgPSBcIk91ciBNZW51XCI7XG5cbiAgICBjb25zdCBtZW51TG93ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51TG93ZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1sb3dlcicpO1xuXG4gICAgLy9NZW51IENhcmRcbiAgICBjb25zdCBtZW51Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVDYXJkLmNsYXNzTGlzdC5hZGQoJ21lbnUtY2FyZCcpO1xuXG4gICAgY29uc3QgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NhcmQtdGl0bGUnKTtcblxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKCdjYXJkLW5hbWUnKTtcbiAgICBjb25zdCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwcmljZS5jbGFzc0xpc3QuYWRkKCdjYXJkLXByaWNlJyk7XG5cbiAgICBjb25zdCBjYXJkRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmREZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2NhcmQtZGV0YWlscycpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnY2FyZC1kZXNjcmlwdGlvbicpO1xuICAgIG1lbnVDYXJkLmFwcGVuZENoaWxkKGNhcmRUaXRsZSk7XG4gICAgY2FyZFRpdGxlLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgIGNhcmRUaXRsZS5hcHBlbmRDaGlsZChwcmljZSk7XG4gICAgbWVudUNhcmQuYXBwZW5kQ2hpbGQoY2FyZERldGFpbHMpO1xuICAgIGNhcmREZXRhaWxzLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICAvLyAgXG5cbiAgICBtZW51UGFnZS5hcHBlbmRDaGlsZChtZW51VXBwZXIpO1xuICAgIG1lbnVVcHBlci5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kSW1nKTtcbiAgICBtZW51VXBwZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIG1lbnVQYWdlLmFwcGVuZENoaWxkKG1lbnVMb3dlcik7XG5cbiAgICBjb25zb2xlLmxvZyhtZW51QXJyKTtcbn1cblxuZXhwb3J0IHsgbmF2YmFyLCBob21lcGFnZSwgYWJvdXRVcywgbWVudSB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7IG5hdmJhciwgaG9tZXBhZ2UsIGFib3V0VXMsIG1lbnUgfSBmcm9tICcuL3BhZ2Utc2V0dXAuanMnO1xuXG5jb25zdCBsb2FkID0gKCgpID0+IHtcbiAgICBuYXZiYXIoKTtcbiAgICAvLyBob21lcGFnZSgpO1xuICAgIG1lbnUoKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgICBjb25zdCBuYXZiYXJCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdmJhci1idXR0b24nKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmF2YmFyQnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBuYXZiYXJCdXR0b25zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlUGFnZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hhbmdlUGFnZShldmVudCkge1xuICAgICAgICBjb25zdCBidXR0b25JRCA9IGV2ZW50LnRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgICAgY2xlYXJQYWdlKCk7XG5cbiAgICAgICAgaWYgKGJ1dHRvbklEID09PSBcIkhvbWVcIikgaG9tZXBhZ2UoKTtcbiAgICAgICAgZWxzZSBpZiAoYnV0dG9uSUQgPT09IFwiQWJvdXQgVXNcIikgYWJvdXRVcygpO1xuICAgICAgICBlbHNlIGlmIChidXR0b25JRCA9PT0gXCJNZW51XCIpIG1lbnUoKTtcbiAgICAgICAgZWxzZSBob21lcGFnZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFyUGFnZSgpIHtcbiAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBtYWluLmNoaWxkcmVuO1xuICAgICAgICBBcnJheS5mcm9tKGNoaWxkcmVuKS5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5jbGFzc05hbWUgIT09IFwibmF2YmFyXCIpIG1haW4ucmVtb3ZlQ2hpbGQoY2hpbGQpXG4gICAgICAgIH0pO1xuICAgIH1cblxufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=