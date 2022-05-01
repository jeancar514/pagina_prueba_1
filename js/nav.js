const header = document.querySelector('.header');
const headerTopNav = document.querySelectorAll('.header_top_nav');
const main = document.querySelector('.main');
let heroTamaño ;
if((0.8*window.screen.height) < header.clientHeight) {
    heroTamaño= window.screen.height;
} else {
    heroTamaño = window.screen.height*0.45;
}

window.addEventListener('scroll', () => {
    if (window.scrollY > ((heroTamaño) - header.clientHeight )) {
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