
const nextIcon1 = '<i class="bi bi-arrow-right-square-fill"></i>';
const prevIcon1 = '<i class="bi bi-arrow-left-square-fill"></i>';
const nextIcon2 = '<i class="bi bi-arrow-right-circle-fill"></i>';
const prevIcon2 = '<i class="bi bi-arrow-left-circle-fill"></i>';

$('.owl-2').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:[
        prevIcon1,
        nextIcon1
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
$('.owl-1').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:[
        prevIcon2,
        nextIcon2
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1200:{
            items:3
        }
    }
})

const header = document.querySelector('.header');
console.log(header);
window.addEventListener('scroll', () => {
    if (window.scrollY > 720) {
        header.classList.add('header_color');
    } else {
        header.classList.remove('header_color');
    } 
});