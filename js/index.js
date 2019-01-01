/*preloader*/
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(1000).animate({
        height: '0',
        opacity: '0'
    }, "2000");
    $('#preloader').fadeOut("slow");
});

/*--TEAM_SLIDE--*/
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']

    });
});
$(function () {
    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {

            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 3000);
        });
        this.destroy();

    }, {
        offset: 'bottom-in-view'
    });
});

/*--RESPONSIVE_TABS--*/
$(function () {

    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});

/*--PORTFOLIO--*/
$(window).on('load', function () {
 $("#isotope-container").isotope({

 });
 $("#isotope-filters").on('click','button',function() {
    var filterValue = $(this).attr('data-filter');
    $("#isotope-container").isotope({ filter: filterValue });
    $("#isotope-filters").find('.active').removeClass('active');
    $(this).addClass('active');
 });



});

