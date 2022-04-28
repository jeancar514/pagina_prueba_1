const header = document.querySelector('.header');
console.log(header);
window.addEventListener('scroll', () => {
    if (window.scrollY > 720) {
        header.classList.add('header_color');
    } else {
        header.classList.remove('header_color');
    } 
});

const botonNav = document.querySelector('.navbar-toggler');
const navbar = document.getElementById('navbarNav');

botonNav.addEventListener('click', () => {
    navbar.classList.toggle('collapse');
});