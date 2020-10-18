const menu = document.querySelector('.navbar__menu');
const menuLinks = document.querySelector('.navbar__links');

menu.addEventListener('click', () => menuLinks.classList.toggle('active'));