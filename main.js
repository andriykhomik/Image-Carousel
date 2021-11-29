const images = document.querySelector('#images');
const img = document.querySelectorAll('#images img');
console.log (img);
const leftButton = document.querySelector('#left');
const rightButton = document.querySelector('#right');

let idx = 0;

let interval = setInterval(run, 2000);

function run(){
    idx++;
    changeImage();
}

function changeImage(){
    if (idx > img.length - 1){
        idx = 0;
    } else if (idx < 0){
        idx = img.length - 1;
    }

    images.style.transform = `translateX(${-idx * 500}px)`
}

function resetInterval(){
    clearInterval(interval);
    interval = setInterval(run, 2000);
}

rightButton.addEventListener('click', ()=> {
    idx++;
    resetInterval();
    changeImage();
})

leftButton.addEventListener('click', ()=> {
    idx--;
    resetInterval();
    changeImage();
})
