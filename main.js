const images = document.querySelectorAll('#images img');
const imageContainer = document.querySelector('.image-container');
const leftButton = document.querySelector('#left');
const rightButton = document.querySelector('#right');

let imagI = 0;

let interval = setInterval(run, 2000);

rightButton.addEventListener('click', ()=>{
    imagI++;
    clearInterval(interval);
    interval = setInterval(run, 2000);
    changeImg();
})

leftButton.addEventListener('click', ()=> {
    imagI--;
    clearInterval(interval);
    interval = setInterval(run, 2000);
    changeImg();
})

function run(){
    imagI++
    changeImg();
}

function changeImg(){
    if (imagI > images.length - 1) imagI = 0;
    if (imagI < 0) imagI = images.length - 1;
    imageContainer.style.transform = `translateX(${-imagI * 500}px)`
}
