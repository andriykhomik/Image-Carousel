const images = document.querySelectorAll('#images img');
const imgContainer = document.querySelector('#images');
const imageContainer = document.querySelector('.image-container');
const leftButton = document.querySelector('#left');
const rightButton = document.querySelector('#right');

let image = 0;

function moveImagesRight(){
    image++;
    if (image === images.length) image = 0;
    imageContainer.style.transform = `translateX(${-image * 500}px)`
}
setInterval(moveImagesRight, 2000);

rightButton.addEventListener('click', ()=>{
    moveImagesRight();
})

leftButton.addEventListener('click', ()=> {
    image--;
    if (image < 0) image = images.length - 1;
    imageContainer.innerHTML = '';
    imageContainer.appendChild(images[image]);
})


// images.forEach(imag => {
//     imageContainer.innerHTML = '';
//     imageContainer.appendChild(images[1]);
// })





