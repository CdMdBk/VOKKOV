let count = 0;
const preloaderBlock = document.querySelector('.preloader');

setInterval(preloaderEnd, 300);

function preloaderEnd(){
    count++
    if (count > 1){
        preloaderBlock.style.opacity = 0;
    };
    if (count > 2){
        preloaderBlock.style.display = 'none';
    };
};