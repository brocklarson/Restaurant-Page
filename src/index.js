import backgroundImg from './images/bg.jpg';

import { navbar } from './load.js';
const main = document.getElementById('content');

navbar();

const background = new Image();
background.classList.add('homepage-background');
background.src = backgroundImg;
main.appendChild(background);