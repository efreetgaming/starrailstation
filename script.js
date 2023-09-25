// Reset Video Function
function resetVideo() {
    var iframe = document.querySelector('#video-container iframe');
    var videoSrc = iframe.src;
    iframe.src = videoSrc;
}

$(document).ready(function(){
    // Side Navigation
    $('.sidenav').sidenav({
        edge: 'right',
    });

    //Sliders
    $('.slider').slider({
        height: 500,
        indicators: false,
        interval: 2000,
    });

    // Modals
    $('.modal').modal();

    // DHIL Trailer & Guide Closure
    $('#DHILGuideResetButton').click(function(){
    resetVideo();
    $('#DHILGuide').modal('close'); // Close the modal
    });

    $('#DHILTrailerResetButton').click(function(){
    resetVideo();
    $('#DHILTrailer').modal('close'); // Close the modal
    });
}) 