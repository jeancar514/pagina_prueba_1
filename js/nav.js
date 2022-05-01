const header = document.querySelector('.header');
const hero = document.querySelector('.hero');
const headerTopNav = document.querySelectorAll('.header_top_nav');
const main = document.querySelector('.main');
let heroTamaño ;
console.log((0.9*window.screen.height) < hero.clientHeight)
if((0.9*window.screen.height) < hero.clientHeight) {
    heroTamaño= window.screen.height - header.clientHeight;
} else {
    heroTamaño = window.screen.height*0.6 - header.clientHeight;
}
window.addEventListener('scroll', () => {
    if (window.scrollY > heroTamaño) {
        header.classList.add('header_color');
        headerTopNav.forEach(item => { 
            item.classList.add('header_top_nav_color');
        });
    } else {
        header.classList.remove('header_color');
        headerTopNav.forEach(item => { 
            item.classList.remove('header_top_nav_color');
        });
    } 
});

const botonNav = document.querySelector('.navbar-toggler');
const navbar = document.getElementById('navbarNav');
botonNav.addEventListener('click', () => {
    navbar.classList.toggle('collapse');
});