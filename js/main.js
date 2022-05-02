
const nextIcon1 = '<i class="bi bi-caret-right-fill"></i>';
const prevIcon1 = '<i class="bi bi-caret-left-fill"></i>';

$('.owl-1').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    navText:[
    ],
    responsive:{
        0:{
            items:1
        },
        800:{
            items:2
        },
        1200:{
            items:3
        }
    }
})

$('.owl-2').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    center:true,
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



