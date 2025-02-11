const menu = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
  menu.classList.toggle('active');
};

window.onscroll = () =>{
  menu.classList.remove('active');
};

const dark=document.querySelector('#dark-theme-btn');
const light=document.querySelector('#light-theme-btn');
const root=document.querySelector(':root');

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        root.classList.add('active');
        light.style.right = '70%';
        dark.style.right = '70%';
        dark.style.visibility = 'hidden';
        light.style.visibility = 'visible';
    } else {
        root.classList.remove('active');
        dark.style.right = '10%';
        light.style.right = '10%';
        light.style.visibility = 'hidden';
        dark.style.visibility = 'visible';
    }
});

document.querySelector('#dark-theme-btn').onclick = () =>{
  root.classList.add('active');
  localStorage.setItem('theme', 'dark');
  light.style.right = '70%';
  dark.style.right = '70%';
  dark.style.visibility = 'hidden';
  light.style.visibility = 'visible';
};

document.querySelector('#light-theme-btn').onclick = () =>{
  root.classList.remove('active');
  localStorage.setItem('theme', 'light');
  dark.style.right = '10%';
  light.style.right = '10%';
  light.style.visibility = 'hidden';
  dark.style.visibility = 'visible';
};

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

setInterval(nextImage, 4000);
showImage(currentIndex);
