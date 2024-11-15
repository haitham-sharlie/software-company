const menu = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
  menu.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('active');
}


const dark=document.querySelector('#dark-theme-btn');
const light=document.querySelector('#light-theme-btn');
const root=document.querySelector(':root');

document.querySelector('#dark-theme-btn').onclick = () =>{
  root.classList.toggle('active')
  light.style.right = '70%';
  dark.style.right = '70%';
  dark.style.visibility = 'hidden';
  light.style.visibility = 'visible';
}
document.querySelector('#light-theme-btn').onclick = () =>{
  root.classList.remove('active')
  dark.style.right = '10%';
  light.style.right = '10%';
  light.style.visibility = 'hidden';
  dark.style.visibility = 'visible';
}

let currentIndex = 0;
const images = document.querySelectorAll('.slider-image');
const dots = document.querySelectorAll('.dot');

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        dots[i].classList.remove('active');
    });

    images[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function currentSlide(index) {
    currentIndex = index - 1;
    showImage(currentIndex);
}

// Automatic transition every 4 seconds
setInterval(nextImage, 4000);

// Initialize the slider
showImage(currentIndex);