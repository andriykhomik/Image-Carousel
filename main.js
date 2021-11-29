const images = document.querySelectorAll('#images img');
const imageContainer = document.querySelector('.image-container');
const leftButton = document.querySelector('#left');
const rightButton = document.querySelector('#right');

let imagI = 0;

function moveImagesRight(){
    imagI++;
    if (imagI === images.length) imagI = 0;
    imageContainer.style.transform = `translateX(${-imagI * 500}px)`
}
setInterval(moveImagesRight, 2000);

rightButton.addEventListener('click', ()=>{
    moveImagesRight();
})

leftButton.addEventListener('click', ()=> {
    imagI--;
    if (imagI < 0) imagI = images.length - 1;
    imageContainer.style.transform = `translateX(${-imagI * 500}px)`
})
