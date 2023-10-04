const leftArrow = document.querySelector('.studio__arrow-left');
const rightArrow = document.querySelector('.studio__arrow-right');
const sliderWindow = document.querySelector('.studio__window');
const sliderFullWidth = document.querySelector('.studio__slider');
const arrCards = document.querySelectorAll('.studio__card');
let countClick = 0;

leftArrow.addEventListener('click', sliderFlippingLeft);

rightArrow.addEventListener('click', sliderFlippingRight);

checkingSize();
window.addEventListener('resize', checkingSize);

function sliderFlippingRight() {
    if (countClick < arrCards.length - 1) {
        countClick++;
        sliderFullWidth.style.left = `${(-countClick)*sliderWindow.offsetWidth}px`;
    } else if (countClick = 2) {
        countClick = 0;
        sliderFullWidth.style.left = `${0*sliderWindow.offsetWidth}px`;
    };
};

function sliderFlippingLeft() {
    if ((countClick > 0) && (countClick <= arrCards.length - 1)) {
        countClick--;
        sliderFullWidth.style.left = `${(-countClick)*sliderWindow.offsetWidth}px`;
    } else if (countClick == 0) {
        countClick = arrCards.length - 1;
        sliderFullWidth.style.left = `${-(arrCards.length - 1)*sliderWindow.offsetWidth}px`;
    };
};

function checkingSize() {
    sliderFullWidth.style.width = `${sliderWindow.offsetWidth*arrCards.length}px`;
    sliderFullWidth.style.left = `${(-countClick)*sliderWindow.offsetWidth}px`;
};