
const nextIcon1 = '<i class="bi bi-caret-right-fill"></i>';
const prevIcon1 = '<i class="bi bi-caret-left-fill"></i>';




$('.owl-1').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    autoplay:true,
    autoplayTimeout:1500,
    autoplayHoverPause:true,
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
            items:1,
            autoplay:true,
            autoplayTimeout:1500,
            autoplayHoverPause:true,
        },
        501:{
            items:1,
            autoplay:false,
        },
        1000:{
            items:1
        }
    }
})



