import $ from 'jquery'; 

const carousel = $("ul");
console.log(carousel);
carousel.itemslide(
    {
        disable_slide: true,
        duration: 1500
    }
)
