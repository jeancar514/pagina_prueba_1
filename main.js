

$('.owl-2').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
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