let menu = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
  menu.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('active');
}


let dark=document.querySelector('#dark-theme-btn');
let light=document.querySelector('#light-theme-btn');
let root=document.querySelector(':root');

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