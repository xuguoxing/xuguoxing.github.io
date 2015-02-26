function animateClick() {
    animateTo = $($(this).attr('scroll-to'));

    $('html, body').animate({ scrollTop: animateTo.offset().top }, 500);
}

$(document).ready(function() {
    $(".scroll").click(animateClick);
});
