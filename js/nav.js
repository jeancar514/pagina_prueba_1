const header = document.querySelector('.header');
const headerTopNav = document.querySelectorAll('.header_top_nav');
console.log(headerTopNav);
window.addEventListener('scroll', () => {
    if (window.scrollY > 720) {
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