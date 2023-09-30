$(document).ready(function(){
    // Function for Previous and Next Button
    $(".owl-prev").click(function(){
        $(".owl-carousel").trigger("prev.owl.carousel");
    });

    $(".owl-next").click(function(){
        $(".owl-carousel").trigger("next.owl.carousel");
    });

    // Initialize Owl Carousel
    $(".owl-carousel").owlCarousel({
        items: 1, // Number of items to show per slide
        loop: true, // Infinite loop
        margin: 20, // Spacing between items
        autoplay: true, // Autoplay the carousel
        autoplayTimeout: 3000, // Autoplay interval in milliseconds
        responsiveClass: true,
        nav: true,
        responsive: {
            0: {
                items: 1 // Number of items to show on small screens
            },
            600: {
                items: 2 // Number of items to show on medium screens
            },
            1000: {
                items: 3 // Number of items to show on large screens
            }
        }
    });
});