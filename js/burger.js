const navMobileBgNotActive = document.querySelector('.nav-active_bg');
const navMobileNotActive = document.querySelector('.nav-list');
const burger = document.querySelector('.burger');
let arrNavLists = document.querySelectorAll('.nav-list__element');

burger.addEventListener('click', navToggleActive);

window.addEventListener('resize', sizeDevice);

for (let index = 0; index < arrNavLists.length; index++) {
    arrNavLists[index].addEventListener('click', navToggleActive)
};

function navToggleActive() {
    if (window.screen.width < 768) {
        navMobileBgNotActive.classList.toggle('nav-active_bg_active');
        navMobileNotActive.classList.toggle('nav-list_active');
        document.body.classList.toggle('body_no-scroll');
    };
};

function sizeDevice() {
    if (window.screen.width > 768) {
        navMobileBgNotActive.classList.remove('nav-active_bg_active');
    navMobileNotActive.classList.remove('nav-list_active');
    document.body.classList.remove('body_no-scroll');
    };
};